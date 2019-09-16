$(function(){
	$("#btnAnimate").click(function(){
		
		$("#Paragraph").animate({
			left: '1px',
			fontSize: '15px'
		});

		$("#box1").animate({
			left: '250px',
			opacity: '0.8',
			height: '200px',
			width: '1000px'
		});
	});
});
