(function(window) {

    'use strict';

    var openCtrl = document.getElementById('btn-search'),
        closeCtrl = document.getElementById('btn-search-close'),
        searchContainer = document.querySelector('.search'),
        inputSearch = searchContainer.querySelector('.search__input');

    function init() {
        initEvents();
    }

    function initEvents() {
        openCtrl.addEventListener('click', openSearch);
        closeCtrl.addEventListener('click', closeSearch);
        document.addEventListener('keyup', function(ev) {
            // escape key.
            if (ev.keyCode == 27) {
                closeSearch();
            }
        });
    }

    function openSearch() {
        searchContainer.classList.add('search--open');
        setTimeout(function() {
            inputSearch.focus();
        }, 500);
    }

    function closeSearch() {
        searchContainer.classList.remove('search--open');
        inputSearch.blur();
        inputSearch.value = '';
    }

    init();

})(window);

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body').toggleClass('js-scroll');
    $('html').toggleClass('js-scroll');
});