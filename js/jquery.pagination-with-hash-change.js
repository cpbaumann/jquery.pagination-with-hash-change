/* 
* Author: cpbaumann
*/

(function($) {
    $.fn.extend({
        paginationwithhashchange: function(options) {

            var defaults = {
                initialPage: 1,          // default active page on first load
                pagingId: "#paging-nav", // #id or .class 
                itemsPerPage: 8,         // shown items per page
                pagingList: 'ul'         // ul or ol
            };

            var options = $.extend(defaults, options);
           
            var Url = {

                protocol : '//',
                host : window.location.host,
                pathname : window.location.pathname,
                search : window.location.search,

                change : function (hash) {
                    window.location = this.protocol + this.host + this.pathname + this.search + hash;
                },

                getHash : function () {
                    window.onhashchange = this.getActiveHash();
                },

                getActiveHash : function () {
                    this.hash = window.location.hash;
                },

                getHashValue : function () {
                    window.onhashchange = this.getActiveHashValue(); 
                },

                getActiveHashValue : function () {
                    this.hashvalue = window.location.hash.replace('#', '');
                }   
            };
            
            return this.each(function() {

                var obj = $(this),
                    initialPage = options.initialPage,
                    pagingId = options.pagingId,
                    itemsPerPage = options.itemsPerPage,
                    pagingList = options.pagingList,
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
                    var htmlPagingList = '<' + pagingList + '></' + pagingList + '>',
                        i = 1,
                        htmlLi = '',
                        objUl = null;

                    for( i = 1; i <= numPages; i += 1 ){
                        htmlLi += '<li><a href="#' + i + '">' + i + '</a></li>';
                    }
                    
                    objUl = $(htmlPagingList).appendTo(pagingId); 
                    $(htmlLi).appendTo(objUl);
                    
                    $(pagingId).on('click','a',function(e){        
                        e.preventDefault();
                        Url.change(this.hash);
                        page = $(this).attr('href').replace('#','');
                        showPage(page);
                        $(pagingId).each(function(){
                            $(this).find('li')
                                .removeClass('active')
                                .eq(page - 1)
                                    .addClass('active');
                        });
                    });
                };

                // set active status on the nav by hash
                var setActiveStatus = function() {
                    Url.getHashValue();
                    pageNav();
                    var page = Url.hashvalue;
                    $(pagingId).each(function(){
                        $(this).find('li')
                            .removeClass('active')
                            .eq(page - 1)
                                .addClass('active');
                    });
                    showPage(initialPage);
                }; 

                var setToInitalPage = function() {
                    Url.getHashValue();
                    if(Url.hashvalue  == '') {   
                        Url.change('#' + initialPage); 
                    }
                };

                setToInitalPage();
                setActiveStatus();
                           
            });
        }
    });
})(jQuery);