function overflowhidden(data,rows){
	var $obj = $(data);
	var str = $obj.html();
	if(!str){
		return;
	}
	$obj.attr("title",$.trim(str));
	var tempstr = str; //获取到所有文本
    var lineHeight = $obj.css("line-height"); //获取到line-height样式设置的值 必须要有
	if(!rows){
		var height = $obj.height();//获取高度
		rows = Math.floor(parseInt(height,10)/parseInt(lineHeight,10));
	}
	$obj.height("auto");
    var at = rows*parseInt(lineHeight,10);      //计算包含文本的div应该有的高度
    
    var len = tempstr.length;
    var i = 0;
    if($obj.height() <= at){             //如果所有文本在写入html后文本没有溢出，那不需要做溢出处理
    }
    else{                                   //否则 一个一个字符添加写入 不断判断写入后是否溢出
        var temp = "";
		while($obj.height() > at){
             temp = $obj.html();
             $obj.html(temp.substr(0,temp.length-3)+"…");
        }
		$obj.height(at +"px"); 
    }
}