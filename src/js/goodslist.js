jQuery(function($){
         $('#banner').lunbo({
             button:true,
             page:false,
             type:'fade',
             width:1200,
             height:535,
             src:['../images/c_001.jpg','../images/c_002.jpg','../images/c_003.jpg',]
           });



            var $shirt =  $('.shirt');
            var _type = 1;
            $.ajax({
                url:'../api/type.php',
                data:{
                    type:_type
                },
                success:function(data){
                    var data = JSON.parse(data);
                    $shirt.html(data.map(function(item){
                            return `
                            <li data-guid = "${item.id}">
                                <img src="../images/${item.imgurl}" height="260" width="260" alt="" />
                                <a href="#" class="tile">易打理 领尖扣 短袖 男款</a>
                                <del class="price">￥${item.price}</del>
                                <h4 class="sale">
                                    <span>特惠</span>
                                    <span>${item.sale}</span>
                                </h4>
                                <i></i>
                            </li>
                        `
                    }));

                    // console.log(data);

                     // 点击商品列表的商品图片跳转到详情页
                     var img = $('.shirt li img');
                     var img = img.get();
                     console.log(img);
                     for(let i=0; i<img.length;i++){
                            img[i].onclick = function(event){
                                var params = '';
                                var goods = data[i];
                                console.log(data)
                                for(var key in goods){
                                    params += key + '=' + goods[key] +'&';
                                    console.log(params);

                                }
                                params = params.slice(0,-1);
                                location.href = 'goods.html?' +
                                params;
                               
                            }


                       
                     }
                     
                }
            })


             var $shirt_hn =  $('.shirt_hn');
            var _type = 2;
            $.ajax({
                url:'../api/type.php',
                data:{
                    type:_type
                },
                success:function(data){
                    var data = JSON.parse(data);
                    $shirt_hn.html(data.map(function(item){

                        
                            return `
                            <li data-guid = "${item.id}">
                                <img src="../images/${item.imgurl}" height="260" width="260" alt="" />
                                <a href="#" class="tile">易打理 领尖扣 短袖 男款</a>
                                <del class="price">￥${item.price}</del>
                                <h4 class="sale">
                                    <span>特惠</span>
                                    <span>${item.sale}</span>
                                </h4>
                                <i></i>
                            </li>
                        `
                    }));

                    // 点击商品列表的商品图片跳转到详情页
                     var img = $('.shirt_hn li img');
                     var img = img.get();
                     console.log(img);
                     for(let i=0; i<img.length;i++){
                            img[i].onclick = function(event){
                                var params = '';
                                var goods = data[i];
                                console.log(data)
                                for(var key in goods){
                                    params += key + '=' + goods[key] +'&';
                                    console.log(params);

                                }
                                params = params.slice(0,-1);
                                location.href = 'goods.html?' +
                                params;
                               
                            }
                    }
                }
            })



            var $shirt_f =  $('.shirt_f');
            var _type = 3;
            $.ajax({
                url:'../api/type.php',
                data:{
                    type:_type
                },
                success:function(data){
                    var data = JSON.parse(data);
                    $shirt_f.html(data.map(function(item){

                        
                            return `
                            <li data-guid = "${item.id}">
                                <img src="../images/${item.imgurl}" height="260" width="260" alt="" />
                                <a href="#" class="tile">易打理 领尖扣 短袖 男款</a>
                                <del class="price">￥${item.price}</del>
                                <h4 class="sale">
                                    <span>特惠</span>
                                    <span>${item.sale}</span>
                                </h4>
                                <i></i>
                            </li>
                        `
                    }));

                    // 点击商品列表的商品图片跳转到详情页
                     var img = $('.shirt_f li img');
                     var img = img.get();
                     console.log(img);
                     for(let i=0; i<img.length;i++){
                            img[i].onclick = function(event){
                                var params = '';
                                var goods = data[i];
                                console.log(data)
                                for(var key in goods){
                                    params += key + '=' + goods[key] +'&';
                                    console.log(params);

                                }
                                params = params.slice(0,-1);
                                location.href = 'goods.html?' +
                                params;
                               
                            }
                    }
                }
            })


          var $shirt_s =  $('.shirt_s');
            var _type = 4;
            $.ajax({
                url:'../api/type.php',
                data:{
                    type:_type
                },
                success:function(data){
                    var data = JSON.parse(data);
                    $shirt_s.html(data.map(function(item){

                        
                            return `
                            <li data-guid = "${item.id}">
                                <img src="../images/${item.imgurl}" height="260" width="260" alt="" />
                                <a href="#" class="tile">易打理 领尖扣 短袖 男款</a>
                                <del class="price">￥${item.price}</del>
                                <h4 class="sale">
                                    <span>特惠</span>
                                    <span>${item.sale}</span>
                                </h4>
                                <i></i>
                            </li>
                        `
                    }));

                    // 点击商品列表的商品图片跳转到详情页
                     var img = $('.shirt_s li img');
                     var img = img.get();
                     console.log(img);
                     for(let i=0; i<img.length;i++){
                            img[i].onclick = function(event){
                                var params = '';
                                var goods = data[i];
                                console.log(data)
                                for(var key in goods){
                                    params += key + '=' + goods[key] +'&';
                                    console.log(params);

                                }
                                params = params.slice(0,-1);
                                location.href = 'goods.html?' +
                                params;
                               
                            }
                    }
                }
            })


                var $shirt_q =  $('.shirt_q');
                var _type = 6;
                $.ajax({
                    url:'../api/type.php',
                    data:{
                        type:_type
                    },
                    success:function(data){
                        var data = JSON.parse(data);
                        $shirt_q.html(data.map(function(item){

                            
                                return `
                                <li data-guid = "${item.id}">
                                    <img src="../images/${item.imgurl}" height="260" width="260" alt="" />
                                    <a href="#" class="tile">易打理 领尖扣 短袖 男款</a>
                                    <del class="price">￥${item.price}</del>
                                    <h4 class="sale">
                                        <span>特惠</span>
                                        <span>${item.sale}</span>
                                    </h4>
                                    <i></i>
                                </li>
                            `
                        }));

                        // 点击商品列表的商品图片跳转到详情页
                         var img = $('.shirt_q li img');
                         var img = img.get();
                         console.log(img);
                         for(let i=0; i<img.length;i++){
                                img[i].onclick = function(event){
                                    var params = '';
                                    var goods = data[i];
                                    console.log(data)
                                    for(var key in goods){
                                        params += key + '=' + goods[key] +'&';
                                        console.log(params);

                                    }
                                    params = params.slice(0,-1);
                                    location.href = 'goods.html?' +
                                    params;
                                   
                                }
                        }
                    }
                })


             var $shirt_m =  $('.shirt_m');
            var _type = 5;
            $.ajax({
                url:'../api/type.php',
                data:{
                    type:_type
                },
                success:function(data){
                    var data = JSON.parse(data);
                    $shirt_m.html(data.map(function(item){

                        
                            return `
                            <li data-guid = "${item.id}">
                                <img src="../images/${item.imgurl}" height="260" width="260" alt="" />
                                <a href="#" class="tile">易打理 领尖扣 短袖 男款</a>
                                <del class="price">￥${item.price}</del>
                                <h4 class="sale">
                                    <span>特惠</span>
                                    <span>${item.sale}</span>
                                </h4>
                                <i></i>
                            </li>
                        `
                    }));

                    // 点击商品列表的商品图片跳转到详情页
                     var img = $('.shirt_m li img');
                     var img = img.get();
                     console.log(img);
                     for(let i=0; i<img.length;i++){
                            img[i].onclick = function(event){
                                var params = '';
                                var goods = data[i];
                                console.log(data)
                                for(var key in goods){
                                    params += key + '=' + goods[key] +'&';
                                    console.log(params);

                                }
                                params = params.slice(0,-1);
                                location.href = 'goods.html?' +
                                params;
                               
                            }
                    }
                }
            })


            var $shirt_t =  $('.shirt_t');
            var _type = 7;
            $.ajax({
                url:'../api/type.php',
                data:{
                    type:_type
                },
                success:function(data){
                    var data = JSON.parse(data);
                    $shirt_t.html(data.map(function(item){

                        
                            return `
                            <li data-guid = "${item.id}">
                                <img src="../images/${item.imgurl}" height="260" width="260" alt="" />
                                <a href="#" class="tile">易打理 领尖扣 短袖 男款</a>
                                <del class="price">￥${item.price}</del>
                                <h4 class="sale">
                                    <span>特惠</span>
                                    <span>${item.sale}</span>
                                </h4>
                                <i></i>
                            </li>
                        `
                    }));

                    // 点击商品列表的商品图片跳转到详情页
                     var img = $('.shirt_t li img');
                     var img = img.get();
                     console.log(img);
                     for(let i=0; i<img.length;i++){
                            img[i].onclick = function(event){
                                var params = '';
                                var goods = data[i];
                                console.log(data)
                                for(var key in goods){
                                    params += key + '=' + goods[key] +'&';
                                    console.log(params);

                                }
                                params = params.slice(0,-1);
                                location.href = 'goods.html?' +
                                params;
                               
                            }
                       
                        }
                   }             
            })
            
            


})