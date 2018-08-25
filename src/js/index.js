jQuery(function($){

  
           $('#banner').lunbo({
             button:true,
             page:true,
             type:'fade',
             width:1200,
             height:535,
             src:['images/001.jpg','images/002.jpg','images/003.jpg','images/004.jpg']
            

           });
 
    /*
        点击导航条实现下拉动画效果
     */
    
           var lis =  $('.tab>li');
           console.log(lis);
           lis.on('mouseover',function(){
               
            $(this).find('ul').slideDown().siblings('ul>li>ul').stop(true,true).slideUp(600);;
           //   $(this).find('ul').show();
           })

           lis.on('mouseout',function(){
                // $(this).find('ul').slideDown(500).siblings('ul>li>ul').stop(true,true).slideUp(600);
            $(this).find('ul').css({display:'none'});
             

           })
          


          //跟据数据生成结构
          var type = 'more';

        $.ajax({
          url:'api/index.php',
          data:{
            type:type
          },
          success:function(res){

           var data = JSON.parse(res);

            var kk = document.querySelector('.kk');
            kk.innerHTML = data.map(function(item){
                return `
                    <li><img src="images/${item.imgurl}" /></li>
                `
            }).join('');
          }

        })


        var type = 'tui';
       $.ajax({
          url:'api/index.php',
          data:{
            type:type
          },
          success:function(res){

           var data = JSON.parse(res);

            var yy = document.querySelector('#youxuan');
              
          }

        })


        var type = 'xia';
       $.ajax({
          url:'api/index.php',
          data:{
            type:type
          },
          success:function(res){

           var data = JSON.parse(res);
           console.log(data)
            var xia = document.querySelector('.xia');
              console.log(xia)
              xia.innerHTML = data.map(function(item){
                  return  `
                    <li>
                        <img src="images/${item.imgurl}"  />
                        <p>
                            <span>充值购买相当于&nbsp ${item.price}元起</span>
                            ${item.name}
                        </p>
                    </li>


                  `
                 
              }).join('');
          }

        })


       var type = 'geng';
       $.ajax({
          url:'api/index.php',
          data:{
            type:type
          },
          success:function(res){

           var data = JSON.parse(res);
           console.log(data)
            var geng = document.querySelector('.geng');
            
              geng.innerHTML = data.map(function(item){
                  return  `
                    <li>
                        <img src="images/${item.imgurl}"  />
                        
                    </li>


                  `
                 
              }).join('');
          }

        })


})