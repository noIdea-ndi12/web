	
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

 	function display_recherche(data){



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

	 function search_street(street){ 
	query("/street/search/", "POST",street ,display_recherche);
	
	 }
	
	function add_street(data){
		query("/street/add", "POST", data);		
		
		
		
	}
	
	/*function set_street(data, id){
		
		
		
	}*/
	
	
	$('#toto').submit(function() {
		console.log(this.action);
		search_street($(this).serialize());
	
  return false;
});
	$("#go").live('click', function() {
		var parent=$(this).parent();
		console.log($(parent).serialize());
		//add_street($(this).parent().attr('id'))
		search_street($(parent).serialize());
		
		
	});
	//get_street(12);
	//query("test","GET", "toto");
 		
 
 });