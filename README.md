# jQuery.HookTo

Hook To - jQuery plugin

Move an element to another with responsive back-in-place.
This plugin is mobile first.

## Install
First, you have to add jquery before with plugin on your page.
``<script src="jquery.min.js"></script>``

After, you can call the plugin. Download this repository and call the js file.
``<script src="jquery.hookto.js"></script>``


## How to
To move and element on bigger screen size :
* Add ``data-hook-to=""`` attribute to your element.
* Create HTML element called 'hook'. This hook is the destination element on bigger screen.

Example :
```HTMl
<div class="my-element-to-move-on-bigger-screen-size" data-hook-to="#hook-my-element"></div>
<div class="toto">
    <meta id="hook-my-element"/>
</div>
```
In this case, my HTML element ``class="my-element-to-move-on-bigger-screen-size"`` will be insert just after the HTML element ``<meta id="hook-my-element">``.


### settings

#### jQuery method
You can overwrite default values with javascript :
```javascript
$('.my-element').hookTo(destinationHook, options);
```

```js
var options = {
  'position': 'after',
  'returnAt': '768',
  'hookOriginPrefix': 'hookto-orig'
}
```

#### HTML attribute method

```HTMl
<div 
  data-hook-to="#hook-destination" 
  data-hook-position="before" 
  data-hook-to-return="pixel_value"
  data-hook-to-OriginPrefix="whatever you want"></div>
```

### All attributes
 data-hook-position="before" 
 * before
 * after
 
 Propriety | Type | Default | Description
 --------- | ---- | ------- | -----------  
 data-hook-to | HTML element | - | An HTML element. Put ``#`` if is an ID, ``.`` if is a class.
 data-hook-position | String | after | Put the element just after. ( you can use "before" instead)
 data-hook-to-return | Number | 768 | Breakpoint. Move the element only after with window size
 data-hook-to-OriginPrefix | String | hookto-orig | Breakpoint. Move the element only after with window size.

