<?php
    // 引入connect.php
    include 'connet.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * username
            * password
     */
    // //接收前端的数据
        $username = isset($_POST['username']) ? $_POST['username'] : null; 
        $password = isset($_POST['password']) ? $_POST['password'] : null; 

      

    //查找数据库中是否存在同名用户
        // $sql = "select username from login where username='laoxie'";
        $sql = "insert into login(username,password) values('$username','$password')";

        //执行sql语句,
        $result = $conn->query($sql);
        print_r($result);

        if($result){
            echo "success";
        }else{
            echo "false";
        }


?>