import axios from 'axios';

const fileUploadDataConnect = () =>{
    return{
        uploadImageToS3: async function(fd){
            console.log(fd);
            return await axios.post('/api/upload/s3/image',fd,{
                timeout:30000 // 30초
            })
        }
    }
}

export{fileUploadDataConnect}