//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    stepsOrientation: "vertical",
    titleTemplate: '<span class="number">#index#</span>'
});

//Form control
let values = {
    email: 'innovatiehuis.noord-nederland@politie.nl',
    subject: '',
    Idee: '',
    Doelgroep: '',
    Doel: '',
    Bericht: '',
    naam: '',
    afdeling: '',
    functie: '',
    telefoonnummer: '',
}

$('.purpose-radio-input').on('change', function(e) {
    let mailString = '';
    $('#business-type').text(e.target.value);
    values['Bericht'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

$('#NaamIdee').on('change', function(e) {
    let mailString = '';
    $('#ingevoerdeNaam').text(e.target.value);
    values['subject'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});


$('#OntstaanIdee').on('change', function(e) {
    $('#ingevoerdeIdee').text(e.target.value);
    let mailString = '';

    values['Idee'] = e.target.value;

    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }

    $('#emailLink').attr('href', mailString);
});

$('#doelgroep').on('change', function(e) {
    $('#ingevoerdedoelgroep').text(e.target.value);
    let mailString = '';
    values['Doelgroep'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

$('#Doel').on('change', function(e) {
    $('#ingevoerdedoel').text(e.target.value);
    let mailString = '';
    values['Doel'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

$('#naam').on('change', function(e) {
    $('#indienNaam').text(e.target.value);
    let mailString = '';
    values['naam'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

$('#afdeling').on('change', function(e) {
    $('#indienAfdeling').text(e.target.value);
    let mailString = '';
    values['afdeling'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

$('#functie').on('change', function(e) {
    $('#indienFunctie').text(e.target.value);
    let mailString = '';
    values['functie'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

$('#telefoonnummer').on('change', function(e) {
    $('#indienTelefoonnummer').text(e.target.value);
    let mailString = '';
    values['telefoonnummer'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject= Bericht van Agora: ' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

console.log(25) 