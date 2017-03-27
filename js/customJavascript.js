/* DISABLE AND ENABLE SCROLL */

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


/* END DISABLE AND ENABLE SCROLL */



/* CONTACT ICONS */

var resizeContactIcons = function () {
	add_transform_time(contactIcons[currentIcon],0.3);
	
	set_scale(contactIcons[currentIcon], 1);
	
	currentIcon++;
	
	if (currentIcon >= contactIcons.length) {
		setTimeout(function(){ AppearCoverMiddleInfo(); }, 200);
		
		clearInterval(resizeContactIcons);
	}
};

/* END CONTACT ICONS */






/* COVER MIDDLE INFO */

function AppearCoverMiddleInfo () {
	coverMiddleInfo = document.getElementsByClassName('cover-middle-info')[0];
	
	add_transform_time(coverMiddleInfo,1);
	
	coverMiddleInfo.style.opacity = "1";
	
	setInterval(appearMenuInnerElems, 300);
}

/* END COVER MIDDLE INFO */



/* MENU INNER ELEMS */

var appearMenuInnerElems = function () {
	if (menuInnerElems != null) {
		add_transform_time(menuInnerElems[currentMenuInnerElem],0.4);
		
		set_translate_y(menuInnerElems[currentMenuInnerElem],-100);
		
		currentMenuInnerElem++;
		
		if (currentMenuInnerElem >= menuInnerElems.length) {
			setTimeout(function(){ enableScroll(); }, 300);
			
			clearInterval(appearMenuInnerElems);
		}
	}
	else {
		enableScroll();
	}
};

/* END MENU INNER ELEMS */



/* SCALE ELEMENTS */

function set_scale(e, pix) {
	if (e != null) {
		e.style["-webkit-transform"] = "scale("+ pix +","+ pix +")";
		e.style["-moz-transform"] = "scale("+ pix +","+ pix +")";
		e.style["-ms-transform"] = "scale("+ pix +","+ pix +")";
		e.style["-o-transform"] = "scale("+ pix +","+ pix +")";
		e.style["transform"] = "scale("+ pix +","+ pix +")";
	}
}

function add_transform_time (e, time) {
	if (e != null) {
		e.style["-webkit-transition"] = "all "+time+"s ease-out";
		e.style["-moz-transition"] = "all "+time+"s ease-out";
		e.style["-ms-transition"] = "all "+time+"s ease-out";
		e.style["-o-transition"] = "all "+time+"s ease-out";
		e.style["transition"] = "all "+time+"s ease-out";
	}
}

/* END SCALE ELEMENTS */



/* GLOBAL VARIABLES AND INITIATION */

var darkBackTopPage;
var coverArea;
var menuTop;
var menu, menuInnerElems, currentMenuInnerElem = 0;
var menuAdditionalInfo;
var bottomShortcuts;
var supportsTouch;
var fixedBacks;
var pageTop;
var infoWithBack;
var internalInfoBlocks, internalInfoBlocksAppear=[];
var smartphoneSideMenu;
var smartphoneSideMenuDark;
var smartphoneSideInnerMenu;

var isIE, isEdge;

var initVariables = true;

var menuLinks, overLinks = [], infoOuterList, infoList, infoListAppear = [];

var contactIcons=[], currentIcon = 0;

var coverMiddleInfo;

var errorModalInfo;

var buttonExpanded1 = false;

var moreWorks;

//var elemsTagA, elemsTagABackToWhite = [];

$(window).load (function() {
	supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
	
	fixedBacks = document.getElementsByClassName('back-fixed');
	
	if (supportsTouch) {
		for (i=0; i<fixedBacks.length; i++) {
			fixedBacks[i].style.height = screen.height + "px";
		}
		
		var bg = jQuery("#page-top");
		jQuery(window).resize("resizeBackground");

		bg.height(jQuery(window).height() + 60);
		
		
		pageTop = document.getElementById('page-top');
		pageTop.style.backgroundImage = "none";
		
		infoWithBack = document.getElementsByClassName('info-with-back');
		for (j=0; j<infoWithBack.length; j++) {
			infoWithBack[j].style.backgroundImage = "none";
		}
		
		smartphoneSideMenu = document.getElementsByClassName('smartphone-side-menu')[0];
	}
	
	Parallax ();
	
	//Show the page
	var bodyElems = document.getElementsByTagName("body");
    bodyElems[0].style.visibility = "visible";
})

function AddColors () {
	
	//Primary Color Top
	
	menuTop.style.background = primaryColorTop;
	
	darkBackTopPage.style.background = primaryColorTop;
	
	var modalHeader = document.getElementsByClassName('modal-header');
	for (i=0; i<modalHeader.length; i++) {
		modalHeader[i].style.background = primaryColorTop;
	}
	
	//Primary Color Bottom
	
	document.getElementsByTagName('footer')[0].style.background = primaryColorBottom + "1)";
	
	document.getElementsByClassName('blurr-back')[0].style.background = primaryColorBottom + "0.8)";
	
	var modalFooter = document.getElementsByClassName('modal-footer');
	for (i=0; i<modalFooter.length; i++) {
		modalFooter[i].style.background = primaryColorBottom + "0.1)";
	}
	
	var inputGroupAddon = document.getElementsByClassName('input-group-addon');
	for (i=0; i<inputGroupAddon.length; i++) {
		inputGroupAddon[i].style.background = primaryColorBottom + "0.1)";
	}
	
	
	
	//Primary Color Text
	var info = document.getElementsByClassName('info');
	for (i=0; i<info.length; i++) {
		var infoH2 = info[i].querySelectorAll('h2');
		for (j=0; j<infoH2.length; j++) {
			infoH2[j].style.color = primaryColorText;
		}
		
		var infoH3 = info[i].querySelectorAll('h3');
		for (j=0; j<infoH3.length; j++) {
			infoH3[j].style.color = primaryColorText;
		}
		
		var infoHr = info[i].querySelectorAll('hr');
		for (j=0; j<infoHr.length; j++) {
			infoHr[j].style.borderBottom = "3px solid " + primaryColorText;
		}
	}
	
	for (i=0; i<infoWithBack.length; i++) {
		var infoWithBackCircleIcon = infoWithBack[i].querySelectorAll('.circle-icon');
		for (j=0; j<infoWithBackCircleIcon.length; j++) {
			infoWithBackCircleIcon[j].style.color = primaryColorText;
		}
	}
	
	var imageCirclePrimaryColor = document.getElementsByClassName('img-circle-primary-color');
	for (i=0; i<imageCirclePrimaryColor.length; i++) {
		imageCirclePrimaryColor[i].style.border = "3px solid " + primaryColorText;
	}
	
	
	var faFwIcons = document.getElementsByClassName('fa-fw');
	for (i=0; i<faFwIcons.length; i++) {
		faFwIcons[i].style.color = primaryColorText;
	}
	
	
	
	//Secondary color
	var btn = document.getElementsByClassName('btn');
	for (i=0; i<btn.length; i++) {
		btn[i].style.color = secondaryColor + "1)";
		btn[i].style.border = "1px solid " + secondaryColor + "1)";
		btn[i].setAttribute("id", "btnIdAttribute" + i);
	}
}

if (initVariables) {
	
	isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
	isEdge = !isIE && !!window.StyleMedia;
	
	darkBackTopPage = document.getElementById("dark-background-top-page");
	
	menuTop = document.getElementsByClassName('menu-top')[0];
	
	menuAdditionalInfo = document.getElementsByClassName('menu-additional-info')[0];
		
	menu = document.getElementsByClassName('menu')[0];
	
	
	menuLinks = document.getElementsByClassName('menu-link');
	
	for (i=0; i<menuLinks.length; i++) {
		overLinks[i] = 0;
	}
	
	infoOuterList = document.getElementsByClassName('info-outer-list');
	
	infoList = document.getElementsByClassName('info-list');
	
	for (i=0; i<infoList.length; i++) {
		//infoList[i].style.top = "70px";
		infoListAppear[i] = 0;
	}
	
	infoWithBack = document.getElementsByClassName('info-with-back');
	
	smartphoneSideMenu = document.getElementsByClassName('smartphone-side-menu')[0];
	if (smartphoneSideMenu != null) {
		smartphoneSideMenu.style.pointerEvents = 'none';
	}
	
	smartphoneSideMenuDark = document.getElementsByClassName('smartphone-side-menu-dark')[0];
	
	smartphoneSideInnerMenu = document.getElementsByClassName('smartphone-side-inner-menu')[0];
	if (smartphoneSideInnerMenu != null) {
		smartphoneSideInnerMenu.style.right = $(window).width() + "px";
	}
	
	
	// Bottom shortcuts
	bottomShortcuts = document.getElementsByClassName('bottom-shortcuts')[0];
	
	
	//Internal info blocks
	internalInfoBlocks = document.getElementsByClassName('internal-info-block');
	for (i=0; i<internalInfoBlocks.length; i++) {
		internalInfoBlocksAppear[i] = 0;
	}
	
	
	/*elemsTagA = document.getElementsByTagName("a");
	for (i=0; i<elemsTagA.length; i++) {
		elemsTagA[i].setAttribute("id", "elemLink" + i);
		if(window.getComputedStyle(elemsTagA[i],null).color === "rgb(255, 255, 255)") {
			elemsTagABackToWhite[i] = 1;
		}
		else {
			elemsTagABackToWhite[i] = 0;
		}
	}*/
	
	AddColors();
	
	
	if (window.pageYOffset === 0) {
	
		// Contact icons
		contactIcons = document.getElementsByClassName('components-appear')[0].getElementsByTagName('i');
		currentIcon = 0;
		for (i=0; i<contactIcons.length; i++) {
			set_scale(contactIcons[i], 0);
		}
		setInterval(resizeContactIcons, 200);
		
		
		
		// Cover middle info
		coverMiddleInfo = document.getElementsByClassName('cover-middle-info')[0];
		coverMiddleInfo.style.opacity = "0";
		
		if ($(window).width() <= 767) {
			setTimeout(function(){ AppearCoverMiddleInfo(); }, 200);
		}
		else {
			disableScroll();
		}
		
		// Menu inner elems
		if (menu != null) {
			menuInnerElems = menu.getElementsByTagName('li');
			for (i=0; i<menuInnerElems.length; i++) {
				menuInnerElems[i].style.top = "100px";
			}
		}
		
	}
	else {
		AppearCoverMiddleInfo();
	}
	
	
	errorModalInfo = document.getElementById('error_modal_info');
	
	moreWorks = document.getElementById("more-works");
	
	initVariables = false;
}

/* END GLOBAL VARIABLES AND INITIATION */




if (!initVariables) {

	/* Fluid scrolling */

	$(document).ready(function(){

		$("ul li a[href^='#']").on('click', function(e) {
			e.preventDefault();
			hash = this.hash.split('#');
			$('html, body').animate({
				scrollTop: $('#' + hash[1]).offset().top
			}, 1000);
		});
		
		$("a[href^='#page-top']").on('click', function(e) {
			e.preventDefault();
			hash = this.hash.split('#');
			$('html, body').animate({
				scrollTop: $('#' + hash[1]).offset().top
			}, 1000);
		});
	});

	/* end of Fluid scrolling */

	/* Smooth wheel scroll */

	if (isIE || isEdge) {

		var scrollspeed = 40;

		$(window).on('mousewheel DOMMouseScroll', function(e) {
		  var dir,
			  amt = 100;

		  e.preventDefault();
		  if(e.type === 'mousewheel') {
			dir = e.originalEvent.wheelDelta > 0 ? '-=' : '+=';
		  }
		  else {
			dir = e.originalEvent.detail < 0 ? '-=' : '+=';
		  }      

		  $('html, body').stop().animate({
			scrollTop: dir + amt
		  },scrollspeed, 'linear');
		})

	}

	/* end of Smooth wheel scroll */




	/* PARALLAX EFFECT */

	function Parallax () {
		var ypos = window.pageYOffset;
		
		var effect = Math.round(ypos * 0.8);
		
		coverArea = document.getElementsByClassName('cover-area')[0];
		coverArea.style.top = effect + 'px';
		
		var newOpacity = Math.max(0, 1 - parseInt(ypos,10)/800);
		coverArea.style.opacity = newOpacity;
		
		if (darkBackTopPage != null && menu != null) {
			var newOpacity = ypos / menu.offsetTop;
			darkBackTopPage.style.opacity = newOpacity;
		}
	}

	/* END PARALLAX EFFECT */

	/* MENU EFFECT */

	function MenuEffect () {
		
		if (menu != null) {
		
			var ypos = window.pageYOffset;
			
			if (ypos >= menu.offsetTop) {
				menuTop.style.display = "block";
				
				//Menu additional info
				
				var distance = Math.max(0, parseInt(menu.offsetTop,10) + 100 - parseInt(ypos,10))/150;
				
				var newOpacity = Math.max (0, 1 - distance)
				
				menuAdditionalInfo.style.opacity = newOpacity;
				
				
				//Bottom shortcuts
				set_translate_y(bottomShortcuts,-100);
			}
			else {
				
				menuTop.style.display = "none";
				
				//Bottom shortcuts
				set_translate_y(bottomShortcuts,100);
			}
		}
	}

	/* END MENU EFFECT */


	/* PAGE MOVEMENT */
	(function() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
									   || window[vendors[x]+'CancelRequestAnimationFrame'];
		}
	 
		if (!window.requestAnimationFrame)
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
				  timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
	 
		if (!window.cancelAnimationFrame)
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
	}());

	function UpdateFixedBacks () {
		fixedBacks = document.getElementsByClassName('back-fixed');
		
		if (fixedBacks.length > 1) {
			var ypos = window.pageYOffset;
			
			pageTop = document.getElementById('page-top');
			
			var pageTopBottom = parseInt(pageTop.offsetTop,10) + parseInt(window.getComputedStyle(pageTop,null).height,10);
			
			if (ypos > pageTopBottom) {
				fixedBacks[0].style.zIndex = "-5";
			}
			else {
				fixedBacks[0].style.zIndex = "-1";
				/*for (i=1; i<fixedBacks.length; i++) {
					fixedBacks[i].style.zIndex = "-10";
				}*/
			}
			
			var bottomScreen = ypos + jQuery(window).height();
				

			for (i=0; i<infoWithBack.length; i++) {
				var elemBottom = parseInt(infoWithBack[i].offsetTop,10) + parseInt(window.getComputedStyle(infoWithBack[i],null).height,10);
				
				if ((bottomScreen > parseInt(infoWithBack[i].offsetTop,10) - 100) && (ypos < elemBottom + 100)) {
					fixedBacks[i+1].style.zIndex = "-1";
				}
				else {
					fixedBacks[i+1].style.zIndex = "-10";
				}
			}
		}
	}


	function PageAnimation () {
		if (!supportsTouch) {
			Parallax();
		
			MenuEffect();
		}
		else {
			UpdateFixedBacks();
		}
		
		CheckMenuSituation ();
	}


	function Update() {
		
		// Drawing code goes here
		
		PageAnimation();
		
		requestAnimationFrame(Update);
	}

	requestAnimationFrame(Update);




	if (isIE || isEdge) {
		window.addEventListener("scroll",PageAnimation);
	}

	/* END PAGE MOVEMENT */
	
	
	
	
	/* INFO LIST PART */
	
	function set_translate_y(e, pix) {
		if (e != null) {
			e.style["-webkit-transform"] = "translateY("+ pix +"px)";
			e.style["-moz-transform"] = "translateY("+ pix +"px)";
			e.style["-ms-transform"] = "translateY("+ pix + "px)";
			e.style["-o-transform"] = "translateY("+ pix  + "px)";
			e.style["transform"] = "translateY(" + pix + "px)";
		}
	}
	
	
	/* END INFO LIST PART */




	/* BACKGROUNDS */

	function resizeBackground() {
		bg.height(jQuery(window).height() + 60);
	}

	/* END BACKGROUNDS */
	
	
	
	
	/* MENU ACTION */
	
	function OverProfilePhoto (e) {
		elem = document.getElementById(e);
		elem.style = "border:3px solid " + secondaryColor +"1);-webkit-transition: border-color 0.4s ease-out;-moz-transition: border-color 0.4s ease-out;-ms-transition: border-color 0.4s ease-out;-o-transition: border-color 0.4s ease-out;transition: border-color 0.4s ease-out;";
	}
	
	function LeaveProfilePhoto (e) {
		elem = document.getElementById(e);
		elem.style.border = "3px solid white";
	}
	
	function IsOverLink (e) {
		for (i=0; i<menuLinks.length; i++) {
			if (e === menuLinks[i].id) {
				overLinks[i] = 1;
				
				menuLinks[i].style.opacity = "1";
				menuLinks[i].style.color = secondaryColor + "1)";
			}
		}
	}
	
	function IsNotOverLink (e) {
		for (i=0; i<menuLinks.length; i++) {
			if (e === menuLinks[i].id) {
				overLinks[i] = 0;
			}
		}
	}
	
	function CheckMenuSituation () {
		var ypos = window.pageYOffset;
		
		var windowHalfHeight = Math.round($( window ).height() / 2);
		
		//Ceck current info
		var currentMenu = -1;
		
		for (i = 0; i < infoOuterList.length; i++) {
			if (infoOuterList[i].offsetTop < ypos + windowHalfHeight) {
				currentMenu = i;
			}
		}

		
		for (i = 0; i < menuLinks.length; i++) {
			if (i == currentMenu) {
				menuLinks[i].style.opacity = "1";
				menuLinks[i].style.color = secondaryColor + "1)";
			}
			else {
				if (overLinks[i] == 0) {
					//menuLinks[i].style.opacity = "0.7";
					menuLinks[i].style.color = "white";
				}
			}
		}
		
		
		//Time to appear info
		
		for (i = 0; i < infoOuterList.length; i++) {
			if (infoOuterList[i].offsetTop < ypos + (windowHalfHeight + (windowHalfHeight/3))) {
				
				if (infoListAppear[i] == 0) {
					infoListAppear[i] = 1;
					
					infoList[i].style.opacity = "1";
					set_translate_y(infoList[i],-70);
				}
			}
			
			for (j=0; j<internalInfoBlocks.length; j++) {
				if($.contains(infoOuterList[i],internalInfoBlocks[j])){
					if (infoOuterList[i].offsetTop + internalInfoBlocks[j].offsetTop < ypos + (windowHalfHeight + (windowHalfHeight/3))) {
						if (internalInfoBlocksAppear[j] == 0) {
							internalInfoBlocksAppear[j] = 1;
							
							internalInfoBlocks[j].style.opacity = "1";
							set_translate_y(internalInfoBlocks[j],-70);
						}
					}
				}
			}
		}
	}
	
	/* END MENU ACTION */




	/* SMARTPHONE MENU */
	
	$(smartphoneSideMenuDark).click(function(e) {
		HideSmartphoneMenu();
	});
	
	function set_translate_x(e, pix) {
		e.style["-webkit-transform"] = "translateX("+ pix +"px)";
		e.style["-moz-transform"] = "translateX("+ pix +"px)";
		e.style["-ms-transform"] = "translateX("+ pix + "px)";
		e.style["-o-transform"] = "translateX("+ pix  + "px)";
		e.style["transform"] = "translateX(" + pix + "px)";
	}

	function ShowSmartphoneMenu () {
		smartphoneSideMenu.style.pointerEvents = 'auto';
		smartphoneSideMenuDark.style.opacity = "1";
		set_translate_x(smartphoneSideInnerMenu, $(window).width());
	}

	function HideSmartphoneMenu () {
		smartphoneSideMenu.style.pointerEvents = 'none';
		smartphoneSideMenuDark.style.opacity = "0";
		set_translate_x(smartphoneSideInnerMenu, -$(window).width());
	}

	/* END SMARTPHONE MENU */
	
	
	/* LINKS COMPONENTS */
	
	$( '.btn' ).mouseenter(
		function () {
			if (!supportsTouch) {
				document.getElementById($(this).attr('id')).style.background = secondaryColor + "0.4)";
			}
		}
	);
	
	$( '.btn' ).mouseleave(
		function () {
			document.getElementById($(this).attr('id')).style.background = btnColor;
		}
	);
	
	
	/* END LINKS COMPONENTS */
	
	
	
	/* CONTACT FORM */
	

	$("#my-form").submit(function(e){
		$.ajax({
				type: "POST",
				url: "contact.php",
				data: $("#my-form").serialize(),
				success: function(result){
					var list = JSON.parse(result);
					
					var sent = true;
					for (i=0; i<list.length-1; i++) {
						if (list[i] === "0") {
							sent = false;
							break;
						}
					}
					
					if (sent) {
						$("#myModal").modal('hide');
						
						setTimeout(function(){
							$("#dialog-modal").modal('show');
							
							$( '#my-form' ).each(function(){
								this.reset();
							});
						},100)
					}
					else {
						setTimeout(function(){
							errorModalInfo.innerHTML = list[list.length-1];
							
							$("#error-modal").modal('show');
						},100)
					}
			   }
		});
		return false;
	});
	
	function ValidateForm() {
        document.form.submit();
    }
	
	
	$(document).ready(function(){
		$("#myModal").on('hide.bs.modal', function () {
			$( '#my-form' ).each(function(){
				this.reset();
			});
		});
	});


	/* END CONTACT FORM */
	
	
	
	/* EXPAND BUTTON */
	
	function handleClick() {
		if (buttonExpanded1) {
			this.innerHTML = '<i class="fa fa-chevron-circle-down fa-5x faa-vertical animated-hover"></i>';
			$(moreWorks).collapse('hide');
		}
		else {
			this.innerHTML = '<i class="fa fa-chevron-circle-up fa-5x faa-vertical animated-hover"></i>';
			$(moreWorks).collapse('show');
		}
		
		buttonExpanded1 = !buttonExpanded1;
	}
	
	if (document.getElementById('btn-expand-works') != null) {
		document.getElementById('btn-expand-works').onclick=handleClick;
	}
	
	/* END EXPAND BUTTON */
}