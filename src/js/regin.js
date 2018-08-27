jQuery(function($){



    var vcode = document.querySelector('#codes');
    var code  = document.querySelector('#code');
    var btn_log = document.querySelector('.btn_log');
    var check = document.querySelector('#check');
    var username = document.querySelector('#username')


    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';//str[35]
        randomCode();
        //生成随机验证码
        function randomCode(){
        // 随机生成一个4位验证码（包含字母）
        var _code = '';
        for(var i=0;i<4;i++){
            var index = parseInt(Math.random()*str.length) //不可能大于36
            _code += str[index]
        }
        vcode.innerHTML = _code.toUpperCase();
        vcode.style.backgroundColor = 'skyblue'
        }

        vcode.onclick = randomCode;
         btn_log.onclick = regin;

        function regin(){

            //验证码验证
            var _code1 = code.value;
            var _code2 = vcode.innerHTML; 
            if(_code1!==_code2){
                alert('验证码错误');
                return false;
            }

                   //验证手机号
             var phone = document.getElementById('phone').value;
          
             
            if(!/^1[3-9]\d{9}$/.test(phone)){
                alert('手机号不合法');
                return false;
            }

            var paw = document.querySelector('#password').value;
            var psw = document.querySelector('#psw').value;

            if(paw !== psw){
                alert('密码输入有误！');
            }


            var phone = $('#phone').val();
            var psw = $('#psw').val();
            //ajax发送请求
            console.log(psw);

            if($('.zuce').css('display')=== 'block'){
                return false;
            }

            $.ajax({
                url:'../api/regin.php',
                type:'post',
                data:{
                    username:phone,
                    password:psw
                },
                success:function(res){
                    if(res === 'success'){
                        alert(注册成功);
                    }
                }
            })

                //刷新验证码
                randomCode();
                //清空电话号码
              
                $('#phone').val(""); 
                alert('注册成功！')

        }

       



        //接受协议
            check.onclick = function(){
                if(this.checked){
                    btn_log.disabled = false;
                    btn_log.style.background = '#971D21';
                }else{
                    btn_log.disabled = 'disabled';
                    btn_log.style.backgroundColor= '#9A9A9A';
                }

            }


                //获得焦点focus，blur失去焦点
              var phone = $('#phone');
              phone.blur(function(){
                    
                var _phone = phone.val();

                $.ajax({
                    url:'../api/isreg.php',
                    data:{
                        username:_phone
                    },
                    success:function(res){
                        if(res === 'no'){
                            $('.zuce').css({display:'block'});
                            // alert('no');
                        }else{
                            $('.zuce').css({display:'none'});
                        }
                    }
                })



            })



     

})


