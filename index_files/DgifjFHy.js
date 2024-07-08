var clickform_flag = 0;
//版本

var timedown_flag = 0;


var clickf_flag = 0;
var cdn = getQueryVariable("cdn") ? location.protocol + "//" + getQueryVariable("cdn") : ''
var clk = getQueryVariable("clk");
var sub = getQueryVariable("sub");
var lang = getQueryVariable("lang");
var v = getQueryVariable("v");
var laId = getQueryVariable("laId");
var landerLang = getQueryVariable("landerLang").toLowerCase();
var tkd = getQueryVariable("tkd") ? getQueryVariable("tkd") : '';




var version = getQueryVariable("fv");

var _fbpixeldomain = getQueryVariable("trackingdomain") ? getQueryVariable("trackingdomain") : '';
var _fbpixelid = getQueryVariable("fbpixel") ? getQueryVariable("fbpixel") : '';

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



$(function () {


    function sendevent(event, eventvalue) {
        let img = new Image();
        img.src = "https://" + tkd + "/click.php?" + event + "=" + eventvalue;
    }

    function Pscroll() {
        let totalPageHeight = document.documentElement.scrollHeight;
        let pageCurrentHeight = document.documentElement.scrollTop || document.body.scrollTop;
        let newpageCurrentHeight = document.documentElement.scrollTop || document.body.scrollTop;
        let visitHeight = document.documentElement.scrollHeight;
        let pagePercent = 0;
        console.log("Pscroll");
        let scroll_flag = false;
        window.onscroll = function () {
            totalPageHeight = document.documentElement.scrollHeight;
            newpageCurrentHeight = document.documentElement.scrollTop || document.body.scrollTop;
            if (newpageCurrentHeight - pageCurrentHeight > visitHeight) {
                pageCurrentHeight = newpageCurrentHeight;
                pagePercent = (newpageCurrentHeight / totalPageHeight) * 100;
                let percent = pagePercent.toFixed(2);
                sendevent("event3", percent);
                console.log("percent:" + percent);
            }
            if ((visitHeight + newpageCurrentHeight == totalPageHeight || visitHeight +
                newpageCurrentHeight > totalPageHeight) && !scroll_flag) {
                newpageCurrentHeight = totalPageHeight;
                scroll_flag = true;
                sendevent("event3", 100);
                console.log("percent:" + 100);
            }
        }
    }

    function compeletePage() {
        let doc = window.document;
        doc.onreadystatechange = function () {
            if (doc.readyState == 'complete') {
                sendevent("event1", 1);
                console.log("complete");
            }

        }
    }




    function clickFform() {
        $('.formwrap-outer').on("click", function () {
            if (clickf_flag < 1) {

                sendevent("event4", 1);
                console.log("clickform");
            }
            clickf_flag = 1;
        });
    }

    function visitTDown() {
        let timedown_flag = false;
        var downtimer = setInterval(function () {
            let downdiv = $('#footbar-fixed').length;
            let style = $('#footbar-fixed')[0].style.display;
            if (downdiv == 0 || style === 'none' || timedown_flag) {
                // console.log(style);
            } else {
                sendevent("event5", 1);
                console.log("clickform");
                timedown_flag = true;
                clearInterval(downtimer);
            }
        }, 200);
        return {
            cancel: function () {
                clearInterval(downtimer);
            }
        };

    }

    function clickTDown() {
        let timeDCC = false;
        $('.join-button').on('click', function (e) {
            if (!timeDCC) {
                timeDCC = true;
                sendevent("event6", 1);
            }

        });
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



    function closeLoading() {
        $(".intgrtn-loader-holder").hide();
        $(".intgrtn-steps-navigation").hide();
        $(".intgrtn-step-2").hide();
        $(".intgrtn-step-3").show();
        $("#txt-nologin").hide();
    }





    function addFbevents() {

        if (_fbpixeldomain === '' && _fbpixelid !== '') {
            ! function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', _fbpixelid);
        }
    }

    function addPixelIframe(ev) {

        if (_fbpixeldomain === '' && _fbpixelid !== '') {
            fbq('track', ev);
        }
        if (_fbpixeldomain !== '' && _fbpixelid !== '') {
            var src1 = "https://" + _fbpixeldomain + "/__thankspage?pid=" + _fbpixelid + "&ev=" + ev;
            var iframe = document.createElement("iframe");
            iframe.style.width = "0px";
            iframe.style.height = "0px";
            iframe.style.border = "0px";
            iframe.setAttribute('src', src1);
            document.body.appendChild(iframe);
        }

    }




    function addfunnelbrand() {




        for (let i = 0; i < $(".keyword").length; i++) {
            $(".keyword")[i].innerHTML = childbrand;
        }
        if (typeof person != "undefined") {
            let file_path = cdn + "/COAB/img/" + person;
            let common_path = cdn + '/COAB/img/common';
            console.log(file_path, 'file_path')
            console.log(common_path, 'common_path')
            for (let i = 0; i < $("img").length; i++) {
                if ($("img")[i].id.indexOf("hero") > -1 && $("img")[i].id.length > 4) {
                    let img_code = $("img")[i].id.substring(4);
                    if (img_code !== '3') {
                        let idname = "#" + $("img")[i].id;
                        $(idname)[0].src = file_path + '/' + brank_logo + '_' + img_code + '.jpg'
                    }
                    if (img_code === '3') {
                        let idname = "#" + $("img")[i].id;
                        $(idname)[0].src = common_path + '/' + brank_logo + '_' + img_code + '.jpg'

                    }
                }
            }
        }

    }

    function secondstep() {




        // try {
        //     if (tkd !== '') {
        //         compeletePage();
        //         Pscroll();
        //         clickFform();
        //         visitTDown();
        //         clickTDown();
        //     }
        // } catch (e) {
        //     console.log("event error:" + e);
        // }





        setInterval(randomBid, 10 * 1000);

        var fistname = $('[name="firstName"]'),
            lastname = $('[name="lastName"]'),
            email = $('[name="email"]'),
            phone = $('[name="phone"]'),
            button = $('[type="submit"]');


        $("#btn-step-1").click(function () {
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
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                validEmail = pattern.test(String(email.val()).toLowerCase());
                if (validEmail === false) {
                    email.siblings(".intgrtn-input-message-error").show();
                    return;
                } else {
                    email.siblings(".intgrtn-input-message-error").hide();
                }
            }

            $.ajax({
                type: 'post',
                url: "https://reg.brillian-tracks.com/preRegistration",
                data: {
                    first_name: encodeURIComponent(fistname.val()),
                    last_name: encodeURIComponent(lastname.val()),
                    email: email.val(),
                    clk: clk,
                    sub: sub,
                    funnel: encodeURIComponent(mainbrand),
                    lang: lang,
                    laId: laId
                },
                dateType: "json",
            });
            $(".intgrtn-loader-holder").show();
            setTimeout(function () {

                $(".intgrtn-loader-holder").hide();

                $(".intgrtn-steps-navigation-item-1").removeClass("intgrtn-active");
                $(".intgrtn-steps-navigation-item-2").addClass("intgrtn-active");
                $(".intgrtn-step-1").hide();
                $(".intgrtn-step-2").show();
            }, 1000);

        });



        $("#back-to-reg").click(function () {
            $(".intgrtn-loader-holder").show();
            setTimeout(function () {
                $(".intgrtn-loader-holder").hide();

                $(".intgrtn-steps-navigation").show();
                $(".intgrtn-step-3").hide();
                $(".intgrtn-step-1").show();

                $(".intgrtn-steps-navigation-item-2").removeClass("intgrtn-active");
                $(".intgrtn-steps-navigation-item-1").addClass("intgrtn-active");

                $(".formHeader").text("Cambia tu vida hoy");

            }, 1000);
        });

        $('#_signup_form').on("keydown", function (e) {
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
        $('#_signup_form').on('submit', function (e) {

            e.preventDefault();
            let phoneprefix = KeepStringWithNum(iti.s.dialCode.toString());
            let numPhone = KeepStringWithNum(phone.val());

            if (numPhone.substring(0, 2) == phoneprefix) {
                numPhone = numPhone.substring(2, numPhone.length);
            }

            // console.log(phone.val());
            function judgePhoneLength() {
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
            if (!judgePhoneLength()) {
                return;
            };

            $(".intgrtn-input-message-error").hide();
            $(".intgrtn-loader-holder").show();
            $(".intgrtn-step-3").hide();


            addPixelIframe('Lead');
            addPixelIframe('Purchase');
            addPixelIframe('PageView');
            addPixelIframe('ViewContent');
            addPixelIframe('Subscribe');

            $.ajax({
                type: 'post',
                url: "https://reg.brillian-tracks.com/register",
                data: {
                    first_name: encodeURIComponent(fistname.val()),
                    last_name: encodeURIComponent(lastname.val()),
                    email: email.val(),
                    phone: numPhone,
                    area_code: phoneprefix,
                    clk: clk,
                    sub: sub,
                    funnel: encodeURIComponent(mainbrand),
                    lang: lang,
                    laId: laId
                },
                dateType: "json",
                success: function (response) {
                    console.log(JSON.parse(response)["result"]);
                    console.log(JSON.parse(response)["code"]);

                    if (JSON.parse(response)["code"] == 200) {
                        var loginurl = JSON.parse(response)["result"];
                        let thx_mode = ""
                        if (JSON.parse(response).hasOwnProperty("thx_mode_id")) {
                            thx_mode = JSON.parse(response)["thx_mode_id"];
                        }

                        closeLoading();
                        if (thx_mode == 1) {
                            top.location.href = loginurl;
                        } else if (thx_mode == 2) {
                            top.location.href = '/CThx/' + landerLang
                                .toLocaleLowerCase() + "Tk" +
                                '/?succ=s&name=' +
                                encodeURIComponent(funnel) + '&redirect=' +
                                encodeURIComponent(JSON.parse(response)["result"]) +
                                '&amount=' +
                                encodeURIComponent(amount) + '&currency=' +
                                encodeURIComponent(
                                    currency) + '&country=' + encodeURIComponent(
                                        country) + '&l=' +
                                encodeURIComponent(landerLang) + '&v=' +
                                encodeURIComponent(v);
                        } else {
                            top.location.href = '/CThx/' + "new_" + landerLang
                                .toLocaleLowerCase() + "TkC" +
                                '/?succ=s&name=' +
                                encodeURIComponent(funnel) + '&redirect=' +
                                encodeURIComponent(JSON.parse(response)["result"]) +
                                '&amount=' +
                                encodeURIComponent(amount) + '&currency=' +
                                encodeURIComponent(
                                    currency) + '&country=' + encodeURIComponent(
                                        country) + '&l=' +
                                encodeURIComponent(landerLang) + '&v=' +
                                encodeURIComponent(v);
                        }


                    } else if (JSON.parse(response)["code"] == 405) {
                        $(".intgrtn-step-2").show();
                        $(".intgrtn-step-3").hide();
                        $(".intgrtn-loader-holder").hide();
                        $(".intgrtn-steps-navigation").show();
                        $(".invalid-phone-error").show();
                    } else {
                        closeLoading();
                        top.location.href = '/CThx/' + "new_" + landerLang
                            .toLocaleLowerCase() + "TkC" +
                            '/?succ=f&name=' +
                            encodeURIComponent(funnel) + '&amount=' +
                            encodeURIComponent(
                                amount) + '&currency=' + encodeURIComponent(
                                    currency) +
                            '&country=' + encodeURIComponent(country) + '&l=' +
                            encodeURIComponent(landerLang) + '&v=' +
                            encodeURIComponent(v);
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            })
        });
    }


    addFbevents()
    if (decodeURIComponent(funnel).indexOf(":") > -1) {
        addfunnelbrand();
        secondstep();
    }





});
