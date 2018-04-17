/*
// Toggling by js only.
// upper than ie8
document.addEventListener("DOMContentLoaded", function(){
  var row = document.getElementsByClassName('qa-row');
  var rl = row.length;
  if(rl){
    for(var i=0;i<rl;i++){
      var u = row[i].getElementsByTagName('a')[0];
      u.addEventListener('click', function(){
        var p = this.parentNode;
        var ui = p.getElementsByClassName('qa-ans')[0];
        if(ui.style.display == 'none'){
          ui.style.display = 'block';
        } else {
          ui.style.display = 'none';
        }
      });
    }
  }
});
*/

// js + css
function toggleAnswer(obj) {
  var p = obj.parentNode;
  if(!p.classList.contains('on')) {
    p.classList.add('on');
  } else {
    p.classList.remove('on');
  }
}
