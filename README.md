# 鼠标按下按钮特效



```css
#startbt,#stopbt {
    -moz-box-shadow:inset 0px 1px 0px 0px #efdcfb;
    -webkit-box-shadow:inset 0px 1px 0px 0px #efdcfb;
    box-shadow:inset 0px 1px 0px 0px #efdcfb;
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dfbdfa), color-stop(1, #bc80ea));
    background:-moz-linear-gradient(top, #dfbdfa 5%, #bc80ea 100%);
    background:-webkit-linear-gradient(top, #dfbdfa 5%, #bc80ea 100%);
    background:-o-linear-gradient(top, #dfbdfa 5%, #bc80ea 100%);
    background:-ms-linear-gradient(top, #dfbdfa 5%, #bc80ea 100%);
    background:linear-gradient(to bottom, #dfbdfa 5%, #bc80ea 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfbdfa', endColorstr='#bc80ea',GradientType=0);
    background-color:#dfbdfa;
    -moz-border-radius:6px;
    -webkit-border-radius:6px;
    border-radius:6px;
    border:1px solid #c584f3;
    display:inline-block;
    cursor:pointer;
    color:#fff;
    width: 84px;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 0;
    text-decoration:none;
    text-shadow:0px 1px 0px #9752cc;
}
#startbt:hover,#stopbt:hover {
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #bc80ea), color-stop(1, #dfbdfa));
    background:-moz-linear-gradient(top, #bc80ea 5%, #dfbdfa 100%);
    background:-webkit-linear-gradient(top, #bc80ea 5%, #dfbdfa 100%);
    background:-o-linear-gradient(top, #bc80ea 5%, #dfbdfa 100%);
    background:-ms-linear-gradient(top, #bc80ea 5%, #dfbdfa 100%);
    background:linear-gradient(to bottom, #bc80ea 5%, #dfbdfa 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bc80ea', endColorstr='#dfbdfa',GradientType=0);
    background-color:#bc80ea;
}
#startbt:active,#stopbt:active {
    /*实现鼠标按下功能*/
    position:relative;
    top:1px;
}
```

# 画唱片中心轴

```css
.memory_img > div{
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
}
.bor_circle{
    width: 24px;
    height: 24px;
    border: 1px #fff solid;
    /*此处因为border加了1像素所以下面的margin-top也要相对宽度的一半加一个像素*/
    margin-top: -13px;
    margin-left: -13px;
}
.in_circle{
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.95);
    margin-top: -9px;
    margin-left: -9px;
}
```

# 倒计时中个位数的处理：09、08、07、06、05.....

```js
function time(t){
    return t = (t < 10 ? '0' + t : t);
}
```

*****

转载自前端网

http://www.qdfuns.com/notes/28261/51b87cb85bb8c5d05526c481d3233df0:storey-6.html





