import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploading = async (localfile_path) => {
    try {
        if(!localfile_path)return null
        //upload file
        const result = await cloudinary.uploader.upload(file, {
            upload_preset: 'your_upload_preset',
        });
        console.log('File uploaded to Cloudinary',result.url);
        return result;
    } catch (error) {     
        fs.unlinkSync(localfile_path); //removed the locally saved file as failed upload
        return error;
    }
}
export {uploading};