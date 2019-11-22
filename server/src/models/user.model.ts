import * as mongoose from "mongoose";
import { hashPassword } from "../services";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: [true, "email is required"],
      match: [
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
        "not a valid email address"
      ],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: String,
    isDeleted: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      transform: function(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      }
    }
  }
);

UserSchema.pre("validate", function() {
  this.password = this.password ? hashPassword(this.password) : null;
});

export const User = mongoose.model("User", UserSchema);
