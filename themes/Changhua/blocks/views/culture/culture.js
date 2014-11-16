var pic_url = '';
var a='';
$(function(){	  
	  var postdata={
	  'nType':'3'
	  };
      var req = {url: 'changhua/changhua/culture/list',post:postdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {	  
		data.value.list.forEach(function(item) {
			get_pic(item.ngID,item.title);
		})	
				
      } else {
	  alert(data.message);
      }
    });
	
});
function get_pic(ngID,title){
	  var postdata={
	  'nType':'3'
	  };
      var req = {url: 'changhua/changhua/culture/listAux/'+ngID,post:postdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {	
		a='';
		a+="<div class='item'><div class='item_pic'><img src='/images/"+ngID+"?path=";
		a+=data.value.list[0].dataURI;
		a+="&maxw=145'></div><div class='item_title'>";
		a+=title;
		a+="</div></div>";
		document.getElementById('content').innerHTML+=a;
      } else {
		alert(data.message);
      }
    });
	
};