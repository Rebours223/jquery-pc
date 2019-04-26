//动态加载商品详情页
    $(function(){
        var pid=location.search.slice(1).split("=")[1];
        $.ajax( {
            url:"http://localhost:3100/details?"+pid,
            type:"get",
            data:{pid},
            dataType:"json",
            success:function(result){                                console.log(result);
                var url=result.pic[0].url;
                var borderland=result.product[0].borderland;
                var fname=result.product[0].fname;
                var title=result.product[0].title;
                var price=result.product[0].price;
                var period=result.product[0].period;
                var suggestion=result.product[0].suggestion;
                var pdi=result.product[0].pid;
                var details=result.product[0].details;
                $(".detail-pic").attr("src",url);
                $(".breadcrumb li:nth-child(2)>a").text(borderland)
                $(".breadcrumb li:nth-child(3)").text(fname)
                $(".detail-list h3:first-child").text(title)
                $(".pid").text(`商品编号:`+pid)
                $(".col-6 h3:first-child").text(`优惠价:`+price+`起`);
                $(".detail_ul li:nth-child(4) span").text(`旅游天数:`+period)
                $(".detail_ul li:nth-child(5) span").text(`预定建议:`+suggestion)
                $(".plan li p").text(details)
            }
        })
    })
//商品数量按钮
$(".add").click(function(){
    var num=$("#num").val();
    num++;
    $("#num").val(num); 
})
$(".der").click(function(){
    var num=$("#num").val();
    if(num>1){
    num--;
    $("#num").val(num);
    console.log(num)
    }
})
//计算总价
$(".cal").click(function(){
    var num=$("#num").val();
    var price=$("#sel1").val();
    var pay=(num*price).toFixed(2);
    $("#pay").text("¥ "+pay);
})
