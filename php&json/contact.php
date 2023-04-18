<?php
include 'connection.php';
$sql = "SELECT * FROM kontak";
$result = $conn->query($sql);
$contact = array();
while ($row = $result->fetch_assoc()) {
    $dt['nomor_telepon'] = $row['nomor_telepon'];
    $dt['email'] = $row['email'];
    $dt['alamat'] = $row['alamat'];
    array_push($contact, $dt);
}

echo json_encode($contact);
$conn->close();
?>
