$('#login-form').submit(function(e){
	e.preventDefault();
	var loginData = new FormData($('#login-form')[0]);

	$.ajax({
	    url: '../api/login.php',
	    data: loginData,
	    contentType: false,
	    processData: false,
	    type: 'POST',
	    success: function(data){
	    	if(data == "Login Successful"){
	    		$.notify({
					message: 'Login Successful. Redirecting...' 
				},{
					type: 'success'
				});
				setTimeout(function(){ location.href="../dashboard"; }, 2000);
	    	}else{
	    		$.notify({
					message: 'Login Failed' 
				},{
					type: 'danger'
				});
	    	}
	        
	    },
	    error: function(error){
	    	alert("Error"+error);
	    }
	});
});

$('#ulogin-form').submit(function(e){
	e.preventDefault();
	var loginData = new FormData($('#ulogin-form')[0]);

	$.ajax({
	    url: '../api/user/ulogin.php',
	    data: loginData,
	    contentType: false,
	    processData: false,
	    type: 'POST',
	    success: function(data){
	    	if(data == "Login Successful"){
	    		$.notify({
					message: 'Login Successful. Redirecting...' 
				},{
					type: 'success'
				});
				setTimeout(function(){ location.href="../user-dashboard"; }, 2000);
	    	}else{
	    		$.notify({
					message: 'Login Failed' 
				},{
					type: 'danger'
				});
	    	}
	        
	    },
	    error: function(error){
	    	alert("Error"+error);
	    }
	});
});

$('#fpwd_btn').on('click',function(){
	$('#fpwd-form, #login_btn').show();
	$('#ulogin-form, #fpwd_btn').hide();
});
$('#login_btn').on('click',function(){
	$('#fpwd-form, #login_btn').hide();
	$('#ulogin-form, #fpwd_btn').show();
});
$('#fpwd-form').on('submit',function(e){
	e.preventDefault();
	var email = new FormData($('#fpwd-form')[0]);
	$.ajax({
	    url: '../api/user/resetPasswordLink.php',
	    data: email,
	    contentType: false,
	    processData: false,
	    type: 'POST',
	    success: function(data){
	    	if(data == "true"){
	    		$.notify({
					message: 'Link Has Been Send To Your Mail. Check Your Mailbox' 
				},{
					type: 'success'
				});
				setTimeout(function(){ location.href="../user-dashboard"; }, 2000);
	    	}else{
	    		$.notify({
					message: data
				},{
					type: 'danger'
				});
	    	}
	        
	    },
	    error: function(error){
	    	alert("Error"+error);
	    }
	});

})

$('#password,#confirmpassword').on('keyup', function(){
	var pwd = $('#password').val();
	var conpwd = $('#confirmpassword').val();

	if (pwd == conpwd) {
		$('#msg').text('');
	}else{
		$('#msg').text("Password Did Not Match");
	}
});

$('#changepwd-form').submit(function(e){
	e.preventDefault();
	var pwdData = new FormData($('#changepwd-form')[0]);

	$.ajax({
	    url: '../api/user/updatePassword.php',
	    data: pwdData,
	    contentType: false,
	    processData: false,
	    type: 'POST',
	    success: function(data){
	    	if(data == "true"){
	    		$.notify({
					message: 'Password Updated. Redirecting...' 
				},{
					type: 'success'
				});
				setTimeout(function(){ location.href="../user"; }, 2000);
	    	}else{
	    		$.notify({
					message: data 
				},{
					type: 'danger'
				});
	    	}
	        
	    },
	    error: function(error){
	    	alert("Error"+error);
	    }
	});
});