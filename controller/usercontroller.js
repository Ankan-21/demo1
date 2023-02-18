
const Student=require('../model/student')
const home = (req,res)=>{
    Student.find((err,data)=>{
        if(!err){
            res.render('home',{
                title:'home page',
                student:data
             });
        }
    })
    
}
const add=(req,res)=>{
    res.render('addStudent',{
        title:'from page',
    })
}
const create=(req,res)=>{
    //console.log(req.body);
   const StudentData= new Student({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city,
        usertype:req.body.usertype,
    });
    StudentData.save().then((data)=>{
        console.log(data,"student Added Successfully");
        res.redirect('/')
    }).catch((err)=>{
        console.log(err,"data not save");
    })
}

const edit=(req,res)=>{
    const sid=req.params.id
    Student.findById(sid).then(result=>{
        res.render('edit',{
            title:"edit page",
            editdata:result
        })
    }).catch((err)=>{
        console.log(err);
    })
    
}

const update=(req,res)=>{
//console.log(req.body);

const st_id=req.body.sid
const name=req.body.name
const email=req.body.email
const city=req.body.city
const phone=req.body.phone
const usertype=req.body.usertype
Student.findById(st_id).then((result)=>{
    result.name=name
    result.email=email
    result.city=city
    result.phone=phone
    result.usertype=usertype
    return result.save().then(data=>{
        res.redirect('/');
        console.log(data,"data update");
    }).catch(err=>{
        console.log(err);
    })
}).catch(err=>{
    console.log(err);
})
}

const deletee=(req,res)=>{
    const sid=req.params.id;
    Student.deleteOne({_id:sid}).then(del=>{
        res.redirect('/'),
        console.log(del,"delete successfully");
    }).catch(err=>{
        console.log(err);
    })

}




module.exports={
    home,
    add,
    create,
    edit,
    update,
    deletee,
}