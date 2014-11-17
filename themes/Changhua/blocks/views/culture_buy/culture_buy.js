
var pic_url = '';
var a='';

$(function(){	
		var query = window.location.search.substring(1);
		var pair = query.split("=");
		var ngID = pair[1]; 
	  var postdata={
	  'pic':'1'
	  };
      var req = {url: 'changhua/changhua/culture/view/'+ngID,post:postdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {
		a+="<div id='title'>"+data.value.title+"</div>";
		a+="<div class='item'><div class='item_pic'><img src='/images/"+ngID+"?path="+data.value.picList[0].dataURI+"&maxw=280'></div>";
		a+="<div class='item_content'>"+data.value.body+"</div></div>";
		a+="<div class='item_back'><a href='culture#page_top'><img src='../../Changhua/prev.png'></a></div>";
		a+="<div class='item_buy'><img src='../../Changhua/yahoo_s.png'><div class='click'>點 我 購 買</div></div>";
		document.getElementById('content').innerHTML+=a;
				
      } else {
	  alert(data.message);
      }
    });
	
});
