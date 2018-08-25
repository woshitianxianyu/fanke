jQuery(function($){


      var type = 'list';

        $.ajax({
          url:'../api/index.php',
          data:{
            type:type
          },
          success:function(res){

           var data = JSON.parse(res);

            var boom = document.querySelector('.boom');
            reden();
            function reden(){
                     boom.innerHTML = data.map(function(item){
                    return `
                         <li data-guid="${item.id}">
                    <img src="../images/${item.imgurl}" height="230" />
                    <p>${item.name}</p>
                    <span class="price">售价￥<del>${item.price}</del></span>
                    <h4 class="tr">
                        <span>特惠</span>
                        <span>￥${item.sale}</span>
                    </h4>
                  </li>
                    `
                }).join('');
            }
           

            // 点击商品列表的商品图片跳转到详情页
             var img = $('.boom li img');
             var img = img.get();
         
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


             //价格排序
            var price = document.querySelector('.pri');
           
            price.onclick = function(){
                    console.log(666)
                if(price.children[0].className === 'iconfont icon-xiajiang'){

                    data.sort(function(a,b){
                        return a.sale - b.sale;
                    })

                     price.children[0].className === 'iconfont icon-shangsheng';
                      reden();
                }else{
                data.sort(function(a,b){
                    return b.sale - a.sale;
                })
                price.children[0].className = 'iconfont icon-xiajiang';
                renden();
  

             }
        }    




      }

    })
    


  


})