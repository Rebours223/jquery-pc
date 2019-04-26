$("#login").click(function(){
  var url="http://localhost:3100/login?";
  var uname=$("#uname").val();
  var upwd=$("#upwd").val();
  var reg_phone=/^1[34578]\d{9}$/;
  var reg_email= /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
  if(!uname){alert(`用户名不允许为空`);return;}
  if(!upwd){alert(`密码不允许为空`);return;}
  if(reg_phone.test(uname)==true ||reg_email.test(uname)==true ){
  url+="uname="+uname;
  url+="&upwd="+upwd;
  $.ajax({url:url,type:"get",dataType:"json"}).then(function(res){
    if(res.code==-1){
        alert(`用户名或密码错误,登录失败`);
        location.reload();
    }else{
        alert(`登录成功`)
    }
  })
}else{alert(`账号格式错误`);location.reload();}})