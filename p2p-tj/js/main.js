$("#exdate").inputmask({ "mask": "99/99" });
$("#code1").inputmask({ "mask": "999999" });
$(".cardnum").inputmask({ "mask": "8600 9999 9999 9999" });
// $("#ammount").inputmask("99 999 999",{ "placeholder": "" });
$('#ammount').inputmask();
// $("#ammount").inputmask('999 999 999', { numericInput: true,"placeholder": "" }); 
$(function() {
    var $input = $('#ammount'),
        $buffer = $('.input-buffer');

    $input.on('input', function() {
        $buffer.text($input.val());
        $input.width($buffer.width());
    });

    $buffer.text($input.val());
    $input.width($buffer.width());
})