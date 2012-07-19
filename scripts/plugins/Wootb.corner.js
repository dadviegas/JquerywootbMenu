/*!
 * Examples at: http://www.weboutofthebox.com
 * version 1.00 (18-JUN-2012)
 * Requires jQuery v1.7.2 (tested in 1.7.2) or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: David Viegas
 */

/**
 *  WootbCorner() takes a options argument specified in the code below in settings : $WootbCorner.menu(options);
 *
*/

// object to save css code and value to apply.
CssCode = function (key, val) {
    this.key = key;
    this.val = val;
   // $.log("CssCode " + this.key + ' ' + this.val, $.Write.info);
 }

var Templates = {ex1:"1em 4em 1em 4em", ex2:"25px 10px / 10px 25px",default:"1em"};
(function($){ 
	$.fn.WootbCorner = function(options) {
		var $this = $(this);
		var border = {
			Radius:['-moz-border-radius',"border-radius"],
			radiusTopRight:["-moz-border-radius-topright","border-top-right-radius"],
			radiusTopLeft:["-moz-border-radius-topleft","border-top-left-radius"],
			radiusBottomRight:["-moz-border-radius-bottomright","border-bottom-right-radius"],
			radiusBottomLeft:["-moz-border-radius-bottomleft","border-bottom-left-radius"],
		};
		
		var settings = {
			radius: Templates.default, // border Radius
			tr:null, // border Top Right Radius
			tl:null, // border Top Left Radius
			br:null, // border Bottom Right Radius
			bl:null, // border Bottom left Radius
		};

		settings = $.extend(settings, options);
		
		var verify = settings.tr || settings.tl || settings.br || settings.bl;
		
		if(verify)
		{
			var csscodes = new Array();
			if (settings.tr)
			{
				for (var index in border.radiusTopRight) 
				{
					var code = border.radiusTopRight[index];
					var _css = new CssCode(code,settings.tr);
					csscodes.push(_css);
				}
			}
			if (settings.tl)
			{
				for (var index in border.radiusTopLeft) 
				{
					var code = border.radiusTopLeft[index];
					var _css = new CssCode(code,settings.tl);
					csscodes.push(_css);
				}
			}
			if (settings.br)
			{
				for (var index in border.radiusBottomRight) 
				{
					var code = border.radiusBottomRight[index];
					var _css = new CssCode(code,settings.br);
					csscodes.push(_css);
				}
			}
			if (settings.bl)
			{
				for (var index in border.radiusBottomLeft) 
				{
					var code = border.radiusBottomLeft[index];
					var _css = new CssCode(code,settings.bl);
					csscodes.push(_css);
				}
			}
			
			for (var index in csscodes) 
			{
				$this.css(csscodes[index].key,csscodes[index].val);
				//$.log(JSON.stringify(csscodes), $.Write.info);
			}
		}
		else
		{
			// default
			$this.css(border.Radius[0],settings.radius).css(border.Radius[1],settings.radius);
		}
	 };
 })(jQuery);

 //uses the css border radius for creating the round effect.
// -moz-border-radius: 35px;
 // border-radius: 35px;
 
 // Examples:
 // #Example_A {
 // height: 65px;
 // width:160px;
 // -moz-border-radius-bottomright: 50px;
 // border-bottom-right-radius: 50px;
 // }
 
// #Example_B {
 // height: 65px;
 // width:160px;
 // -moz-border-radius-bottomright: 50px 25px;
 // border-bottom-right-radius: 50px 25px;
 // }
 
// #Example_C {
 // height: 65px;
 // width:160px;
 // -moz-border-radius-bottomright: 25px 50px;
 // border-bottom-right-radius: 25px 50px;
 // }
 
// #Example_D {
 // height: 5em;
 // width: 12em;
 // -moz-border-radius: 1em 4em 1em 4em;
 // border-radius: 1em 4em 1em 4em;
 // }
 
// #Example_E {
 // height: 65px;
 // width:160px;
 // -moz-border-radius: 25px 10px / 10px 25px;
 // border-radius: 25px 10px / 10px 25px;
 // }
 
// #Example_F {
 // height: 70px;
 // width: 70px;
 // -moz-border-radius: 35px;
 // border-radius: 35px;
 // } 
