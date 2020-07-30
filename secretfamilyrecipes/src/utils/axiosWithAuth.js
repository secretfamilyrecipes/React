import axios from 'axios';

export const axiosWithAuth = () =>{
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://cors-anywhere.herokuapp.com/https://secretfamilyrecipe7-20.herokuapp.com/api'
    });
};