
$(function(){
	var animate=false;
	$("body a label").mouseover(function(e){
			$(this).closest("a").find("span").animate({
				margin:"-3px",
				width:"286px",
				height:"142px"
			},100);
	})
	$("body a label").mouseout(function(e){
			$(this).closest("a").find("span").animate({
				margin:"0px",
				width:"280px",
				height:"136px"
			},100);
	})
	$("body a").click(function(e){
		e.preventDefault();
		if(animate)return;
		animate=true;
		$(".head img").fadeOut(100,function(){
			$(".back").fadeIn("slow")
		})
		var navLeft=$(".place").offset().left,
		navTop=$(".place").offset().top;
		var _this=this;
		var bgColor=$(this).find("span").css("background-color")
		var html='<div class="flaot-single" style="left:'+
		$(this).offset().left+'px;top:'+
		$(this).offset().top+'px;background-color:'+
		bgColor+'">'+$(this).html()+'</div>'
		$("#list a").removeClass("animate");
		
		$(".float-title").css("background-color",bgColor).html($(this).html())
		$(".list-title label").css("background-color",bgColor)
		$(".back").html($(this).text());
		$("body").append(html);
		$("#list").fadeOut(300);
		$(".bg").fadeIn(1000);
		$(".flaot-single").animate({
			width: "180px",
    		height: "64px",
    		left:navLeft+"px",
    		top:navTop+"px",
    		lineHeight:"64px"
		},{
			complete:function(){
				$(".float-title,.nav").show();
				$(".flaot-single").hide()
				$(".nav").animate({
					height:"482px"
				},{
					complete:function(){
						$(".list-cont").fadeIn("slow")
									animate=false;
					}
				})
			}
		})
		$(".flaot-single img")
		.css("position","absolute")
		.animate({
			    left: "20px",
			    top: "16px",
			    width: "30px",
			    margin:"0"
		})
		/*$(this).animate({zIndex: 360 }, {
		    step: function(now,fx) {
		        $(this).css('transform',"rotateY(" + now + "deg)");
		    },complete:function(){
	    		$(_this).css({"z-index":0,"transform":"rotateY(0deg)"});
	    		$(".cont_bg").animate({
	    			width:"100%",
	    			height:"100%",
	    			left:"0",
	    			top:0
	    		},{complete:function(){
	    			location.href=$(_this).attr("href");
	    		}})
			},
		    duration:'slow'
		},'linear')*/
		
	})
	$(".nav li").click(function(){
		$(".nav li").removeClass("on");
		$(this).addClass("on")
	})

	$(".back").click(function(){
		if(animate==true)return;
		console.log(1,animate)
		animate=true;
		var turn=getNumber(9)

		$(".bg").fadeOut(3000);
		$(".list-cont").fadeOut("slow",function(){
			$(".nav").animate({
					height:"64px"
				},{
					complete:function(){
						//$(".nav").fadeOut(100,function(){
							$(".float-title,.nav").hide();
							$(".back").fadeOut("slow",function(){
								$(".head img").fadeIn(100,function(){
									$("#list a").css({"opacity":0
										,"transform":"translate(0px,50px)"});
									$("#list").show();
									for(var i=0;i<turn.length;i++){
										(function(e){
											$("#list a").eq(turn[e]).animate({
												opacity:1
											},{step:function(n,f){
												$(this).css({"transform":"translate(0px,"+(50-50*n)+"px)"});
											},duration:560},'linear')
										})(i)
									}
									animate=false;
								})
							})
						//})
					}
				})
		})
	})


	$('.chart-list li').click(function(){
		window.open($(this).data("url"))
	});
});

function getNumber(number){
	var arr=[],ran=[],num=0;
	for(var i=0;i<number;i++){
		arr.push(i);
		ran.push(parseInt(Math.random()*number))
	}
	for(var q=0;q<number;q++){
		num=arr[ran[q]]
		arr.splice(ran[q],1);
		arr.push(num)
	}

	return arr
}