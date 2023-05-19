const {readFileSync,writeFileSync}=require("fs");
console.log("start");
const first=readFileSync("./content/first.txt","utf-8");
console.log(first)

writeFileSync("./content/resul1.txt",
"hello helllo helllllooo",
"utf-8",
{flag:"a"});
console.log("done");
console.log("start new one");