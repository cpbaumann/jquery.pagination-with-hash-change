# Pagination with hash change jQuery Plugin 

Adds Pagination with hash change

## Demo

[Demo jquery-plugins: jquery.pagination-with-hash-change/](http://spielwiese.datenschubse.de/jquery-plugins/jquery.pagination-with-hash-change/)

## Usage

### HTML

```html
<div class="page-nav"></div>
<div id="gallery" class="clearfix">
  <div class="gal-item">1</div>
  <div class="gal-item">2</div>
  <div class="gal-item">3</div>
  <div class="gal-item">4</div>


  <div class="gal-item">30</div>
</div> 
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


## License

This plugin is dual licensed under the MIT and GPL licenses.

