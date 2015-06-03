$(function(){
	var $signinForm = $('#signinForm');
	var $signinFormLink = $('#signinFormLink');
	var $signupForm = $('#signupForm');
	var $signupFormLink = $('#signupFormLink');
	$('.input-group.date')
        .datepicker({
            format: 'dd/mm/yyyy'
        });
	$signupFormLink.on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$signinForm.hide();
		$signinFormLink.removeClass('active');
		$signupForm.fadeIn(700);
		$signupFormLink.addClass('active');
	});

	$signinFormLink.on('click',function(event){
		event.preventDefault();
		/* Act on the event */
		$signupForm.hide();
		$signupFormLink.removeClass('active');
		$signinForm.fadeIn(700);
		$signinFormLink.addClass('active');
	})

	$signinForm.formValidation({
	        framework: 'bootstrap',
	        icon: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'fa fa-refresh'
	        },
	        fields: {
	           email: {
                validators: {
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                    notEmpty: {
                        message: 'Email is required'
                    }
                }
            },
	            password: {
	                validators: {
	                    notEmpty: {
	                        message: 'The password is required'
	                    }
	                }
	            }
	        }
	    });


	$signupForm.formValidation({
	        framework: 'bootstrap',
	        icon: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        addOns: {
	            reCaptcha2: {
	                element: 'captchaContainer',
	                theme: 'light',
	                siteKey: '6Lfs1gcTAAAAAH3TxyU2nZ1MBACUGhJa9s8xiYmW',
	                timeout: 120,
	                message: 'The captcha is not valid'
	            }
	        },
	        fields: {
	            email: {
                validators: {
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                    notEmpty: {
                        message: 'Email is required'
                    }
                }
            },
	        password: {
	                validators: {
	                    notEmpty: {
	                        message: 'The password is required'
	                    },
	                    stringLength: {
                        	min: 6,
                        	message: 'The password must be atleast 6 characters long'
                    	}
	                }
	            },
	         confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    }
                }
            },
            dob: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            }
	        }
	    });
});