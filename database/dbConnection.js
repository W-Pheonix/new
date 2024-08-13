import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(
      // process.env.MONGO_URI, 
      // 'mongodb+srv://anurag30:anurag1234@cluster0.aqb5qzi.mongodb.net/?retryWrites=true',
      'mongodb+srv://admin_0:mpm55cl*@cluster0.mlfhfuc.mongodb.net/?retryWrites=true',
      {
      dbName: "CuraSys",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
