const User = require("../models/user.model");

exports.findOne = (req,res)=>{
    res.status(200).json({
        ok:true
    });
};

exports.update = (req,res)=>{
    res.status(200).json({
        ok:true
    });
};

exports.delete = (req,res)=>{
    res.status(200).json({
        ok:true
    });
};

exports.findAll = (req,res)=>{
    res.status(200).json({
        ok:true
    });
};

exports.create = async(req,res)=>{
    try{
        const {username,email,password,} = req.body;
        const user = await User.create({username,email,password})

        res.status(201).json({
            status: true,
            user
        })

    } catch (error){
        return res.status(500).json({
            status: 'fail',
            message: 'something went very wrong'
        })
    }
}