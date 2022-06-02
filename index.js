const express=require("express")
const app=express();
const importData=require("./data.json")
const flipcart=require("./Flipcart.json")

const BestOffers=require("./BestOffers.json")
const Breshes=require("./Breshes.json")
const Eye=require("./Eye.json")
const Face=require("./Face.json")
const Lips=require("./Lips.json")
const makeup=require("./makeup.json")
const mask=require("./mask.json")
const MerchStation=require("./MerchStation.json")
const SkinCare=require("./SkinCare.json")
const Trending=require("./Trending.json")

let port=process.env.PORT || 3000

app.get("/",(req,res)=>
{
    res.send("Hello World")
})
app.get("/products",(req,res)=>
{
    res.send(importData)
})
app.get("/cloths",(req,res)=>
{
    res.send(flipcart)
})

app.get("/BestOffers",(req,res)=>
{
    res.send(BestOffers)
})
app.get("/Breshes",(req,res)=>
{
    res.send(Breshes)
})
app.get("/Eye",(req,res)=>
{
    res.send(Eye)
})
app.get("/Face",(req,res)=>
{
    res.send(Face)
})
app.get("/Lips",(req,res)=>
{
    res.send(Lips)
})
app.get("/makeup",(req,res)=>
{
    res.send(makeup)
})
app.get("/mask",(req,res)=>
{
    res.send(mask)
})
app.get("/MerchStation",(req,res)=>
{
    res.send(MerchStation)
})
app.get("/SkinCare",(req,res)=>
{
    res.send(SkinCare)
})
app.get("/Trending",(req,res)=>
{
    res.send(Trending)
})

app.listen(port,()=>
{
    console.log(`Exmple app is listening on port http://localhost:${port}`)
})
