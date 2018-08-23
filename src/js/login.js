jQuery(function($){
    console.log(666)

    var $btn_log = $('.btn_log'); 


    $btn_log.on('click',function(){

        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            url:'../api/login.php',
            data:{
                username:username,
                password:password
            },
            success:function(res){
                if(res === 'ok'){
                   location.href = '../index.html';
                
                }else{
                    alert("用户名或者密码错误！");
                }
                
            }
        })
    })
})