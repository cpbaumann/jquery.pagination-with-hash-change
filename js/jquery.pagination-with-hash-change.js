/* 
* Author: cpbaumann
*/

(function($) {
    $.fn.extend({
        paginationwithhashchange: function(options) {

            var defaults = {
                initialPage: 1,          // default active page on first load
                pagingId: "#paging-nav", // #id or .class possible
                itemsPerPage: 8         // shown items per page
            };

            var options = $.extend(defaults, options);

            return this.each(function() {

                var obj = $(this),
                    initialPage = options.initialPage,
                    pagingId = options.pagingId,
                    itemsPerPage = options.itemsPerPage,
                    numItems = obj.children().length,
                    numPages = Math.ceil(numItems/itemsPerPage);

                var showPage = function(page) {
                    obj.children().hide();
                    var i,
                        s = (page - 1) * itemsPerPage,
                        max = page * itemsPerPage;

                    for (i = s; i < max; i += 1) {
                        obj.children().eq(i).show();
                    }    
                };

                var pageNav = function() {

                    var htmlPagingList = '<ul></ul>',
                        i = 1;
                        htmlLi = '',
                        objUl = null;

                    for( i = 1; i <= numPages; i += 1 ){
                        htmlLi += '<li><a href="#' + i +'">' + i + '</a></li>';
                    };
                    
                    objUl = $(htmlPagingList).appendTo(pagingId), 
                    $(htmlLi).appendTo(objUl);
                    
                    $(pagingId).on('click','a',function(e){        
                        e.preventDefault();
                        window.location = "//" + window.location.host + window.location.pathname + window.location.search + this.hash;
                        page = $(this).attr('href').replace('#','');
                        $(pagingId).find('li').removeClass('active');
                        $(this).parent().addClass('active');
                        showPage(page);
                    });
                   
                    if(typeof(page) == 'undefined' && window.location.hash == '') {    
                        // inital active status
                        $(pagingId).find('li').eq(initialPage - 1).addClass('active');
                    }              
                };       

                var getActiveStatus = function() {
                    var d = window.location.hash.replace('#', '')
                    if(d != ''){
                        showPage(d);
                        $(pagingId).find('li').removeClass('active').eq(d - 1).addClass('active');
                    }
                }  
                
                showPage(initialPage);
                pageNav();
                getActiveStatus();
            });
        }
    });
})(jQuery);