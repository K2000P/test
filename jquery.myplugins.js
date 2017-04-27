/**
 * @author pammi
 */
(function($){
/*$.fn.spotlight=function(hue){
	var hue=hue||"yellow";
					$(this).css("background-color",hue);
					return this;
				}



$.fn.extOpen=function(){
var myURL=location.protocol+'//'+location.hostname;
$('a[href^="http://"]').not('[href^="'+myURL+'"]').attr('target','_blank');
}*/
$.fn.chooseColor=function(options){
	var defs={
		bg:"blue",
		fg:"white" };
	var opts=$.extend(defs,options);
	$(this).children().each(function(index){
		if(index%2===0){
			$(this).css({"background-color":opts.bg,"color":opts.fg});
		}
	});
}
/*$.fn.alternateColor=function(hue){
	var hue=hue||"orange";
	$(this).children().each(function(index){
		if(index%2===0){
			$(this).css("background-color",hue);
		}
	});
	return this;
}*/
$.fn.captionedImage1=function(options){
	var opts=$.extend({
		bg:'grey',
		fg:'white'		
	},options);
	$(this).each(function(i,el){
					if($(el).parent(".captioned-img").length===0){
						$(el).wrap('<div class="captioned-img"></div>');
						$(el).after('<div class="caption">'+$(el).attr('title')+'</div>');
						}					
					});
					$(".caption").css("background-color",opts.bg);
					$(".caption").css("color",opts.fg);
					
					
}

$.fn.captionedImage=function(options){
	var opts=$.extend({
		wrapperTag:'div',
		wrapperClass:'captioned-img',
		captionTag:'div',
		captionClass:'caption'
		/*bg:'grey',
		fg:'white',
		border:'none'*/		
		
	},options);
	
					$(this).each(function(i,el){
						
					if($(el).parent('.'+opts.wrapperClass).length===0){
						$(el).wrap('<'+opts.wrapperTag+' class="'+opts.wrapperClass+'"></'+opts.wrapperTag+'>');
						$(el).after('<'+opts.captionTag+' class="'+opts.captionClass+'">'+$(el).attr('title')+'</'+opts.captionTag+'>');
						/*opts.wrapperClass.css({"background-color":opts.bg,
						"color":opts.fg,
						"border":opts.border
					});*/
								
					}				
		
				});
				return this;
				

}

/* this plugin is used to place the element, exactly in center.  For this to work, set the position:absolute in css for the element */
$.fn.centerMe=function(){
		var w=$(this).width();		
			var h=$(this).height();
			var Ww=$(window).width();
			var Wh=$(window).height();
			$(this).css('top',(Wh/2)-(h/2)).css('left',(Ww/2)-(w/2));
			
}

//This plugin centers the element inside its parent element.  For options, we send the width and height of the parent elemnt like this -- //$("#play").centerinParent({'width':parentWidth,'height':parentHeight});

$.fn.centerinParent=function(options){
	var opts=$.extend({
		width:'700',
		height:'700',		
	},options);
	
			var w=$(this).width();		
			var h=$(this).height();
			$(this).css('top',(opts.height/2)-(h/2)+'px').css('left',(opts.width/2)-(w/2)+'px');
			
}
/* this plugin is used to equalize the height of all the children divs in a parent div.  for this plugin to work, you need to call it , 
 $("parentDiv div").heightEqualizer();  in your script.
 */
$.fn.heightEqualizer=function(){
				
				var tallest=0;
				var i=0;
				var ht=0
				$(this).each(function(){
					ht=$(this).outerHeight();
					alert(ht);
					if(ht>tallest){
						tallest=ht;				
					}
					});
				$(this).css("min-height",tallest);
				$(this).each(function(){
				alert($(this).height());
				});

}
// slide show plugin, with no user defined options
$.fn.slideShow=function(){
	
var i=0;
var image;
var imgCache=[];
$(this).children("img").each(function(){
				image=new Image();
				image.src=$(this).attr('src');
				image.title=$(this).attr('alt');
				imgCache[i]=image;
				i++;				
			});
			$("#slider img").attr('src',imgCache[0].src);			
			var count=0;
			setInterval(function(){
			if(count==imgCache.length){
			count=0;
			}
			$("#slider  img").attr('src',imgCache[count].src);
			$("#desc").text(imgCache[count].title);
			
			$("#desc").slideDown(1000).delay(3000);
			$("#desc").slideUp(1000);
			
			
			count++;
			},5000);

			
}
// slide show plugin, with user defined options for width, height and duration
$.fn.slideShowOptimised=function(options){
	var opts=$.extend({
		width:'600',
		height:'500',
		duration:'500'		
	},options);
var i=0;
var image;
var imgCache=[];
$(this).children("img").each(function(){
				image=new Image();
				image.src=$(this).attr('src');
				image.title=$(this).attr('alt');
				imgCache[i]=image;
				i++;				
			});
			var st=$('<div id="slider" style="width:1000px;height=800px;display:inline-block;"><img width="'+opts.width+'" height="'+opts.height+'" ></div>');
			
			$(this).after(st);
			$("#slider img").attr('src',imgCache[0].src);	
			
			$("#slider img").after('<div id="desc" style="width:1000px;height:100px;text-align:center;font:2em bold serif;position:absolute;display:none;margin:0 auto;"></div>');
			var count=0;
			setInterval(function(){
			if(count==imgCache.length){
			count=0;
			}
			$("#slider  img").attr('src',imgCache[count].src);
			$("#desc").text(imgCache[count].title);
			
		$("#desc").slideDown(1000).delay(3000);
			$("#desc").slideUp(1000);	
			
			count++;
			},opts.duration);

			
}
// lightbox plugin with no user defined customization
$.fn.lbox=function(){
$("#wrapper").append('<div id="overlay"></div>');
	$("#overlay").width($(window).width());
	$("#overlay").height($(window).height());
	$("#overlay").css({"display":"none",
		"background-color":"black","opacity": .9,"z-index": 10
	});
	$("#wrapper").append('<div id="lightbox"></div>');
	$("#lightbox").css({"width":"1200px","height":"900px","background-color":"black","margin":0,"display":"none","float":"right","position":"fixed","z-index":110,"top":"25px","left":"250px"
	});
	$("#lightbox").append("<img>");
	$("#lightbox").append('<div id="close">X</div>');
	$("#lightbox").append('<div id="title"></div>');
	$("#lightbox img").css({
			"width":"1000px","height":"800px","margin":"10px 100px","z-index":110
	});
		$("#close").css({
			"position": "absolute","top":0,"right":0,"color":"silver","width":"30px","height":"30px","padding":"5px","font":"2em bold Courier","z-index":110
		});
		$("#title").css({
			"background-color":"#a9d8d8","font":"2.4em serif","position":"absolute","display":"none","width":"98%","height":"100%","text-align":"center","word-spacing":"17px","letter-spacing":"2px","padding":"10px","opacity": .7
		});
			var i=0;var imageURL;var title;
		
					$("#imgList img").on("click",function(){
						title=$(this).attr('alt');
						$("#overlay").fadeIn(500);
					$(this).css("border","2px solid blue");
					$("#title").text(title);
					$("#title").slideDown(1000);
					
					imageURL=$(this).attr('src');
					$("#lightbox img").attr('src',imageURL);
					$("#lightbox").slideDown(1000);
					
										
					});
					$("#close").click(function(){
							$("#lightbox").fadeOut(1000);	
							$("#overlay").fadeOut(1000);
					});
					
					
	
}
$.fn.lboxOptions=function(options){
		var opts=$.extend({
		w:1000,
		h:700,
		bgcolor:'black',
		effect:'slide',
		duration:2000	
	},options);
	$("#wrapper").append('<div id="overlay"></div>');
	$("#overlay").width($(window).width());
	$("#overlay").height($(window).height());
	$("#overlay").css({"display":"none",
		"background-color":"black","opacity": .9,"z-index": 10
	});
	$("#wrapper").append('<div id="lightbox"></div>');
	
	$("#lightbox").css({"width":opts.w+'px',"height":opts.h+'px',"background-color":opts.bgcolor,"margin":0,"display":"none","float":"right","position":"fixed","z-index":110,"top":"25px","left":"250px"
	});
	$("#lightbox").append("<img>");
	$("#lightbox").append('<div id="close">X</div>');
	$("#lightbox").append('<div id="title"></div>');	
	$("#lightbox img").css({
			'width':opts.w+'px','height':opts.h+'px','z-index':'110','margin':0
	});
		$("#close").css({
			"position": "absolute","top":0,"right":0,"color":"silver","width":"30px","height":"30px","padding":"5px","font":"2em bold Courier","z-index":110,"background-color":"#99999e"
		});
		$("#title").css({
			"background-color":"#a9d8d8","font":"2.4em serif","position":"absolute","display":"none","width":"98%","height":"5%","text-align":"center","word-spacing":"17px","letter-spacing":"2px","padding":"10px","opacity": .7
		});
			var i=0;var imageURL;var title;
			
		
					$("#imgList img").on("click",function(){
						title=$(this).attr('alt');
						
						$("#overlay").fadeIn(1000);
					$(this).css("border","2px solid blue");
					$("#title").text(title);
					if(opts.effect.trim()=='fade'){
					$("#title").fadeIn(opts.duration);
					}else{
						$("#title").slideDown(opts.duration);
					}
					
					imageURL=$(this).attr('src');
					$("#lightbox img").attr('src',imageURL);
					if(opts.effect.trim()=='fade'){
					$("#lightbox").fadeIn(opts.duration);
					}else{
						$("#lightbox").slideDown(opts.duration);
					}
					
										
					});
					$("#close").click(function(){
						if(opts.effect=='fade'){
							$("#lightbox").fadeOut(opts.duration);	
							$("#overlay").fadeOut(opts.duration);
						}else{
							$("#lightbox").slideUp(opts.duration);	
							$("#overlay").slideUp(opts.duration);
							
						}
					});
					


}

$.fn.lboxOptimised=function(options){
	var opts=$.extend({
		w:1000,
		h:700,
		bgcolor:'black',
		effect:'slide',
		duration:2000	
	},options);
	alert("From plugin "+opts.w+" : "+opts.h+" : "+opts.bgcolor+" : "+opts.effect+" : "+opts.duration);
	function init(){
	$("#wrapper").append('<div id="overlay"></div>');
	$("#overlay").width($(window).width());
	$("#overlay").height($(window).height());
	$("#overlay").css({"display":"none",
		"background-color":"black","opacity": .9,"z-index": 10
	});
	$("#wrapper").append('<div id="lightbox"></div>');
	
	$("#lightbox").css({"width":opts.w+'px',"height":opts.h+'px',"background-color":opts.bgcolor,"margin":0,"display":"none","float":"right","position":"fixed","z-index":110,"top":"25px","left":"250px"
	});
	$("#lightbox").append("<img>");
	$("#lightbox").append('<div id="close">X</div>');
	$("#lightbox").append('<div id="title"></div>');	
	$("#lightbox img").css({
			'width':opts.w+'px','height':opts.h+'px','z-index':'110','margin':'0px 0px'
	});
		$("#close").css({
			"position": "absolute","top":0,"right":0,"color":"silver","width":"30px","height":"30px","padding":"5px","font":"2em bold Courier","z-index":110
		});
		$("#title").css({
			"background-color":"#a9d8d8","font":"2.4em serif","position":"absolute","display":"none","width":"98%","height":"5%","text-align":"center","word-spacing":"17px","letter-spacing":"2px","padding":"10px","opacity": .7
		});
	}
	init();
			var i=0;var imageURL;var title;
			
		
					$("#imgList img").on("click",function(){
						title=$(this).attr('alt');
						
						$("#overlay").fadeIn(1000);
					$(this).css("border","2px solid blue");
					$("#title").text(title);
					if(opts.effect.trim()==='fade'){
					$("#title").fadeIn(parseInt(opts.duration));
					}else{
						$("#title").slideDown(parseInt(opts.duration));
					}
					
					imageURL=$(this).attr('src');
					$("#lightbox img").attr('src',imageURL);
					if(opts.effect.trim()==='fade'){
					$("#lightbox").fadeIn(parseInt(opts.duration));
					}else{
						$("#lightbox").slideDown(parseInt(opts.duration));
					}
					
										
					});
					$("#close").click(function(){
						if(opts.effect=='fade'){
							$("#lightbox").fadeOut(opts.duration);	
							$("#overlay").fadeOut(opts.duration);
						}else{
							$("#lightbox").slideUp(opts.duration);	
							$("#overlay").slideUp(opts.duration);
							
						}
					});
					$("#width,#height,#bgcolor,#duration,#effect").on("change",function(){
						wImg=parseInt($("#width").val());
						hImg=parseInt($("#height").val());
						dImg=parseInt($("#duration").val());
						eImg=$("#effect").val();
						bgImg=$("#bgcolor").val();
				
				opts.w=wImg;opts.h=hImg;opts.bgcolor=bgImg;opts.effect=eImg;opts.duration=dImg;
				$("#lightbox").css({"width":opts.w+'px',"height":opts.h+'px',"background-color":opts.bgcolor});
				$("#lightbox img").css({"width":opts.w+'px',"height":opts.h+'px'});
			});
					
					
	
}
$.fn.lboxEffects=function(options){
		var opts=$.extend({
		effect:'slide',
		duration:2000	
	},options);
	function init(){
	$("#wrapper").append('<div id="overlay"></div>');
	$("#overlay").width($(window).width());
	$("#overlay").height($(window).height());
	$("#overlay").css({"display":"none",
		"background-color":"black","opacity": .9,"z-index": 10
	});
	$("#wrapper").append('<div id="lightbox"></div>');
	
	$("#lightbox").css({"width":'900px',"height":'700px',"background-color":'grey',"margin":0,"display":"none","float":"right","position":"fixed","z-index":110,"top":"25px","left":"250px"
	});
	$("#lightbox").append("<img>");
	$("#lightbox").append('<div id="close">X</div>');
	$("#lightbox").append('<div id="title"></div>');	
	$("#lightbox img").css({
			'width':'900px','height':'700px','z-index':'110','margin':0
	});
		$("#close").css({
			"position": "absolute","top":0,"right":0,"color":"silver","width":"30px","height":"30px","padding":"5px","font":"2em bold Courier","z-index":110,"background-color":"#99999e"
		});
		$("#title").css({
			"background-color":"#a9d8d8","font":"2.4em serif","position":"absolute","display":"none","width":"98%","height":"5%","text-align":"center","word-spacing":"17px","letter-spacing":"2px","padding":"10px","opacity": .7
		});
	}
	init();
			var i=0;var imageURL;var title;
			
		
					$("#imgList img").on("click",function(){
						title=$(this).attr('alt');
						
						$("#overlay").fadeIn(1000);
					$(this).css("border","2px solid blue");
					$("#title").text(title);
					if(opts.effect=='fade'){
					$("#title").fadeIn(opts.duration);
					}else{
						$("#title").slideDown(opts.duration);
					}
					
					imageURL=$(this).attr('src');
					$("#lightbox img").attr('src',imageURL);
					if(opts.effect=='fade'){
					$("#lightbox").fadeIn(opts.duration);
					}else{
						$("#lightbox").slideDown(opts.duration);
					}
					
										
					});
					$("#close").click(function(){
						if(opts.effect=='fade'){
							$("#lightbox").fadeOut(opts.duration);	
							$("#overlay").fadeOut(opts.duration);
						}else{
							$("#lightbox").slideUp(opts.duration);	
							$("#overlay").slideUp(opts.duration);
							
						}
					});
					$("#imgEffect,#imgDuration").on("change",function(){
					eImg=$("#imgEffect").val();
					dImg=parseInt($("#imgDuration").val());
					opts.effect=eImg;
					opts.duration=dImg;		
					
				});
					


}
$.fn.maxCharacters=function(options){
	var opts=$.extend({
		maxlength:'2000',			
	},options);
	alert(opts.maxlength);
				var textlength,charleft;
				$("#text").attr('maxlength',opts.maxlength);
				$("#text").after('<div id="feedback"> Characters remaining :'+opts.maxlength+'</div>');
				$("#text").keyup(function(){
					 textlength=$(this).val().length;
					 charleft=opts.maxlength-textlength;
					 $("#feedback").text(" Characters remaining : "+charleft);
									
				});
}
$.fn.hoverInfo=function(options){
	var opts=$.extend({'width':'100px','height':'25px','bgcolor':'pink','duration':'200'
	},options);
	var title=$(this).attr('title');
	//alert(opts.width+" : "+opts.height+" : "+opts.bgcolor+" : "+opts.duration);
	$(this).after('<div id="tip"></div>');
	$("#tip").text(title);
	$("#tip").css({ "width":opts.width,"height":opts.height,"border":"1px thin silver","display":"none","position":"absolute","background-color":opts.bgcolor});
	$(this).mouseover(function(e){
		$(this).attr('title',"");
		$("#tip").css({'top' :e.clientY+10,'left' :e.clientX+10});					
		$("#tip").show(opts.duration);
		
	}).mouseout(function(e){
		$("#tip").hide(100);
		$(this).attr('title',title);
	});		
		
	}
$.fn.cacheVar=function(){
	$('*[id]').each(function(){				
				
					console.log('var $'+$(this).attr('id')+';');
				return	('var $'+$(this).attr('id')+';');
					
				});
}
$.fn.overlay=function(){
	$(this).append('<div id="cover" style="background-color:black;position:absolute;top:0;left:0;z-index:100;opacity:.5;display:block;"></div>');
	$("#cover").width($(window).width());
	
	$("#cover").height($(window).height());
	
	$("#cover").append('<div id="overlay" style="opacity:.9;z-index:10000;background-color:grey;position:relative"><button id="closeOverlay" style="position:absolute;width:30px;height:30px;top:0;color:black;right:0;background-color:grey;font:1.2em serif;">X</button></div>');
	
	var w=$(this).width();
	var h=$(this).height();
	$("#overlay").width(w/2);
	$("#overlay").height(h/2);
	var ow=$("#overlay").width();
	var oh=$("#overlay").height();
	var lt=(w/2)-(ow/2);
	var tp=(h/2)-(oh/2);
	$("#overlay").css('top',tp+'px').css('left',lt+'px');
	$("#closeOverlay").click(function(){
				
		$(this).parent().hide(1000).remove();
		$("#cover").remove();
		return ($("#disp").prop('disabled',false));
		
		
	});
	}
	$.fn.overlayNew=function(){
	$(this).before('<div id="cover" style="background-color:black;position:absolute;top:0;left:0;z-index:100;opacity:.5;display:block;"></div>');
	$("#cover").width($(window).width());
	$("#cover").height($(window).height());
	}

}(jQuery));
