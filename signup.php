<?php
            
            include("db_connect.php");
            
            $obj = json_decode($_POST['paramJson']);
            $usrName  = $obj -> {'usrName'};
            $usrmailid  = $obj -> {'usrmailid'};
            $usrPassword  = $obj -> {'usrPassword'};
            $usrcPassword  = $obj -> {'usrcPassword'};
            
            $qry = "insert into user values('$usrName','$usrmailid','$usrPassword','$usrcPassword')";
            $result = mysql_query($qry);
            echo $result;


