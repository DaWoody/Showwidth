/*
*	Name:  			Showwidth.js
*	Version: 		1.0
*	Description: 	A small script to make a pop-up display the width in pixels of the browser window. 
*					aimed to help developers understand when their responsive/adaptive layout 
*					breaks etc.
*	License: 		This is free through the open license agreement, share, care and spread :). 
*	Author: 		Johan Wedfelt, check me out on GitHub, https://github.com/DaWoody, or go listen to my music: http://www.woodfieldtheartist.net
*	
*/


jQuery(document).ready(function(){

	$(window).resize(function(){	

			/*
			*	Stating below what I am doing.. this is done every resize as it is now..
			*/

			//If the pop-up isn't already open, open it!
			var showContainer = window.open('', 'showContainer', 'height=100, width=250, status=no, toolbar=no, location=no, menubar=no, titlebar=no');
			//Print out some start markup in the pop-up
			showContainer.document.write('<header><h1 id="widthText"></h1><header>');
			//Define the h1 element in the pop-up
			var showContainerH1 = showContainer.document.getElementById("widthText");
			//Get the body tag in the pop-up
			var showContainerBody = showContainer.document.body;
			//calculate the width of the original window	
			var width = $(window).width();

			/*
			*	Set some styles to the markup of the pop-up.
			*	Defining some variables for background, color etc
			*	Change these variables below if u want another layout...
			*/

			var backgroundColor = '#ccc';
			var textColor = 'black';
			var textShadow = '1px 1px 2px #fff';
			var fontSize = '38px';
			var paddingTop = '15px';

			/*
			*	Setting the changes to the css with some jQuery...
			*/

			$(showContainerBody).css('background-color', backgroundColor);
			$(showContainerH1).css('color', textColor);
			$(showContainerH1).css('font-size', fontSize);
			$(showContainerH1).css('text-shadow', textShadow);
			$(showContainerH1).css('text-align','center');
			$(showContainerH1).css('padding-top', paddingTop);


			//Use jQuery to update the h1 element in the pop-up.
			$(showContainerH1).html('Width: '+ width + 'px');

	});

});