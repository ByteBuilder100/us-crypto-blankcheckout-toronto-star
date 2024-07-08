var timedownDiv = '<div class="footbar-root" role="dialog" id="footbar-fixed" style="display: none">\n' +
    '   <div class="footbar-container">\n' +
    '    <div class="footbar-body">\n' +
    '     <div class="footbar-content">\n' +
    '      <div class="first-mb">\n' +
    '       <img class="moolah" id="footbar-logo">\n' +
    '      </div>\n' +
    '      <p class="description">\n' +
    '       <span class="break-word main-word" id="word-sentence">SYSTEM HAS ALREADY PAID MORE THAN\n' +
    '        :</span>\n' +
    '       <span class="progressive15 break-word">\n' +
    '        <strong id="span_currency">€</strong>\n' +
    '        <span id="count_div">\n' +
    '         115,309,360.41\n' +
    '        </span>\n' +
    '       </span>\n' +
    '      </p>\n' +
    '      <div class="pristine">\n' +
    '       <div class="buttons-container">\n' +
    '        <a href="#custom-regbox">\n' +
    '         <button type="button" class="join-button">\n' +
    '          <span id="btn-text">JOIN NOW</span>\n' +
    '         </button>\n' +
    '        </a>\n' +
    '       </div>\n' +
    '      </div>\n' +
    '     </div>\n' +
    '    </div>\n' +
    '    <button type="button" id="btn-close"></button>\n' +
    '   </div>\n' +
    '  </div>';


$('body')[0].innerHTML += timedownDiv;

















let screenFlag = true;

function countdown(begindiv) {
    if (!!window.attachEvent) {
        window.attachEvent('onscroll', function () {
            if ((document.documentElement.scrollTop /* +  (document.documentElement.scrollHeight || window.innerHTML) */ >=
                begindiv) && screenFlag) {
                $("#footbar-fixed").show();
                screenFlag = false;
            }

            // else{oneDiv.removeAttribute("style");}

        });
    }
    if (!!window.addEventListener) {
        window.addEventListener("scroll", function () {
            if ((document.documentElement.scrollTop /* +  (document.documentElement.scrollHeight || window.innerHTML) */ >=
                begindiv || document.body.scrollTop >= begindiv || window.pageYOffset >= begindiv) && screenFlag) {
                $("#footbar-fixed").show();
                screenFlag = false;
            }

            // else{oneDiv.style.position="";oneDiv.style.top="auto";oneDiv.style.left="auto";oneDiv.style.marginLeft="0";oneDiv.removeAttribute("style");}
        });
    }
}

function getmulElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}




if (version.indexOf("2A") > -1) {
    $("#footbar-fixed").show();

}


if (version.indexOf("3A") > -1) {
    document.addEventListener("DOMContentLoaded", function () {
        var fortyPercent = document.documentElement.scrollHeight * 0.4;
        console.log(document.documentElement.scrollHeight, fortyPercent, 'fortyPercent')
        if ($("#custom-regbox").length > 0 && $("#custom-regbox")[0].getBoundingClientRect().top < fortyPercent) {
            console.log("custom")
            countdown($("#custom-regbox")[0].getBoundingClientRect().top);
        } else {
            countdown(fortyPercent);
            console.log("div error" + fortyPercent);
        }
    });


}





$(document).ready(function () {
    var prev_count = 115336918.01;
    var new_count = prev_count * 10;
    var count_till = prev_count < new_count ? new_count : new_count;
    $({
        Counter: prev_count
    }).animate({
        Counter: count_till
    }, {
        duration: 9000000,
        easing: 'swing',
        step: function () {
            jQuery("#count_div").html(this.Counter.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,
                '$1;').replace('.', ',').replace(';', '.').replace(';', '.').replace(';',
                    '.'));
        }
    });
});

$("#btn-close").click(function () {
    $("#footbar-fixed").hide();
});



var logo_path = cdn + "/COAB/img/logo/" + brank_logo + ".png"
console.log(brank_logo, 'brank_logo')
$("#footbar-logo").attr({
    "src": logo_path
});

const contentConfig = {
    "en": {
        "word": "SYSTEM HAS ALREADY PAID MORE THAN :",
        "button": "Join Now"
    },
    "de": {
        "word": "HAT DAS SYSTEM BEREITS MEHR ALS:",
        "button": "Jetzt teilnehmen"
    },
    "fr": {
        "word": "LE SYSTÈME A DÉJÀ PAYÉ PLUS DE :",
        "button": "Inscrivez-vous maintenant"
    },
    "nl": {
        "word": "HET SYSTEEM HEEFT AL MEER DAN",
        "button": "Nu Deelnemen"
    },
    "pt": {
        "word": "O SISTEMA JÁ PAGOU MAIS DE:",
        "button": "Registe-se agora"
    },
    "bg": {
        "word": "СИСТЕМАТА ВЕЧЕ Е ПЛАТИЛА ПОВЕЧЕ ОТ:",
        "button": "Присъединете се сега"
    },
    "hr": {
        "word": "SUSTAV JE VEĆ ISPLATIO VIŠE OD:",
        "button": "Pridružite se sad"
    },
    "cz": {
        "word": "SYSTÉM VYPLATIL JIŽ VÍCE NEŽ:",
        "button": "Přidejte se teď"
    },
    "dk": {
        "word": "SYSTEMET HAR ALLEREDE UDBETALT MERE END:",
        "button": "Tilmeld dig nu"
    },
    "ee": {
        "word": "SEE SÜSTEEM ON JUBA VÄLJA MAKSNUD ÜLE:",
        "button": "Liitu Kohe"
    },
    "fi": {
        "word": "JÄRJESTELMÄ ON TÄHÄN MENNESSÄ MAKSANUT JO YLI:",
        "button": "Liity nyt"
    },
    "gr": {
        "word": "ΤΟ ΣΥΣΤΗΜΑ ΕΧΕΙ ΗΔΗ ΠΛΗΡΩΣΕΙ ΗΔΗ ΠΕΡΙΣΣΟΤΕΡΑ ΑΠΟ:",
        "button": "Κάνε Εγγραφή"
    },
    "hu": {
        "word": "A RENDSZER MÁR TÖBBET FIZETETT, MINT:",
        "button": "Csatlakozzon most"
    },
    "is": {
        "word": "ÞEGAR HAFA VERIÐ BORGAÐAR ÚT MEIRA EN",
        "button": "Prófaðu núna"
    },
    "it": {
        "word": "IL SISTEMA HA EROGATO GIÀ PIÙ DI:",
        "button": "Registrati adesso"
    },
    "jp": {
        "word": "システムはすでに--以上を支払っております：",
        "button": "今すぐ参加しましょう。"
    },
    "kr": {
        "word": "시스템이 이미 다음 이상의 비용을 지불했습니다.",
        "button": "지금 참여하세요"
    },
    "lv": {
        "word": "SISTĒMA JAU IR SAMAKSĀJUSI VAIRĀK NEKĀ:",
        "button": "Pievienojies Tagad"
    },
    "lt": {
        "word": "SISTEMA IŠMOKĖJO DAUGIAU NEI:",
        "button": "Prisijunkite dabar"
    },
    "no": {
        "word": "SYSTEMET HAR ALLEREDE UTBETALT MER ENN:",
        "button": "Bli med nå!"
    },
    "es": {
        "word": "EL SISTEMA YA HA PAGADO MÁS DE",
        "button": "Únete ahora"
    },

    "pl": {
        "word": "SYSTEM ZAPŁACIŁ JUŻ PONAD: ",
        "button": "Dołącz Teraz"
    },
    "ro": {
        "word": "SISTEMUL A PLATIT DEJA MAI MULT DECÂT:",
        "button": "Alăturați-vă Acum"
    },
    "ru": {
        "word": "СИСТЕМА УЖЕ ЗАПЛАТИЛА БОЛЕЕ:",
        "button": "Зарегистрируйтесь сейчас"
    },
    "sk": {
        "word": "SYSTÉM VYPLATIL UŽ VIAC AKO:",
        "button": "Pridajte sa teraz"
    },
    "si": {
        "word": "SISTEM JE ŽE PLAČAL VEČ KOT:",
        "button": "Pridružite se zdaj"
    },
    "se": {
        "word": "SYSTEMET HAR REDAN BETALAT UT ÖVER:",
        "button": "Gå med nu"
    },
    "th": {
        "word": "ระบบของเราได้จ่ายเงินไปแล้วกว่า:",
        "button": "เข้าร่วมตอนนี้"
    },
    "tr": {
        "word": "SİSTEM ŞİMDİDEN DAHA FAZLASINI ÖDEDİ:",
        "button": "Şimdi Katıl"
    },
    "af": {
        "word": "STELSEL HET REEDS MEER BETAAL AS:",
        "button": "SLUIT NOU AAN"
    }
};


var currencyConfig = {
    "ar": "ARS",
    "at": "€",
    "au": "$",
    "az": "AZN",
    "bb": "$",
    "be": "€",
    "bg": "BGN",
    "bh": "BHD",
    "bo": "BOB",
    "br": "BRL",
    "bw": "BWP",
    "ca": "$",
    "ch": "CHF",
    "cl": "CLP",
    "co": "COP",
    "cr": "CRC",
    "cu": "CUP",
    "cz": "CZK",
    "de": "€",
    "dk": "DKK",
    "do": "DOP",
    "ec": "$",
    "ee": "€",
    "es": "€",
    "fi": "€",
    "fr": "€",
    "gb": "£",
    "ge": "GEL",
    "gr": "€",
    "gt": "GTQ",
    "hn": "HNL",
    "hr": "HRK",
    "hu": "Ft",
    "id": "IDR",
    "ie": "€",
    "in": "INR",
    "is": "ISK",
    "it": "€",
    "jp": "JPY",
    "ke": "KES",
    "kw": "KWD",
    "kz": "KZT",
    "li": "CHF",
    "lt": "€",
    "lu": "€",
    "lv": "€",
    "mt": "€",
    "mx": "MXN",
    "my": "MYR",
    "ng": "$",
    "ni": "NIO",
    "nl": "€",
    "no": "NOK",
    "nz": "$",
    "om": "OMR",
    "pa": "PAB",
    "pe": "PEN",
    "ph": "PHP",
    "pl": "PLN",
    "pt": "€",
    "py": "PYG",
    "qa": "QAR",
    "ru": "RUB",
    "sa": "SAR",
    "se": "kr",
    "sg": "$",
    "si": "€",
    "sk": "€",
    "sv": "SVC",
    "th": "THB",
    "tr": "TRY",
    "uk": "£",
    "us": "$",
    "uy": "UYU",
    "uz": "UZS",
    "ve": "VES",
    "ve": "VND",
    "za": "ZAR",
    "tz": "$",
    "gh": "$",
    "zm": "$",
    "na": "$",
    "bw": "$",
    "cm": "$",
    "ke": "$",
    "zw": "$"
}



if (contentConfig.hasOwnProperty(landerLang)) {
    var content = contentConfig[landerLang];

    $("#word-sentence").html(content.word);
    $("#btn-text").html(content.button);
}
$("#word-sentence").html();

console.log('config.js')
var current = window.country.toLowerCase();
if (currencyConfig.hasOwnProperty(current)) {
    if (currencyConfig.hasOwnProperty(current)) {
        var country_name = currencyConfig[current];
        $("#span_currency").html(country_name);

    }
}