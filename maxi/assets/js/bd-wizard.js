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
    ingevoerdeIdee: '',
    ingevoerdedoelgroep: '',
    doel: '',
    business_type: '',
}

$('.purpose-radio-input').on('change', function(e) {
    let mailString = '';
    $('#business-type').text(e.target.value);
    values['business_type'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject=' + value + '&body=';
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
            mailString += 'subject=' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});


$('#OntstaanIdee').on('change', function(e) {
    $('#ingevoerdeIdee').text(e.target.value);
    let mailString = '';

    values['ingevoerdeIdee'] = e.target.value;

    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject=' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }

    $('#emailLink').attr('href', mailString);
});

$('#doelgroep').on('change', function(e) {
    $('#ingevoerdedoelgroep').text(e.target.value);
    let mailString = '';
    values['ingevoerdedoelgroep'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject=' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});

$('#Doel').on('change', function(e) {
    $('#Doel').text(e.target.value);
    let mailString = '';
    values['doel'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if(key == 'email'){
            mailString += 'mailto:' + values['email'] + '?'
        }
        else if(key == 'subject'){
            mailString += 'subject=' + value + '&body=';
        } else {
            mailString += key + '%3A' + '%20' + value + '%0D%0A';
        }
    }
    $('#emailLink').attr('href', mailString);
});


console.log(10) 