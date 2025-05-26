<?php
// Allow React frontend (localhost:3000) to access this
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');

// Database connection settings - replace with your MySQL user/pass
$servername = "localhost";
$username_db = "root";  // usually root on XAMPP by default
$password_db = "";      // usually empty on XAMPP by default
$dbname = "softdev";

// Connect to MySQL
$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit();
}

// Get POST data
$user = isset($_POST['username']) ? trim($_POST['username']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$pass = isset($_POST['password']) ? $_POST['password'] : '';

if (!$user || !$email || !$pass) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit();
}

// Check if username or email already exists
$stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
$stmt->bind_param("ss", $user, $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Username or Email already exists']);
    $stmt->close();
    $conn->close();
    exit();
}
$stmt->close();

// Hash password
$hashed_password = password_hash($pass, PASSWORD_DEFAULT);

// Insert new user
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $user, $email, $hashed_password);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Error saving user']);
}

$stmt->close();
$conn->close();
?>