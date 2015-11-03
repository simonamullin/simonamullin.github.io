//
sweetAlert("Welcome to BrineBuddy Beta! Sign up for our newsletters for the latest BrineBuddy pickle world news.")


//slideToggle

$('.main_recipes_cta-1').click(function(event) {
event.preventDefault();
	$('.main_recipes_pickle-links_hidden').slideToggle(750);
	$('.main_recipes_cta-1').hide();
	$('.main_recipes_cta-see-less').show();
});

$('.main_recipes_cta-see-less').click(function(event) {
event.preventDefault();
	$('.main_recipes_pickle-links_hidden').slideToggle(750);
	$('.main_recipes_cta-see-less').hide();
	$('.main_recipes_cta-1').show();
});

//scroll to links

	$('.scroll-to-link').on('click', scrollToLink);

	function scrollToLink(event) {
		event.preventDefault();
	//attribute href of the link we just clicked
		var targetName = $(event.currentTarget).attr('href');
	//position further down the page
		var offset = $(targetName).offset().top;
	//scroll page
		$('html, body').animate({scrollTop: offset}, 1000);

	}

//sweetalert

$('.pickle-recipe-image').click(function(event) {
	event.preventDefault();

	var	pickleTitle = $(event.currentTarget).find('.hide').data('title');
	var	pickleImage = $(event.currentTarget).find('.hide').data('img');
	var	pickleText = $(event.currentTarget).find('.hide').html();


	console.log($(event.currentTarget).find('.hide').data('title'));
	console.log($(event.currentTarget).find('.hide').data('img'));
	console.log($(event.currentTarget).find('.hide').html());
	sweetAlert({ 
		title: pickleTitle,   
		text: pickleText, 
		imageUrl: pickleImage
	});
});

//slick slider


	$('.main_featured-content-child-slick').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	});

      $('.pickle-news-slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	});

//social coming soon

$('.instagram').click(function(event) {
	event.preventDefault();
	sweetAlert('Coming soon!')
});

$('.pinterest').click(function(event) {
	event.preventDefault();
	sweetAlert('Coming soon!')
});	

//form

//event handler
		$('form').on('submit', function() {

		//preventDefault
		event.preventDefault();

	    // Get the form instance -- jQuery object becuase of the $
        var $form = $(event.currentTarget);

        console.log($('.email-form').val());

        //saving the value of the form field
        var formEmail = $('.email-form').val();

        //checking that the specific firn field is not empty
   		if (formEmail === '') {
   			alert('please fill out the entire form')
   		} else {

   		//submits form -- calling a function
   			submitForm($form);
   		};

        //this is the fancy stuff
        // Use Ajax to submit form data
        function submitForm($form){
        //url is the action. an action is where the form gets sent to
        var url = 'https://docs.google.com/forms/d/1XUTAo3H0giJGJTuzPckaiLblugWcIJ-bM8G4xZNMe0w/formResponse';
        var data = $form.serialize();
        $.post(url, $form.serialize(), function() {

        //every time the form submits...
        }).always(function() {
            console.warn('Data has totes been sent to Google.');
            sweetAlert('Thank you for signing up for BrineBuddy newsletters!');
            $("form")[0].reset();
		})
   	}		
		
})
