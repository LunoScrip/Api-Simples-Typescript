 import axios from 'axios';
import { response } from 'express';
export default {
    async index(url:any){
        return await url
    },

    async post(url:any, endPoint: string, body:any) {
          try {console.log(body)
            // 👇️ const data: GetUsersResponse
            const { data, status } = await axios.post(
                `${url}${endPoint}`,body,
                
              {
                headers: {
                  Accept: 'application/json',
                }
              },
            );
        
            console.log(JSON.stringify(data, null, 4));
        
            // 👇️ "response status is: 200"
            console.log('response status is: ', status);
            console.log(data);
            let resp = [
                data,
                status
              ]
            return resp;
          } catch (data) {
            if (axios.isAxiosError(data)) {
              let resp = [
                data.response?.data,
                data.response?.status
              ]
              return resp;
            } else {
              console.log('unexpected error: ', data);
              return 'An unexpected error occurred';
            }
          }
        },


    
    async get(url:string, rota:string){
        axios.get(`${url}/${rota}`,).then(async function (resp:any) {
            console.log(resp.data)
            return await resp.data;
            
        }).catch(async function (error:any) {
            return await error ;
        });
    }
}