<?php
     include 'connet.php';

    //接收前端的数据
        $username = isset($_GET['username']) ? $_GET['username'] : null; 
        $password = isset($_GET['password']) ? $_GET['password'] : null; 


        //判断数据库中是否存在相同用户和密码
        $sql = "select * from login where username='{$username}' and password='{$password}'";

        //执行sql语句
        $result = $conn->query($sql);

        $row = mysqli_fetch_array($result);
       
        

        //判断用户名和密码是否正确
        if($username===$row['username'] && $password===$row['password']){
            echo 'ok';
        }else{
            echo 'error';
        }

?>