import mongoose, { models } from 'mongoose';
import { Schema } from 'mongoose';
const certificateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    tag:{
      type:[String],
    },
    teamMember:{
      type:Boolean,
    },
    userID:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

const Certificate = models.Certificate || mongoose.model("Certificate", certificateSchema);

export default Certificate;