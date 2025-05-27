<?php
$conn = new mysqli("localhost", "root", "", "softdev");
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$result = $conn->query("SELECT * FROM frappes");

echo "<h2>Frappe Menu</h2><ul>";
while ($row = $result->fetch_assoc()) {
    echo "<li><strong>{$row['id']}. {$row['name']}</strong> - ₱{$row['price']}</li>";
}
echo "</ul>";

$conn->close();
?>
