$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$(document).ready(function(){
	
	// Function to set balloon positions dynamically based on screen size
	function arrangeBalloons() {
		var screenWidth = $(window).width();
		var vw = screenWidth / 2;
		
		// Default spacing for desktop
		var gap = 150; 
		var topHBD = 150;
		var topAREESHA = 350;
		
		// Adjust spacing for tablet and mobile
		if(screenWidth < 991 && screenWidth >= 768) {
			gap = 100;
			topHBD = 120;
			topAREESHA = 280;
		} else if(screenWidth < 768 && screenWidth >= 480) {
			gap = 55;
			topHBD = 80;
			topAREESHA = 180;
		} else if(screenWidth < 480) {
			gap = 42;
			topHBD = 60;
			topAREESHA = 140;
		}

		// HBD Row (Top) - 3 Balloons
		$('#b11').animate({top:topHBD, left: vw - gap}, 500);
		$('#b22').animate({top:topHBD, left: vw}, 500);
		$('#b33').animate({top:topHBD, left: vw + gap}, 500);
		
		// AREESHA Row (Bottom) - 7 Balloons
		var startPos = vw - (gap * 3); // Center 'E' in middle
		$('#b44').animate({top:topAREESHA, left: startPos}, 500);
		$('#b55').animate({top:topAREESHA, left: startPos + (gap*1)}, 500);
		$('#b66').animate({top:topAREESHA, left: startPos + (gap*2)}, 500);
		$('#b77').animate({top:topAREESHA, left: startPos + (gap*3)}, 500);
		$('#b88').animate({top:topAREESHA, left: startPos + (gap*4)}, 500);
		$('#b99').animate({top:topAREESHA, left: startPos + (gap*5)}, 500);
		$('#b100').animate({top:topAREESHA, left: startPos + (gap*6)}, 500);
	}

	// Resize window par dobara arrange karein
	$(window).resize(function(){
		if($('.balloons').css('opacity') == 0.9) {
			arrangeBalloons();
		}
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	// Loops for 10 balloons
	function loopOne() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b1').animate({left:rl,bottom:rt},10000,function(){ loopOne(); }); }
	function loopTwo() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b2').animate({left:rl,bottom:rt},10000,function(){ loopTwo(); }); }
	function loopThree() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b3').animate({left:rl,bottom:rt},10000,function(){ loopThree(); }); }
	function loopFour() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b4').animate({left:rl,bottom:rt},10000,function(){ loopFour(); }); }
	function loopFive() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b5').animate({left:rl,bottom:rt},10000,function(){ loopFive(); }); }
	function loopSix() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b6').animate({left:rl,bottom:rt},10000,function(){ loopSix(); }); }
	function loopSeven() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b7').animate({left:rl,bottom:rt},10000,function(){ loopSeven(); }); }
	function loopEight() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b8').animate({left:rl,bottom:rt},10000,function(){ loopEight(); }); }
	function loopNine() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b9').animate({left:rl,bottom:rt},10000,function(){ loopNine(); }); }
	function loopTen() { var rl = 1000*Math.random(); var rt = 500*Math.random(); $('#b10').animate({left:rl,bottom:rt},10000,function(){ loopTen(); }); }

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7,#b8,#b10').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b9').addClass('balloons-rotate-behaviour-two');
		
		loopOne(); loopTwo(); loopThree(); loopFour(); loopFive(); 
		loopSix(); loopSeven(); loopEight(); loopNine(); loopTen();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});
		
	$('#wish_message').click(function(){
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10').stop();
		
		// Change IDs to stop flying loops
		$('#b1').attr('id','b11'); $('#b2').attr('id','b22'); $('#b3').attr('id','b33');
		$('#b4').attr('id','b44'); $('#b5').attr('id','b55'); $('#b6').attr('id','b66');
		$('#b7').attr('id','b77'); $('#b8').attr('id','b88'); $('#b9').attr('id','b99'); $('#b10').attr('id','b100');
		
		// Call the responsive arrange function
		arrangeBalloons();
		
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i = 0;
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i = i + 1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i == 50){
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});
				} else {
					msgLoop(i);
				}			
			});
		}
		msgLoop(0);
	});
});