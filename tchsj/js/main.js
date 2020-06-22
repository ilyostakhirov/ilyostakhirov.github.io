$('.nav-tabs-horizontal .nav-tabs').on('click', 'a', function(e) {
	e.preventDefault();
    var tab = $(this).parent(),
        tabIndex = tab.index(),
        tabPanel = $(this).closest('.nav-tabs-horizontal'),
        tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');
    $(this).addClass('active');
});