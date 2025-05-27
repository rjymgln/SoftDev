<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$conn = new mysqli("localhost", "root", "", "softdev");
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $frappe_id = isset($_POST['frappe_id']) ? intval($_POST['frappe_id']) : null;
    $rating = isset($_POST['rating_value']) ? intval($_POST['rating_value']) : null;

    if (!$frappe_id || !$rating || $rating < 1 || $rating > 5) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid frappe_id or rating_value"]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO ratings (frappe_id, rating_value) VALUES (?, ?)");
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["error" => "Prepare failed: " . $conn->error]);
        exit;
    }
    $stmt->bind_param("ii", $frappe_id, $rating);
    if ($stmt->execute()) {
        echo json_encode(["success" => "Rating submitted!"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Execute failed: " . $stmt->error]);
    }
    $stmt->close();
    $conn->close();
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
exit;
