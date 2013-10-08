$(function() {

//highlight the current navigation item using page ids
$("#home a:contains('Home')").parent().addClass('active');
$("#schedule a:contains('Schedule')").parent().addClass('active');
$("#artists a:contains('Artists')").parent().addClass('active');
$("#venuetravel a:contains('Venue Travel')").parent().addClass('active');
$("#register a:contains('Register')").parent().addClass('active');


//make menus drop automatically
//hover function takes two parameters, fade in and fade out
$('ul.nav li.dropdown').hover(function(){


$('.dropdown-menu', this).fadeIn();

}, function() {
	$('.dropdown-menu', this).fadeOut('fast');
});

});