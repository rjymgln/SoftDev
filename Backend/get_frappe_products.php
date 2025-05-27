<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "softdev");
if ($conn->connect_error) {
    echo json_encode(["error" => "Connection failed: " . $conn->connect_error]);
    exit;
}

$sql = "SELECT id, name, price, availability FROM frappes";
$result = $conn->query($sql);

$frappes = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $frappes[] = $row;
    }
}

echo json_encode($frappes);
$conn->close();
?>
