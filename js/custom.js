/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.carousel-slider-post');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 500,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.banner-rotator-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayTimeout: 1500,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('#product-in-slider');
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				960: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
	});


	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});
	//shashi
	$(document).ready(function () {
		//Goback to order summary summary 
		$("#gobackordersummary").on("click", function() {
			$("#loginform").addClass('DNI');
			$("#gobackordersummary").addClass('DNI');
			$("#ordersummary").removeClass('DNI');
			$("#ordernow").removeClass('DNI');
			$("#loginbtn").addClass('DNI');
			$("#address").addClass('DNI');
			$("#order").addClass('DNI');
			$("#finalsummary").addClass('DNI');
			$("#confirm").addClass('DNI');		
			$("#erroraddress").addClass('DNI');	
			$("#thankyou").addClass('DNI');			
		})

		//login
		

		//confirm order 

		$("#confirm").on("click", function() {
			$("#erroraddress").addClass('DNI');
			$("#finalsummary").addClass('DNI');
			$("#confirm").addClass('DNI');			
			$("#thankyou").removeClass('DNI');
			var successmessage = document.getElementById('successmessage');
			successmessage.innerHTML="Your order has been successfully placed!, we will deliver your order before "+today;	



		})

		//order summary
		$("#order").on("click", function() {
			var inputName=document.getElementById("inputName").value;
			var inputStreet=document.getElementById("inputStreet").value;
			var inputCity=document.getElementById("inputCity").value;
			var inputZip=document.getElementById("inputZip").value;
			var inputState=document.getElementById("inputState").value;
			var inputContact=document.getElementById("inputContact").value;
			if(inputContact=="" || inputState=="" || inputName=="" || inputStreet=="" || inputCity=="" || inputZip==""){
				$("#erroraddress").removeClass('DNI');
			}
			else{
				$("#erroraddress").addClass('DNI');
			var ordermessage = document.getElementById('ordermessage');	
			var message = ordermessage.innerText;
			$("#finalsummary").removeClass('DNI');
			$("#confirm").removeClass('DNI');			
			$("#address").addClass('DNI');
			$("#order").addClass('DNI');
			var ordersum= document.getElementById('ordersum');			
			ordersum.innerHTML= message;
			var total= document.getElementById('total');	
			total.innerHTML="Total Amount: "+totalAmount.toFixed(2);

			var orderdate= document.getElementById('orderdate');	
			orderdate.innerHTML="Order Date: "+ new Date();
			
			var paymentmode= document.getElementById('paymentmode');	
			paymentmode.innerHTML="Payment mode: CASH ON DELIVERY"; 

			var deliverydate= document.getElementById('deliverydate');	
			today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = today.getFullYear();

			var d = new Date();
  			var n = d.getHours();
			  var e;
			  var m;
			  if(n>=0 || n<=8)
			  {
				e=10 +" AM";
				m=dd;
			  }
			  else if(n>8 || n<=20)
			  {
				  e=10+" PM";
				  m=dd;
			  }
			  else if(n>20 || n<23)
			  {
				  e=10+ " AM";
				  m=dd+1;
			  }

			today = m + '-' + mm + '-' + yyyy +" @ " +e ;
			deliverydate.innerHTML="Expected Delivery Date/Time: " + today;
			}

		})

		//milk order only

		$("#milkorder").on("click", function() {
			$("#ordersummarymilk").removeClass('DNI');
			var btn=document.getElementById("milkorder")
			btn.onclick = function() {
				modal.style.display = "block";
				}

		})

		//login
		$("#loginbtn").on("click", function() {
			var uname=document.getElementById("uname").value;
			var pwd=document.getElementById("pwd").value;
			if(uname=="temp@test.com" && pwd=="123123") {
			$("#loginform").addClass('DNI');
			// $("#gobackordersummary").removeClass('DNI');
			$("#loginbtn").addClass('DNI');
			$("#address").removeClass('DNI');
			$("#order").removeClass('DNI');
			$("#errorlogin").addClass('DNI');
			}
			else{
			$("#errorlogin").removeClass('DNI');
			}

		})
		$("#onlineorder").on("click", function() {
			$("#ordersummarymilk").addClass('DNI');

			if($("#ordersummary").hasClass('DNI'))
			{
				$("#ordersummary").removeClass('DNI');
				$("#ordernow").removeClass('DNI');
			}
			else
			{
				$("#ordersummary").addClass('DNI');
				$("#ordernow").addClass('DNI');
			}

			
			
		})
		
		$("#ordernow").on("click", function() {
			if(isAdded>0)
			{
			$("#ordernow").removeClass('pointerevent');
			$("#ordersummary").addClass('DNI');
			$("#loginform").removeClass('DNI');
			$("#gobackordersummary").removeClass('DNI');
			$("#ordernow").addClass('DNI');
			$("#loginbtn").removeClass('DNI');
			$("#error").addClass('DNI');
			}
			else
			{
				$("#error").removeClass('DNI');
				$("#ordernow").addClass('pointerevent');

			}


		 })

		var ordermessage = document.getElementById('ordermessage');	
		$("#milkquant").on("input", function() {
			var x = document.getElementById('milktotal');
			x.innerHTML=($(this).val()*40).toFixed(2);			
			totalAmount=totalAmount+($(this).val()*40);
			var totalAmountId = document.getElementById('totAmount');
			totalAmountId.innerHTML=totalAmount.toFixed(2);		
			if($(this).val()!=0){		
			ordereditem[1]=$(this).val() + " Litre of Milk,"
			isAdded+=1;
			$("#ordernow").removeClass('pointerevent');
			}
			else
			{
			isAdded-=1;
			ordereditem[1]='';
			}
			ordermessage.innerHTML=ordereditem[0]+" "+ordereditem[1];
		 });
		 $("#paneerquant").on("input", function() {
			var x = document.getElementById('paneertotal');
			x.innerHTML=($(this).val()*200).toFixed(2);
			totalAmount=totalAmount+($(this).val()*200);
			var totalAmountId = document.getElementById('totAmount');
			totalAmountId.innerHTML=totalAmount.toFixed(2);
			if($(this).val()!=0)
			{
			ordereditem[2]=$(this).val() + " Kg of Paneer, ";
			isAdded+=1;
			$("#ordernow").removeClass('pointerevent');
			}
			else
			{
			ordereditem[2]='';
			isAdded-=1;
			}
			ordermessage.innerHTML=ordereditem[0]+" "+ordereditem[1]+" "+ordereditem[2];
		 });
		 $("#curdquant").on("input", function() {
			var x = document.getElementById('curdtotal');
			x.innerHTML=($(this).val()*90).toFixed(2);
			totalAmount=totalAmount+($(this).val()*90);
			var totalAmountId = document.getElementById('totAmount');
			totalAmountId.innerHTML=totalAmount.toFixed(2);
			if($(this).val()!=0)
			{
			isAdded+=1;
			ordereditem[3]=$(this).val() + "Kg of Curd,"; 
			$("#ordernow").removeClass('pointerevent');
			}
			else
			{
			ordereditem[3]='';
			isAdded-=1;
			}
			ordermessage.innerHTML=ordereditem[0]+" "+ordereditem[1]+" "+ordereditem[2]+" "+ordereditem[3];

		 });
		 $("#gheequant").on("input", function() {
			var x = document.getElementById('gheetotal');
			x.innerHTML=($(this).val()*450).toFixed(2);
			totalAmount=totalAmount+($(this).val()*450);
			var totalAmountId = document.getElementById('totAmount');
			totalAmountId.innerHTML=totalAmount.toFixed(2);
			if($(this).val()!=0)
			{
			isAdded+=1;
			ordereditem[4]=$(this).val() + " Kg of Ghee,";
			$("#ordernow").removeClass('pointerevent');
			}
			else
			{
			isAdded-=1;
			ordereditem[4]='';
			}
			ordermessage.innerHTML=ordereditem[0]+" "+ordereditem[1]+" "+ordereditem[2]+" "+ordereditem[3]+" "+ordereditem[4];
		 });

			var totalAmount=0;
			var ordereditem=[];
			var today;
			var isAdded= 0;
			// function openModal() {
		 	// var openModal = function() {
			var modal = document.getElementById("myModal");
			var btn1 = document.getElementsByClassName('orderbtn')[0];
			var btn2 = document.getElementsByClassName('orderbtn')[1];
			var btn3 = document.getElementsByClassName('orderbtn')[2];


			// totalAmount=0;
			// ordereditem=[];
			// today;
			// isAdded= 0;
			ordereditem[0]="You have added : ";
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
		
			// When the user clicks the button, open the modal 
			btn1.onclick = function() {
			$("#ordersummarymilk").addClass('DNI');
			modal.style.display = "block";
			}
			btn2.onclick = function() {
				$("#ordersummarymilk").addClass('DNI');
				modal.style.display = "block";
				}
				btn3.onclick = function() {
			$("#ordersummarymilk").addClass('DNI');

					modal.style.display = "block";
					}
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
				
				resetValues();
			modal.style.display = "none";
			
			}
			
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			if (event.target == modal) {
				resetValues();
				
				modal.style.display = "none";
				
			}
			}
			// };

		 	 var resetValues = function() {
				totalAmount=0;
				ordereditem=[];
				today;
				isAdded= 0;
				
			  }


		
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	
		



	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});