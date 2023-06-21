
const fs=require('fs').promises


const imageDelete=(imagePath)=>{


    try {

        fs.access(imagePath)
        .then(()=>fs.unlink(imagePath))
        .then(()=>console.log('image delete successfully'))
        .catch((error)=>console.log('user image path not bexist'))

        console.log('image delete success');
        
    } catch (error) {
        console.log(error);
    }

  

}
    


        
    
    
    

 


module.exports=imageDelete
