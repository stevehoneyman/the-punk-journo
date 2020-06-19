// Check js is running
var dateTime = new Date();
console.log('loading from scripts.js from the punk journo on: ' + dateTime);

jQuery(document).ready(function($){
	
	/* navigation
	------------------------------------------------------------------------- */
	// controls for main nav
	// toggle visibility
	// $('.navicon').on('click', function() {
	// 	// console.log('click fired...')
	// 	$(this).next().toggleClass('show');
	// });

	$('.menu').on('click', function() {
			console.log('yep...');
			$(this).next().toggleClass('show');
		});
	}); // close doc ready
