<?php
$servername = "localhost";
$username = "root";
$password = "123456789";
$dbname = "productos";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


$id = $_POST['id'];


$sql = "SELECT * FROM tabla29 WHERE id=$id";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {

$sql2 = "DELETE FROM tabla29 WHERE id=$id";

if (mysqli_query($conn, $sql2)) {
    echo "Registro Eliminado Satisfactoriamente";
} else {
    echo "Error Eliminando el Registro : " . mysqli_error($conn);
}}} else {

}
mysqli_close($conn);
?> 