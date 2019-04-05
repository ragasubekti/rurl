import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/rurl");

const Url = mongoose.model("Url", {
  short: String,
  destination: String,
  clickCount: Number
} as any);

export default Url;
