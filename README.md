# email autocomplete
This is a jquery plugin for email input autocomplete. 
you can select the autocomplete emails by Up/Down key press or mouse click 
#### demo
![email autocomplete][1]
#### parameters:
```
var defaults =
   {
        // all included auto completed email domins 
      domains: ["qq.com", "163.com", "gmail.com", "126.com", "sina.com", "139.com", "hotmail.com", "outlook.com", "sohu.com", "128.com", "136.com", "live.com"]
   };

1. domains: the email domains array, these domains will be used as email auto complete.
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
<div class="autocompletecon">
    <input id="emailautocomplete"  class="emailautocomplete" name="email" type="email" maxlength="50" autocomplete="off" />
</div>
```
3.bind the behavior of the email autocomplete
```
<script type="text/javascript">
  $(function(){
      $(".emailautocomplete").emailautocomplete();
  });
</script>
```
4.you can override the parameters like below
```
$(".emailautocomplete").emailautocomplete({ domains: ["qq.com", "163.com", "gmail.com", "126.com", "sina.com"]});
```
#### suggestion:
```
1. copy the css and js code of this plugin into your own css and js file, because of this plugin's code is very little and it's not deserved to be loaded as a single file, it will increase the page load time in a way.
2. adjust the css of this plugin according to your personal need.
```
[1]:https://github.com/tracylv/emailautocomplete/blob/master/demosreenshot.jpg

