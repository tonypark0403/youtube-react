import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema(
  {
    text: {
      type: String,
      required: 'Text is required',
    },
  },
  {
    timestamps: true,
  },
);

const model = mongoose.model('Comment', CommentSchema);
export default model;
