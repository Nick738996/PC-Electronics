<?php
$servername = "localhost";
$username = "root";
$password = "123456789";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}


date_default_timezone_set("America/Bogota");

$mysqldump='"../../../MySQL/bin/mysqldump.exe"';
$backup_file = '"../backups/"'.$dbname. "-" .date("Y-m-d-H-i-s"). ".sql";
system("$mysqldump --no-defaults -u $username -p$password $dbname > $backup_file",$output);

?>
          
    <?php
        echo 'Se ha realizado el BackUp correctamente <b>' ;
    ?>



 <?php


mysqli_close($conn);
?>
