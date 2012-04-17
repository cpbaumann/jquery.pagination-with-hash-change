/* 
* Author: cpbaumann
*/

(function($) {
    $.fn.extend({
        paginationwithhashchange: function(options) {

            var defaults = {
                initialPage: 1,
                pagingId: ".page-nav",
                itemsPerPage: 8,
                pagingList: 'ul'
            };

            var options = $.extend(defaults, options);

            return this.each(function() {

                var obj = $(this),
                    initialPage = options.initialPage,
                    pagingId = options.pagingId,
                    itemsPerPage = options.itemsPerPage,
                    pagingList = options.pagingList,
                    numItems = obj.children().length,
                    numPages = Math.ceil(numItems/itemsPerPage);

                obj.children().hide();    

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

                    var htmlPagingList = '<' + pagingList + '></' + pagingList + '>',
                        i = 1;
                        htmlLi = '',
                        objUl = null;


                    for( i = 1; i <= numPages; i += 1 ){
                        htmlLi += '<li><a data-index="' + i + '" href="#' + i +'">' + i + '</a></li>';
                     };

                    objUl = $(htmlPagingList).appendTo(pagingId), 
                    $(htmlLi).appendTo(objUl);
                            
                    $(pagingId + ' li a').click(function(e){ 
                        var hash = this.hash;
                        e.preventDefault();
                        var newUrl = "//" + window.location.host + window.location.pathname + window.location.search + hash;
                            
                        window.location = newUrl;
                        page = $(this).attr('data-index');
                        $(pagingId + ' li').removeClass('active');
                        $(this).parent().addClass('active');
                        showPage(page);
                    });
                   

                    if(typeof(page) == 'undefined' && window.location.hash == '') {    
                        // inital active status
                        $(pagingId + ' li').eq(initialPage-1).addClass('active');
                    }              
                };       

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