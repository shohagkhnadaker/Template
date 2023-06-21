const deleteByID=async(Namemodel,id,res)=>{
    try {
        await Namemodel.findByIdAndDelete({_id:id})
res.status(200).send({
    success:true,
    message:`delete ${Namemodel} successfully`,
})

    } catch (error) {
        console.log(error);
        console.log(`${Namemodel} not deleted`);
    }
}

module.exports=deleteByID