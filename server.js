// // var http = require('http')
// // var module = require("./newModule");
// // var url = require('url')
// // http.createServer((req,res)=>{
// //     res.write(req.url)
// //     var queryObj = url.parse(req.url,true).query;
// //     console.log({queryObj})
// //     module.Mymodule();
// //     const ans = module.sum(10,10);
// //     //res.write(String(ans))
// //     console.log(ans);
// //     res.end('hello world')
// // }).listen(8080)
// // var http = require('http')
// // var module = require('./newModule')
// // var url = require('url')
// // var fs =  require('fs')


// // http.createServer((req,res)=>{
// // var queryObj = url.parse(req.url,true).query;
// // var ans = module.sum(parseInt(queryObj.a),parseInt(queryObj.a));
// // res.write(String(ans)+"\n");
// // var an = module.mul(parseInt(queryObj.a),parseInt(queryObj.a));
// // res.write(String(an)+"\n");
// // var anss = module.sub(parseInt(queryObj.a),parseInt(queryObj.a));
// // res.write(String(anss)+"\n");
// // var ann = module.div(parseInt(queryObj.a),parseInt(queryObj.a));
// // res.write(String(ann)+"\n");
// // fs.readFile("demo.html",(err,data)=>{
// //     res.write(data);
// //     res.end(); 
// // })
// //     data = "10000000";
// //      fs.writeFile("text.txt",data,(err)=>{
// //          console.log(err);
// //      });
// //     fs.appendFile("text.txt","Appended new data",(err)=>{
// //         if(err) throw err;
// //     });
// //     fs.unlink("text2.txt",(err)=>{
// //         console.log("file deleted")
// //     })
// //     res.end();

// // }).listen(8080,()=>{
// //     console.log("Server Running")
// // });


// var cors = require('cors')
// var express = require('express')
// var app = express();
// app.use(cors())
// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/expense-tracker")
//     .then(() => console.log("connected to mongo"));

// const userSchema = new mongoose.Schema({
//     date: { type: String, required: true },
//     category: { type: String, required: true },
//     amount: { type: Number, required: true },
// });
// let Users = mongoose.model("Users", userSchema);
// app.use(express.json())


// var arr = [{ id: 1, category: "travelling", amount: 5000 }, { id: 2, category: "Movie", amount:2000 }];

// // app.get('/arr/:id',(req,res)=>{
// //     const itemId = parseInt(req.params.id);
// //     const array = arr.find(array=>array.id===itemId)
// //     //console.log(req.query)
// //     if(array)
// //     {
// //         res.send(array)
// //     }
// //     else{
// //         res.status(400).send("item not found");
// //     }
// // });
// app.get("/api", async (req, res) => {
//     const user = await Users.find();
//     res.json(user)

// });

// app.post('/api', (req, res) => {
//     // console.log(req.body);
//     // let val1 = req.body.num1;
//     // let val2 = req.body.num2;
//     // res.send(String(val1+val2));
//     const { date, category, amount } = req.body;
//     const newItem = new Users({ name, age, Department });
//     newItem.save();
//     res.status(200).json(newItem)
// });
// // app.put('/arr/:id',(req,res)=>{
// //     const itemId = parseInt(req.params.id);
// //     const newItem = req.body;
// //     const index = arr.findIndex(array=>array.id===itemId);
// //     if(index!=-1)
// //     {
// //         arr[index] = {...arr[index], ...newItem};
// //         res.send(arr)
// //     }
// //     else{
// //         res.status(404).send("item not found");
// //     }

// // })
// app.put("/api/:id", async (req, res) => {
//     let _id = req.params.id;
//     const itemToUpdate = await Users.findByIdAndUpdate(_id, req.body);
//     if (!itemToUpdate) return res.status(404).send("Item Not Updated");
//     res.status(200).send(itemToUpdate);
// })
// // app.delete('/arr/:id', (req, res) => {
// //     let itemId = parseInt(req.params.id);
// //     arr = arr.filter(array => array.id != itemId);
// //     res.send("data deleted successfully");
// // })
// app.delete('/api/:id',async(req,res)=>{
//     let id = req.params.id;
//     const itemToDelete = await Users.findByIdAndDelete(id,req.body);
//     if(itemToDelete) return res.status(200).send("item deleted");
//     res.status(404).send("item not found");
    
// })

// app.listen(3001, () => {
//     console.log("Server is running on port 3001")
// })


var express =require('express')

var app=express();
var cors=require('cors')
app.use(cors())
const mongoose=require('mongoose');
mongoose.
    connect('mongodb+srv://developer:Senu3012.@cluster0.uwgvxnc.mongodb.net/expense-tracker')
    .then(console.log("Connected to mongo.."));

const expenseSchema=new mongoose.Schema({
    date:{type:String,required:true},
    category:{type:String,required:true},
    amount:{type:Number,required:true},
})

let Expenses=mongoose.model("Expenses",expenseSchema)
app.use(express.json())
var arr=[{name:"John",id:1},{name:"Semba",id:2}]
app.get('/api',async(req,res)=>{
    const expense=await Expenses.find();
    res.json(expense);
})
app.post('/api',(req,res)=>{
    const{date,category,amount}=req.body;
    const newItem=new Expenses({date:new Date().toLocaleDateString(),category,amount});
    newItem.save()
    res.status(200).json(newItem)
})

// app.post('/add',(req,res)=>{
//     let val1=req.body.num1;
//     let val2=req.body.num2;
//     console.log(req.body);
//     res.send(String(val1+val2));
// })
app.put('/api/:id',async(req,res)=>{
   let _id=req.params.id;
   console.log(_id);
   const itemToUpdate=await Expenses.findByIdAndUpdate(_id,req.body);
   if(!itemToUpdate) return res.status(404).send("No Item Found with given id");
   res.status(200).send(req.body);
});
app.delete('/api/:id',async(req,res)=>{
    let _id=req.params.id;
    console.log(_id);
    const itemToDelete=await Expenses.findByIdAndDelete(_id,req.body);
    if(!itemToDelete) return res.status(404).send("No Item Found with given id");
    res.status(200).send(req.body);
 });
app.listen(3001,()=>{
    console.log('Server is running...');
});
