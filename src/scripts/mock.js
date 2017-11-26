//DUMMY PAGE FUNCTIONALITY
var activeComponent = undefined;
var activePickerbase = undefined;

var cloneCountA = 1;
var cloneCountB = 1;

var longtext = undefined;
var selected_image = undefined;
var selected_video = undefined;
var selected_text = undefined;
var selected_header = undefined;
var selected_sub_header = undefined;

var selected_product_name = undefined;
var selected_product_brand = undefined;
var selected_product_price = undefined;
var selected_product_id = undefined;
var selected_product_image = undefined;

var seomax_a = 160;
var seomax_b = 70;


var $win = $(window); // or $box parent container
var $box = $('#component-selecta');
var $boxb = $('#language-selecta');
var $boxc = $('#device-selecta');
var $boxd = $('.sub-left').closest('.slds-dropdown-trigger');
var $boxe = $('.sub-right .slds-dropdown-trigger');

var show_recommendation = false;

//var $box = $('.slds-dropdown-trigger');
var copytext = undefined;


//HIDE ALL MENUS
$(function(){
    $win.on('click.Bst', function(event){
        //MAIN COMPONENT SELECT
        if (
            $box.has(event.target).length == 0 //checks if descendants of $box was clicked
            &&
            !$box.is(event.target) //checks if the $box itself was clicked
            &&
            $($box).hasClass('slds-is-open')
        ){
            $($box).toggleClass('slds-is-open')
        }
        //LOCALIZATION SELECT
        if (
            $boxb.has(event.target).length == 0 //checks if descendants of $box was clicked
            &&
            !$boxb.is(event.target) //checks if the $box itself was clicked
            &&
            $($boxb).hasClass('slds-is-open')
        ){
            $($boxb).toggleClass('slds-is-open')
        }
        //DEVICE SELECT
        if (
            $boxc.has(event.target).length == 0 //checks if descendants of $box was clicked
            &&
            !$boxc.is(event.target) //checks if the $box itself was clicked
            &&
            $($boxc).hasClass('slds-is-open')
        ){
            $($boxc).toggleClass('slds-is-open')
        }
        //SUB LEFT SELECT
        if (
            $boxd.has(event.target).length == 0 //checks if descendants of $box was clicked
            &&
            !$boxd.is(event.target) //checks if the $box itself was clicked
            &&
            $($boxd).hasClass('slds-is-open')
        ){
            $($boxd).toggleClass('slds-is-open')
        }
        //SUB RIGHT SELECT
        if (
            $boxe.has(event.target).length == 0 //checks if descendants of $box was clicked
            &&
            !$boxe.is(event.target) //checks if the $box itself was clicked
            &&
            $($boxe).hasClass('slds-is-open')
        ){
            $($boxe).toggleClass('slds-is-open')
        }


    });

    return false;
});



//COUNT SEO CHARS

$('#spn-id-seo_description').html(seomax_a+'  Remaining');
$('#textarea-id-seo_description').keyup(function () {
    var lenght1 = $('#textarea-id-seo_description').val().length;
    var remaining = seomax_a - lenght1;
    $('#spn-id-seo_description').html(remaining + '  Remaining');
    if (remaining < 0) {
        $('#spn-id-seo_description').css('opacity', '0.4').css('color', 'red');
    }
    else {
        $('#spn-id-seo_description').css('opacity', '1').css('color', 'black');
    }
    if (remaining < 10) {
        $('#spn-id-seo_description').addClass('slds-destructive');
    }
    else {
        $('#spn-id-seo_description').removeClass('slds-destructive');
    }

});
$('#spn-id-seo_title').html(seomax_b+'  Remaining');
$('#input-seo_title').keyup(function () {
    var lenght2 = $('#input-seo_title').val().length;
    var remaining_b = seomax_b - lenght2;
    $('#spn-id-seo_title').html(remaining_b + '  Remaining');
    if (remaining_b < 0) {
        $('#spn-id-seo_title').css('opacity', '0.4').css('color', 'red');
    }
    else {
        $('#spn-id-seo_title').css('opacity', '1').css('color', 'black');
    }
    if (remaining_b < 10) {
        $('#spn-id-seo_title').css('color', 'red'); }
    else {
        $('#spn-id-seo_title').css('color', 'black');
    }

});


//CREATE PAGE TOAST
$('button.js-save-modal-id-2').click(function () {
    $('.modal-id-2').toggleClass('slds-hide');
    $('#created-toast').toggleClass('slds-hide');
});


$('button.close-toast-2').click(function () {
    $('#created-toast').toggleClass('slds-hide');
});



//BACK TO LIST
$('#back-to-list').click(function () {
    location.href = 'page-list.html';
});


//SCREEN SIZES
$('#trigger-phone').click(function () {
    $('#side_device_selector ul li').removeClass('slds-is-selected');
    $(this).closest('li').addClass('slds-is-selected');

    $('.page-content').css('max-width', '320px');
    $('#tools .slds-dropdown-trigger').toggleClass('slds-is-open');

});
$('#trigger-tablet').click(function () {
    $('#side_device_selector ul li').removeClass('slds-is-selected');
    $(this).closest('li').addClass('slds-is-selected');

    $('.page-content').css('max-width', '800px');
    $('#tools .slds-dropdown-trigger').toggleClass('slds-is-open');
});
$('#trigger-desktop').click(function () {
    $('#side_device_selector ul li').removeClass('slds-is-selected');
    $(this).closest('li').addClass('slds-is-selected');

    $('.page-content').css('max-width', '100%');
    $('#tools .slds-dropdown-trigger').toggleClass('slds-is-open');
});



//FILTER VIEW
$('#trigger_preview').click(function () {
    $('#poppinD').toggleClass('slds-hide');
});
$('.js-close-filter-view').click(function () {
    $('#poppinD').toggleClass('slds-hide');
});


//PREVIEW
$('#trigger-preview').click(function () {
    $('.slds-button--icon-more').toggleClass('slds-hide');
    $('.region').toggleClass('region region-off');
    $('#editor').toggleClass('editor-off');
    $('#trigger-back-to-edit').toggleClass('slds-hide');
    $('#trigger-preview').toggleClass('slds-hide');
    $('#tools').toggleClass('slds-hide');
    $('.mini-menu').toggleClass('slds-hide');
    $('.sub-mini-menu').toggleClass('slds-hide');
    $('.placeholder').toggleClass('placeholder placeholder-off');
    $('#trigger-publish').toggleClass('slds-hide');
    $('#sidebar-navigator').toggleClass('slds-hide');
});
$('#trigger-back-to-edit').click(function () {
    $('.slds-button--icon-more').toggleClass('slds-hide');
    $('.region-off').toggleClass('region-off region');
    $('.editor-off').toggleClass('editor-off editor');
    $('#trigger-back-to-edit').toggleClass('slds-hide');
    $('#trigger-preview').toggleClass('slds-hide');
    $('#tools').toggleClass('slds-hide');
    $('.mini-menu').toggleClass('slds-hide');
    $('.sub-mini-menu').toggleClass('slds-hide');
    $('.placeholder-off').toggleClass('placeholder-off placeholder');
    $('#trigger-publish').toggleClass('slds-hide');
    $('#sidebar-navigator').toggleClass('slds-hide');
});


//PUBLISH
$('#trigger-publish').click(function() {
    $('#modal-id-101').toggleClass('slds-hide');
});
$('#modal-id-101 #trigger-close').click(function() {
    $('#modal-id-101').toggleClass('slds-hide');
});
$('#modal-id-101 #trigger-cancel').click(function() {
    $('#modal-id-101').toggleClass('slds-hide');
});
$('#modal-id-101 #trigger-publish').click(function() {
    $('#modal-id-101').toggleClass('slds-hide');
    $('#toast-page-published').toggleClass('slds-hide');
    $('#trigger-publish').toggleClass('slds-hide');
    $('#trigger-preview').toggleClass('slds-hide');
    $('#trigger-published').toggleClass('slds-hide');
    $('#not_published').toggleClass('slds-hide');
    $('#page_published').toggleClass('slds-hide');
});
$('#toast-page-published .close-toast-2').click(function() {
    $('#toast-page-published').toggleClass('slds-hide');
});


//TRIGGER DELETE PAGE
$('.js-open-modal-id-1').click(function () {
    $('.modal-id-1').toggleClass('slds-hide');
    $('.slds-dropdown-trigger').removeClass('slds-is-open');
    $('.slds-dropdown-trigger').addClass('slds-is-closed');
});

//DELETE PAGE MODAL
$('.modal-id-1 button.js-close-modal-id-1').click(function () {
    $('.modal-id-1').toggleClass('slds-hide');
    $('#toast-id-1').toggleClass('slds-hide');
});

//CLOSE DELETE TOAST
$('#js-close-toast-id-1').click(function () {
    $('#toast-id-1').toggleClass('slds-hide');
});

//TRIGGER NEW PAGE
$('#js-open-modal-id-2').click(function () {
    $('.modal-id-2').toggleClass('slds-hide');
});

//NEW PAGE MODAL
$('.js-close-modal-id-2').click(function () {
    $('.modal-id-2').toggleClass('slds-hide');
});
$('.js-close-modal-id-100').click(function () {
    $('.modal-id-100').toggleClass('slds-hide');
});
$('#js-open-modal-100').click(function () {
    $('.modal-id-100').toggleClass('slds-hide');
});

//SIDEBAR
$('#button-page-navigator').click(function () {
    $('#sidebar-navigator').toggleClass('slds-hide');
});
$('#button-close-navigator').click(function () {
    $('#modal-page-navigator').toggleClass('slds-hide');
});
$('#button-preview-settings').click(function () {
    $('#modal-id-102').toggleClass('slds-hide');
});
$('#button-close-navigator').click(function () {
    $('#sidebar-navigator').toggleClass('slds-hide');
});


//MODAL PREVIEW SETTINGS
$('#modal-id-102 .js-close-modal-id-102').click(function () {
    $('#modal-id-102').toggleClass('slds-hide');
});


//TEXT COMPONENT
$('.add-text-dummy').click(function(){
    var component_text = $('#dummy_container .my_text_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
    var navigator_text = $('#dummy_container .my_text_navigator li').clone(true,true).addClass('item'+ cloneCountB++);

    $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

    component_text.appendTo('#region').hide().fadeIn(600);
    navigator_text.appendTo('#navigator').hide().fadeIn(600);

    //now open editor
    activeComponent = undefined;
    activeComponent = $(component_text).attr('class');
    $('.text-component-editor').toggleClass('slds-hide');

    return false;
});
$('.text-component button.js-trigger-edit-component').click(function(){
    //$(this).closest('li').find('.delete-component').toggleClass('slds-hide');
    //$(this).closest('#region').find('li').attr('class');
    activeComponent = undefined;
    activeComponent = $(this).closest('li').attr('class');

    $('.text-component-editor').toggleClass('slds-hide');
    return false;
});
$('.text-component-editor button.trigger-save-modal').click(function(){
    selected_text = $('.slds-rich-text-area__content').html();
    selected_header = $('.slds-input-header').val();

    $('.'+activeComponent +' .text-holder').html(selected_text);
    $('.'+activeComponent +' .header-holder').html(selected_header);

    $('.text-component-editor').toggleClass('slds-hide');
    return false;
});


//SLIDER COMPONENT
$('.add-slider-dummy').click(function(){
    var component_slider = $('#dummy_container .my_slider_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
    var navigator_slider = $('#dummy_container .my_slider_navigator li').clone(true,true).addClass('item'+ cloneCountB++);

    $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

    component_slider.appendTo('#region').hide().fadeIn(600);
    navigator_slider.appendTo('#navigator').hide().fadeIn(600);

    //now open editor
    activeComponent = undefined;
    activeComponent = $(component_slider).attr('class');
    $('.slider-component-editor').toggleClass('slds-hide');
    //return false;

});
$('.slider-component button.js-trigger-edit-component').click(function(){
    activeComponent = undefined;
    activeComponent = $(this).closest('li').attr('class');

    $('.slider-component-editor').toggleClass('slds-hide');
    return false;
});
$('.slider-component-editor button.trigger-save-modal').click(function(){
    $('.slider-component-editor').toggleClass('slds-hide');
    return false;
});


//IMAGE COMPONENT
$('.add-image-dummy').click(function(){
    var component_text = $('#dummy_container .my_image_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
    var navigator_text = $('#dummy_container .my_image_navigator li').clone(true,true).addClass('item'+ cloneCountB++);


    $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

    component_text.appendTo('#region').hide().fadeIn(600);
    navigator_text.appendTo('#navigator').hide().fadeIn(600);


    //now open editor
    activeComponent = undefined;
    activeComponent = $(component_text).attr('class');

    class_activeComponent = '.' +activeComponent;
    $('.image-component-editor').toggleClass('slds-hide');


    return false;
});
$('.image-component button.js-trigger-edit-component').click(function(){

    //now open editor
    activeComponent = undefined;
    activeComponent = $(this).closest('li').attr('class');
    class_activeComponent = '.' +activeComponent;

    $('.image-component-editor').toggleClass('slds-hide');
    return false;
});
$('.image-component-editor button.trigger-save-modal').click(function(){

    $('.image-component-editor').toggleClass('slds-hide');
    //$('.'+activeComponent +' .image-holder').attr('src', '/assets/' +selected_image);
    $('.'+activeComponent +' .image-holder').attr('src', selected_image);
    return false;
});


//TARGETED_BANNER COMPONENT
$('.add-targeted_banner-dummy').click(function(){
    var component_text = $('#dummy_container .my_targeted_banner_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
    var navigator_text = $('#dummy_container .my_targeted_banner_navigator li').clone(true,true).addClass('item'+ cloneCountB++);

    $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

    component_text.appendTo('#region').hide().fadeIn(600);
    navigator_text.appendTo('#navigator').hide().fadeIn(600);

    activeComponent = undefined;
    activeComponent = $(component_text).attr('class');

    class_activeComponent = '.' +activeComponent;

    $('.targeted_banner-component-editor').toggleClass('slds-hide');


    return false;
});
$('.target-component button.js-trigger-edit-component').click(function(){

    //now open editor
    activeComponent = undefined;
    activeComponent = $(this).closest('li').attr('class');
    class_activeComponent = '.' +activeComponent;

    $('.targeted_banner-component-editor').toggleClass('slds-hide');

    return false;
});
$('.targeted_banner-component-editor button.trigger-save-modal').click(function(){

    $('.targeted_banner-component-editor').toggleClass('slds-hide');
    //$(class_activeComponent +' .image-holder').attr('src', '/assets/' +selected_image);
    $(class_activeComponent +' .image-holder').attr('src', selected_image);

    return false;
});


//VIDEO COMPONENT
$('.add-video-dummy').click(function(){
    var component_text = $('#dummy_container .my_video_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
    var navigator_text = $('#dummy_container .my_video_navigator li').clone(true,true).addClass('item'+ cloneCountB++);


    $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

    component_text.appendTo('#region').hide().fadeIn(600);
    navigator_text.appendTo('#navigator').hide().fadeIn(600);


    //now open editor
    activeComponent = undefined;
    activeComponent = $(component_text).attr('class');

    $('.video-component-editor').toggleClass('slds-hide');


    return false;
});
$('.video-component button.js-trigger-edit-component').click(function(){

    activeComponent = undefined;
    activeComponent = $(this).closest('li').attr('class');
    class_activeComponent = '.' +activeComponent;

    $('.video-component-editor').toggleClass('slds-hide');
    return false;
});
$('.video-component-editor button.trigger-save-modal').click(function(){
    $('.video-component-editor').toggleClass('slds-hide');
    $('.'+activeComponent +' .video-holder').attr('src', '//player.vimeo.com/video/53873232');
    return false;
});


//USP COMPONENT
$('.add-usp-dummy').click(function(){
    var component_usp = $('#dummy_container .my_usp_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
    var navigator_usp = $('#dummy_container .my_usp_navigator li').clone(true,true).addClass('item'+ cloneCountB++);

    $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

    component_usp.appendTo('#region').hide().fadeIn(600);
    navigator_usp.appendTo('#navigator').hide().fadeIn(600);

    //now open editor
    activeComponent = undefined;
    activeComponent = $(component_usp).attr('class');
    $('.usp-component-editor').toggleClass('slds-hide');
    //return false;

});
$('.usp-component button.js-trigger-edit-component').click(function(){
    activeComponent = undefined;
    activeComponent = $(this).closest('li').attr('class');
    $('.usp-component-editor').toggleClass('slds-hide');
    $('.slider-component-editor').addClass('slds-hide');
});
$('.usp-component-editor button.trigger-save-modal').click(function(){
    $('.usp-component-editor').toggleClass('slds-hide');
    //return false;
});

 //PRODUCT PICKER SELECT COMPONENT
 $('.add-productpicker-dummy').click(function(){
     var component_text = $('#dummy_container .my_productpicker_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
     var navigator_text = $('#dummy_container .my_productpicker_navigator li').clone(true,true).addClass('item'+ cloneCountB++);

     $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

     component_text.appendTo('#region').hide().fadeIn(600);
     navigator_text.appendTo('#navigator').hide().fadeIn(600);

     //now open editor
     activeComponent = undefined;
     activeComponent = $(component_text).attr('class');
     class_activeComponent = '.' +activeComponent;

     $('.productpicker-component-editor').toggleClass('slds-hide');

     return false;
 });
 $('.productpicker-component-placeholder button.js-trigger-edit-component').click(function(){
     activeComponent = undefined;
     activeComponent = $(this).closest('li').attr('class');
     $('.productpicker-component-editor').toggleClass('slds-hide');
     $('.targeted_banner-component-editor').addClass('slds-hide');
     return false;
 });
 $('.product-component-editor button.trigger-save-modal').click(function(){

     $('.targeted_banner-component-editor').addClass('slds-hide');
     $('.product-component-editor').toggleClass('slds-hide');

     $('.productpicker-component-editor div.list-empty').toggleClass('slds-hide');
     $('.productpicker-component-editor div.list-full').toggleClass('slds-hide');


     //$('.'+activeComponent +' img.prod_img').src(selected_product_image);
     $('.'+activeComponent +' .slds-text-heading_small').html(selected_product_name);
     $('.'+activeComponent +' .slds-text-title').html(selected_product_price);
     $('.'+activeComponent +' .header-holder').html(selected_header);

     //$('.image-component-editor').addClass('slds-hide');

     return false;
 });


 $('.product-component-editor button.trigger-close-modal').click(function(){

     $('.targeted_banner-component-editor').addClass('slds-hide');
     $('.product-component-editor').toggleClass('slds-hide');

     return false;
 });



 $('.remove-products').click(function(){
     $('.productpicker-component-editor div.list-empty').toggleClass('slds-hide');
     $('.productpicker-component-editor div.list-full').toggleClass('slds-hide');

 })


 $('.productpicker-component-editor .trigger-close-modal').click(function(){
     $(this).find('.editor').toggleClass('slds-hide');
     return false;
 });

 $('.productpicker-component-editor .trigger-save-modal').click(function(){
     $(this).find('.editor').toggleClass('slds-hide');
     return false;
 });


 $('.productpicker-component-editor .add-products').click(function(){
     $('.product-component-editor').toggleClass('slds-hide');
     return false;
 });



 //ADD MEDIA
 $('.image-component-editor .add-medias').click(function(){
     //$('.product-component-editor').toggleClass('slds-hide');
     $('.media-picker').toggleClass('slds-hide');
     return false;
 });

 $('.picker .trigger-close-modal').click(function(){
     //$(this).closest('.picker').toggleClass('slds-hide');
     $('.media-picker').toggleClass('slds-hide');
 });


 $('.picker .trigger-save-modal').click(function(){
     //$(this).closest('.picker').toggleClass('slds-hide');
     $('.'+activeComponent +' .image-holder').attr('src', selected_image);
     $('.mediaselector-component-editor .image-figure-thumb').attr('src', selected_image);
     $('.mediaselector-component-editor .file-name').text(selected_image);

     $('.media-picker').addClass('slds-hide');

     /*
  alert(activePickerbase);
  $('.'+activePickerbase +' .image-holder-thumb').attr('src', selected_image);
  */
 });


 $('.mediaselector-component-editor .trigger-save-modal').click(function(){
     $('.mediaselector-component-editor').toggleClass('slds-hide');
 });


 $('.placeholder-component-37 .js-trigger-edit-component').click(function(){
     $('.mediaselector-component-editor').toggleClass('slds-hide');
     $('.targeted_banner-component-editor').addClass('slds-hide');
 });


 //MEDIA SELECTOR

 $('.add-mediaselector-dummy').click(function(){
     var component_text = $('#dummy_container .my_mediaselector_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
     var navigator_text = $('#dummy_container .my_mediaselector_navigator li').clone(true,true).addClass('item'+ cloneCountB++);

     $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

     component_text.appendTo('#region').hide().fadeIn(600);
     navigator_text.appendTo('#navigator').hide().fadeIn(600);

     //now open editor
     activeComponent = undefined;
     activeComponent = $(component_text).attr('class');
     $('.mediaselector-component-editor').toggleClass('slds-hide');

     return false;
 });

 $('.mediaselector-component-editor .image-figure').click(function(){
     //open dialog for selecting an image
     $('.media-picker').toggleClass('slds-hide');
 });

 $('.media-component button.js-trigger-edit-component').click(function(){
     //$(this).closest('li').find('.delete-component').toggleClass('slds-hide');
     //$(this).closest('#region').find('li').attr('class');
     activeComponent = undefined;
     activeComponent = $(this).closest('li').attr('class');

     $('.text-component-editor').toggleClass('slds-hide');
     return false;
 });
 $('.media-component-editor button.trigger-save-modal').click(function(){
     selected_text = $('.slds-rich-text-area__content').html();
     selected_header = $('.slds-input-header').val();

     $('.'+activeComponent +' .text-holder').html(selected_text);
     $('.'+activeComponent +' .header-holder').html(selected_header);

     $('.text-component-editor').toggleClass('slds-hide');
     return false;
 });







 //2COL COMPONENT
 $('.add-2col-dummy').click(function(){
     var component_text = $('#dummy_container>ul.my_2col_dummy>li').clone(true).addClass('item'+ cloneCountA++);
     var navigator_text = $('#dummy_container .my_2col_navigator li').clone(true,true).addClass('item'+ cloneCountB++);


     //navigator_text.('.title').text('navigator'+cloneCountB);

     $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

     component_text.appendTo('#region').hide().fadeIn(600);
     navigator_text.appendTo('#navigator').hide().fadeIn(600);

     return false;
 });
 //2COL COMPONENT - OPEN CLOSE MENU
 $('.sub-container .slds-dropdown-trigger--click').click(function(){
     $(this).toggleClass('slds-is-open');
 });
 //SUB TEXT COMPONENT
 $('.add-sub-text-dummy').click(function(){
     var component_text = $('#dummy_container .my_text_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
     var navigator_text = $('#dummy_container .my_text_navigator li').clone(true,true).addClass('item'+ cloneCountB++);
     //$(this).closest('.sub').append(component_text);
     //$(this).closest('.sub').css('background-color', 'yellow');
     //component_text.appendTo('.sub').hide().fadeIn(600);

     //$(this).closest('.sub-container').find('.sub').css('background', 'red');
     var subgoal = $(this).closest('.sub-container').find('.sub')
     component_text.appendTo(subgoal).hide().fadeIn(600);

     $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');


     //now open editor
     activeComponent = undefined;
     activeComponent = $(component_text).attr('class');
     $('.text-component-editor').toggleClass('slds-hide');


     return false;
 });
 //SUB IMAGE COMPONENT
 $('.add-sub-image-dummy').click(function(){
     var component_text = $('#dummy_container .my_image_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
     var navigator_text = $('#dummy_container .my_image_navigator li').clone(true,true).addClass('item'+ cloneCountB++);
     var subgoal = $(this).closest('.sub-container').find('.sub')
     component_text.appendTo(subgoal).hide().fadeIn(600);

     $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

     //now open editor
     activeComponent = undefined;
     activeComponent = $(component_text).attr('class');

     class_activeComponent = '.' +activeComponent;
     $('.image-component-editor').toggleClass('slds-hide');


     return false;
 });
 //SUB VIDEO COMPONENT
 $('.add-sub-video-dummy').click(function(){
     var component_text = $('#dummy_container .my_video_dummy li').clone(true,true).addClass('item'+ cloneCountA++);
     var navigator_text = $('#dummy_container .my_video_navigator li').clone(true,true).addClass('item'+ cloneCountB++);
     var subgoal = $(this).closest('.sub-container').find('.sub')
     component_text.appendTo(subgoal).hide().fadeIn(600);

     $(this).closest('.button-container>.slds-dropdown-trigger').toggleClass('slds-is-open');

     //now open editor
     activeComponent = undefined;
     activeComponent = $(component_text).attr('class');

     $('.video-component-editor').toggleClass('slds-hide');



     return false;
 });


 //DELETE COMPONENT
 $('button.js-trigger-delete-component').click(function(){
     //$(this).closest('li').find('.delete-component').toggleClass('slds-hide');
     //$(this).closest('#region').find('li').attr('class');

     activeComponent = undefined;
     activeComponent = $(this).closest('li').attr('class');
     $('.delete-component').toggleClass('slds-hide');

     return false;
 });
 $('.delete-component .action-delete-component').click(function(){
     /*
        var removeit = $(this).closest('li').attr('class');

        $(this).closest('li').find('.delete-component').toggleClass('slds-hide');
        $('li.'+ removeit).fadeOut(600, function(){
            $('li.'+ removeit).remove();
        });
    */

     $('.delete-component').toggleClass('slds-hide');
     $('li.'+ activeComponent).fadeOut(600, function(){
         $('li.'+ activeComponent).remove();
     });
     return false;
 });




 //sort at the same time navigator and component
 var currentIndex;
 $(function() {
     $( '.list' ).sortable({
         start: function(event, ui) {
             currentIndex = ui.helper.index();
         },
         change: function( event, ui ) {
             var indexCount = ui.item.parent().find('li:not(.ui-sortable-helper)');
             var sortClass = '.'+ui.item.attr('class').split(' ')[0];
             var parent = $('.list').not(ui.item.parent());

             if(currentIndex > ui.placeholder.index()){
                 parent.find('li').eq(indexCount.index(ui.placeholder)).before(parent.find(sortClass));
             }
             else
                 parent.find('li').eq(indexCount.index(ui.placeholder)).after(parent.find(sortClass));
             currentIndex = ui.placeholder.index();
         }
     });
     $( '.list' ).disableSelection();
 });


 //delete component and navigator item all together
 $('.delete-component .js-close-modal-id-0').click(function(){
     //$(this).closest('li').find('.delete-component').toggleClass('slds-hide');
     $('.delete-component').toggleClass('slds-hide');

     return false;
 });


 //MODAL HANDLERS
 $('.trigger-close-modal').click(function(){
     $(this).closest('body .editor').toggleClass('slds-hide');

     return false;
 });


 //SLIDER
 $('.trigger-sliderA').click(function() {
     $('.sliderA').addClass('slds-show');
     $('.sliderA').removeClass('slds-hide');
     $('.sliderB').addClass('slds-hide');
     $('.sliderB').removeClass('slds-show');
     $('.sliderC').addClass('slds-hide');
     $('.sliderC').removeClass('slds-show');

     $('.sliderA').addClass('active');

     return false;
 });
 $('.trigger-sliderB').click(function() {
     $('.sliderA').addClass('slds-hide');
     $('.sliderA').removeClass('slds-show');
     $('.sliderB').addClass('slds-show');
     $('.sliderB').removeClass('slds-hide');
     $('.sliderC').addClass('slds-hide');
     $('.sliderC').removeClass('slds-show');

     $('.sliderB').addClass('active');

     return false;
 });
 $('.trigger-sliderC').click(function() {
     $('.sliderA').addClass('slds-hide');
     $('.sliderA').removeClass('slds-show');
     $('.sliderB').addClass('slds-hide');
     $('.sliderB').removeClass('slds-show');
     $('.sliderC').addClass('slds-show');
     $('.sliderC').removeClass('slds-hide');

     $('.sliderC').addClass('active');

     return false;
 });

 //IMAGE SELECT
 $('.image-thumb').click(function() {
     //selected_image = $(this).find('h2').text();
     selected_image = $(this).closest('a').find('img').attr('src');
     $('.slds-file_card').removeClass('selected');
     $(this).closest('.slds-file_card').addClass('selected');

     return false;
 });

 //VIDEO SELECT
 $('.video-thumb').click(function() {
     selected_video = $(this).find('h2').text();
     return false;
 });


 //HOVER LI ITEM
 $('.list>li').hover(function() {
     var myClass = $(this).attr('class');
     $('.' + myClass).css({
         border : '3px solid red',
         color : 'red'
     });
 });


 //FILTER PRODUCT TABLE

 $("#kwd_search").keyup(function(){
     if( $(this).val() != ""){
         $("#my-table tbody>tr").hide();
         $("#my-table td:contains-ci('" + $(this).val() + "')").parent("tr").show();
     }else{
         $("#my-table tbody>tr").show();
     }
 });
 $.extend($.expr[":"],{
     "contains-ci": function(elem, i, match, array){
         return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
     }
 });





 //SELECT PRODUCT
 $('.slds-checkbox_faux').click(function() {
     selected_product_name = undefined;
     selected_product_brand = undefined;
     selected_product_price = undefined;
     selected_product_id = undefined;

     //alert($(this).closest('tr').find('.product-name').html());

     selected_product_name=      $(this).closest('tr').find('.product-name').html();
     selected_product_brand =    $(this).closest('tr').find('.product-brand').html();
     selected_product_price =    $(this).closest('tr').find('.product-price').html();
     selected_product_image =    $(this).closest('tr').find('.prod_img').attr('src');

     //alert(selected_product_price);

     //return false;
     //$('.product-recommendation').toggleClass('slds-hide');
     if ($('.product-recommendation').hasClass('slds-hide')) {
         $('.product-recommendation').toggleClass('slds-hide');
     }
 });

 //SELECT RECOMMENDATION
 $('#visual-picker-17').click(function() {
     show_recommendation = true;

     if (show_recommendation = true) {
         $('.product-holder2').removeClass('slds-hide');
     }

     return false;
 });


 //LOAD MORE PAGE LIST
 $(function(){
     size_tr = $("#table-pages tr").length;
     x=197;
     $('#table-pages tr:lt('+x+')').fadeIn();
     $('#loadMore').click(function () {
         x= (x+197 <= size_tr) ? x+197 : size_tr;
         $('#table-pages tr:lt('+x+')').fadeIn();
     });
     $('#showLess').click(function () {
         x=(x-197<0) ? 197 : x-197;
         $('#table-pages tr').not(':lt('+x+')').fadeOut();
     });
 });



 //PAGE LIST SORTABLE
 $('#th_name').click(function(){
     //open dialog for selecting an image
     $('#sorted_txt').html('sorted by name');
 });

 $('#th_pagetype').click(function(){
     //open dialog for selecting an image
     $('#sorted_txt').html('sorted by page type');
 });

 $('#th_id').click(function(){
     //open dialog for selecting an image
     $('#sorted_txt').html('sorted by ID');
 });

 $('#th_date').click(function(){
     //open dialog for selecting an image
     $('#sorted_txt').html('sorted by date');
 });


 //HIDE ALL DROPDOWN
 $(document).click(function (e) {
     /*
    if (!$(e.target).hasClass('slds-is-open')
        && $(e.target).parents('.slds-dropdown').length === 0)
    {
        $('.slds-is-open').removeClass('slds-is-open');

    }
    */

 });

 //LOADER PAGE LIST
 $(function(){
     //$('#spinner').delay(3000).fadeOut('slow');
     //$('#page_list').delay(3000).fadeIn('slow');
 });


 //OCAPI modal__close
 $('.js-close-modalA').click(function(){
     //open dialog for selecting an image
     $('#modalA').toggleClass('slds-hide');
 });

 $('.js-run-modalB').click(function(){
     //open dialog for selecting an image
     $('#modalB').toggleClass('slds-hide');
     //$('#modal-content-id-1B-loader').delay(6000).toggleClass('slds-hide');
     //$('#modal-content-id-1B-stuff').delay(4000).toggleClass('slds-hide');
 });

 $('.js-close-modalB').click(function(){
     //open dialog for selecting an image
     $('#modalB').toggleClass('slds-hide');
 });


 $('.action_level_1').click(function(){
     //open dialog for selecting an image
     $('#row-2').toggleClass('slds-hide');
 });



 $('.action_level_2').click(function(){
     //open dialog for selecting an image
     $('#row-3').toggleClass('slds-hide');
     $('#row-loader').toggleClass('slds-hide');
 });


 $('.js-copy-modalA').click(function(){
     //open dialog for selecting an image
     $('#textarea-body').toggleClass('slds-hide');
     $('#textarea-empty').toggleClass('slds-hide');
     $('#modalA').toggleClass('slds-hide');
 });

 $('#author').click(function(){
     $('#help').toggleClass('slds-hide');
 });

 $(document).ready(function(){
     $("#filter-ocapi").keyup(function(){
         // Retrieve the input field text and reset the count to zero
         var filter = $(this).val(), count = 0;
         // Loop through the comment list
         $("nav ul li").each(function(){
             // If the list item does not contain the text phrase fade it out
             if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                 $(this).fadeOut();
                 // Show the list item if the phrase matches and increase the count by 1
             } else {
                 $(this).show();
                 count++;
             }
         });
         // Update the count
         var numberItems = count;
     });

 });






 $('#filter_add').click(function(){
     $('#filter_modal').toggleClass('slds-hide');
     $('#filter_new').toggleClass('slds-hide');
     $('#filter_title').toggleClass('slds-hide');
 });

 $('#filter_remove').click(function(){
     $('#filter_modal').addClass('slds-hide');
     $('#filter_new').addClass('slds-hide');
     $('#filter_set').addClass('slds-hide');
     $('#filter_title').addClass('slds-show');
     $('#filter-name').text('0');
 });


 $('#filter_done').click(function(){
     $('#filter_modal').addClass('slds-hide');
     $('#filter_new').addClass('slds-hide');
     $('#filter_title').toggleClass('slds-hide');
     $('#filter_set').toggleClass('slds-hide');

     $('#page_list').fadeOut('slow');
     $('#spinner').fadeIn('slow');
     $('#spinner').delay(3000).fadeOut('slow');
     $('#page_list').delay(3000).fadeIn('slow');
     $('#filter-name').text('1');
 });

 $('#filtertoggle').click(function(){
     $('#panel_filters').toggleClass('slds-hide');
     $('#filtertoggle').toggleClass('slds-is-selected');
 });
