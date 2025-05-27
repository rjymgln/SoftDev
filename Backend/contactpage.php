<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "softdev");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['Email'] ?? '';
$message = $_POST['Message'] ?? '';

$email = $conn->real_escape_string($email);
$message = $conn->real_escape_string($message);

$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $insert = "INSERT INTO feedback (email, message) VALUES ('$email', '$message')";
    if ($conn->query($insert)) {
        echo "✅ Feedback submitted successfully!";
    } else {
        echo "❌ Failed to save feedback.";
    }
} else {
    echo "❌ Email not found. Please use a registered email.";
}

$conn->close();
?>
