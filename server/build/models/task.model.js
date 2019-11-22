"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title can not less than 2 chars"],
        maxlength: [250, "Title can not greater than 250 chars"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description can not less than 2 chars"],
        maxlength: [2500, "Description can not greater than 2500 chars"],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: Schema.ObjectId,
        ref: "User",
        required: [true, 'user is required']
    }
}, {
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});
TaskSchema.plugin(mongoosePaginate);
exports.Task = mongoose.model("Task", TaskSchema);
//# sourceMappingURL=task.model.js.map