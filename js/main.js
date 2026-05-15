

/*******************************************************************************************/

new WOW().init();

/*******************************************************************************************/


jQuery(document).ready(function () {
    jQuery('.m-menu nav').meanmenu();
});



/*******************************************************************************************/



function toggleChevron(e) {
$(e.target)
	.prev('.panel-heading')
	.find("i.indicator")
	.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);				
	
	$("#checkin1").val("DATA DI ARRIVO");
	$("#checkin2").val("DATA DI PARTENZA");
	$("#checkin3").val("DATA DI ARRIVO");
	$("#checkin4").val("DATA DI PARTENZA");

	 $('.input-daterange').datepicker({
		 format: 'dd-mm-yyyy',
		 todayBtn: "linked",
		 autoclose: true
	 });     



/***********************************************************************************************/

$(document).on('ready', function() {
	
	$("#element").introLoader({

		animation: {
			name: 'counterLoader',
			options: {
				ease: "easeOutSine",
				style: 'dark',
				animationTime: 1000
			}
		}

	});
	
});		

/***********************************************************************************************/

$('.owl-carousel').owlCarousel({
    loop:true,
	autoplay:false,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})




/***********************************************************************************************/



/***********************************************************************************************/



$(function() {
var Accordion = function(el, multiple) {
this.el = el || {};
this.multiple = multiple || false;

// Variables privadas
var links = this.el.find('.link');
// Evento
links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
var $el = e.data.el;
$this = $(this),
$next = $this.next();

$next.slideToggle();
$this.parent().toggleClass('open');

if (!e.data.multiple) {
$el.find('.submenu-active').not($next).slideUp().parent().removeClass('open');
$el.find('.submenu').not($next).slideUp().parent().removeClass('open');

};
}	

var accordion = new Accordion($('#treatment'), false);
});




