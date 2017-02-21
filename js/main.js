$(document).ready(function(){
	$('#reader').html5_qrcode(function(data){
			$('#read').html(data);
			//alert(data);
			//$('#read').load(data);
			$("#reader").html('<object type="text/html" data="'+data+'" ></object>');
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			alert("Video error")
		}
	);
});
