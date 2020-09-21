//判断是否为首页，后续处理
var thisURL = document.URL;
var thisPath = location.pathname.toLowerCase();
thisPath = thisPath.replace(/\/+/g,"/");
var tmpUPage = thisPath.split("/");
var thisUPage = tmpUPage[1];

//获取JSON
$.ajaxSettings.async=false;

var head_content = null;
$.getJSON('/head/5008537_1529_5065.json',function(data){
	  head_content = data.cData.content;
	  if(!!head_content){
	     //LOGO
		 var logo_do = '';
		 if(!!head_content.itLogo && head_content.itLogo.length>0){
		    logo_do += '<a href="/" class="logo"><img src="'+head_content.itLogo+'"/></a>';
		 }
		 //IPV6，只有首页显示，内页不显示
		 var ipv6_do = '';
		 if(!thisUPage || thisUPage.indexOf("index")==0){ 
			 if(!!head_content.IPv6 && head_content.IPv6.length>0){
				ipv6_do += '<img src="'+head_content.IPv6+'" class="symbol2" style="display:none;">';
			 }
		 }
		 //导航栏
		 var nav_do = '';
		 var m_nav_do = '';
		 if(!!head_content.navigation && head_content.navigation.length>0){
		     var nav_sj = head_content.navigation;
		     nav_do += '<ul class="nav">';
             m_nav_do += '<ul class="nav">';
			 for(var i=0;i<nav_sj.length;i++){
			    if(!!nav_sj[i].firstNavName && nav_sj[i].firstNavName.length>0){
					if(!!nav_sj[i].secNavs && nav_sj[i].secNavs.length>0){
					   var nav_secsj = nav_sj[i].secNavs;
					   var nav_secshow = '';
					   for(var j=0;j<nav_secsj.length;j++){
					      var nav_name = !!nav_secsj[j].secNavName && nav_secsj[j].secNavName.length>0 ? nav_secsj[j].secNavName : '';
						  if(!!nav_name){
						     nav_secshow += '<a href="'+(!!nav_secsj[j].secNavURL && nav_secsj[j].secNavURL.length>0 ? nav_secsj[j].secNavURL : "javascript:;")+'" style="background:'+(!!nav_secsj[j].secNavImg && nav_secsj[j].secNavImg.length>0 ? "#ffffff url("+nav_secsj[j].secNavImg+") no-repeat 10px 8px" : "#ffffff")+'">'+nav_name+'</a>';
						  }
					   }
					   nav_do += '<li class="sub"><span onclick="javascript:location.href=\''+nav_sj[i].firstNavURL+'\'">'+nav_sj[i].firstNavName+'</span><dl><dt></dt><dd>'+nav_secshow+'</dd></dl></li>';
					}
					else{
					   nav_do += '<li><a href="'+(!!nav_sj[i].firstNavURL && nav_sj[i].firstNavURL.length>0 ? nav_sj[i].firstNavURL : "javascript:;")+'">'+nav_sj[i].firstNavName+'</a></li>';
					}
					m_nav_do += '<li><a href="'+(!!nav_sj[i].firstNavURL && nav_sj[i].firstNavURL.length>0 ? nav_sj[i].firstNavURL : "javascript:;")+'">'+nav_sj[i].firstNavName+'</a></li>';
				}
			 }
             nav_do += '</ul>';	
             m_nav_do += '</ul>';				 
		 }
		 //搜索栏
		 var search_do = '';
		 search_do += '<div class="search_pc"><input type="text" class="txt"/><input type="button" class="btn" /></div>';
		 
		 //整理
		 $("#head").append('<div id="head_pc"><div class="head1200 clearfix">'+logo_do+ipv6_do+nav_do+search_do+'</div></div><div id="head_m" class="head_m clearfix">'+logo_do+ipv6_do+'<a href="Javascript:;" class="btn"><img src="./images/navbtn.png"/></a></div><div id="layer"><div id="layerCon"><a href="Javascript:;" class="shut"><img src="./images/shut.jpg"/></a><p class="search clearfix"><input type="text" value="搜索" class="txt"/></p>'+m_nav_do+'<dl class="ew"><dt><img src="" id="yd_ewm"/></dt><dd>微信公众号：中移信息技术</dd></dl></div></div>');
	  }
})

var footewm = null;
var foot_content_hd = null;
$.getJSON('/tail/5008553_1537_5073.json',function(data){
    foot_content_hd = data.cData.content;
	  if(!!foot_content_hd){
	     if(!!foot_content_hd.focusUs && foot_content_hd.focusUs.length>0){
		     var foot_nav_gz_hd = foot_content_hd.focusUs;
			 for(var i=0;i<foot_nav_gz_hd.length;i++){
			     footewm = !!foot_nav_gz_hd[i].QRCode && foot_nav_gz_hd[i].QRCode.length>0 ? foot_nav_gz_hd[i].QRCode : '';
			 }
			 if(!!$('#yd_ewm') && $('#yd_ewm').length>0){
				 if(!!footewm){
					 $('#yd_ewm').attr('src',footewm);
				 }
				 else{
					$('#yd_ewm').parent().parent('dl.ew').remove();
				 }
			 }
		 }
	  }
});

$(function(){
//PC头部下拉
var ifhv = false;
$('.head1200 .nav li.sub').hover(function(){
    if(!!$(this).find('span').hasClass('hover')){
	    ifhv = true;
	}
	else{
	    ifhv = false;
	    $(this).find('span').addClass('hover');
	}
	var dd = $(this).find('dd');
	$(this).find('dl').height(dd.height()+40);
	$(this).find('dl').stop(true).animate({top:'20px',opacity:1});
},function(){
    if(!ifhv){
		$(this).find('span').removeClass('hover');
	}
	$(this).find('dl').stop(true).animate({top:'50px',opacity:0},function(){
		$(this).height(0);
	});
	ifhv = false;
});
//移动头部弹层
$('#head_m .btn').click(function(){
	$('#layer').css({display:'block'});
	$('#layerCon').animate({right:'0px'},500)
	$('body').css({position:'fixed'});
});
$('#layer .shut').click(function(){
	$('#layerCon').animate({right:'-11.52rem'},500,function(){
		$('#layer').css({display:'none'});
		$('body').css({position:'static'});
	})
});
$('#layerCon').click(function(event){
	event.stopPropagation();
});
$('#layer').click(function(event){
	$('#layerCon').animate({right:'-11.52rem'},500,function(){
		$('#layer').css({display:'none'});
		$('body').css({position:'static'});
	});
	event.stopPropagation();
});
//鼠标移动到二级导航上效果
$('#head_pc ul.nav li.sub dd a').hover(function(){
    $(this).css('background-color','#e2eefc');
},function(){
    $(this).css('background-color','#ffffff');
});

menuHighlight();
// 处理菜单高亮
function menuHighlight(){
  
  if(thisURL.charAt(thisURL.length-1) == "/"){
    thisURL = thisURL.substring(0,thisURL.length-1);
  }
  
  var nav_lm = ['services','solution','news','aboutus','job'];
  $('#head_pc .nav li a').each(function(x){ 
      var dh_href = $(this).attr('href');
	  if(dh_href.charAt(dh_href.length-1) == '/'){
        dh_href = dh_href.substring(0,dh_href.length-1);
      }
	  if(!thisUPage || thisUPage.indexOf('index')==0){ 
        $('#head_pc .nav li a:eq(0)').addClass("cur");
		return false;
      }
	  else if(thisURL == dh_href){ 
	     if(!!$(this).parent().parent().parent('li').hasClass('sub')){
		     $(this).parent().parent().parent('li.sub').find('span').addClass('hover');
			 ifhv = true;
		 }
		 else{
			 $(this).addClass("cur");
		 }
		 return false;
	  }
	  else{ 
	     for(var i=0;i<nav_lm.length;i++){ 
		    if(thisUPage == nav_lm[i] && $(this).attr('href').indexOf(thisUPage)>=0){ 
			     if(!!$(this).parent().parent().parent('li').hasClass('sub')){ 
					 $('#head_pc .nav li').eq(i+1).find('span').addClass('hover');
					 ifhv = true;
				 }
				 else{    
					 $('#head_pc .nav li').eq(i+1).find('a').addClass("cur");
				 }
				 return false;
			}
		 }
	  }
  });
  
}
})

//浏览器过低提示
$(function(){
  var isOldBrowser = false;
  var ua = navigator.userAgent;
	var ie8 = $('meta[name=ie8]').attr('content');
	if (ie8 != 'true') {
	    // 判断userAgent中是否出现了旧版本标记
	    if (0 <= ua.indexOf("MSIE 6.") || 0 <= ua.indexOf("MSIE 7.") || 0 <= ua.indexOf("MSIE 8.")) {
	        isOldBrowser = true;
	    }
	    if (isOldBrowser) {
			$('body').prepend('<div class="ieTip">您的浏览器版本过低，如果页面显示不正常，建议将浏览器升级到最新版本<a href="javascript:;" id="ieAlert"><img src="./images/tipShut.jpg" class="tipShut"/></a></div>');
	    }
	}
	
	$('#ieAlert').click(function(){
      $('.ieTip').css('display','none');
	});
})