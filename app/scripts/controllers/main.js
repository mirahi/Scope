'use strict';

$(document).ready(function () {

    $('.inputfile').each(function () {
        console.log("jotain tapahtuu");
        var $input = $(this),
            $label = $input.next('label'),
            labelVal = $label.html();

        $input.on('change', function (e) {
            var fileName = '';
            console.log("input change");
            if (e.target.value)
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                $label.find('span').html(fileName);
            
            else
                $label.html(labelVal);
        });

        // Firefox bug fix
        $input
            .on('focus', function () {
                $input.addClass('has-focus');
            })
            .on('blur', function () {
                $input.removeClass('has-focus');
            });
    });

    $("#show-more-button").click(function (e) {
        e.preventDefault();
        $('#show-more-button').hide();
        $('.loading_more').show();
        console.log("testing");

    });

    $("#upload_button").click(function (e) {
        console.log("click");
        $('#upload_container').show();
        $('#modal-close-button').show();
        $('#upload_button').hide();
        $('#search_button').hide();

    });

    $("#search_button").click(function (e) {
        console.log("click");
        $('.search').show();
        $('#upload_button').hide();
        $('#search_button').hide();

    });
    $("#modal-close-button").click(function (e) {
        console.log('$("#modal-close-button").click');
        $('#upload_container').hide();
        $('#modal-close-button').hide();
        $('#upload_button').show();
        $('#search_button').show();
    });

    $(".submit_upload").click(function (e) {
        $('#upload_container').hide();
        $('#modal-close-button').hide();
        $('#upload_button').show();
        $('#search_button').show();

    });
});