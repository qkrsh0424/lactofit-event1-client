import axios from 'axios';
import { getCookie } from '../../handler/cookieHandler';

const homeMainDataConnect=()=>{
    return{
        postEventApplication: async function(data){
            console.log(data);
            return await axios.post(`${process.env.REACT_APP_API_ADDRESS}/api/event/1`,data,{
                headers:{
                    'X-XSRF-TOKEN':getCookie('psrf_token')
                },
                withCredentials:true
            })
                .then(res=>console.log(res))
                .catch(err=>console.log(err));
        }
    }
}

export{homeMainDataConnect};