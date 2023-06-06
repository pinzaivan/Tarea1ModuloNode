const Repair = require("./../models/repair.model");

exports.findRepair = async (req,res)=>{
    try{
        const {id} = req.params;
    
        const repair = await Repair.findOne({
            where:{
                id,
                status:'pending'
            }
        })

        if(!user){
            return res.status(404).json({
                status:'error',
                message: 'User not found'
            })
        }
        return res.status(200).json({
            status:"success",
            repair
        })
    
       } catch (error) {
             res.status(500).json({
            status: 'fail',
            message: 'something went very wrong'
        })
    
       }
};

exports.update = async (req,res)=>{
    try{
        const {id}= req.params
        const {status} = req.body

        const repair = await Repair.findOne({
            where:{
                id,
                status:'pending'
            }
        })

        if(!user){
            return res.status(404).json({
                status:'error',
                message: 'User not found'
            })
        }

        await repair.update({ status })

        return res.status(200).json({
            status:'completed',
            message: 'reapir updated'

        })


    }catch{
        res.status(500).json({ status: 'fail', message: 'Something went wrong' });
    }
};

exports.delete = async (req,res)=>{
    try{
        const {id}= req.params
        //const {status} = req.body

        const repair = await Repair.findOne({
            where:{
                id,
                status:'pending'
            }
        })

        if(!user){
            return res.status(404).json({
                status:'error',
                message: 'User not found'
            })
        }

        await repair.update({ status })

        return res.status(200).json({
            status:'success',
            message: 'reapir deleted'

        })


    }catch{
        res.status(500).json({ status: 'fail', message: 'Something went wrong' });
    }
};


exports.findAll = async (req,res)=>{
    try{
        const repair = await Repair.findAll({
            where: {
                status:'pending'
            }
        })

        return res.status(200).json({
            status:'pending',
            repair,
        })

    }catch{
        res.status(500).json({ status: 'fail', message: 'Something went wrong', error });
    }
};

exports.create = async (req, res) => {

    try {
        const { date,userId } = req.body;

        const repair = await Repair.create({ date,userId });

        res.status(200).json({ status: 'success', repair});
    } catch (error) {
        res.status(500).json({ status: 'fail', message: 'Something went wrong', error });
    }
};