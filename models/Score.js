import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema(
    {ranking: {
        type: Number,
        default: 1,
        required: true,
      },
        userId: {
            type: String,
            required: true,
          },
        score: {
            type: Number,
            required: true,
        },
        
    },
    { timestamps: true }
);

const Score = mongoose.model("Score", ScoreSchema);
export default Score;
