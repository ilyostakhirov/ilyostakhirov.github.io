
$(".side-menu").stick_in_parent();
$(document).ready(function() {
    $(document).on('click', '.large-dropdown-menu .control-slider a', function(e) {
        e.stopPropagation();
    });
});