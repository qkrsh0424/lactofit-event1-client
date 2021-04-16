import axios from 'axios';
import {getCookie} from '../../handler/cookieHandler';

const fileUploadDataConnect = () =>{
    return{
        uploadImageToS3: async function(fd){
            console.log(fd);
            return await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/upload/s3/image`,fd,{
                headers:{
                    'X-XSRF-TOKEN':getCookie('psrf_token')
                },
                withCredentials:true,
                timeout:30000 // 30초
            })
        }
    }
}

export{fileUploadDataConnect}