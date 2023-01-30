import Score from "../models/Score.js";
import User from "../models/User.js";

/* CREATE */
export const postNewScore = async (req, res) => {
  try {
    const { userId} = req.body;
    // const user = await User.findById(userId);
    const newScore = new Score({
      userId,
      score,
    });
    await newScore.save();

    const score = await Score.find();
    res.status(201).json(score);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getAllScores = async (req, res) => {
  try {
    const scores = await Score.find();
    res.status(200).json(scores);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserScores = async (req, res) => {
  try {
    const { userId } = req.params;
    const userScores = await Score.find({ userId });
    res.status(200).json(userScores);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

