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
    $('#ingevoerdeNaam').text(e.target.value || 'Cha');
});


$('#OntstaanIdee').on('change', function(e) {
    $('#ingevoerdeIdee').text(e.target.value || 'Ji-Hun C');
});

$('#doelgroep').on('change', function(e) {
    $('#ingevoerdedoelgroep').text(e.target.value || '+230-582-6609');
});

$('#Doel').on('change', function(e) {
    $('#ingevoerdeDoel').text(e.target.value || 'willms_abby@gmail.com');
});

var email = 'innovatiehuis.noord-nederland@politie.nl';
    var subject = $('#NaamIdee').on('change', function(e) {$('#ingevoerdeNaam').prop('innerHTML'); });
    var emailBody1 = $('.purpose-radio-input').on('change', function(e) {$('#business-type').prop('innerHTML'); });
    var emailBody2 = $('#OntstaanIdee').on('change', function(e) {$('#ingevoerdeIdee').prop('innerHTML'); });
    var emailBody3 = $('#ingevoerdedoelgroep').prop('innerHTML');
    var emailBody4 = $('#ingevoerdeDoel').prop('innerHTML');
    var body = '&body'
    var subject = '?subject='

//console.$('#ingevoerdeNaam').prop('innerHTML');

 $('#emailLink').attr('href', 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody1 + emailBody2 + emailBody3 + emailBody4);


// $(function (e) {
//   $('#emailLink').on('click', function (event) {
// //      event.preventDefault();
//     var email = 'innovatiehuis.noord-nederland@politie.nl';
//     var subject = $('#ingevoerdeNaam').prop('innerHTML');
//     var emailBody1 = $('#business-type').prop('innerHTML');
//     var emailBody2 = $('#ingevoerdeIdee').prop('innerHTML');
//     var emailBody3 = $('#ingevoerdedoelgroep').prop('innerHTML');
//     var emailBody4 = $('#ingevoerdeDoel').prop('innerHTML');
//     $('#emailLink').prop('href') = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody1 + emailBody2 + emailBody3 + emailBody4;
//     window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody1 + emailBody2 + emailBody3 + emailBody4;
//   });
// });