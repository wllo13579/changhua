var pic_url = '';
var a='';
$(function(){	  
	  var postdata={
	  'nType':'3'
	  };
      var req = {url: 'changhua/changhua/news/list',post:postdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {	  
		data.value.list.forEach(function(item) {
			get_pic(item.ngID,item.title,item.mdTime,item.summary);
		})	
				
      } else {
	  alert(data.message);
      }
    });
	
});
function get_pic(ngID,title,mdTime,summary){
	  var postdata={
	  'nType':'3'
	  };
      var req = {url: 'changhua/changhua/news/listAux/'+ngID,post:postdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {	
		a='';
		a+="<div class='item'><div class='item_cata'>"+summary+"</div><div class='item_content'><div class='item_pic'><img src='/images/"+ngID+"?path=";
		a+=data.value.list[0].dataURI;
		a+="&maxw=500'></div><div class='item_time'>"+mdTime+"</div><div class='item_title'>";
		a+=title;
		a+="</div></div></div>";
		document.getElementById('content').innerHTML+=a;
      } else {
		alert(data.message);
      }
    });
	
};