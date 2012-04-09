/* 
* Author: cpbaumann
*/

(function($) {
    $.fn.extend({
        paginationwithhashchange: function(options) {

           var defaults = {
                initialPage: 1,
                pagingId: ".page-nav",
                itemsPerPage: 5,
                pagingList: 'ul'
            };

            var options = $.extend(defaults, options);

            return this.each(function() {

                var obj = $(this);
                initialPage = options.initialPage;
                pagingId = options.pagingId;
                itemsPerPage = options.itemsPerPage;
                pagingList = options.pagingList;
                numItems = obj.children().length;
               
                var getNumPages = function() {
                    var numPages = 0;
                    if (numItems != null) {
                        numPages = Math.ceil(numItems / itemsPerPage);
                    }
                    return numPages;
                };

                var numPages = getNumPages();
                obj.children().hide();

                var showPage = function(page) {
                    obj.children().hide();
                    for (var i = (page-1)*itemsPerPage; i < ((page-1)*itemsPerPage) + itemsPerPage; i++) {
                        obj.children().eq(i).show();
                    }    
                }

                var pageNav = function() {

                    var ul = $('<' + pagingList + '></' + pagingList + '>').appendTo(pagingId);
                    for( var i=1; i <= numPages; i++ ){
                        $('<li><a data-index="'+ i +'" href="#' + i +'">'+ i +'</a></li>').appendTo(ul);
                            
                        $(pagingId + ' li a').click(function(e){ 
                            var hash = this.hash;
                            e.preventDefault();
                            var newURL = "//" + window.location.host + window.location.pathname + hash;
                            
                            window.location = newURL;
                            page = $(this).attr('data-index');
                            $(pagingId + ' li').removeClass('active');
                            $(this).parent().addClass('active');
                            showPage(page);
                        });
                    };

                    if(typeof(page) == 'undefined' && window.location.hash == ''){    
                        // inital active status
                        $(pagingId + ' li').eq(initialPage-1).addClass('active');
                    }              
                }    

                var getActiveStatus = function() {
                    var d = window.location.hash.replace('#', '')
                    if(d != ''){
                        showPage(d);
                        $(pagingId + ' li').removeClass('active');
                        $(pagingId + ' li').eq(d-1).addClass('active');
                    }
                }  
                
                showPage(initialPage);
                pageNav();
                getActiveStatus();
            });
        }
    });
})(jQuery);