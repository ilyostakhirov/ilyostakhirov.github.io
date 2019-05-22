$(".pay input:checkbox").on("click", function() {
    if ($(".pay input:checkbox:checked").length > 1) {
        $('.total').show();
    } else {
        $('.total').hide();
    }
});