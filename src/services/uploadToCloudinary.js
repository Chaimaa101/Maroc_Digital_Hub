import axios from "axios" 

export async function uploadToCloudinary(file) {
  const formData = new FormData() 
  formData.append("file", file) 
  formData.append("upload_preset", "AnotherOne")  

  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/dpbink4pt/image/upload",
    formData
  ) 

  return res.data.secure_url  
  
}
