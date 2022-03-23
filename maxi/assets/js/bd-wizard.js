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

$(function () {
  $('#emailLink').on('click', function (event) {
      event.preventDefault();
    alert("Je bericht wordt verstuurd");
    var email = 'innovatiehuis.noord-nederland@politie.nl';
    var subject = $('#NaamIdee').on('change', function(e) {
    $('#ingevoerdeNaam').text(e.target.value || 'Cha');
});
    var emailBody1 = $('.purpose-radio-input').on('change', function(e) {
    $('#business-type').text(e.target.value);
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
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody1 + emailBody2 + emailBody3 + emailBody4;
  });
});