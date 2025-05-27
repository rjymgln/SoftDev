<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);
$username = $data["username"];
$password = $data["password"];

$conn = new mysqli("localhost", "root", "", "softdev");
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed."]);
    exit;
}

// Get user info by username
$sql = "SELECT password, is_admin FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["success" => false, "message" => "Invalid credentials."]);
    exit;
}

$row = $result->fetch_assoc();
$hashed_password = $row["password"];
$is_admin = $row["is_admin"];

if (password_verify($password, $hashed_password)) {
    echo json_encode([
        "success" => true,
        "message" => "Login successful.",
        "is_admin" => $is_admin
    ]);
} else {
    echo json_encode(["success" => false, "message" => "wala credentials."]);
}

$stmt->close();
$conn->close();
?>
