
	function dynamicLoadPage(event)
	{
		var $this = $(event.data.element);
		var path =  'pages/{0}.htm'.formatString($this.attr('rel'));
		
		var $container = $('.item-2');
		$container.hide(effectApplyed, {}, 900).empty();
		$container.load(path).show(effectApplyed, optionsApplyed, 900);
	}

	function LoadMenu(ulID,file,options){
		$.ajax({
			url:        file,
			dataType:   "json", 
			success:    function(data){
				var $this = $(ulID);
				$.each(data.d, function(key, val) {
					$this.append('<li rel="' + val.link + '">' +  val.title + '</li>');
				});
				$this.menu(options);
			},
			error:    AjaxFailed
		});
	}
	
	function TextExplodeEffect(id){

		$(id).hover(function () {
				$(this).effect("explode", { pieces: 16 }, 1400, callback_); 
			});
				   
			function callback_() {
				$(id).hide().fadeIn();
				$(id).fadeIn('slow');
		};

	}

	// global variables
	var effectApplyed = Effects.drop;
	var optionsApplyed = {direction:'right'};

	// Main entry for script
	function MainEntry()
	{
		
		TextExplodeEffect("#text");
		$(".item-2").WootbCorner();
		LoadMenu("#ul1",'data/menuleft.gif',{clickEvent:dynamicLoadPage});
		LoadMenu("#ul2",'data/menuright.gif',{paddingDirection:'Left',clickEvent:dynamicLoadPage});
	}
	
	MainEntry();