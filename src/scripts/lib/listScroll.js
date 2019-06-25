;$.fn.listScroll=function(opt){
    var defaultOption={
        dir:"top",   //top|bottom
        speed:500,
        interval:1000,
        row:1     //每次滚动条数
    }
    var option=$.extend(defaultOption,opt);
    $(this).each(function(){
        var self=$(this),
            ulItem=$(this).html(),
            ulHeight=self.find("ul").height(),
            item=$(this).find("li"),
            h=item.height();
        self.html('<div style="position:absolute;left:0;top:0;width:100%;" class="scroll_wrap">'+ulItem+ulItem+'</div>');
        var sWrap=self.find(".scroll_wrap");
        if(option.dir=="bottom"){
            sWrap.css("top",-ulHeight+"px");
        }
        var timer=setInterval(function(){
            scrollEffect(sWrap,ulHeight,h*option.row,option.speed);
        },option.interval);
        self.on("mouseover",function(){
            clearInterval(timer);
        })
        self.on("mouseout",function(){
            timer=setInterval(function(){
                scrollEffect(sWrap,ulHeight,h*option.row,option.speed);
            },option.interval);
        })
    })
    function scrollEffect(target,ulHeight,scrollHeight,speed){
        var top=parseFloat(target.css("top"));


        if(option.dir=="top"){
            if(Math.abs(top)>=ulHeight){
                target.css("top","0");
                top=0;
            }
            target.animate({top:top-scrollHeight+"px"},speed)
        }else if(option.dir=="bottom"){
            if(top>=0){
                target.css("top",-ulHeight+"px");
                top=-ulHeight;
            }
            target.animate({top:top+scrollHeight+"px"},speed)
        }
    }
}

