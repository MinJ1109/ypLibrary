$( document ).ready(function(){
    conMargin(); 
    $(window).resize(conMargin); 
    navSlide();
    mainSldie();
    todaySlide();
    hotSlide();
});
function conMargin(){
    var height = $('header').outerHeight(true);
    var targetPoint = $('[class$="Container"]');
    
    targetPoint.css('margin-top', height);
}

function navSlide(){
    var target = $('#navPanel > li');

    target.hover(function(){
        $(this).children('ol').slideToggle(250);
    });
}

function mainSldie(){
    var prevBtn = $('.mainSlideBox span .prevBtn');
    var nextBtn = $('.mainSlideBox span .nextBtn');
    var target = $('.mainSlideBox ul li');
    var targetCount = target.length;

    prevBtn.click(function(){
        var targetIndex = target.index($('.mainSlideBox ul li.active'));
        var prevIndex = (targetIndex === 0) ? targetCount - 1 : targetIndex - 1;

        target.eq(targetIndex).removeClass('active');
        target.eq(prevIndex).addClass('active');
    });

    nextBtn.click(function(){
        var targetIndex = target.index($('.mainSlideBox ul li.active'));
        var nextIndex = (targetIndex === targetCount - 1) ? 0 : targetIndex + 1;

        target.eq(targetIndex).removeClass('active');
        target.eq(nextIndex).addClass('active');
    });
}

function todaySlide(){
    var prevBtn = $('.todayBook .controlStyle01 .prevBtn');
    var nextBtn = $('.todayBook .controlStyle01 .nextBtn');
    var target = $('.todayBook > div ul li');
    var targetCount = target.length;

    prevBtn.click(function(){
        var targetIndex = target.index($('.todayBook > div ul li.active'));
        var prevIndex = (targetIndex === 0) ? targetCount - 1 : targetIndex - 1;

        target.eq(targetIndex).removeClass('active');
        target.eq(prevIndex).addClass('active');
    });

    nextBtn.click(function(){
        var targetIndex = target.index($('.todayBook > div ul li.active'));
        var nextIndex = (targetIndex === targetCount - 1) ? 0 : targetIndex + 1;

        target.eq(targetIndex).removeClass('active');
        target.eq(nextIndex).addClass('active');
    });
}

function hotSlide(){
    var prevBtn = $('.hotBook .controlStyle01 .prevBtn');
    var nextBtn = $('.hotBook .controlStyle01 .nextBtn');
    var target = $('.hotBook > div ul li');
    var targetCount = target.length;

    prevBtn.click(function(){
        var targetIndex = target.index($('.hotBook > div ul li.active'));
        var prevIndex = (targetIndex === 0) ? targetCount - 1 : targetIndex - 1;

        target.eq(targetIndex).removeClass('active');
        target.eq(prevIndex).addClass('active');
    });

    nextBtn.click(function(){
        var targetIndex = target.index($('.hotBook > div ul li.active'));
        var nextIndex = (targetIndex === targetCount - 1) ? 0 : targetIndex + 1;

        target.eq(targetIndex).removeClass('active');
        target.eq(nextIndex).addClass('active');
    });
}