check = function(){
	var old_pw = document.getElementById('old_pw').value;
	var new_pw = document.getElementById('new_pw').value;
	var new_pw2 = document.getElementById('new_pw2').value;
	if(old_pw==""||new_pw==""||new_pw2=="" )
	{
		alert('請填寫每個欄位');
	}
	else{
		if(new_pw != new_pw2)
		{
			alert('兩次新密碼輸入的不一樣，請重新輸入');
			document.getElementById('new_pw').value='';
			document.getElementById('new_pw2').value = '';
		}
		else{
			save(old_pw,new_pw,new_pw2);
		}
	}
	
	
};

function save(old_pw,pw,pw2) {
	var	salt = SHA1('admin_user'),
	    oldPwd = SHA1(salt+old_pw),
		pwd = SHA1(salt+pw),
		pwd2 = SHA1(salt+pw2),
	  pdata={
	  'oldPasswd':oldPwd,
	  'passwd':pwd,
	  'passwd2':pwd2
	  },
      req = {url: 'changhua/changhua/login/updPasswd',post:pdata, hasCA: true};
    __.api(req, function(data) {
      if (data.errCode === 0) {
        alert('密碼修改成功!');
		document.getElementById('old_pw').value='';
		document.getElementById('new_pw').value='';
		document.getElementById('new_pw2').value='';
      } else if (data.errCode === 2) {
        alert('舊密碼錯誤');
		document.getElementById('old_pw').value='';
		document.getElementById('new_pw').value='';
		document.getElementById('new_pw2').value='';
      } else {
        alert( data.message );
      }
    });
};
