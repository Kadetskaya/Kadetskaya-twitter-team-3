(function($) {
    $(function() {

        $('ul.personal-tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div')
            $(".tabs-content-block").find('div.personal-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);