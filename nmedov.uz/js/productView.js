$(document).ready(function () {

    var lang = $('html').attr('lang');

    $('.product-column').find('.modal-open-link').click(function (e) {
        e.preventDefault();
        var productId = $(this).attr('id').substr(12);
        $.ajax({
            url: './' + lang + '/product/modal?id=' + productId,
        }).done(function(res) {
            $('#productModal').modal('show');
            $('#productModal').find('#modal-body').html(res);
        }).fail(function (err) {
            console.log(err);
        });
    });

    $('.feature-products').find('.product-item').click(function (e) {
        e.preventDefault();
        var productId = $(this).attr('id').substr(16);
        $.ajax({
            url: './' + lang + '/product/modal?id=' + productId,
        }).done(function(res) {
            $('#productModalMain').modal('show');
            $('#productModalMain').find('#modal-body').html(res);
        }).fail(function (err) {
            console.log(err);
        });
    });

    $('#productModal').on('hidden.bs.modal', function () {
        $(this).find('#modal-body').html('');
    });

    $('#productModalMain').on('hidden.bs.modal', function () {
        $(this).find('#modal-body').html('');
    });

});
