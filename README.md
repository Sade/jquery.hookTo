# jQuery.HookTo

Hook To - jQuery plugin

Move an HTML element on breakpoint screen size with dynamic back-in-place.

## Install
First, you have to add jquery before with plugin on your page.
``<script src="jquery.min.js"></script>``

After, you can call the plugin. Download this repository and call the js file.
``<script src="jquery.hookto.js"></script>``


## How to
To move and element on breakpoint screen size :
* Add ``data-hook-to=""`` attribute to your element.
* Create HTML element called 'hook'. This hook is the destination element on breakpoint screen size.

Example :
```HTMl
<div class="my-element-to-move-on-breakpoint-screen-size" data-hook-to="#where-my-element-will-be-hooked"></div>
<div class="toto">
    <meta id="where-my-element-will-be-hooked"/>
</div>
```
In this case, my HTML element ``class="my-element-to-move-on-breakpoint-screen-size"`` will be insert just after the HTML element ``<meta id="where-my-element-will-be-hooked">``.

See result when screen size pass through the breakpoint.
```HTMl
<div class="toto">
    <meta id="where-my-element-will-be-hooked"/>
    <div class="my-element-to-move-on-breakpoint-screen-size" data-hook-to="#where-my-element-will-be-hooked"></div>
</div>
```
My element had been moved ! It will return at his original place when the screen size pass through the breakpoint again.



### Settings

#### HTML attributes method

```HTMl
<div 
  data-hook-to-mobile-first="true"
  data-hook-to="#hook-destination" 
  data-hook-to-position="after" 
  data-hook-to-return="768"
  data-hook-to-origin-prefix="hookto-orig"></div>
```

#### jQuery method
You can overwrite default values with javascript :
```javascript
$('.my-element').hookTo(destinationHook, options);
```

```js
var options = {
  'hookOriginPrefix': 'hookto-orig',
  'position': 'after',
  'returnAt': '768',
  'mobileFirst': true
}
```

#### Callback methods
In jQuery, you can add some actions using this callbacks methods.
```js
$('.my-element').hookTo(destinationHook, {
   'onInit': function () {},
   'onHook': function () {},
   'onUnhook': function () {}
});
```

### All attributes
 
 Propriety | Type | Default | Description
 --------- | ---- | ------- | -----------  
 data-hook-to-mobile-first | Boolean | true | The element will be move if screen size is > of the breakpoint. ( false, < of the breakpoint )
 data-hook-to | HTML element | - | An HTML element. Put ``#`` if is an ID, ``.`` if is a class.
 data-hook-to-position | String | after | Put the element just after. ( you can use "before", or "inside" instead)
 data-hook-to-return | Number | 768 | Breakpoint. Move the element only after with window size
 data-hook-to-origin-prefix | String | hookto-orig | Breakpoint. Move the element only after with window size.

