/*
*	Name:  			Showwidth.js
*	Version: 		1.0
*	Description: 	A small script to make a pop-up display the width in pixels of the browser window. 
*					aimed to help developers understand when their responsive/adaptive layout 
*					breaks etc.
*	License: 		This is free through the open license agreement, share, care and spread :). 
*	Author: 		Johan Wedfelt, check me out on GitHub
*/

(function( $ ){

	$(window).resize(function(){	

			//If the window isn't already open...
			var showContainer = window.open('', 'showContainer', 'height=100, width=250, status=no, toolbar=no, location=no, menu=no');

			//Print out some start markup
			showContainer.document.write('<header><h1 id="widthText"></h1><header>');
			
			//Define the h1 element in the new window
			var showContainerH1 = showContainer.document.getElementById("widthText");

			//calculate the width of the original window	
			var width = $(window).width();

			/*
			*	Set some styles to the markup of the pop-up
			*/
			$(showContainerH1).css('color','red');
			$(showContainerH1).css('text-align','center');



			//Use jQuery to update the h1 element in the pop-up.
			$(showContainerH1).html('Width: '+ width + 'px');	

	});

})( jQuery );