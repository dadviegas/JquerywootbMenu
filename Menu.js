


String.prototype.format = String.prototype.formatString = function() { 
    var s = this, 
        i = arguments.length; 
     while (i--) { 
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]); 
    } 
    return s; 
}; 


(function($){ 
	 $.fn.menu = function(options) {
	 
	 var rendered = false;
	
	 function Clickcallback(){ alert("Event"); }

	
	 // opções padrão
     var settings = {
		 paddingWidth: 15,
         padding: 40,
         enabled:true,
		 timeBetween:200,
		 effectSpeed:'slow',
		 time:100,
		 
		 easingIn:'easeInQuad',
		 easingOut:'easeInQuad',
		 paddingDirection:'Right',
		 corner:true,
		 useArrows:true,
		 
		 // events
		 clickEvent:  Clickcallback
		 
     };
	 settings = $.extend(settings, options);
	var AnimationSpeedandTypeIn = {
                    duration: settings.time+500,
                    easing: settings.easingIn
                };
	var AnimationSpeedandTypeOut = {
                    duration: settings.time+500,
                    easing: settings.easingOut
                };
				
	var timer = 0;
	
    	
	if(settings.corner)
	{
		var $list = this.find('li');
		if(settings.paddingDirection==='Right')
		{
			$list.filter(':visible:first').corner("tl");
			$list.filter(':visible:last').corner("bl");
		}
		else 
		{
			$list.filter(':visible:first').corner("tr");
			$list.filter(':visible:last').corner("br");
		}
	}
		if(settings.paddingDirection==='Right')
			$(this).css("text-align","right");
		if(settings.paddingDirection==='Left')
			$(this).css("text-align","left");
			
		
			
      return this.find('li').each(function(){
		var $this =  $(this);
		
		if(settings.paddingDirection==='Right')
			$this.css("text-align","right");
		else
			$this.css("text-align","left");
			
		$this.fadeOut(settings.effectSpeed).delay(settings.timeBetween * timer);
        $this.fadeIn(settings.effectSpeed);
		timer++;
		
		
		
		$this.bind("click", {element: this},  settings.clickEvent);
				
		if(settings.useArrows){
			if(settings.paddingDirection==='Right')
				$this.append('<span class="arrow-left" id="arrowleft"></span>');
			if(settings.paddingDirection==='Left')
				$this.append('<span class="arrow-right" id="arrowright"></span>');
		}
		
		$this.hover(
		function()
		{
			if(rendered)
			{
				if(settings.paddingDirection==='Right')
				{
					if(settings.useArrows){
						var $arrows = $('.arrow-left', $(this));
						$arrows.removeClass("arrow-left").addClass('arrow-left_Hover');
					}
					$(this).stop().animate({ paddingRight: settings.padding,borderWidth: "0.9px"}, AnimationSpeedandTypeIn);
					//,borderColor: "gray"
				}
				else 
				{
					if(settings.useArrows){
						var $arrows = $('.arrow-right', $(this));
						$arrows.removeClass("arrow-right").addClass('arrow-right_Hover');
					}
					$(this).stop().animate({ paddingLeft: settings.padding,borderWidth: "0.9px"}, AnimationSpeedandTypeIn);
				//,borderColor: "gray"
				}
			}
		},		
		function()
		{
			if(rendered)
			{
				if(settings.paddingDirection==='Right')
				{
					if(settings.useArrows){
						var $arrows = $('.arrow-left_Hover', $(this));
						$(this).stop().animate({ paddingRight: settings.paddingWidth,borderWidth: "0.9px"}, AnimationSpeedandTypeOut);
						//,borderColor: "white"
					}
					$arrows.removeClass("arrow-left_Hover").addClass('arrow-left');
				}
				else 
				{
					if(settings.useArrows){
						var $arrows = $('.arrow-right_Hover', $(this));
						$arrows.removeClass("arrow-right_Hover").addClass('arrow-right');
					}
					$(this).stop().animate({ paddingLeft: settings.paddingWidth,borderWidth: "0.9 px"}, AnimationSpeedandTypeOut);
					//,borderColor: "white"
				}
			}
		})

     }).promise().done(function() {
			rendered = true;
		  });;
	 

	
	 
    };
 })(jQuery);

