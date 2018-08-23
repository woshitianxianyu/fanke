


    jQuery(function($){


        //获取到传过来的商品参数
        var params = location.search;
            //去掉？
           
            params = params.slice(1);
            //拆分字符串
            params = params.split('&');

            var goods = {};

            //遍历数组，拆分为数组
            params.forEach(function(item){
                var arr = item.split('=');
                //商品写入数组
                // console.log(arr);
                goods[arr[0]] = decodeURI(arr[1]);

            })

            // console.log(goods.imgurl);
           
            //将传过来的值写在相对应的地方
            var imgmax = document.querySelector('.imgmax');
            var imgmin = document.querySelector('.imgmin li');

            imgmax.children[0].src = '../images/'+ goods.imgurl; 
            imgmin.children[0].src ='../images/'+ goods.imgurl;



             //放大镜效果
             $('.imgmax').lxzoom({width:400,height:400});


             //加入购物车

             var btn_jion = document.querySelector('#btn_jion');
             var addcar = document.querySelector('.addcar');
             var head = document.querySelector('.head');
             
             var del = document.querySelector('.del')

             btn_jion.onclick = function(){
                console.log(666)
                addcar.style.display = 'block';
             }


             // addcar.onclick = function(e){
             //    if(e.target.className === 'del'){
             //        addcar.style.display = 'none';
             //    }
             // }

             del.onclick = function(){

                    addcar.style.display = 'none';
                
             }

             console.log(addcar.offsetLeft);
             addcar.onmousedown = function(e){

                var ox = e.clientX - addcar.offsetLeft;
                var oy = e.clientY - addcar.offsetTop;


                document.onmousemove = function(eve){
                    addcar.style.left = eve.clientX - ox +'px';
                    addcar.style.top = eve.clientY - oy + 'px';

                     //去除图片的默认样式,考虑兼容性
                     if(eve.preventDefault){
                        eve.preventDefault();
                     }else{
                        eve.returnValue = false;
                     }
                // e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }
               

            }

            document.onmouseup = function(){
                document.onmousemove = null;
            }

        

    })


        





           

            




    

