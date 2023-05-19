const {readFile,writeFile}=require("fs");
console.log("start");
readFile("./content/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first= result;
    readFile("./content/second.txt","utf-8",(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
    writeFile("./content/result.txt",
    `Here is the result: ${first} and ${second}...`
    ,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("you are done with this task. ");
    })

    })
})
        console.log("starting with new one.");
