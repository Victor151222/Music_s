(function(){
    //获取媒体信息
    video = document.getElementById("my_dream");
    //默认不滚动
    $(".roll").trigger("onmouseover");
    //点击开始后，图片，文字均动起来
    $("#startbt").click(function(){
        var o = $(this);
        if (o.hasClass("start")) {
            $(".memory_img").addClass("rotate").removeClass("paused");
            video.play();
            o.removeClass("start").html("Stop");
            $(".fence").find(".fence_all").removeClass("paused");
            $(".roll").trigger("onmouseout");
            setInterval(function(){
                check_video();
            },1000);
        }else{
            $(".memory_img").addClass("paused");
            video.pause();
            $(".fence").find(".fence_all").addClass("paused");
            o.addClass("start").html("Start");
            $(".roll").trigger("onmouseover");
            clearInterval(check_video);
        };
    });
    //音频时长
    function check_video(){
        //获取音频播放时长
        var t_time = video.duration;
        //当前时间
        var n_time = video.currentTime,
            m = Math.floor((t_time - n_time) / 60),
            s = Math.round((t_time - n_time) - (m * 60));
        m = time(m);
        s = time(s);
        r = m + 'm' + s + 's';
        $("#remain_time").html(r);
        //更新状态条
        var process = Math.floor(n_time) + 'px';
        $(".pro_bar").find(".bar_font").css("width",process);
        //当前播放状态
        var isend = video.ended;
        if (isend) {
            $(".memory_img").addClass("paused");
            video.pause();
            $("#startbt").addClass("start").html("Start");
            $(".roll").trigger("onmouseover");
        }
    }
    //使用input来控制音量
    $("#range").change(function(){
        var o = $(this),
        cur_vol = document.getElementById("my_dream");
        cur_vol.volume = o.val() * 0.01;
        o.next().html(o.val());
    });
    function time(t){
        return t = (t < 10 ? '0' + t : t);
    }
}())