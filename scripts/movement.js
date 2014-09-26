var $dragCircle = $('#hold-and-drag');
var $arrows = $('.arrow');
var $movementZones = $('.movement-zone');
var $rightArrow = $('#move-arrow-right');
var $upArrow = $('#move-arrow-up');
var $leftArrow = $('#move-arrow-left');
var $downArrow = $('#move-arrow-down');
var $backgroundElement = $('#content-wrapper');
var positionX = 0;
var positionY = 0;

var interval = 1;
var pixelMovement = 2;
// var isFirefox = typeof InstallTrigger !== 'undefined';

var direction = '';
var movementTimout = 0;
$dragCircle.on('mousedown', function() {
	$(this).css({
		'color' : 'rgba(255, 255, 255, 1)',
		'width' : '90px',
		'height' : '90px',
		'margin-left' : '-45px',
		'margin-top' : '-45px'
		});
	$arrows.show();
	$movementZones.show();

	$movementZones.on('mouseenter', function(){
		direction = $(this).attr('direction');
		if (movementTimout !== 0) {
				return;
		};
		if (direction === 'right') {
			$rightArrow.css('border-color', 'transparent transparent transparent rgba(255, 255, 255, 1)');
			movementTimout = setInterval(function() {
				if (positionX <= -1*((1920) - $(window).width())) {
					positionX = -1*((1920) - $(window).width());
					$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
					return;
				};
				positionX -= pixelMovement;
				$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
			}, interval);
		}
		else if (direction === 'up') {
			$upArrow.css('border-color', 'transparent transparent rgba(255, 255, 255, 1) transparent');
			movementTimout = setInterval(function() {
				if (positionY >= 0) {
					positionY = 0;
					$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
					return;
				};
				positionY += pixelMovement;
				$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
			}, interval);
		}
		else if (direction === 'left') {
			$leftArrow.css('border-color', 'transparent rgba(255, 255, 255, 1) transparent transparent');
			movementTimout = setInterval(function() {
				if (positionX >= 0) {
					positionX = 0;
					$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
					return;
				};
				positionX += pixelMovement;
				$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
			}, interval);
		}
		else if (direction === 'down') {
			$downArrow.css('border-color', 'rgba(255, 255, 255, 1) transparent transparent transparent');
			movementTimout = setInterval(function() {
				if (positionY <= -1*((1255) - 790)) {
					positionY = -1*((1255) - 790);
					$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
					return;
				};
				positionY -= pixelMovement;
				$backgroundElement.css('background-position', positionX + 'px ' + positionY + 'px');
			}, interval);
		}
	});

	$movementZones.on('mouseleave', function(){
		clearInterval(movementTimout);
		movementTimout = 0;
		var direction = $(this).attr('direction');
		if (direction === 'right') {
			$rightArrow.css('border-color', 'transparent transparent transparent rgba(255, 255, 255, 0.5)');
		}
		else if (direction === 'up') {
			$upArrow.css('border-color', 'transparent transparent rgba(255, 255, 255, 0.5) transparent');
		}
		else if (direction === 'left') {
			$leftArrow.css('border-color', 'transparent rgba(255, 255, 255, 0.5) transparent transparent');
		}
		else if (direction === 'down') {
			$downArrow.css('border-color', 'rgba(255, 255, 255, 0.5) transparent transparent transparent');
		}
	});

	$('body').on('mouseup', function() {
		clearInterval(movementTimout);
		movementTimout = 0;
		$dragCircle.css({
			'color' : 'rgba(255, 255, 255, 0.4)',
			'width' : '96px',
			'height' : '96px',
			'margin-left' : '-48px',
			'margin-top' : '-48px'
			});
		$arrows.hide();
		$movementZones.hide();
	});
});

// function setMovement(x, y) {
	// if (movementTimout !== 0) {
	// 	return;
	// };
// 	movementTimout = setInterval(function() {
// 		positionX += x*pixelMovement;
// 		positionY += y*pixelMovement;
// 		$backgroundElement.css('background-position-x', positionX);
// 	}, interval);
// }