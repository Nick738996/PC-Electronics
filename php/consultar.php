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
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) { 	
        echo "Codigo: " . $row["id"]
        . "<br> Nombre: " . $row["nombre"]
        . "<br> Marca: " . $row["marca"]
        . "<br> Precio: ". $row["precio"]
        . "<br> Cantidad: ". $row["cantidad"]
        . "". "<br>";
    }
} else {
    echo "0 resultados";
}

mysqli_close($conn);
?> 
