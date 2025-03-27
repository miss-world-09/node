const {console}=require('console');
const http=require('http');

const port= process.env.PORT||3000;

const server=http.createserver((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>hi there</h1> <p>how are you</p>');

})
server.listen(port,()=>{
    console.log(`server is listening to the port ${port}`);
});