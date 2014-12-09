check = function(){
	var blog = document.getElementById('blog_name').value;
	var name = document.getElementById('url_name').value;
	var url = document.getElementById('url_url').value;
	url="<a href='"+url+"' target='_blank'>"+name+"</a>";
	save(name,url);	
};

function save(blog,url) {
	var	pdata={
	  'title':blog,
	  'summary':url,
	  'isPublic':'1'
	  },
      req = {url: 'changhua/changhua/fun/create',post:pdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {
        alert('新增成功!');
		window.location.reload();
      } 
	  else {
        alert( data.message );
      }
    });
};

update = function(ngid){
	
	var blog = document.getElementById('blog_name').value;
	var name = document.getElementById('url_name').value;
	var url = document.getElementById('url_url').value;
	url="<a href='"+url+"' target='_blank'>"+name+"</a>";
	var	pdata={
	  'title':blog,
	  'summary':url,
	  'isPublic':'1'
	  },
      req = {url: 'changhua/changhua/fun/update/'+ngid,post:pdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {
        alert('儲存成功!');
		window.location.reload();
      } 
	  else {
        alert( data.message );
      }
    });
};

get_value= function(ngid)
{
	
	var	req = {url: 'changhua/changhua/fun/view/'+ngid, hasCA: true};
		__.api(req, function(data) {
		  if (data.errCode === 0) {
		  var str = data.value.summary;
		  var b = str.search("' target='_blank'>");
		  var c = str.search("</a>");
		  document.getElementById('blog_name').value = data.value.title;
		  document.getElementById('url_name').value = str.substring(b+18,c);
		  document.getElementById('url_url').value = str.substring(9,b);
		  } 
		  else {
			alert( data.message );
		  }
		});

}

		