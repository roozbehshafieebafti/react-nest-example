import { Fetch } from '../fetch';
import { FetchResult } from '../fetch.interface';

export async function sum(a:number,b:number):Promise<FetchResult>{
    try {
        let url :string = process.env.REACT_APP_BASE_URL+'math/sum';
        let response:FetchResult = await Fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({a,b}),
                headers:{
                    "Content-Type": 'application/json',                    
                }
            });
        return response;
    } catch (error) {
        console.log("error",error);
        return {
            body: "fail",
            status: 0
        }
    }
}