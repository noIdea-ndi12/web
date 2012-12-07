	
 $(document).ready(function() {
 
 
 	function display_error(msg){
	 	
	 	$("#error").html("erreur");
	 	console.log('erreur');
	 	
 	}
 	
 	function display_success(msg){
	 	
	 	$("#success").html(msg);
	 	
 	}
 	function display_result(data){
	 	jQuery.each(data.street, function(i, v) {
		 	$("#"+i).html(v);
  
    });
	 
	 	
 	}
 	function query(url, method, parameters, callback){
	 	url="public/js/data.json";
	 	if(method=="POST" || method=="GET"){
		 		$.ajax({
		 		type: method,
		 		async: false,
		 		url: url,
		 		dataType: 'json',
		 		data: parameters		 		})
		 		.success(function( msg ) {
		 		callback(msg);
		 		display_success(msg);
			 		
			 					 		})
			 	.error(function(msg){display_error(msg);
				 	console.log('erreur');
			 	})
			 	;
		 	
		 	
	 	}	 
	 	
			 		
	}
	
	function get_street(id){ 
	query("/street/get/"+id, "GET",'' ,display_result);
	
	 }
	
	function add_street(data){
		query("/street/add", "POST", data);		
		
		
		
	}
	
	/*function set_street(data, id){
		
		
		
	}*/
	
	
	$('form').submit(function() {
		console.log(this.action);
		add_street($(this).serialize());
	
  return false;
});
	$("#eeadd_object").click(function() {
		add_street($(this).parent().attr('id'))
		
		
	});
	//get_street(12);
	//query("test","GET", "toto");
 		
 
 });