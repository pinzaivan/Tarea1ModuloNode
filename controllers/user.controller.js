const User = require("./../models/user.model");

exports.findOne = async (req,res)=>{
   try{
    const {id} = req.params;

    const user =  await User.findOne({
        where:{
            id,
            status:true
        }
    })

    if(!user){
        return res.status(404).json({
            status: "failed",
            message: 'User not found'
        })
    }

    res.status(200).json({
        status: "completed",
        user,
    })

   } catch (error) {
        return res.status(500).json({
        status: 'fail',
        message: 'something went very wrong'
    })

   }
};

exports.update = async (req,res)=>{
    try{
        const {id} = req.params;
        const {username,email} = req.body;

        const user= await User.findOne({
            where:{
                id,
                status: true
            }
        })

        if(!user){
            return res.status(404).json({
                status:'error',
                message:'the user that you seach is not found :('
            })
        }

        await user.update ({username,email});
        return res.status(200).json({
            status: 'success', 
            user 
        })

    } catch (error){
        res.status(500).json({ status: 'fail', message: 'Something went wrong in delete', error });

    }
    
};

exports.delete = async (req,res)=>{
    try{
        const {id} = req.params;
        const {status} = req.body;

        const user= await User.findOne({
            where:{
                id,
                status: true
            }
        })

        if(!user){
            return res.status(404).json({
                status:'error',
                message:'the user that you seach is not found :('
            })
        }

        await user.delete ({status});
        return res.status(200).json({
            status: false, 
            user 
        })

    } catch (error){
        res.status(500).json({ status: 'fail', message: 'Something went wrong in delete', error });

    }


};

exports.findAll = async (req,res)=>{
    try{
        const users = await User.findAll({
            where: {
                status:true
            }
        })

        return res.status(200).json({
            status:'succcess',
            users,
        })

    }catch{
        res.status(500).json({ status: 'fail', message: 'Something went wrong', error });
    }
};

exports.create = async (req, res) => {
    try {
        const { username, email, password,role } = req.body;

        const user = await User.create({ username, email, password,role });

        res.status(200).json({ status: 'success', user });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: 'Something went wrong', error });
    }
};