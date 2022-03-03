(function($) {
    $.fn.pagefade = function(fadein) {
            this.css("display", "none");
            this.fadeIn(fadein);
      return this;
    };
    }(jQuery));