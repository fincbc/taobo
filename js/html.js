!function (){                                       
	var user= $('.user-notice>ul>li');               //公告栏
	var notice= $('.notice-x>ul')
	user[0].style.borderColor= '#f40';
	notice[0].style.display= 'block';               //上面可以用，最后用就出错？？？
	user.hover(function (){
		// var a = user.index(this);
		user.css('border-color','#fff');	
		notice.hide().eq(user.index(this)).show();
		this.style.borderColor='#f40';
	})	
}();



!function (){                                     //生活区js
	var spa=$('.user-live>ul>li>span'),           
		oIi=$('.live-box>i'),                     //遍历添加背景定位
		pos ,i;
	for (i = 0; i < spa.length; i++) {
		pos='0 -'+ i*44 +'px';
		spa.eq(i).css('background-position',pos);
		if(i<4){
			var oLi=$('.user-live>ul>li');
			 
			oLi.eq(i).hover(function (){
				// this.style.borderColor='#f40';
				oLi.css({'border-color':'','z-index':''});
				$(this).css({'border-color':'#f40','border-bottom-color':'#fff','z-index':'11'});
				$('.live-box').css('display','none').eq(oLi.index(this)).css('display','block');
			})			
		}
	oIi.click(function (){
				oLi.css({'border-color':'','z-index':''});
				$('.live-box').css('display','none');
			});
	};

}();

!function (){                                                  //执行动画
    
    animat('#lunbo2');
    animat('.lun1'); 
}();

function animat(cls){
	var wid= parseInt($(cls).eq(0).css('width')),
		hei= parseInt($(cls).eq(0).css('height')),
		im= '<img src="img/lunbo/lubo.jpg" alt="">',                               
		htm='<div> <div></div><div></div><div></div><div></div><div></div> </div>';     //插入标签
		
		htm+= '<ul><li></li><li></li><li></li><li></li><li></li></ul>';
		htm+= '<i></i><i></i>';

	$(cls).eq(0).html(htm);
	$(cls).eq(0).children('div').addClass('lun-mian').css({'width':5*wid+'px','height':hei+'px'});
	$(cls+ ' .lun-mian').children().css({'float':'left','width':wid+'px','height':hei+'px'}).html(im);
	$(cls).eq(0).children('i').addClass('lun-cg');
	$(cls+' .lun-cg').eq(0).addClass('fa fa-angle-left fa-2x').css({'left':'0'}).next().css({'right':'0'}).addClass('fa fa-angle-right fa-2x');
	$(cls).eq(0).children('ul').addClass('lb').css({'left':wid/2+'p'});
	$(cls+' .lb').children('li').addClass('lbot') ;
	$(cls+' img').css({'width': wid+ 'px','height': hei+ 'px'});

	var cur= 0,                                                 //初始化值与设置    
		lbot= $(cls+' .lbot'),
		lunCg= $(cls+' .lun-cg'),
		timer; 
		lbot.eq(cur).addClass('bgh');

	lbot.click(function (){                          //一列按钮点击事件
		lbot.eq(cur).removeClass('bgh');
		cur= lbot.index(this);
		change(cur);
	});

	lunCg.click(function (){                        //左右按钮点击事件
		lbot.eq(cur).removeClass('bgh');
		if(lunCg.index(this)===0){
			 cur= cur===0 ? 4 : cur-1 ;
		}else{
			cur = cur===4 ? 0 : cur+1 ;
		}
		change(cur);
	})	
	
	function change(cur){                                         //变动执行函数
		lbot.eq(cur).addClass('bgh');
		$(cls+' .lun-mian').animate({left:-cur*wid+ 'px'});
	}

	function anim(){                                              //自动运行动画
		timer= setInterval(function (){
			lbot.eq(cur).removeClass('bgh');
			if(++cur >4) cur=0;	
			change(cur);
		},3000)
	}	

	$(cls).hover(function (){                                   //鼠标移入移出事件
		clearInterval(timer);
		lunCg.css('display','block')
	},
	function (){
		anim();
		lunCg.css('display','none')
	})	
}










































