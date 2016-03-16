tweetr-js 1.0.0
===============

Description
-----------

A simple JQuery class/object that opens a Twitter messaging window (with a pre-filled username) in the center of a user's screen, complete with a background overlay and close button.

Configuration 1 (default):
--------------------------
<pre>$(function(){
	Tweetr.init();
});</pre>

Configuration 2 (custom):
-------------------------
<pre>$(function(){
	Tweetr.init({width:800,height:600,btnText:'Close'});
});</pre>

Notes:
------
You need to include both tweetr.css and tweetr.js in the head of the page on which you want to use tweetr-js. Then simply initiate the class/object and add an onclick event to your button/element:
<pre>&lt;script type="text/javascript" src="http://code.jquery.com/jquery-2.2.1.min.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" href="tweetr-js/tweetr.min.css" /&gt;
&lt;script type="text/javascript" src="tweetr-js/tweetr-1.0.0.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
	Tweetr.init();
&lt;/script&gt;
&lt;a href="javascript:void(0)" onclick="Tweetr.open('jpforsyth'); return false;"&gt;Tweet&lt;/a&gt;</pre>

Properties
----------

<table>
<tr>
	<th>Property</th><th>Description</th><th>Type</th><th>Optional</th><th>Default</th></tr>
<tr>
  <td>width</td>
  <td>The width of the pop-up window</td>
	<td>Integer</td>
	<td>True</td>
	<td>640</td>
</tr><tr>
  <td>height</td>
  <td>The height of the pop-up window</td>
	<td>Integer</td>
	<td>True</td>
	<td>480</td>
</tr><tr>
  <td>btnText</td>
  <td>The text used on the close button</td>
	<td>String</td>
	<td>True</td>
  <td>Close</td>
</tr>
</table>
