$(document).ready(function(){
	$('#reader').html5_qrcode(function(data){
			$('#read').html(data);
			//alert(data);
			//$('#read').load(data);
			document.getElementById("reader").innerHTML=
			'<object type="text/html" style="width:100%;height:100%" data="'+data+'" ></object>';
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			alert("Video error")
		}
	);
});
