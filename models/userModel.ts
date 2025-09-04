import mongoose, { model, models } from 'mongoose';
import { Schema } from 'mongoose';
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email:{
        type:String,
        unique : true,
        required: true
    },
    photo:{
        type:String
    },
    certificates:{
      type:[String],
    },
    badges:{
      type:[String],
    },
    role:{
      type:String
    },
    team:{
      type:String
    },
    branch:{
        type:String
    },
    bestMember:{
        type:Boolean,
        default:false
    },
    ambassador:{
        type: Boolean,
        default:false
    },
    ambassadorLevel:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
);


const User = models.User || mongoose.model("User", userSchema);

export default User;