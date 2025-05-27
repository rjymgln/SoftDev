<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Decode JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid input."]);
    exit;
}

$username = $data["username"] ?? '';
$email = $data["email"] ?? '';
$password = $data["password"] ?? '';

if (empty($username) || empty($email) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Missing required fields."]);
    exit;
}

$conn = new mysqli("localhost", "root", "", "softdev");
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed."]);
    exit;
}

// Check if username or email already exists
$sql = "SELECT id FROM users WHERE username = ? OR email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Username or email already exists."]);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// Hash the password
$hashed_password = password_hash($password, PASSWORD_BCRYPT);

// Insert new user (is_admin = 0 by default)
$sql = "INSERT INTO users (username, email, password, is_admin, created_at) VALUES (?, ?, ?, 0, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $hashed_password);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Signup successful."]);
} else {
    echo json_encode(["success" => false, "message" => "Signup failed."]);
}

$stmt->close();
$conn->close();
?>
