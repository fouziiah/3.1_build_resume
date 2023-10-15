$('document').ready(function(){
//////////////////////////////////////Button//////////////////////////////////////////////////////////
    $('button').on('click', function(){
        $('.resume').toggleClass('btn')
    });
/////////////////////////////////////Objective Heading/////////////////////////////////////////////
    $('.objective-heading').on("mouseenter", function(){
        $('.objective-heading').css('font-size', '20px');
    }).on("mouseleave", function(){
        $('.objective-heading').css('font-size', '16px');
    })
/////////////////////////////////////skills-heading/////////////////////////////////////////////
    $('.skills-heading').on("mouseenter", function(){
        $('.skills-heading').css('font-size', '20px');
    }).on("mouseleave", function(){
        $('.skills-heading').css('font-size', '16px');
    })
/////////////////////////////////////experience heading/////////////////////////////////////////////
    $('.experience-heading').on("mouseenter", function(){
        $('.experience-heading').css('font-size', '20px');
    }).on("mouseleave", function(){
        $('.experience-heading').css('font-size', '16px');
    })
/////////////////////////////////////education Heading/////////////////////////////////////////////
    $('.education-header').on("mouseenter", function(){
        $('.education-header').css('font-size', '20px');
    }).on("mouseleave", function(){
        $('.education-header').css('font-size', '16px');
    })
///////////////////////////////////////////////////////////////////////////////////////////////////////
    $('.objective-heading').on('click', function(){
        $('.objective-paragraph').slideToggle("slow");
    })

    $('.skills-heading').on('click', function() {
        $('.first-ul, .second-ul, .third-ul').slideToggle("slow");
    });

    $('.experience-heading').on('click', function() {
        $('.experience-title, .experience-ul').slideToggle("slow");
    });
    $('.education-header').on('click', function() {
        $('.education-title-date, #right-one').slideToggle("slow");
    });

})