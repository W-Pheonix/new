import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: 'dtamfjqa4',
  api_key: '322215872634277',
  api_secret: 'yj-9NDQuOCzqHHAOENiT6Jx7awQ',
});

app.listen(
  // process.env.PORT, 
  4000,
  () => {
  console.log(`Server listening at port 4000`);
});
