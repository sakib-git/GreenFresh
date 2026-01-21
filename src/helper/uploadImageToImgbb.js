import axios from "axios";

const uploadImageToImgbb = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const apiKey = import.meta.env.VITE_IMG_HOST_IMGBB;

  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  const res = await axios.post(url, formData);

  return res.data.data.display_url;
};

export default uploadImageToImgbb;
