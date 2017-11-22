function diy(regexp, replacement, pureMode) {

  if(pureMode){
      appendTextare();
      return
  }
  var xhr = new XMLHttpRequest();
  xhr.open('GET', location.href, true)
  xhr.send()

  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {

          var res = xhr.response
          res = res.replace(/<script[\s\S]*\/script>/g, '')
          //这个flag在我的Chrome 62上可以使用s，单行模式或称.匹配所有模式，但是低版本的不行，只能用[\s\S]这样的hack方法匹配任意内容

          if (regexp && replacement) res = res.replace(new RegExp(regexp, 'g'), replacement);

          appendTextare(res);
      }
  }

}


function runCode(obj) {
  var winname = window.open("", "_blank", "resizable=yes,scrollbars=yes,status=yes");
  winname.document.open("text/html", "replace");
  winname.document.writeln(obj.value);
  winname.document.close();
}


function appendTextare(res){
  if(!res) res='<!doctype html>\n\
  <html>\n\
  <head>\n\
  <meta charset="UTF-8">\n\
  </head>\n\
  <body>\n\
  <script>\n\
  //请在此处开始你的表演(๑•̀ㅂ•́)و✧，记得运行后按F12查看效果\n\
  \n\n\n\
  </script>\n\
  </body>\n\
  </html>';

  var ele = document.createElement('div');
  ele.style = "border-top: #D81E06 solid 8px;text-align:center;background: #f1f1f1;font-size: 20px;color: #5d5d5d;padding: 10px;margin: 10px;readfile.js"
  ele.innerHTML = '<p>在下方尝试修改并运行查看效果</p><textarea id="editor" style="width:700px; height:600px; border:1px solid #e4e4e4;font-size: 15px;">' + res + '</textarea><p><input style="padding: 10px;background: #d81e06;border: none;font-size: 20px;color: #fff;border-radius: 2px;" type=button onclick=runCode(document.getElementById("editor")) value="运行"></p>';
  document.body.append(ele)
}