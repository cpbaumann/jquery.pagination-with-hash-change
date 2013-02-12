# Pagination with hash change jQuery Plugin

Adds Pagination with hash change

## Demo

[Demo jquery-plugins: jquery.pagination-with-hash-change/](http://spielwiese.datenschubse.de/jquery-plugins/jquery.pagination-with-hash-change/)

## Usage

### HTML

```html
<div id="paging-nav"></div>
<ul id="gallery" class="clearfix">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>

  <li>30</li>
</ul> 
```
### jQuery

Use the plugin as follows:

```js
<script src="js/libs/jquery-1.9.0.min.js"></script>
<script src="js/jquery.pagination-with-hash-change.js"></script>
<script>
  $(document).ready(function() {
    $('#gallery').paginationwithhashchange({
      pagingId: '#paging-nav',
      itemsPerPage: 5
    });
  });
</script>
```

### HTML/CSS

The generated HTML source in ``` <div id="paging-nav"> </div> ```:

```html
<ul>
	<li class="active"><a href="#1">1</a></li>
	<li><a href="#2">2</a></li>
	<li><a href="#3">3</a></li>
	<li><a href="#3">3</a></li>
  <li><a href="#4">4</a></li>
  <li><a href="#5">5</a></li>

	<li><a href="#30">30</a></li>
</ul>

```

## Notes

* Requires jQuery 1.7+. 
* is reload save via # hashes
* tested in IE 7,8,9, Safarie, Firefox, Chrome


## License

This plugin is dual licensed under the MIT and GPL licenses.

