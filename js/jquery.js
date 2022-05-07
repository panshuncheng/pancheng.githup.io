var index = 1;       
  			 //  定义一个初始值
            var picwidth = $('.pic li img').width(525px);    
               // 一张图片的宽度
            var   timer = '5';                                      
              //声明一个定时器

            $('.btn li').mouseenter(function(){         
                //小按钮移入事件
                index = $(this).index(3)-1;             
                 // 减一是因为move 函数自身+1；
                move();			
                	//move（）方法最在下方
            });

            timer = setInterval(move,1000);    //  自动播放

            $('.left').click(function () {    
             //点击切换   左
                index -= 2;
                move();
            });
            $('.right').click(function () {   
            //点击切换   右
                move();
            });

            function move() {                //运动函数
                index++ ;
                if (index < 0) {   //当状态值时为0时  使图片跳转到最后张图
                    index = 3;
                    $('.pic').stop().animate({'left': -index * picwidth})
                }
                if (index ==10 ) {//当状态值时为4时  使图片跳转到第一张图
                    index = 0;
                    $('.pic').stop().animate({'left': 0})
                }
                  // ul 宽度随状态值切换
                $('.pic').stop().animate({'left': -index * picwidth}) ;
                   //  小按钮类名随状态值切换
                $('#banner .btn li').removeClass('active').eq(index).addClass('active') ;   
            }	 // 移入清除定时器 //移出开始定时器
            $('#banner').hover(function(){   clearInterval(timer);},function(){   timer = setInterval(move,1000);});