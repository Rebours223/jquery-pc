   	//动态加载商品列表
    $(function(){
      	$.ajax({
			url:"http://localhost:3100/index",
			type:"get",
			dataType:"json",
			success:function(res){
                var product=res;
				console.log(product);
                var product1=product.splice(0,4);
                var product2=product.splice(0,4);
                var html="";
                var html1="";
                var html2="";
                for(var p1 of product1){
                    html+=`
                    <div class="prolist-item" >
            	    <ul>
                	    <li class="pic"><img src="${p1.pic}" alt="1"></li>
                	    <li class="prointr"><p><a href="http://127.0.0.1:5500/details.html?pid=${p1.pid}">${p1.details}</a></p></li>
                	    <li><h3>¥${p1.price.toFixed(2)}起</h3></li>
            	    </ul>
        	        </div>`;
                }
                var html1=`<div class="prolist-nav">
            	<span><a>线路</a></span>
            	<span><a>${p1.borderland}</a></span>
            	<span><a href="#">${p1.keyword}</a></span>
			</div>`+html;
            for(var p2 of product2){
                    html2+=`
                    <div class="prolist-item" >
            	    <ul>
                	    <li class="pic"><img src="${p2.pic}" alt="1"></li>
                	    <li class="prointr"><p><a href="http://127.0.0.1:5500/details.html?pid=${p2.pid}">${p2.details}</a></p></li>
                	    <li><h3>¥${p2.price.toFixed(2)}起</h3></li>
            	    </ul>
        	        </div>`;
                }
                var html3=`<div class="prolist-nav">
            	<span><a>线路</a></span>
            	<span><a>${p2.borderland}</a></span>
            	<span><a href="#">${p2.keyword}</a></span>
			</div>`+html2;
                var $divp=$("#pro");
                $divp.html(html1+html3);
            }
		})
	})