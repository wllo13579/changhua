
function toggleMenu( id )
{
  var o=document.getElementById( id );
  o.style.display=
    (o.style.display=='none') ? 'inline' : 'none';

}
function bg( id )
{
  var dom = document.getElementById(id);
  dom.style.backgroundImage =
	(dom.style.backgroundImage=='') ? 'url(../../Changhua/cata/slider_hover.png)' : '';
}
hideMenu('menus');
