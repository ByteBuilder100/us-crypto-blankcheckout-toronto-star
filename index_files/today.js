function today(language) {

    var dayNames = {
        'en' : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        'fr' : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    };

    var monthNames = {
        'en' : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        'fr' : ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembr", "Octobre", "Novembre", "Décembre"],
    };

    var lang = (undefined === dayNames[language] || undefined === monthNames[language]) ? 'en' : language;

    var now = new Date();

    document.write(dayNames[lang][now.getDay()] + ", " + now.getDate() + " " + monthNames[lang][now.getMonth()] + "  " + now.getFullYear());

}
