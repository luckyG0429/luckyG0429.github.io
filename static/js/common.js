(function () {
    'use strict'
    //添加导航栏目
    const _topHtml = ` <header class="top"><div class="toplist">
     <a href="../list.html">文字列表</a>
     <a href="#">小站地图</a>
     <a href="#">demo|小工具</a>
     <a href="#">其他</a>
     </div></header>`;
    //添加底部导航栏目
    const _fixedhtml = `<aside><ol>
         <li><a href="#why">为什么突然想起了要做这件事？</a></li>
         <li><a href="#how">该从哪里开始入手？</a></li>
         <li><a href="#done">最后的选择</a></li></ol></aside>`;
    $("#cont").before(_topHtml)
    $(document.body).append(_fixedhtml)


//    类目分类
    function categoryList(n=0) {
        const _list = ['css','html', 'Javascript','移动端', '单元测试' ]
        return _list[]
    }
})()