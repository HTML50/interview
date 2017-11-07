function runCode(obj) {
    var winname = window.open("", "_blank", "resizable=yes,scrollbars=yes,status=yes");
    winname.document.open("text/html", "replace");
    winname.document.writeln(obj.value);
    winname.document.close();
}

function diy(regexp, replacement) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', location.href, true)
    xhr.send()

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {

            var res = xhr.response
            res = res.replace(/<script.*\/script>/g, '')

            if (regexp && replacement) res = res.replace(new RegExp(regexp, 'gs'), replacement);

            var ele = document.createElement('div');
            ele.style = "border-top: #D81E06 solid 8px;text-align:center;background: #f1f1f1;font-size: 20px;color: #5d5d5d;padding: 10px;margin: 10px;readfile.js"
            ele.innerHTML = '<p>在下方尝试修改并运行查看效果</p><textarea id="editor" style="width:700px; height:600px; border:1px solid #e4e4e4;font-size: 15px;">' + res + '</textarea><p><input style="padding: 10px;background: #d81e06;border: none;font-size: 20px;color: #fff;border-radius: 2px;" type=button onclick=runCode(document.getElementById("editor")) value="运行"></p>';
            document.body.append(ele)
        }
    }

}