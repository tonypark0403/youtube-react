import mongoose, { Schema } from 'mongoose';

const VideoSchema = new Schema(
  {
    fileUrl: {
      type: String,
      required: 'File URL is required',
    },
    title: {
      type: String,
      required: 'Title is required',
    },
    description: String, // only type, no need sub {}
    views: {
      type: Number,
      default: 0,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commenet' }],
  },
  {
    timestamps: true,
  },
);

const model = mongoose.model('Video', VideoSchema);
export default model;
