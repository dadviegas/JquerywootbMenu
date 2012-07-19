
String.prototype.format = String.prototype.formatString = function() { 
    var s = this, 
        i = arguments.length; 
     while (i--) { 
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]); 
    } 
    return s; 
};
// "{0}{1}".format("I join"," strings"); result: "I join strings"

var Effects = {blind:"blind",bounce:"bounce",clip:"clip",drop:"drop",explode:"explode",fold:"fold",highlight:"highlight",puff:"puff",pulsate:"pulsate",scale:"scale",shake:"shake",size:"size",slide:"slide"};
	
function AjaxFailed(error) 
{ 
	alert(JSON.stringify(error));                
}	

function loadCss(filename){
  
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)

 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

function loadScript(filename){
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}