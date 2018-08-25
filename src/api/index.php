<?php
    
     // 引入connect.php
    include 'connet.php';
      //接收前端的数据
        $type = isset($_GET['type']) ? $_GET['type'] : null; 
         

    $sql = "select * from list where type='$type'";

    $result = mysqli_query($conn,$sql);
    if(!$result){
        printf("error:%s\n",mysqli_error($conn));
        exit();
    }

    $jarr = array();
    while($rows = mysqli_fetch_array($result,MYSQL_ASSOC)){
        $count = count($rows);
        for($i = 0;$i<$count;$i++){
            unset($rows[$i]);
        }
        array_push($jarr,$rows);
    }

    echo $str = json_encode($jarr,JSON_UNESCAPED_UNICODE);

?>