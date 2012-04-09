# Pagination with hash change jQuery Plugin 

Adds Pagination with hash change

## Demo

[Demo jquery-plugins: jquery.pagination-with-hash-change/](http://spielwiese.datenschubse.de/jquery-plugins/jquery.pagination-with-hash-change/)

## Usage

### HTML

```html
<div class="page-nav"></div>
<ul id="gallery" class="clearfix">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>


  <li>30</li>
</ul> 
```

### jQuery

Use the plugin as follows:

```js
    $('#gallery').paginationwithhashchange({
        pagingId: ".page-nav",
        itemsPerPage: 5
    });
});
```


## Notes

* Requires jQuery 1.7+. 
* is reload save via # hashes
* teste in IE 7,8,9, FF 11, Chrome


## License

This plugin is dual licensed under the MIT and GPL licenses.

