const momgoose= require('mongoose')
const bcrypt=require('bcrypt')


const userSchema=new momgoose.Schema({
    name:{
        type:String,
        require:[true,'name is required'],
        trim:true,
        maxlangth:[10,'maximum langth is 10'],
        mimlangth:[3,'minimum langth is 3'],
    },
    phone:{
      type:String,
      trim:true,

  },
    // email:{
    //     type:String,
    //     require:[true,'Email is required'],
    //     trim:true,
    //     unique:true,
    //   lowercase:true,
    //   validate:{
    //     validator: function (v){return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v)},
    //     message:"please enter a valid Email"

    //   }
    // },

    password:{
      type:String,
      require:[true,"password is requires"],
      minlength:[4,'the minimum langth is 4 character'],
      set:(v)=>bcrypt.hashSync(v,bcrypt.genSaltSync(10))

    },
    image:{
      type:String,
      require:[true,"image is required"],
      default:'../Public/users/hijab.png',
    },
    isAdmin:{
      type:Boolean,
      default:false
    },
    isBanned:{
      type:Boolean,
      default:false
    }


})



const userScema=momgoose.model("Users",userSchema)
module.exports=userScema