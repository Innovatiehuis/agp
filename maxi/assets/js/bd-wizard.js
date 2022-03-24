//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    stepsOrientation: "vertical",
    titleTemplate: '<span class="number">#index#</span>'
});

//Form control
var emailLink = 'mailto:' + email + '?subject=&body='
let values = {
    email: 'innovatiehuis.noord-nederland@politie.nl',
    subject: '',
    ingevoerdeIdee: '',
    ingevoerdedoelgroep: '',
    doel: '',
}

$('.purpose-radio-input').on('change', function(e) {
    $('#business-type').text(e.target.value);
});

$('#NaamIdee').on('change', function(e) {
    let mailString = 'mailto:' + values['email'] + '?';
    $('#ingevoerdeNaam').text(e.target.value);
    values['subject'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if (key != values['email'])
            if(key == 'subject'){
                mailString += 'subject=' + value + '&body=';
            } else {
                mailString += value;
            }
    }
    $('#emailLink').attr('href', mailString);
});


$('#OntstaanIdee').on('change', function(e) {
    $('#ingevoerdeIdee').text(e.target.value);
    let mailString = 'mailto:' + values['email'] + '?';
    values['ingevoerdeIdee'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if (key != values['email'])
            if(key == 'subject'){
                mailString += 'subject=' + value + '&body=';
            } else {
                mailString += value;
            }
        mailString += key + '=' + value + '&';
    }
    $('#emailLink').attr('href', mailString);
});

$('#doelgroep').on('change', function(e) {
    $('#ingevoerdedoelgroep').text(e.target.value);
    let mailString = 'mailto:' + values['email'] + '?';
    values['ingevoerdedoelgroep'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if (key != values['email'])
            if(key == 'subject'){
                mailString += 'subject=' + value + '&body=';
            } else {
                mailString += value;
            }
        mailString += key + '=' + value + '&';
    }
    $('#emailLink').attr('href', mailString);
});

$('#Doel').on('change', function(e) {
    $('#Doel').text(e.target.value);
    let mailString = 'mailto:' + values['email'] + '?';
    values['doel'] = e.target.value;
    for (const [key, value] of Object.entries(values)) {
        if (key != values['email'])
            if(key == 'subject'){
                mailString += 'subject=' + value + '&body=';
            } else {
                mailString += value;
            }
        mailString += key + '=' + value + '&';
    }
    $('#emailLink').attr('href', mailString);
});



var email = 'innovatiehuis.noord-nederland@politie.nl';
var subject = $('#ingevoerdeNaam').prop('innerHTML').toString();
var emailBody1 = $('.purpose-radio-input').prop('innerText');
var emailBody2 = $('#OntstaanIdee').prop('innerText');
var emailBody3 = $('#doelgroep').prop('innerText');
var emailBody4 = $('#Doel').prop('innerText');
console.log( $('#ingevoerdeNaam').prop('innerHTML').toString())
console.log( $('#ingevoerdeNaam').prop('innerHTML'))
console.log( $('#ingevoerdeNaam').innerHTML)
console.log( $('#ingevoerdeNaam').text())
console.log( $('#ingevoerdeNaam').html())

 $('#emailLink').attr('href', 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody1 + emailBody2 + emailBody3 + emailBody4);


// $(function (e) {
//   $('#emailLink').on('click', function (event) {
// //      event.preventDefault();
//     console.subject
//     console.emailBody1
//     console.emailBody2
//     console.emailBody3
//     console.emailBody4
//     var email = 'innovatiehuis.noord-nederland@politie.nl';
//     var subject = $('#ingevoerdeNaam').prop('innerHTML');
//     var emailBody1 = $('#business-type').prop('innerHTML');
//     var emailBody2 = $('#ingevoerdeIdee').prop('innerHTML');
//     var emailBody3 = $('#ingevoerdedoelgroep').prop('innerHTML');
//     var emailBody4 = $('#ingevoerdeDoel').prop('innerHTML');
//     $('#emailLink').attr('href', 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody1 + emailBody2 + emailBody3 + emailBody4);

//     //window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody1 + emailBody2 + emailBody3 + emailBody4;
//   });
// });