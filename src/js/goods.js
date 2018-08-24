


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

            console.log(goods);

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


            


             addcar.onclick = function(e){
                if(e.target.className === 'del'){
                    addcar.style.display = 'none';
                }
             }

            

             
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

        

        //加入购物车
        //获取元素


        var number = document.querySelector('#select');
        var num = document.querySelector('.num');
        var tal = document.querySelector('.tal');
        var btn_car = document.querySelector('.btn_car');
        var car = document.querySelector('.car');
        var car_log  = document.querySelector('.car_log');
         var along = document.querySelector('.along');
           

        // 选择商品数量，根据单价和数量自动计算总价
        number.onchange = ()=>{
        if(number.value < 0){
            number.value = 0;
        }
        num.innerHTML =  number.value;
        tal.innerHTML = goods.sale * number.value;
    }   



            var goodslist = Cookie.get('goodslist');
            console.log(goodslist)

            if(goodslist === ''){
                goodslist = [];
            }else{
                goodslist = JSON.parse(goodslist);        
            }


             // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
        car.onclick = function(e){
            e = e || window.event;

            var target = e.target || e.srcElement;

            // 判断是否点击了按钮
            if(target.className === 'btn-close'){
                // 获取当前li
                var currtr = target.parentNode;
                console.log(currtr)

                // 获取当前商品的guid
                var id = currtr.getAttribute('data-guid');

                // 找出数组中对应商品并移除
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist.splice(i,1);
                        break;

                    }
                }

                // 重写cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));

               addCar();
            }
        }
        

            // 添加到购物车，获取cookie
            // 声明一个变量，用于存放所有添加的商品信息
            //生成页面结构
           
            addCar();
           function addCar(){
                

                // car.innerHTML=`
                //           <h4 class="along">最近加入的商品</h4>
                // ` 
                car_log.innerHTML = goodslist.map(function(item,idx){
                    return `
                        <li data-guid="${goodslist[idx].id}">
                                <img src="../images/${goodslist[idx].imgurl}" height="30"  alt="" />
                                <p> ${goodslist[idx].tile}</p>
                                <span>￥${goodslist[idx].sale} <span>&times;</span><span class="number">${goodslist[idx].qty}</span></span>
                               <a class="btn-close">删除</a>
                        </li>

                    `
                }).join('');



               

                car.innerHTML = `
                        <div class="sing">
                            <p class="fl">共计(未计算促销价格)</p>
                            <p class="fl">￥<span class="tol"></span></p>
                            <a href="car.html"><span style="font-size:14px;margin-left:30px;color:red">查看购物车</span></a>
                        </div>

                `
                  car.appendChild(car_log);


                  var total = 0;
               
            var  cart_total = document.querySelector('.tol');
            var cont = document.querySelector('.cont')
            for(var i=0;i<goodslist.length;i++){        
                total += goodslist[i].sale * goodslist[i].qty;
                cont.innerHTML = i+1;
            }
                cart_total.innerHTML =   total;
           }


    
            //点击添加购物车按钮，添加到购物车
             btn_jion.onclick = function(){
               //购物车显示
                addcar.style.display = 'block';

                 var currentGoods =  goodslist.filter(function(item){
                return item.id === goods.id;
            });

                // 商品存在，在原有数量上加上现在添加的商品数量
                if(currentGoods.length>0){
                    currentGoods[0].qty = currentGoods[0].qty*1 + number.value*1;
                }
                // 商品不存在，添加商品
                else{   
                    var toCar = {
                        id:goods.id,
                        imgurl:goods.imgurl,
                        tile:goods.tile,
                        sale:goods.sale,
                        qty:number.value
                    }
                    // 当前商品添加到数组
                    goodslist.push(toCar);
                    console.log(goodslist);
                }
                // 添加cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));
                 addCar(); 
             }







                //实现动画效果
                

    })


        





           

            




    

