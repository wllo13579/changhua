check = function(){
	var name = document.getElementById('url_name').value;
	var url = document.getElementById('url_url').value;
	save(name,url);	
};

function save(name,url) {
	var	pdata={
	  'title':name,
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
	var name = document.getElementById('url_name').value;
	var url = document.getElementById('url_url').value;
	var	pdata={
	  'title':name,
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
		  document.getElementById('url_name').value = data.value.title;
		  document.getElementById('url_url').value = data.value.summary;
		  } 
		  else {
			alert( data.message );
		  }
		});

}

		