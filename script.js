const express=require('express');
const app=express();
app.set("view engine","ejs");
app.use(express.static('./public'));
app.get("/portfolio",function(req,res){
    res.render("portfolio");
})
app.listen(3000);