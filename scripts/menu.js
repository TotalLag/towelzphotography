
$(document).ready(function() {
 
 $('#navigation a').stop().animate({'marginLeft':'-105px'},1000);
 
 $('#navigation > li').hover(
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
  },
  function () {
   $('a',$(this)).stop().animate({'marginLeft':'-105px'},200);
  }
 );
});