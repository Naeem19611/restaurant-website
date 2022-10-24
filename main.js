$(document).ready(function(){
    $('#menu i').click(function(){
        $('#menu i').toggleClass('fa-times');
        $('.nav-toggle').toggleClass('navbar');
    });

    // $('.menu-btn').click(function(){
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    //   });

    $(window).on('load scroll',function(){

        $('#menu i').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header .header2').addClass('header-active');
        }else{
            $('header .header2').removeClass('header-active');
        }
        
    $('section').each(function(){
       
        let height = $(this).height();
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');

        if(top >= offset && top < offset + height){
            $('.nav-toggle ul li a').removeClass('active');
            $('.nav-toggle').find('href="#${id}"').addClass('active');
        }
    });   

    });

    $('.controls .buttons').click(function(){
        $(this).addClass('button-active').siblings().removeClass('button-active');
        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.dish .image').show(400);
        }else{
            $('.dish .image').not('.'+filter).hide(200);
            $('.dish .image').filter('.'+filter).show(400);
        }
    });

});