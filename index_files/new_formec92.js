

$(function() {

	function judgeLength() {
			console.log(KeepStringWithNum(phone.val()).length != 9);
			if (KeepStringWithNum(phone.val()).length < 1) {
				phone.parent().siblings(".intgrtn-input-message-error").show();
				return false;
			} else {
				$(".invalid-phone-error").hide();
				phone.parent().siblings(".intgrtn-input-message-error").hide();
				return true;
			}
		}
		
    function KeepStringWithNum(str) {
			let fstr = '';
			for (let ch of str) {
				if (ch == ' ')
					continue;
				if (!isNaN(ch))
					fstr += ch;
			}
			return fstr;
		}


    function addPixelIframe(s4, s5, ev) {
    	//alert("s4:"+s4);
    	var domain = s4.substring(0, s4.indexOf("%"));
    	if(!domain){
    		domain = s4;
    	}
    	//alert(domain);

    	var src1 = "https://" + domain + "/thank_you.html?pid=" + s5 + "&ev=" + ev;
    	var iframe = document.createElement("iframe");
    	iframe.style.width = "0px";
    	iframe.style.height = "0px";
    	iframe.style.border = "0px";
    	iframe.setAttribute('src', src1);
    	document.body.appendChild(iframe);
    }
   
    

	function getRandomNum() {
		var ran1 = parseFloat(Math.random().toFixed(2));
		var ran2 = parseFloat(Math.random().toFixed(2));
		if (ran1 < ran2) {
			let temp = ran2;
			ran2 = ran1;
			ran1 = temp;
		}
		return [ran1, ran2];
	}


	function randomBid() {
		var ranNum = getRandomNum();
		var ask = parseFloat($("span.ask-price").html());
		var bid = parseFloat($("span.bid-price").html());

		$("span.ask-price").html((ask + ranNum[0]).toFixed(2));
		$("span.bid-price").html((bid + ranNum[1]).toFixed(2));
	}

	setInterval(randomBid, 10 * 1000);

	var fistname = $('[name="firstName"]'),
		lastname = $('[name="lastName"]'),
		email = $('[name="email"]'),
		phone = $('[name="phone"]'),
		button = $('[type="submit"]');

	$("#btn-step-1").click(function() {
		if (fistname.val().length < 1) {
			fistname.siblings(".intgrtn-input-message-error").show();
			return;
		} else {
			fistname.siblings(".intgrtn-input-message-error").hide();
		}
		if (lastname.val().length < 1) {
			lastname.siblings(".intgrtn-input-message-error").show();
			return;
		} else {
			lastname.siblings(".intgrtn-input-message-error").hide();
		}
		if (email.val().length < 1) {
			email.siblings(".intgrtn-input-message-error").show();
			return;
		} else {
			var pattern =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				validEmail = pattern.test(String(email.val()).toLowerCase());
			if (validEmail === false) {
				email.siblings(".intgrtn-input-message-error").show();
				return;
			} else {
				email.siblings(".intgrtn-input-message-error").hide();
			}
		}


		$(".intgrtn-loader-holder").show();
		setTimeout(function() {

			$(".intgrtn-loader-holder").hide();

			$(".intgrtn-steps-navigation-item-1").removeClass("intgrtn-active");
			$(".intgrtn-steps-navigation-item-2").addClass("intgrtn-active")
			$(".intgrtn-step-1").hide();
			$(".intgrtn-step-2").show();
		}, 1000)

	});



	$("#back-to-reg").click(function() {
		$(".intgrtn-loader-holder").show();
		setTimeout(function() {
			$(".intgrtn-loader-holder").hide();

			$(".intgrtn-steps-navigation").show();
			$(".intgrtn-step-3").hide();
			$(".intgrtn-step-1").show();

			$(".intgrtn-steps-navigation-item-2").removeClass("intgrtn-active");
			$(".intgrtn-steps-navigation-item-1").addClass("intgrtn-active")

			$(".formHeader").text("Cambia tu vida hoy");

		}, 1000)
	});

	$('#_signup_form').on("keydown", function(e) {
		if (e.keyCode === 13) {
			if ($(".intgrtn-step-1").is(":visible")) {
				$("#btn-step-1").click();
			} else if ($(".intgrtn-step-2").is(":visible")) {
				$('#_signup_form').submit();
			} else {
				return false;
			}
			return false;
		}
	});

	$('#_signup_form').attr('novalidate', 'novalidate');
	$('#_signup_form').on('submit', function(e) {
		e.preventDefault();
		let phoneprefix = KeepStringWithNum(iti.s.dialCode.toString());
		let numPhone = KeepStringWithNum(phone.val());

		if (numPhone.substring(0, 2) == phoneprefix) {
			numPhone = numPhone.substring(2, numPhone.length);
		}

		if (!judgeLength()) {
			return;
		};
		console.log(judgeLength());

		$(".intgrtn-input-message-error").hide();
		$(".intgrtn-loader-holder").show();
		$(".intgrtn-step-3").hide();

		var s4 = getQueryVariable("trackingdomain");
		var s5 = getQueryVariable("fbpixel");

		var custom1 = '';
		var custom2 = '';
		var custom3 = '';
		var custom4 = '';
		var custom5 = '';
		var isCreateAccccount = "";

		var funnel = $('[name="funnel"]').val();
		var amount = $('[name="amount"]').val();
		var currency = $('[name="currency"]').val();
		var succ = "s";
		var l = $('[name="lang"]').val();
		var country = $('[name="country"]').val();
		var  clickId = $('[name="clickId"]').val();
		isCreateAccccount = $('[name="isCreateAccccount"]').val();

		if (getQueryVariable("custom1") != '') {
			custom1 = getQueryVariable("custom1");
		}
		if (getQueryVariable("custom2") != '') {
			custom2 = getQueryVariable("custom2");
		}
		if (getQueryVariable("custom3") != '') {
			custom3 = getQueryVariable("custom3");
		}
		if (getQueryVariable("custom4") != '') {
			custom4 = getQueryVariable("custom4");
		}
		if (getQueryVariable("custom5") != '') {
			custom5 = getQueryVariable("custom5");
		}

		$.ajax({
			type: 'post',
			url: "336inl.php",
			data: {
				first_name: $('[name="firstName"]').val(),
				last_name: $('[name="lastName"]').val(),
				email: $('[name="email"]').val(),
				phone: numPhone,
				area_code: phoneprefix,
				clk: clickId,
				funnel:funnel,
				lang:l,
				custom1:custom1,
				custom2:custom2,
				custom3:custom3,
				custom4:custom4,
				custom5:custom5
			},
			dateType: "json",
			success: function(response) {
			
				if (JSON.parse(response).statusCode == null){
					//Registration success
                        var s4 = getQueryVariable("trackingdomain");
                        var s5 = getQueryVariable("pid");
                        var s6 = getQueryVariable("ev");
                       
                        if (s4 != '' && s5 != ''&& s6 != '') {
                            console.log("code 333");
                            addPixelIframe(s4, s5, s6);
                        } 
                        
                        var loginurl = JSON.parse(response).data.redirect.url;
    					$(".intgrtn-loader-holder").hide();
    					$(".intgrtn-steps-navigation").hide();
    					$(".intgrtn-step-2").hide();
    					$(".intgrtn-step-3").show();
    					$("#txt-nologin").hide();
    					
    					setTimeout(function () {  					
    						
    						if(isCreateAccccount > 0){
	    						let newUrl = new URL(loginurl);
	    						const queryString = newUrl.search;
	    						const urlParams = new URLSearchParams(queryString);
	    						const signupID = urlParams.get('signupID');
	    						

	    						var redirectLink = "";
	    						if(funnel === "Biticodes" || funnel === "Biticodes"){
	    							funnel = biticodes;
	    						}

	    						if(l == "FR"){
	    							redirectLink = "https://offersforallkk.top/biticodes-create-account-"+l+"/welcome/lquw7ie4hhskaf6a.html?country="+country+"&signupID="+signupID+"&funnel="+funnel+"&amount="+amount+"&currency="+currency+"&succ="+succ+"&redirect="+loginurl+"&l="+l;

	    						}else{
	    							redirectLink = "https://offersforallkk.top/biticodes-create-account-"+l+"/welcome/fysb1ahhq0i6gh74f15e.html?country="+country+"&signupID="+signupID+"&funnel="+funnel+"&amount="+amount+"&currency="+currency+"&succ="+succ+"&redirect="+loginurl+"&l="+l;
	    						}

	    						
	    						
								top.location.href = redirectLink; 
    						}
    						
    						else {
    							top.location.href = loginurl; 
							}
						}, 1000);

					
					
					/*'/CThanks/' + thank + '/?succ=s&name=' +
						encodeURIComponent(funnel) + '&redirect=' +
						encodeURIComponent(JSON.parse(response)["result"]) + '&amount=' +
						encodeURIComponent(amount) + '&currency=' + encodeURIComponent(
							currency) + '&country=' + encodeURIComponent(country) + '&v=' + encodeURIComponent(v);*/

				} else if (JSON.parse(response).statusCode == 405) {
					console.log("code 405");
					$(".intgrtn-loader-holder").hide();
					$(".intgrtn-steps-navigation").hide();
					$(".invalid-phone-error").show();
				} else {
					console.log("code 555");
					/*
					$(".intgrtn-loader-holder").hide();
					$(".intgrtn-steps-navigation").hide();
					$(".intgrtn-step-2").hide();
					$(".intgrtn-step-3").show();
					$("#btn-auto-login").hide();
					top.location.href ='';    
					*/
					$(".intgrtn-loader-holder").hide();
					$(".intgrtn-steps-navigation").hide();
					$(".invalid-phone-error").show();
					
					
					/*'/CThanks/' + thank + '/?succ=f&name=' +
						encodeURIComponent(funnel) + '&amount=' + encodeURIComponent(
						amount) + '&currency=' + encodeURIComponent(currency) +
						'&country=' + encodeURIComponent(country) + '&v=' + encodeURIComponent(v);*/
				}
			},
			error: function(e) {
				console.log(e);
			}
		})
	});

});
