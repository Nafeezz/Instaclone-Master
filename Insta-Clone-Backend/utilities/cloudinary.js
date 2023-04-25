const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dftrwxmuo",
  api_key: "435686257744281",
  api_secret: "ChQvbNYd-yP6Q5z5LqO_6bunHtg",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: " Instaclone",
  },
});

module.exports = { cloudinary, storage };