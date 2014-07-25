# emailautocomplete
=================

This is a jquery plugin for email input autocomplete. 
you can select the auto complete emails by Up/Down key press or mouse click 

#### demo
demoscreenshot.jpg
#### parameters:
```
var defaults =
{

};
1. domains: the email domains array, there domains will be used as email auto complete.
```
#### usage:
1.include all the resources of emailautocomplete in your page (need jquery)
```
<link type="text/css" href="jquery.emailautocomplete.css" rel="stylesheet" />

<script src="http://code.jquery.com/jquery-1.9.1.min.js" type="text/javascript"></script>
<script src="jquery.emailautocomplete.js" type="text/javascript"></script>
```
2.add the below dom into your page.
```

```
3.bind the behavior of the slideshow
```
<script type="text/javascript">
    $(function(){
	    $(".emailautocomplete").emailautocomplete();
	});
</script>
```
5.you can override the parameters like below
```
$(".emailautocomplete").emailautocomplete({ domains: []});
```
#### suggestion:
```
1. copy the css and js code of this plugin code into your own css and js file, because of this plugin's code is very little and it's not deserved to be loaded as a single file, it will increase the page load time in a way.
2. adjust the css of this plugin according to your personal need.
```


