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

var throttledFn = throttle(resizeWindow,3000)


function resizeWindow(){
  console.log('resize to: 200 * 300')
}

setInterval(function(){
//(throttle(resizeWindow,3000))();
throttledFn()
console.log('interval running in 1s')
},1000)