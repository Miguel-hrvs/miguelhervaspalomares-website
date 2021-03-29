(function($){

var menuBTn = $('.menu-icon'),
    menu = $('.navigation ul');

menuBTn.click(function() {

    if ( menu.hasClass('show') ) {

	menu.removeClass('show');

} else {

menu.addClass('show');
}

	});

 })(jQuery); 

