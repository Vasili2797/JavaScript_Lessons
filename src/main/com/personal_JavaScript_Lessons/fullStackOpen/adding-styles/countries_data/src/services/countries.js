import axios from 'axios';

const baseURL='https://studies.cs.helsinki.fi/restcountries/';

const getAll=()=>{
    const request = axios.get(baseURL, 'api/all');
    return request.then((response)=>{
        console.log(response.data)
        return response;
    }
    );
}

const getSpecificCountry=(arg)=>{
    const request = axios.get(`${baseURL}api/name/${arg}`);
    console.log(arg);
    return request.then((response)=>{ 
        // console.log(response.data.name,'\ncapital', response.data.capital, '\nflag',response.data.flags.png); 
        return response;
    });
}

export default {getAll, getSpecificCountry};