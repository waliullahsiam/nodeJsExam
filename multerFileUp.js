let express= require('express');

let multer= require('multer');

let app= express();

let storage=multer.diskStorage({

    destination:function(req,res,callback){

        callback(null,'./uploads')

    },

    filename:function(req,file,callback){

        callback(null,file.originalname)
    }

})


let upload=multer({storage:storage}).single('myfile')


app.post('/',function(req,res){

    upload(req,res,function(err){


        if(err){

            res.end(" error occurred in file upload")
        }
        else{


            res.end("file upload successful")
        }
    })
})


app.listen(5500,function(){

    console.log("server run successful for file upload with multer")
})