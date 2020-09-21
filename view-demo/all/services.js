
function overflowhidden(data,rows){
    var $obj = $(data);
    var str = $obj.html();
    if(!str){
        return;
    }

    $obj.attr("title",str);
    var tempstr = str; //获取到所有文本
    var lineHeight = $obj.css("line-height"); //获取到line-height样式设置的值 必须要有
    if(!rows){
        var height = $obj.height();//获取高度
        $obj.height("auto");
        rows = Math.floor(parseInt(height,10)/parseInt(lineHeight,10));
    }

    var at = rows*parseInt(lineHeight,10);      //计算包含文本的div应该有的高度

    var len = tempstr.length;
    var i = 0;
    if($obj.height() <= at){             //如果所有文本在写入html后文本没有溢出，那不需要做溢出处理
    }
    else{
        //否则 一个一个字符添加写入 不断判断写入后是否溢出
        var temp = "";
        while($obj.height() > at){
            temp = $obj.html();
            $obj.html(temp.substr(0,temp.length-3)+"…");
        }
        $obj.height(at +"px");
    }
}
var yyal_max = $(".picScroll li").length;
for(var i=0;i<yyal_max;i++){
    var yyal_text = $(".picScroll li:eq("+i+") p").attr("title");
    $(".picScroll li:eq("+i+") p").html(""+yyal_text+"")
}
$(".sec_advantage .box .p1").each(function(x){
    $(this).css({'line-height':'20px','overflow':'hidden','height':'auto'});
    overflowhidden($(this),2);
})
$(".sec_func .box span").each(function(x){
    $(this).css({'line-height':'20px','overflow':'hidden','height':'auto'});
    overflowhidden($(this),4);
})
$(".picScroll .box p").each(function(x){
    $(this).css({'line-height':'20px','overflow':'hidden','height':'auto'});
    overflowhidden($(this),5);
})


if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    for(var i=0;i<yyal_max;i++){
        var yyal_text = $(".picScroll li:eq("+i+") p").attr("title");
        if(!!(yyal_text) && yyal_text.length>=64){
            $(".picScroll li:eq("+i+") p").html(""+yyal_text.substring(0,62)+"...")
        }

    }


    var contentDetail1 = $(".sec_advantage .box:eq(0) .p1").html();
    if(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/i.test(contentDetail1) && !!contentDetail1){
        var minlength1=contentDetail1.match(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/ig).length;
    }
    if(minlength1>=5 && minlength1<10){
        if(!!(contentDetail1) && contentDetail1.length>=35){
            $(".sec_advantage .box:eq(0) .p1").html(""+contentDetail1.substring(0,33)+"...")
        }
    }else if(minlength1>=10 && minlength1<15){
        if(!!(contentDetail1) && contentDetail1.length>=38){

            $(".sec_advantage .box:eq(0) .p1").html(""+contentDetail1.substring(0,36)+"...")
        }
    }else if(minlength1>=15 && minlength1<20){
        if(!!(contentDetail1) && contentDetail1.length>=39){

            $(".sec_advantage .box:eq(0) .p1").html(""+contentDetail1.substring(0,37)+"...")
        }
    }else if(minlength1>=20 && minlength1<25){
        if(!!(contentDetail1) && contentDetail1.length>=38){
            $(".sec_advantage .box:eq(0) .p1").html(""+contentDetail1.substring(0,36)+"...")
        }
    }else if (minlength1>=25){
        if(!!(contentDetail1) && contentDetail1.length>=39){
            $(".sec_advantage .box:eq(0) .p1").html(""+contentDetail1.substring(0,37)+"...")
        }
    }else if(!minlength1 || minlength1<5){
        if(!!(contentDetail1) && contentDetail1.length>=34){
            $(".sec_advantage .box:eq(0) .p1").html(""+contentDetail1.substring(0,32)+"...")
        }
    }



    var contentDetail2 = $(".sec_advantage .box:eq(1) .p1").html();
    if(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/i.test(contentDetail2) && !!contentDetail2){
        var minlength2=contentDetail2.match(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/ig).length;
    }
    if(minlength2>=5 && minlength2<10){
        if(!!(contentDetail2) && contentDetail2.length>=35){
            $(".sec_advantage .box:eq(1) .p1").html(""+contentDetail2.substring(0,33)+"...")
        }
    }else if(minlength2>=10 && minlength2<15){
        if(!!(contentDetail2) && contentDetail2.length>=36){
            $(".sec_advantage .box:eq(1) .p1").html(""+contentDetail2.substring(0,34)+"...")
        }
    }else if(minlength2>=15 && minlength2<20){
        if(!!(contentDetail2) && contentDetail2.length>=37){
            $(".sec_advantage .box:eq(1) .p1").html(""+contentDetail2.substring(0,35)+"...")
        }
    }else if(minlength2>=20 && minlength2<25){
        if(!!(contentDetail2) && contentDetail2.length>=38){
            $(".sec_advantage .box:eq(1) .p1").html(""+contentDetail2.substring(0,36)+"...")
        }
    }else if (minlength2>=25){
        if(!!(contentDetail2) && contentDetail2.length>=39){
            $(".sec_advantage .box:eq(1) .p1").html(""+contentDetail2.substring(0,37)+"...")
        }
    }else if(!minlength2 || minlength2<5){
        if(!!(contentDetail2) && contentDetail2.length>=34){
            $(".sec_advantage .box:eq(1) .p1").html(""+contentDetail2.substring(0,32)+"...")
        }
    }


    var contentDetail3 = $(".sec_advantage .box:eq(2) .p1").html();
    if(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/i.test(contentDetail3) && !!contentDetail3){
        var minlength3=contentDetail3.match(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/ig).length;
    }
    if(minlength3>=5 && minlength3<10){
        if(!!(contentDetail3) && contentDetail3.length>=35){
            $(".sec_advantage .box:eq(2) .p1").html(""+contentDetail3.substring(0,33)+"...")
        }
    }else if(minlength3>=10 && minlength3<15){
        if(!!(contentDetail3) && contentDetail3.length>=36){
            $(".sec_advantage .box:eq(2) .p1").html(""+contentDetail3.substring(0,34)+"...")
        }
    }else if(minlength3>=15 && minlength3<20){
        if(!!(contentDetail3) && contentDetail3.length>=37){
            $(".sec_advantage .box:eq(2) .p1").html(""+contentDetail3.substring(0,35)+"...")
        }
    }else if(minlength3>=20 && minlength3<25){
        if(!!(contentDetail3) && contentDetail3.length>=38){
            $(".sec_advantage .box:eq(2) .p1").html(""+contentDetail3.substring(0,36)+"...")
        }
    }else if (minlength3>=25){
        if(!!(contentDetail3) && contentDetail3.length>=39){
            $(".sec_advantage .box:eq(2) .p1").html(""+contentDetail3.substring(0,37)+"...")
        }
    }else if(!minlength3 || minlength3<5){
        if(!!(contentDetail3) && contentDetail3.length>=34){
            $(".sec_advantage .box:eq(2) .p1").html(""+contentDetail3.substring(0,32)+"...")
        }
    }


    var contentDetail4 = $(".sec_advantage .box:eq(3) .p1").html();
    if(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/i.test(contentDetail4) && !!contentDetail4){
        var minlength4=contentDetail4.match(/[a-z0-9<>/?~！.@#￥……&*（）——|{}【】‘；：”“'。，、？`~!@#$^&*()=|{}':;',[\]]/ig).length;
    }
    if(minlength4>=5 && minlength4<10){
        if(!!(contentDetail4) && contentDetail4.length>=35){
            $(".sec_advantage .box:eq(3) .p1").html(""+contentDetail4.substring(0,33)+"...")
        }
    }else if(minlength4>=10 && minlength4<15){
        if(!!(contentDetail4) && contentDetail4.length>=36){
            $(".sec_advantage .box:eq(3) .p1").html(""+contentDetail4.substring(0,34)+"...")
        }
    }else if(minlength4>=15 && minlength4<20){
        if(!!(contentDetail4) && contentDetail4.length>=37){
            $(".sec_advantage .box:eq(3) .p1").html(""+contentDetail4.substring(0,35)+"...")
        }
    }else if(minlength4>=20 && minlength4<25){
        if(!!(contentDetail4) && contentDetail4.length>=38){
            $(".sec_advantage .box:eq(3) .p1").html(""+contentDetail4.substring(0,36)+"...")
        }
    }else if (minlength4>=25){
        if(!!(contentDetail4) && contentDetail4.length>=39){
            $(".sec_advantage .box:eq(3) .p1").html(""+contentDetail4.substring(0,37)+"...")
        }
    }else if(!minlength4 || minlength4<5){
        if(!!(contentDetail4) && contentDetail4.length>=34){
            $(".sec_advantage .box:eq(3) .p1").html(""+contentDetail4.substring(0,32)+"...")
        }
    }

    var contentDetail5 = $(".sec_func .box:eq(0) span").html();
    if(!!(contentDetail5) && contentDetail5.length>=27){
        $(".sec_func .box:eq(0) span").html(""+contentDetail5.substring(0,26)+"...")
    }
    var contentDetail6 = $(".sec_func .box:eq(1) span").html();
    if(!!(contentDetail6) && contentDetail6.length>=27){
        $(".sec_func .box:eq(1) span").html(""+contentDetail6.substring(0,26)+"...")
    }
    var contentDetail7 = $(".sec_func .box:eq(2) span").html();
    if(!!(contentDetail7) && contentDetail7.length>=27){
        $(".sec_func .box:eq(2) span").html(""+contentDetail7.substring(0,26)+"...")
    }
    var contentDetail8 = $(".sec_func .box:eq(3) span").html();
    if(!!(contentDetail8) && contentDetail8.length>=27){
        $(".sec_func .box:eq(3) span").html(""+contentDetail8.substring(0,26)+"...")
    }
    var contentDetail9 = $(".sec_func .box:eq(4) span").html();
    if(!!(contentDetail9) && contentDetail9.length>=27){
        $(".sec_func .box:eq(4) span").html(""+contentDetail9.substring(0,26)+"...")
    }
    var contentDetail10 = $(".sec_func .box:eq(5) span").html();
    if(!!(contentDetail10) && contentDetail10.length>=27){
        $(".sec_func .box:eq(5) span").html(""+contentDetail10.substring(0,26)+"...")
    }
    var contentDetail11 = $(".sec_func .box:eq(6) span").html();
    if(!!(contentDetail11) && contentDetail11.length>=27){
        $(".sec_func .box:eq(6) span").html(""+contentDetail11.substring(0,26)+"...")
    }
    var contentDetail12 = $(".sec_func .box:eq(7) span").html();
    if(!!(contentDetail12) && contentDetail12.length>=27){
        $(".sec_func .box:eq(7) span").html(""+contentDetail12.substring(0,26)+"...")
    }
    var contentDetail13 = $(".sec_func .box:eq(8) span").html();
    if(!!(contentDetail13) && contentDetail13.length>=27){
        $(".sec_func .box:eq(8) span").html(""+contentDetail13.substring(0,26)+"...")
    }
    var contentDetail14 = $(".sec_func .box:eq(9) span").html();
    if(!!(contentDetail14) && contentDetail14.length>=27){
        $(".sec_func .box:eq(9) span").html(""+contentDetail14.substring(0,26)+"...")
    }
    var contentDetail15 = $(".sec_func .box:eq(10) span").html();
    if(!!(contentDetail15) && contentDetail15.length>=27){
        $(".sec_func .box:eq(10) span").html(""+contentDetail15.substring(0,26)+"...")
    }
    var contentDetail16 = $(".sec_func .box:eq(11) span").html();
    if(!!(contentDetail16) && contentDetail16.length>=27){
        $(".sec_func .box:eq(11) span").html(""+contentDetail16.substring(0,26)+"...")
    }
    var contentDetail17 = $(".sec_func .box:eq(12) span").html();
    if(!!(contentDetail17) && contentDetail17.length>=27){
        $(".sec_func .box:eq(12) span").html(""+contentDetail17.substring(0,26)+"...")
    }
    var contentDetail18 = $(".sec_func .box:eq(13) span").html();
    if(!!(contentDetail18) && contentDetail18.length>=27){
        $(".sec_func .box:eq(13) span").html(""+contentDetail18.substring(0,26)+"...")
    }
    var contentDetail19 = $(".sec_func .box:eq(14) span").html();
    if(!!(contentDetail19) && contentDetail19.length>=27){
        $(".sec_func .box:eq(14) span").html(""+contentDetail19.substring(0,26)+"...")
    }
}



if (!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    $(function(){
        //PC端数量小于等于四个时摁纽隐藏
        var len = $('.picScroll_2 .picList .box').length;
        //alert(len)
        if(len<=4){$('.picScroll_2 .hd').css('display','none');}
        if(len<=3){$('.sec_func .sec1200 .picScroll_2 .bd .picList').css('padding-left','150px');}
        if(len<=2){$('.sec_func .sec1200 .picScroll_2 .bd .picList').css('padding-left','300px');}
        if(len<=1){$('.sec_func .sec1200 .picScroll_2 .bd .picList').css('padding-left','450px');}
    });

    jQuery(".picScroll_2").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:4,pnLoop:false,trigger:"click"});
    $(function(){
        //PC端数量小于等于三个时摁纽隐藏
        var len2 = $('.picScroll .picList .box').length;
//	alert(len2)
        if(len2<=3){
            $('.picScroll .hd').css('display','none');
        }
        if(len2<=2){$('.sec_case .sec1200 .picScroll .bd .picList').css('padding-left','200px');}
        if(len2<=1){$('.sec_case .sec1200 .picScroll .bd .picList').css('padding-left','400px');}
    });
    jQuery(".picScroll").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:3,pnLoop:false,trigger:"click"});
}


$(".picScroll_2 .tempWrap").css("width","1200px")



var linbox = $(".sec_advantage .sec1200 div").length;
if(linbox==1){
    $(".sec_advantage .sec1200 div").removeClass("box");
    $(".sec_advantage .sec1200 div").addClass("box boxCenter");
}
if(!!( $(".sec_advantage .sec1200 div .p1:eq(0)"))){
    var linp1 = $(".sec_advantage .sec1200 div .p1:eq(0)").html();
    if(!linp1){
        $(".sec_advantage .sec1200 div h3:eq(0)").addClass("vertical");

    };
}
if(!!( $(".sec_advantage .sec1200 div .p1:eq(1)"))){
    var linp2 = $(".sec_advantage .sec1200 div .p1:eq(1)").html();
    if(!linp2){
        $(".sec_advantage .sec1200 div h3:eq(1)").addClass("vertical");

    };
}
if(!!( $(".sec_advantage .sec1200 div .p1:eq(2)"))){
    var linp3 = $(".sec_advantage .sec1200 div .p1:eq(2)").html();
    if(!linp3){
        $(".sec_advantage .sec1200 div h3:eq(2)").addClass("vertical");

    }
}
if(!!($(".sec_advantage .sec1200 div .p1:eq(3)"))){
    var linp4 = $(".sec_advantage .sec1200 div .p1:eq(3)").html();
    if(!linp4){
        $(".sec_advantage .sec1200 div h3:eq(3)").addClass("vertical");

    }
}
