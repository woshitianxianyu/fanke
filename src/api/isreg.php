<?php
     /*
        查询验证：是否有相同的用户名存在
     */
    include 'connet.php';

    //防止报错
    $username = isset($_GET['username'])?$_GET['username']:null;

    //查询数据库中是否有相同名字
    $sql = "select * from login where username='$username'";

    //执行sql语句
    $result = $conn->query($sql);

    

    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }


?>