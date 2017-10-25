function debounce(fn,wait){
  var timer;
  return function(){
    if(timer) clearTimeout(timer)
    timer = setTimeout(function(){
      fn();
      timer = false;
    },wait)
  }
}


function throttle(fn,time){
  var last=0;
  return function(){
    var now = new Date();
    if(now - last > time){
      fn();
      last = now;
    }
  }
}