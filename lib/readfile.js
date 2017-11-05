var rf=require("fs");  
var data=rf.readFileSync("../article","utf-8");  
console.log(data);  
console.log("READ FILE SYNC END"); 