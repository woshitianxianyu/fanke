document.addEventListener('DOMContentLoaded', function(){

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
            }else{
                alert('ok')
            }

            
            
            //刷新验证码
            randomCode();

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



})
