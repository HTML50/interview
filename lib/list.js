let list = [
  "js-deep-clone.html","深拷贝",
  "css-holy-grail-layout.html","圣杯布局Holy grail layout",
  "css-responsive-and-auto-center-img.html","图片不超出容器限制，按比例缩放",
  "js-mySetInterval.html","用setTimeout实现一个setInterval函数",
  "js-bubbling-and-capturing.html","事件冒泡与事件捕获",
  "js-debounce-throttle.html","函数去抖(debounce)，节流(throttle)"
  ],CSSList=[],JSList=[];


showAll(true)
numberOfAll.innerHTML = list.length / 2;
numberOfCSS.innerHTML = CSSList.length / 2;
numberOfJS.innerHTML = JSList.length / 2;

function showList(category){
  var arr = category === 'css' ? CSSList : JSList,html = '';

  for(let i=arr.length;i>0;i=i-2){
  let filePath = list[i-2],
      title = list[i-1],
      articleType;

  html+='<a href="./article/'+filePath+'"><span class='+category+'></span>'+title+'</a>'
}
articleList.innerHTML = html;
}

function showAll(isInitial){
  var html ='';

for(let i=list.length;i>0;i=i-2){
  let filePath = list[i-2],
      title = list[i-1],
      articleType;

  if(filePath.indexOf('css') !== -1){
    articleType = 'css'
    if(isInitial) CSSList.push(filePath,title);
  }else{ 
    articleType = 'js'
    if(isInitial) JSList.push(filePath,title);  
  }

  html+='<a href="./article/'+filePath+'"><span class="'+articleType+'"></span>'+title+'</a>'
}

articleList.innerHTML = html;

}

articleList.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.tagName === 'A'){
    window.parent.document.getElementById('iframe').src = e.target.href;
    }
},true)