<?php
include 'connection.php';

    $name = $_POST['inputName'];
    $email = $_POST['inputEmail'];
    $comment = $_POST['inputComment'];



    $sql = "INSERT INTO listt(name, email, comment) VALUES ('$name', '$email', '$comment')";
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Comment submitted successfully');</script>";
        header('Refresh:1; url=http://localhost/AFL2/myhtml.html',true,303);
    } else {
        echo "<script>alert('Error: " . $sql . "<br>" . $conn->error . "');</script>";
    }


$conn->close();
?>