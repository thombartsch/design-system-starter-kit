<script>
    $(document).ready(function() {
        //DRAG DROP MOVE AROUND
        count = 0;

        $('.draggable').draggable({
            connectToSortable: '.list',
            helper: 'clone',
            //handle: '.handle',
            start: function(event, ui) {
                //var txt = ui.helper.children('a').text());
                var txt = $(ui.helper.children('a')).text();

                console.log('start dragging');
                console.log(txt);





            },
            stop: function(event, ui) {
                var txt = $(ui.helper.children('a')).text();

                console.log('stop dragging: ' + txt);
                console.log('saving...');
                savingAnimation();


                ui.helper.children('.add-component').remove();
                ui.helper.children('div.component').removeClass('slds-hide').hide().fadeIn('slow');

                //add id to placeholder
                $(this).addClass('ui-draggable-dragged');
                ui.helper.attr('id', 'component_placeholder_' + count);

                //add navigator item
                var nav_item = '<li class="slds-item" id="navigator_placeholder_' + count + '"><span class="slds-tree__item-label slds-truncate" title="' + txt + '">' + txt + '</span</li>';
                $(nav_item).attr('id', 'navigator_placeholder_' + count);
                $('#navigator_list').append(nav_item);


                count++;

                $('.list button.button-trigger-action--edit-component-row').click(function() {
                    var component_type = 'row';
                    $('.draggable .slds-drop-zone__container').removeClass('slds-is-hovered');
                    $(this).closest('.draggable .slds-drop-zone__container').toggleClass('slds-is-hovered');
                    console.log('clicked edit');
                    showProperties(component_type);
                });


                $('.list button.button-trigger-action--edit-component-banner').click(function() {
                    var component_type = 'banner';
                    $('.draggable .slds-drop-zone__container').removeClass('slds-is-hovered');
                    $(this).closest('.draggable .slds-drop-zone__container').toggleClass('slds-is-hovered');
                    console.log('clicked edit' + component_type);
                    showProperties(component_type);
                });

                $('.list button.button-trigger-action--edit-component-category').click(function() {
                    var component_type = 'category';
                    $('.draggable .slds-drop-zone__container').removeClass('slds-is-hovered');
                    $(this).closest('.draggable .slds-drop-zone__container').toggleClass('slds-is-hovered');
                    console.log('clicked edit');
                    showProperties(component_type);
                });



                $('.list button.button-trigger-action--delete-component').click(function() {
                    console.log('clicked delete component placeholder and nav');

                    var activeComponentPlaceholder = undefined;
                    var activeNavigationPlaceholder = undefined;

                    var activeComponentPlaceholder = $(this).closest('li').attr('id');
                    if (activeComponentPlaceholder.match('component_placeholder_')) {
                        arr = activeComponentPlaceholder.split('component_');
                        var activeNavigationPlaceholder = 'navigator_' + arr[1];
                        console.log(activeNavigationPlaceholder);
                        arr = undefined;
                    }
                    $('#modal-id-4-delete').removeClass('slds-hide');
                    console.log('open delete modal');
                    //DELETE ANY COMPONENT
                    $('.js-trigger-delete-component, .action-delete-component').click(function() {
                        console.log('close delete modal');
                        $('#' + activeComponentPlaceholder).remove();
                        $('#' + activeNavigationPlaceholder).remove();

                        $('#modal-id-4-delete').addClass('slds-hide');
                        activeComponentPlaceholder = undefined;
                        activeNavigationPlaceholder = undefined;
                        console.log('saving...');

                        if ($('#canvas_list > li.draggable').length != 0) {
                            console.log('still editors in canvas');
                        } else {
                            console.log('no more editors in canvas');
                            $('.component_properties').addClass('slds-hide');
                            $('.component_properties .placeholder').toggleClass('slds-hide');
                        }
                        return false;
                    });
                });

                /*
                $('.list button.button-trigger-action--move-component').click(function() {
                  console.log('clicked move');
                });
                */

            }
        });


        $('.list').sortable({
            revert: true,
            start: function(event, ui) {
                ui.helper.css('width', 'auto');
                ui.helper.css('height', 'auto');
                $('ul,li').disableSelection();
            }
        });


        //SAVING ANIMATION
        function savingAnimation() {
            $('#status_txt').delay(500).fadeOut(1000, function() {
                $('#status_txt').text('Saving ...');
            }).fadeIn(1000).delay(500).fadeOut(1000, function() {
                $('#status_txt').text('Saved');
            }).fadeIn(1000);
        }



        //NAVIGATOR
        function showNavigation() {
            /*
            $('#tab-navigator').removeClass('slds-hide');
            $('#tab_navigator').addClass('slds-show');
            $('#tab-properties').addClass('slds-hide');
            $('#tab_properties').removeClass('slds-show');

            $('#tab_prop').removeClass('slds-active');
            $('#tab_prop').removeClass('slds-is-active');
            $('#tab_nav').addClass('slds-active');
            $('#tab_nav').addClass('slds-is-active');
            */
        }
        //showNavigation();

        function showProperties(component_type) {
            $('#panel_editor .component_properties').addClass('slds-hide');

            console.log('calling now component properties: ' + component_type);

            $('#editor_' + component_type).removeClass('slds-hide');
            $('#editor_' + component_type).addClass('slds-show');
            $('#panel_editor').removeClass('slds-hide');
        }

        //MEDIA SELECTOR
        $('#panel_right .slds-panel__close').click(function() {
            $('#panel_right').addClass('slds-hide');
            return false;
        });







        //GALLERY BROWSING
        $('.select_collectionA').click(function() {
            alert();
            console.log('open collection A');
            $('.select_collectionA').addClass('slds-is-selected');
            $('.collectionA').removeClass('slds-hide');

            $('.select_collectionB').removeClass('slds-is-selected');
            $('.collectionB').addClass('slds-hide');

            $('.select_collectionC').removeClass('slds-is-selected');
            $('.collectionC').addClass('slds-hide');

            $('.select_collectionD').removeClass('slds-is-selected');
            $('.collectionD').addClass('slds-hide');

            $('.select_collectionG').removeClass('slds-is-selected');
            $('.collectionG').addClass('slds-hide');
            return false;
        });


        $('.select_collectionB').click(function() {
            console.log('open collection B');
            $('.select_collectionB').addClass('slds-is-selected');
            $('.collectionB').removeClass('slds-hide');

            $('.select_collectionA').removeClass('slds-is-selected');
            $('.collectionA').addClass('slds-hide');

            $('.select_collectionC').removeClass('slds-is-selected');
            $('.collectionC').addClass('slds-hide');

            $('.select_collectionD').removeClass('slds-is-selected');
            $('.collectionD').addClass('slds-hide');

            $('.select_collectionG').removeClass('slds-is-selected');
            $('.collectionG').addClass('slds-hide');
            return false;
        });


        $('.select_collectionC').click(function() {
            console.log('open collection C');
            $('.select_collectionC').addClass('slds-is-selected');
            $('.collectionC').removeClass('slds-hide');

            $('.select_collectionB').removeClass('slds-is-selected');
            $('.collectionB').addClass('slds-hide');

            $('.select_collectionA').removeClass('slds-is-selected');
            $('.collectionA').addClass('slds-hide');

            $('.select_collectionD').removeClass('slds-is-selected');
            $('.collectionD').addClass('slds-hide');

            $('.select_collectionG').removeClass('slds-is-selected');
            $('.collectionG').addClass('slds-hide');
            return false;
        });

        $('.select_collectionD').click(function() {
            $('.select_collectionD').addClass('slds-is-selected');
            $('.collectionD').removeClass('slds-hide');

            $('.select_collectionB').removeClass('slds-is-selected');
            $('.collectionB').addClass('slds-hide');

            $('.select_collectionA').removeClass('slds-is-selected');
            $('.collectionA').addClass('slds-hide');

            $('.select_collectionC').removeClass('slds-is-selected');
            $('.collectionC').addClass('slds-hide');

            $('.select_collectionG').removeClass('slds-is-selected');
            $('.collectionG').addClass('slds-hide');
            return false;
        });


        $('.select_collectionG').click(function() {
            $('.select_collectionG').addClass('slds-is-selected');
            $('.collectionG').removeClass('slds-hide');

            $('.select_collectionB').removeClass('slds-is-selected');
            $('.collectionB').addClass('slds-hide');

            $('.select_collectionA').removeClass('slds-is-selected');
            $('.collectionA').addClass('slds-hide');

            $('.select_collectionC').removeClass('slds-is-selected');
            $('.collectionC').addClass('slds-hide');

            $('.select_collectionD').removeClass('slds-is-selected');
            $('.collectionD').addClass('slds-hide');
            return false;
        });










        //MEDIA SELECTOR
        $('.add-mediaselector-dummy').click(function() {
            selected_image = undefined;
            $('.mediaselector-component-editor .image-figure-thumb').attr('src', '/assets/placeholder.png');
            $('.mediaselector-component-editor .file-name').html('No Image assigned');


            $('#banner-checkbox_everyone').prop('checked', false);
            $('#banner-checkbox_customergroupa').prop('checked', false);
            $('#banner-checkbox_customergroupb').prop('checked', false);

            //now open editor
            activeComponent = undefined;
            activeComponent = $(component_placeholder).attr('id');

            //add 1 to component count
            regionlimit = $('#' + closest_region + '_links .region_limit').text();
            regionlimit = Number(regionlimit) + 1;

            $('#' + closest_region + '_links .region_limit').text('');
            $('#' + closest_region + '_links .region_limit').text(regionlimit);

            $('.region_component_selector').toggleClass('slds-hide');
            $('.mediaselector-component-editor').toggleClass('slds-hide');

            $('.modal-content-id-37 .tab_general').addClass('slds-active');
            return false;
        });

        //BANNER COMPONENT
        $('.mediaselector-component-editor .image-figure, .add-image').click(function() {
            callerComponent = 'banner';
            /*
            $('.media-picker').toggleClass('slds-hide');
            $('.mediaselector-component-editor').toggleClass('slds-hide');
            $('.product-component-editor').addClass('slds-hide');
            */
            $('.media-picker').toggleClass('slds-hide');
            console.log('call image add');
        });

        $('.media-component button.js-trigger-edit-component').click(function() {
            activeComponent = undefined;
            activeComponent = $(this).closest('li').attr('id');

            $('#banner-checkbox_everyone').prop('checked', false);
            $('#banner-checkbox_customergroupa').prop('checked', false);
            $('#banner-checkbox_customergroupb').prop('checked', false);


            //SET CHECKBOX VALUES
            if ($('#' + activeComponent).hasClass('Everyone')) {
                $('#banner-checkbox_everyone').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupA')) {
                $('#banner-checkbox_customergroupa').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupB')) {
                $('#banner-checkbox_customergroupb').prop('checked', true);
            }


            return false;
        });


        $('.media-component-editor button.trigger-save-modal').click(function() {
            selected_text = $('.slds-rich-text-area__content').html();
            selected_header = $('.slds-input-header').val();
            $('#' + activeComponent + ' .text-holder').html(selected_text);
            $('#' + activeComponent + ' .header-holder').html(selected_header);

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

        //IMAGE SAVE
        $('.picker .trigger-save-modal').click(function() {
            if (callerComponent == 'banner') {
                console.log('selected image: ' + selected_image);
                $('#editor_banner .image-figure-thumb').attr('src', selected_image);
                $('#editor_banner .file-name').text(selected_image);
                $('.picker').addClass('slds-hide');
                $('.circle').toggleClass('slds-hide');
                //$('.mediaselector-component-editor').toggleClass('slds-hide');
            } else {
                $('#editor_banner .image-figure-thumb').attr('src', selected_image);
                $('#editor_banner .file-name').text(selected_image);
                $('.picker').addClass('slds-hide');
                $('.circle').toggleClass('slds-hide');
                $('.product-component-editor').toggleClass('slds-hide');

            }
        });

        //NOW CLOSE PICKER AND SET IMAGE
        $('.mediaselector-component-editor .trigger-save-modal').click(function() {
            $('.mediaselector-component-editor').toggleClass('slds-hide');
            $('#' + activeComponent + ' .image-holder').css('background-image', 'url(' + selected_image + ')');
            $('#' + activeComponent + ' .image-holder span.no-image').addClass('slds-hide');

            banner_header = undefined;
            banner_sub = undefined;
            banner_header = $('.text-banner-header').val();
            banner_sub = $('.text-banner-sub').val();

            $('#' + activeComponent + ' .banner-header').html(banner_header);
            $('#' + activeComponent + ' .banner-sub').html(banner_sub);

            $('.text-banner-header').val('');
            $('.text-banner-sub').val('');
        });


        //BANNER COMPONENT EDIT
        $('.placeholder-component-37 .js-trigger-edit-component, .js-trigger-media-edit-component').click(function() {
            activeComponent = undefined;
            activeComponent = $(this).closest('li').attr('id');

            $('#banner-checkbox_everyone').prop('checked', false);
            $('#banner-checkbox_customergroupa').prop('checked', false);
            $('#banner-checkbox_customergroupb').prop('checked', false);


            //SET CHECKBOX VALUES
            if ($('#' + activeComponent).hasClass('Everyone')) {
                $('#banner-checkbox_everyone').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupA')) {
                $('#banner-checkbox_customergroupa').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupB')) {
                $('#banner-checkbox_customergroupb').prop('checked', true);
            }



            //GET IMAGE
            //imgUrl = $(this).closest('.placeholder').find('.image-holder').css('background-image');
            imgUrl = $('#' + activeComponent).find('.image-holder').css('background-image');

            patt = /\"|\'|\)/g;
            selected_image = '/assets/' + imgUrl.split('/').pop().replace(patt, '');

            //GET TEXTS
            banner_header = $('#' + activeComponent).find('.title').text();
            banner_sub = $('#' + activeComponent).find('.sub').text();

            $('.mediaselector-component-editor .image-figure-thumb').attr('src', selected_image);

            //SET TAB
            $('.modal-content-id-37 .tab_general').addClass('slds-active');
            $('.mediaselector-component-editor .text-banner-header').val(banner_header);
            $('.mediaselector-component-editor .text-banner-sub').val(banner_sub);
            $('.mediaselector-component-editor').toggleClass('slds-hide');
        });



        $('.js-trigger-media-edit-rules').click(function() {
            activeComponent = undefined;
            activeComponent = $(this).closest('li').attr('id');

            if (activeComponent.match('_links')) {
                arr = activeComponent.split('_');
                activeComponent = arr[0];
                arr = undefined;
            }

            $('#banner-checkbox_everyone').prop('checked', false);
            $('#banner-checkbox_customergroupa').prop('checked', false);
            $('#banner-checkbox_customergroupb').prop('checked', false);


            //SET CHECKBOX VALUES
            if ($('#' + activeComponent).hasClass('Everyone')) {
                $('#banner-checkbox_everyone').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupA')) {
                $('#banner-checkbox_customergroupa').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupB')) {
                $('#banner-checkbox_customergroupb').prop('checked', true);
            }



            //GET IMAGE
            //imgUrl = $(this).closest('.placeholder').find('.image-holder').css('background-image');
            imgUrl = $('#' + activeComponent).find('.image-holder').css('background-image');

            patt = /\"|\'|\)/g;
            selected_image = '/assets/' + imgUrl.split('/').pop().replace(patt, '');

            //GET TEXTS
            banner_header = $('#' + activeComponent).find('.title').text();
            banner_sub = $('#' + activeComponent).find('.sub').text();

            $('.mediaselector-component-editor .image-figure-thumb').attr('src', selected_image);

            //SET TAB
            $('.modal-content-id-37 .tab_rules').addClass('slds-active');
            $('.mediaselector-component-editor .text-banner-header').val(banner_header);
            $('.mediaselector-component-editor .text-banner-sub').val(banner_sub);
            $('.mediaselector-component-editor').toggleClass('slds-hide');

            //SET CHECKBOX VALUES
            if ($('#' + activeComponent).hasClass('Everyone')) {
                $('#banner-checkbox_everyone').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupA')) {
                $('#banner-checkbox_customergroupa').prop('checked', true);
            }
            if ($('#' + activeComponent).hasClass('CustomergroupB')) {
                $('#banner-checkbox_customergroupb').prop('checked', true);
            }


        });











        //MODAL HANDLERS
        $('.trigger-close-modal').click(function() {
            $(this).closest('.modal').toggleClass('slds-hide');
            return false;
        });


        //SIDE PANEL COLLAPSE EXPAND
        $('#panel_left .slds-panel__close').click(function() {
            $('#panel_left').removeClass('left_expanded');
            $('#panel_left').addClass('left_collapsed');
            $('#panel_left .slds-dropdown__header').addClass('slds-hide');
            $('#button_left_expand').toggleClass('slds-hide');
            return false;
        });

        $('#button_left_expand').click(function() {
            $('#panel_left').removeClass('left_collapsed');
            $('#panel_left').addClass('left_expanded');
            $('#panel_left .slds-dropdown__header').removeClass('slds-hide');
            $('#button_left_expand').toggleClass('slds-hide');
            return false;
        });










        //- end js

    });
</script>