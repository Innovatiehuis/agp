//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    stepsOrientation: "vertical",
    titleTemplate: '<span class="number">#index#</span>'
});

//Form control

var emailBody1 = $('.purpose-radio-input').on('change', function(e) {
    $('#business-type').text(e.target.value);
});

var subject = $('#NaamIdee').on('change', function(e) {
    $('#ingevoerdeNaam').text(e.target.value || 'Cha');
});


var emailBody2 = $('#OntstaanIdee').on('change', function(e) {
    $('#ingevoerdeIdee').text(e.target.value || 'Ji-Hun C');
});

var emailBody3 = $('#doelgroep').on('change', function(e) {
    $('#ingevoerdedoelgroep').text(e.target.value || '+230-582-6609');
});

var emailBody4 = $('#Doel').on('change', function(e) {
    $('#ingevoerdeDoel').text(e.target.value || 'willms_abby@gmail.com');
});

var email = 'innovatiehuis.noord-nederland@politie.nl';
//     var subject = $('#ingevoerdeNaam').prop('innerHTML');
//     var emailBody1 = $('#business-type').prop('innerHTML');
//     var emailBody2 = $('#OntstaanIdee').on('change', function(e) {$('#ingevoerdeIdee').prop('innerHTML'); });
//     var emailBody3 = $('#doelgroep').on('change', function(e) {$('#ingevoerdedoelgroep').prop('innerHTML'); });
//     var emailBody4 = $('#Doel').on('change', function(e) {$('#ingevoerdeDoel').prop('innerHTML'); });



 $('#emailLink').attr('href', 'mailto:' + email + '?subject=' + subject.text(e.target.value).prop('innerHTML') + '&body=' + emailBody1.prop('innerHTML') + emailBody2.prop('innerHTML') + emailBody3.prop('innerHTML') + emailBody4.prop('innerHTML'));


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