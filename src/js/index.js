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
          

})