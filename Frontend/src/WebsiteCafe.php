<?php

$host="localhost";
$user="root";
$pass="";
$db="feedback";

$conn =new mysqli($host,$user,$pass,$db);

if($conn->connect_error){
    echo "Failed to connect Database.".$conn->connect_error;
}


// Database connection
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    if (isset($_POST['Name'], $_POST['Email'], $_POST['Message'])) {

        $FEEDBACK_NAME = htmlspecialchars(trim($_POST['Name']));
        $EMAIL = htmlspecialchars(trim($_POST['Email']));
        $MESSAGE = htmlspecialchars(trim($_POST['Message']));


        if (!empty($FEEDBACK_NAME) && !empty($EMAIL) && !empty($MESSAGE)) {
            if (filter_var($EMAIL, FILTER_VALIDATE_EMAIL)) {
  
                $sql = "INSERT INTO customerfeedback (FEEDBACK_NAME, EMAIL, MESSAGE) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($sql);

                if ($stmt) {
                    $stmt->bind_param("sss", $FEEDBACK_NAME, $EMAIL, $MESSAGE);

                    if ($stmt->execute()) {
                        echo "<script>alert('Thank you for your feedback. Redirecting to the Home Page.');";
                        echo "window.location.href = 'WebsiteCafe.html';</script>";
                    } else {
                        echo "<script>alert('Error: " . $stmt->error . "');</script>";
                    }

                    $stmt->close();
                } else {
                    echo "<script>alert('Error preparing statement: " . $conn->error . "');</script>";
                    echo "window.location.href = 'WebsiteCafe.html';</script>";
                }
            } else {
                echo "<script>alert('Invalid email format.');</script>";
                echo "window.location.href = 'WebsiteCafe.html';</script>";
            }
        } else {
            echo "<script>alert('All fields are required.');</script>";
            echo "window.location.href = 'WebsiteCafe.html';</script>";
        }
    } else {
        echo "<script>alert('Some form fields are missing.');</script>";
        echo "window.location.href = 'WebsiteCafe.html';</script>";
    }

    $conn->close();
} else {
    echo "<script>alert('Invalid request method.');</script>";
    echo "window.location.href = 'WebsiteCafe.html';</script>";
}
?>