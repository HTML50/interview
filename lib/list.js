let list = [
  "js-deep-clone.html","深拷贝",
  "css-holy-grail-layout.html","圣杯布局Holy grail layout",
  "css-responsive-and-auto-center-img.html","图片不超出容器限制，按比例缩放"
],html='';

for(let i=0,len=list.length;i<len;i=i+2){
  let filePath = list[i],
      title = list[i+1],
      articleType;

  if(filePath.indexOf('css') !== -1){
    articleType = 'css'
  }else{ 
    articleType = 'js'
  }

  html+='<a href="./article/'+filePath+'"><span class="'+articleType+'"></span>'+title+'</a>'
}

articleList.innerHTML = html;

articleList.addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.tagName === 'A'){
    window.parent.document.getElementById('iframe').src = e.target.href;
    }
},true)