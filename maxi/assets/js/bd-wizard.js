//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    stepsOrientation: "vertical",
    titleTemplate: '<span class="number">#index#</span>'
});

//Form control

$('.purpose-radio-input').on('change', function(e) {
    $('#business-type').text(e.target.value);
});

$('#NaamIdee').on('change', function(e) {
    $('#ingevoerdeNaam').text(e.target.value);
});


$('#OntstaanIdee').on('change', function(e) {
    $('#ingevoerdeIdee').text(e.target.value);
});

$('#doelgroep').on('change', function(e) {
    $('#ingevoerdedoelgroep').text(e.target.value);
});

$('#Doel').on('change', function(e) {
    $('#ingevoerdeDoel').text(e.target.value);
});

var email = 'innovatiehuis.noord-nederland@politie.nl';
var subject = $('#ingevoerdeNaam').text(target.value);
var emailBody1 = $('.purpose-radio-input').prop('innerText');
var emailBody2 = $('#OntstaanIdee').prop('innerText');
var emailBody3 = $('#doelgroep').prop('innerText');
var emailBody4 = $('#Doel').prop('innerText');


setTimeout(() => {
     $('#emailLink').attr('href', 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody1 + emailBody2 + emailBody3 + emailBody4);
})


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