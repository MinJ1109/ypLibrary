$(document).ready(function(){
    onWindow();
    navSlide();
    mainSldie();
    todaySlide();
    hotSlide();
    recoSlide();

    divSize();
    divH();
    divH2();
    countLi();

    typeRecoClick();
    sliderBX();
});

function onWindow(){
    $(window).on('load', conMargin);
    $(window).on('load', divSize);
    $(window).on('load', divH);
    $(window).on('load', divH2);

    $(window).on('resize', conMargin); 
    $(window).on('resize', divSize);
    $(window).on('resize', divH);
    $(window).on('resize', divH2);
}

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

function divH(){
    var height = $(".mainContainer .recommend > div:last-child > div").outerHeight();
    $(".mainContainer .recommend > div:last-child").css('height', height);
}
function divH2(){
    var targetDiv = $(".mainContainer .typeReco > div ul li div:last-child");
    var maxHeight = 0;

    targetDiv.find('p').each(function(){
        var height = $(this).outerHeight();
        
        if (height > maxHeight){
            maxHeight = height;
        }
    });

    targetDiv.css('height', maxHeight);
}

function divSize(){
    $('.mainContainer .recommend > div:last-child > div ul li').each(function(){
        var imgWidth = $(this).find('img').width();
        $(this).find('div').css('width', imgWidth);
    });
}

function recoSlide(){    
    var activeBtn = $('.mainContainer .recommend > div:first-child input[type="button"]');

    activeBtn.on('click', function(){
        var otherDiv = $('.mainContainer .recommend > div:last-child > div');
        var target = $(this).data('click');
        var divTarget = $('#' + target);

        activeBtn.removeClass('active');
        $(this).addClass('active');
        otherDiv.removeClass('active');
        divTarget.addClass('active');

        divSize();
    });
}

function countLi(){
    var liLength = $('.mainContainer .typeReco > div ul li').length;
    
    $('.mainContainer .typeReco .liCount').text(liLength);
}

function typeRecoClick(){
    var activeSpan = $('.mainContainer .typeReco > div ul li');

    activeSpan.find('div:first-child').children('span').children('img').on('click', function(){
        var parentLi = $(this).closest('li');
        var otherImg = parentLi.find('div:first-child span img').not(this);
        var otherP = parentLi.find('div:last-child p');
        var target = $(this).data('click');
        var pTarget = $('.' + target);
        
        otherImg.removeClass('active');
        $(this).addClass('active');
        otherP.removeClass('active');
        pTarget.addClass('active');
    });
}

function sliderBX(){
    $(".typeSlider").bxSlider({
        minSlides: 1,
        maxSlides: 6,
        moveSlides: 1,
        infiniteLoop: true,
        pager: false,
        touchEnabled: false,
        nextSelector: '.mainContainer .typeReco h2 > span .nextBox',
        prevSelector: '.mainContainer .typeReco h2 > span .prevBox',
        nextText: 'Next',
        prevText: 'Prev',
        speed: 800,
        onSlideAfter: function($slideElement, oldIndex, newIndex){
            var currentSlideNumber = newIndex + 1;
            $('.liNumb').text(currentSlideNumber);
        }
    });
}