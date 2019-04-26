$(function(){
  //1. 发送ajax请求，请求header.html中的<header>片段
  $.ajax({
    url:"footer.html",
    type:"get",
    success:function(footer){
      //2. 将片段替换到当前所在页面的<header>元素上
      $(footer).replaceAll("footer")
//用片段创建新<header>     查找旧的<header>
      //3. 动态创建<link href="css/header.css",自动添加到当前页面的<head>元素内
      $(`<link rel="stylesheet" href="css/footer.css">`)
      .appendTo("head")
    }
  })
})