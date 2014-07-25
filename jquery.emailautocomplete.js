// email auto complete
(function ($) {

    var defaults =
    {
        // all included auto completed email domins 
        domains: ["qq.com", "163.com", "gmail.com", "126.com", "sina.com", "139.com", "hotmail.com", "outlook.com", "sohu.com", "128.com", "136.com", "live.com"]
    };

    $.fn.emailautocomplete = function (options) {

        var settings = $.extend(true, {}, defaults, options);
        return this.each(function () {

            var $emailinput = $(this);
            var $emailparent = $emailinput.parent();

            // generate/remove the auto complete dom when necessary
            $emailinput.focus(function(){ autocomplete(); });
            $emailinput.blur(function(){ removeautocomplete(); });

            // bind keyup for selecting auto complete item through keyboard
            $emailinput.keyup(function(event){

                var $selecteditem = $(".autocomplete li.selected" , $emailparent);

                // press Enter key
                if(event.which == 13)
                {
                    if($selecteditem.length > 0)
                    {
                        $selecteditem.mousedown();
                    }
                    return false;
                }

                // press Up key
                if(event.which == 38)
                {
                    $selecteditem.removeClass("selected");

                    if($selecteditem.length == 0 || $selecteditem.index() == 0)
                    {
                        $(".autocomplete li:last" , $emailparent).addClass("selected");
                    }
                    else
                    {
                        $selecteditem.prev().addClass("selected");
                    }

                    if($(".autocomplete li.selected" , $emailparent).text().length > 0)
                    {
                        $emailinput.val($(".autocomplete li.selected" , $emailparent).text());
                    }
                    return false;
                }

                // press Down key
                if(event.which == 40)
                {
                    $selecteditem.removeClass("selected");

                    if($selecteditem.length == 0 || $selecteditem.index() == $(".autocomplete li" , $emailparent).length - 1)
                    {
                        $(".autocomplete li:first" , $emailparent).addClass("selected");
                    }
                    else
                    {
                        $selecteditem.next().addClass("selected");
                    }

                    if($(".autocomplete li.selected" , $emailparent).text().length > 0)
                    {
                        $emailinput.val($(".autocomplete li.selected" , $emailparent).text());
                    }
                    return false;
                }
                autocomplete();
            });

            // prevent Enter key submit form 
            $emailinput.keypress(function(event){
                // press Enter key
                if(event.which == 13){ return false; }
            });

            // bind mouse enter/leave for auto complete items
            $emailparent.on("mouseenter", ".autocomplete li", function() { 
                $(".autocomplete li.selected" , $emailparent).removeClass("selected");
                $(this).addClass("selected");
            });

            // bind click for auto complete items
            $emailparent.on("mousedown", ".autocomplete li", function(){ 
                $emailinput.val($(this).text());
                removeautocomplete();
            });

            function autocomplete()
            {
                var inputval = $emailinput.val();
                var index = inputval.indexOf("@");
                var prefix = inputval.split("@")[0] + "@";
                var partdomain = inputval.substring(index + 1);
                var domains = settings.domains;
                var domainslen = domains.length;
                var dom = "";

                // make sure "@" is not the first or last character in current input
                if( index > 0 && index < inputval.length - 1 && partdomain != "")
                {
                    for(var i = 0; i < domainslen; i++)
                    {
                        if(domains[i].indexOf(partdomain) == 0 && domains[i] != partdomain)
                        {
                            dom += "<li>" + prefix + domains[i] + "</li>";
                        }
                    }

                    if(dom != "")
                    {
                        dom = "<ul class='autocomplete'>" + dom + "</ul>";
                        removeautocomplete();
                        $emailparent.append(dom);

                        //ie6, for cover select element in ie6
                        if (! -[1, ] && !window.XMLHttpRequest)
                        {
                            var $autocomplete =  $(".autocomplete", $emailparent);
                            var $hiddeniframe = $("<iframe id='ie6hiddeniframe' style='position:absolute;top:33px;left:0;width:100%;height:100%;filter:alpha(opacity=0);'></iframe>");
                            $hiddeniframe.css({"top" : $autocomplete.position().top + "px", "width" : $autocomplete.width() + 2 + "px", "height": $autocomplete.height() + 1 + "px" });
                            $emailparent.append($hiddeniframe);
                        }
                    }
                    else
                    {
                        removeautocomplete();
                    }
                }
                else
                {
                    removeautocomplete();
                }
            }

            function removeautocomplete()
            {
                $(".autocomplete", $emailparent).remove();

                // for ie6, remove hidden iframe
                if (! -[1, ] && !window.XMLHttpRequest)
                {
                    $("#ie6hiddeniframe", $emailparent).remove();
                }
            }

        });
    }
    $.fn.emailautocomplete.defaults = defaults;
})(jQuery);