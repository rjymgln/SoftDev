<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to MySQL
$conn = new mysqli("localhost", "root", "", "softdev");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $order_id = $_POST['order_id'] ?? null;

    if ($order_id) {
        $stmt = $conn->prepare("UPDATE orders SET status = 'finished' WHERE id = ?");
        $stmt->bind_param("i", $order_id);

        if ($stmt->execute()) {
            echo json_encode(["success" => "Order marked as finished."]);
        } else {
            echo json_encode(["error" => "Failed to update order status."]);
        }
        $stmt->close();
    } else {
        echo json_encode(["error" => "Missing order_id parameter."]);
    }
} else {
    echo json_encode(["error" => "Invalid request method."]);
}

$conn->close();
?>
