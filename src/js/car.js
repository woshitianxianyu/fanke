jQuery(function($){


         var datalist = document.querySelector('.x_datalist');
         var zongjia = document.querySelector('.total');


    //获取传过来的cookit
    //
    
      var goodslist = Cookie.get('goodslist');//'[{}]',''

        console.log(goodslist);
        if(goodslist.length<=0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
            console.log(goodslist);
        }

        console.log(goodslist);


         // 删除单个商品
        // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
        datalist.onclick = function(e){
            e = e || window.event;

            var target = e.target || e.srcElement;

            // 判断是否点击了按钮
            if(target.className === 'btn-close'){
                // 获取当前li
                var currtr = target.parentNode.parentNode;
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

                // 重新渲染页面
                render();
            }
        }


        render();
        function render(){
            
           // 计算总价
            var total = 0;

           
        datalist.innerHTML = goodslist.map(function(item,idx){

            // 计算总价
                // total =(toot[idx].innerText*1) * goodslist[idx].qty;  
            return  `
                
                            <tr data-guid="${goodslist[idx].id}">
                                <td><input type="checkbox" /></td>
                                <td><img src="../images/${goodslist[idx].imgurl}" height="49" width="49" alt="" />
                                    <span class="name">${goodslist[idx].tile}</span>
                                </td>
                                  <td>xxL</td>
                                   <td>
                                    
                                    <span>${goodslist[idx].sale}</span>
                                </td>

                                <td><button class="jian">-</button><span class="qty">${goodslist[idx].qty}</span><button class="jia">+</button>
                                </td>

                                    <td>--</td>

                               

                                <td>
                                    <span class="toot">${goodslist[idx].sale*goodslist[idx].qty} </span>
                                 
                                </td>
                              
                                <td>
                                    <button class="btn-close">&times;</button>
                                </td>
                            </tr>  
                             `
         }).join('');
                


          //点击按钮进行加减数量
            var jia = document.querySelectorAll('.jia');
            var jian = document.querySelectorAll('.jian');
            var toot = document.querySelectorAll('.toot');
            

            
            all();
            function all(){

                  //写入总价
               total = 0;
                 for(var i=0;i<goodslist.length;i++){

                   var tar = toot[i].innerText;

                    total +=tar*1;
                    
                    // console.log(total);
                    
                 }
                //写入总价
                     zongjia.innerText = total;
            }
             
            
            var thh = 0;
            var thr = 0;
            for(let i=0;i<jia.length;i++){

                jia[i].onclick = function(){
                     var a = this.previousSibling.innerText;
                     a++;
                     jia[i].previousSibling.innerText = a;
                     var tot = goodslist[i].sale * a;
                     toot[i].innerText = tot;
                     tar = toot[i].innerText;

                      all();

                }
                

                 jian[i].onclick = function(){
                     var b = this.nextSibling.innerText;
                     b--;
                     if(b>=1){
                        jian[i].nextSibling.innerText = b;
                     }else{
                        jian[i].nextSibling.innerText = 1;
                     }
                     

                     var tot = goodslist[i].sale * b;
                     if(tot>=1){
                        toot[i].innerText = tot;
                        all();
                    }else{
                        toot[i].innerText = 1;
                    }
                }
            }
        }



        //使用jq实现全选/不选
        var checkbox = $('.datalist tbody :checkbox');
        
        var trs = $('.datalist tbody tr');
        console.log(trs);


        $('#all').click(function(){
            checkbox.prop('checked',this.checked);

            $trs[this.checked?'addClass':'removeClass']('selected');
        })


})