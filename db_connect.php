<?php
$db_server = "localhost";
$db_user = "root";
$db_user_pwd = "";
$db_name = "kms";

$con = mysql_connect($db_server,$db_user,$db_user_pwd);
mysql_select_db($db_name,$con);
?>