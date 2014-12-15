ctrl.startup = function cata_init()
{
	var pagename = window.location.pathname;
	
	var page_name = ['/about', '/news', '/product', '/food', '/life', '/culture', '/top_select', '/fun', '/scenery'];
	var page_cata = new Array('m1', 'm2', 'm2', 'm3', 'm3', 'm3', 'm4', 'm5', 'm5');
	var page_master_cata = new Array('cata1', 'cata2', 'cata2', 'cata3', 'cata3', 'cata3', 'cata4', 'cata5', 'cata5');
	var a = page_name.indexOf(pagename);
	var cata_now = page_cata[a];
	var mastercata_cnow = page_master_cata[a];
	
	for(var key in page_name){
		var temp;
		var temp_back;
		var o = document.getElementById( page_cata[key] );
		var p = document.getElementById( page_master_cata[key] );
		if(pagename == page_name[key] || page_cata[key] == cata_now)
			{  
				temp='inline';
				temp_back='url(../../Changhua/cata/slider_hover.png)';
				
			}
		else
			{
				temp='none';
				temp_back='';
			}
		o.style.display = temp;
		p.style.backgroundImage = temp_back;	
	  }
};
ctrl.toggleMenu=function( id )
{
	var pages = new Array('m1', 'm2', 'm3','m4','m5');
	
  for(var key in pages){
	var temp;
	var display;
	var o=document.getElementById( pages[key] );
	display = o.style.display;
	if(id == pages[key])
		{  
			temp=(display=='none') ? 'inline' : 'none';
			
		}
	else
		{
			temp='none';
		
		}
	
	o.style.display = temp;  
  }
  

};
ctrl.bg=function( id )
{
	var pages = new Array('cata1', 'cata2', 'cata3','cata4','cata5');
	
	for(var key in pages){
	var temp;
	var display;
	var dom = document.getElementById( pages[key] );
	display = dom.style.backgroundImage;
	if(id == pages[key])
		{  
			temp=(display=='') ? 'url("../../Changhua/cata/slider_hover.png")' : 'url("../../Changhua/cata/slider.png")';
			
		}
	else
		{
			temp='';
		
		}
	
	dom.style.backgroundImage = temp;  
  }


};

