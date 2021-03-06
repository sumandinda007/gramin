app.service("productManagement",function($http,$log){
	this.createProduct = function(data,formdata){
		return $http({
	        method : "POST",
	        url : "../api/createProduct.php",
	        data: data,
	        params: formdata,
	        headers: {'Content-Type': undefined}
	    }).then(function success(response) {
	        return response.data;
	    }, function error(response) {
	        $log.error('ERROR:', response);
            throw response;
	    });
	}
	this.getAllProduct = function(){
		return $http({
	        method : "POST",
	        url : "../api/getAllProducts.php",
	        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
	    }).then(function success(response) {
	        return response.data;
	    }, function error(response) {
	        $log.error('ERROR:', response);
            throw response;
	    });
	}
	this.getSingleProduct = function(id){
		var data={};
		data.id = id;
		return $http({
	        method : "POST",
	        url : "../api/getSingleProduct.php",
	        params: data,
	        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
	    }).then(function success(response) {
	        return response.data;
	    }, function error(response) {
	        $log.error('ERROR:', response);
            throw response;
	    });
	}
	this.getProductStock = function(userkey){
		var data = {};
		data.userkey = userkey;

		return $http({
	        method : "POST",
	        url : "../api/user/getUserProductStock.php",
	        params: data,
	        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
	    }).then(function success(response) {
	        return response.data;
	    }, function error(response) {
	        $log.error('ERROR:', response);
            throw response;
	    });

	}

	this.getSingleCategoryProject = function(category){
		var data = {};
		data.category = category;

		return $http({
	        method : "POST",
	        url : "../api/user/getSingleCategoryProduct.php",
	        params: data,
	        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
	    }).then(function success(response) {
	        return response.data;
	    }, function error(response) {
	        $log.error('ERROR:', response);
            throw response;
	    });

	}
	
});