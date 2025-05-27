<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "softdev");
if ($conn->connect_error) {
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['id']) || !isset($data['price'])) {
    echo json_encode(['error' => 'Missing id or price']);
    exit;
}

$id = $conn->real_escape_string($data['id']);
$price = $conn->real_escape_string($data['price']);

$sql = "UPDATE frappes SET price='$price' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>
