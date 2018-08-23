/*对象方法插件,扩展原型对象*/

jQuery.prototype.sxzoom = function(options){
    //这里的this指向：实例(jquery 对象)
    var defaults = {
        //大图区域宽高
        width:500,
        height:500,

        //位置：right,bottom,left,top
        position:'right',

        //大图小图间距
        gap:15
    }
    //扩展参数
    var opt = $.extend({},defaults,options);

        /*
            小图相关
         */
        //获取小图容器
        
        var $small = this;
      
        //添加特定样式
        $small.addClass('sx-zoom');

        //获取小图
        var $smallImg = $small.children('img');
        console.log($smallImg)
        //获取大图url
        var bigUrl = $smallImg.attr('src');
        //大图与小图的比例
        var ratio;

        // 大图相关
        //创建大图容器，并写入页面
        var $big = $('<div/>').addClass('sx-bigzoom').appendTo('body');
        var $bigImg = $('<img/>').attr('src',bigUrl).appendTo($big);

        //设置大图区域的显示位置：left,top,right(默认)
        var bigLeft,bigTop;
        switch(opt.position){
            case'left':
                bigLeft = $small.offset().left - opt.gap - opt.width;
                bigTop = $small.offset().top;
                break;
            case'right':
                bigLeft = $small.offset().left + $smallImg.outerWidth()+opt.gap;
                bigTop = $small.offset().top;
                break;
            case'top':
                 bigLeft = $small.offset().left;
                bigTop = $small.offset().top-opt.gap-opt.height;
                break;
            case'bottom':
                bigLeft = $small.offset().left;
                bigTop = $small.offsetTop+$small.outerHeight()+opt.gap;
                break;
        }



        //定义样式
        $big.css({
            width:opt.width,
            height:opt.height,
            top:bigTop,
            left:bigLeft
        });

        /*
            放大镜相关
            问题1：为什么出现比例不对
            问题2：出现卡顿现象
                解决方式：设置放大镜的尺寸，跟放大区域成比例
         */
       


         //创建放大镜，并写入小图位置
         var $zoom = $('<div/>').addClass('zoom').appendTo($small);


       

         //鼠标移入移出
         $small.on('mouseover',function(){
                $zoom.show();
                $big.show();

                //创建临时图片，已解决图片加载慢而产生的比例计算错误的问题
                var img = new Image();
                img.src = bigUrl;
                img.onload = function(){

                      //计算大图与小图的比例:1/2,1/3
                    ratio = $bigImg.outerWidth()/$smallImg.outerWidth();  


                        $zoom.css({
                        width:opt.width/ratio,
                        height:opt.height/ratio
                    });
                }


         }).on('mouseout',function(){
            $zoom.hide();
            $big.hide();
         })

         //鼠标移动
         .on('mousemove',function(e){
            var left = e.pageX - $zoom.outerWidth()/2-$small.offset().left;
            var top = e.pageY - $zoom.outerHeight()/2-$small.offset().top;

            // 限定top,left值
            // 不超出小图区域
            if(left < 0){
            left = 0;
            }else if(left > $smallImg.outerWidth() - $zoom.outerWidth()){
                left = $smallImg.outerWidth() - $zoom.outerWidth();
            }

            if(top<0){
                top = 0;
            }else if(top > $smallImg.outerHeight() - $zoom.outerHeight()){
                top = $smallImg.outerHeight() - $zoom.outerHeight()
            }
            $zoom.css({
                left:left,
                top:top
            });
            //移动大图
            $bigImg.css({
                left:-left*ratio,
                top:-top*ratio
            });
         })
}