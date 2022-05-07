<script src="jquery.kwicks.min.js"
        type="text/javascript"></script>
<script type='text/javascript'>
    jq().ready(function () {
        jq('.kwicks').kwicks({
            maxSize: 800,    //最大的宽度;
            behavior: 'menu',
            duration: 600,   //动画运动的时间;
            spacing: 5      //每个面板的间隔;
        });
    });
</script>