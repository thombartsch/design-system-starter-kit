$.widget("ui.autocomplete", $.ui.autocomplete, {
    options : $.extend({}, this.options, {
        multiselect: false
    }),
    _create: function(){
        this._super();

        var self = this,
            o = self.options;

        if (o.multiselect) {
            console.log('multiselect true');

            self.selectedItems = {};
            self.multiselect = $("<div style='background: red; position: absolute; top:1px; left:1px; z-index:100000000'></div>")
                .addClass("ui-autocomplete-multiselect ui-state-default ui-widget")
                .css("width", self.element.width())
                .insertBefore(self.element)
                .append(self.element)
                .bind("click.autocomplete", function(){
                    self.element.focus();
                });

            var fontSize = parseInt(self.element.css("fontSize"), 10);
            function autoSize(e){
                // Hackish autosizing
                var $this = $(this);
                $this.width(1).width(this.scrollWidth+fontSize-1);
            };

            var kc = $.ui.keyCode;
            self.element.bind({
                "keydown.autocomplete": function(e){
                    if ((this.value === "") && (e.keyCode == kc.BACKSPACE)) {
                        var prev = self.element.prev();
                        delete self.selectedItems[prev.text()];
                        prev.remove();
                    }
                },
                // TODO: Implement outline of container
                "focus.autocomplete blur.autocomplete": function(){
                    self.multiselect.toggleClass("ui-state-active");
                },
                "keypress.autocomplete change.autocomplete focus.autocomplete blur.autocomplete": autoSize
            }).trigger("change");

            // TODO: There's a better way?
            o.select = o.select || function(e, ui) {





              /*
              $("<span></span>")
                  .addClass("ui-autocomplete-multiselect-item slds-pill slds-pill_link")
                  .text(ui.item.label)
                  .append(
                      $("<button class='slds-button slds-button_icon slds-button_icon slds-pill__remove' title='Remove'><svg class='slds-button__icon' aria-hidden='true'><use xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#close'></use></svg><span class='slds-assistive-text'>Remove</span></button>")
                          //.addClass("ui-icon ui-icon-close")
                          .click(function(){
                              var item = $(this).parent();
                              delete self.selectedItems[item.text()];
                              item.remove();
                          })
                  )
                  .insertBefore(self.element);

              self.selectedItems[ui.item.label] = ui.item;
              self._value("");
              return false;
              */



                $("<div></div>")
                    .addClass("ui-autocomplete-multiselect-item")
                    .text(ui.item.label)
                    .append(
                        $("<span></span>")
                            .addClass("ui-icon ui-icon-close")
                            .click(function(){
                                var item = $(this).parent();
                                delete self.selectedItems[item.text()];
                                item.remove();
                            })
                    )
                    .insertBefore(self.element);

                self.selectedItems[ui.item.label] = ui.item;
                self._value("");
                return false;
            }

            /*self.options.open = function(e, ui) {
                var pos = self.multiselect.position();
                pos.top += self.multiselect.height();
                self.menu.element.position(pos);
            }*/
        }

        return this;
    }
});
