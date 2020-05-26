$(document).ready(function(){
    $('.burger_menu').click(function(){
        $('.topnav').show();
        $('.burger_menu').hide();
    });
     $('.burger_close').click(function(){
         $('.topnav').hide();
          $('.burger_menu').show();
     });
    
    
    let $origImg; // содержит элемент большой картинки
    let origSrc; // содержит путь к большой картинке
    $('.properties_photo_slider img')
        .mouseover(function(e){
            let $img = $(e.target);
            let imgSrc = $img.attr('src');
            $origImg = $img.parent().siblings('.branding');
            origSrc = $origImg.attr('src');
            $origImg.attr('src', imgSrc);
        })
        .mouseleave(function(e){
            $origImg.attr('src', origSrc);
        });
});




    