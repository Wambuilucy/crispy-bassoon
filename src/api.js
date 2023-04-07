import axios from 'axios';

export function GetQuiz(){
    return axios.get(`https://605ac85e27f0050017c053ed.mockapi.io/quiz`)
}

export function PostQuiz(data){
    return axios.post(`https://605ac85e27f0050017c053ed.mockapi.io/quiz`, data);
}

export function GetQuizByID(id){
    return axios.get(`https://605ac85e27f0050017c053ed.mockapi.io/quiz/${id}`);
}

export function PutQuizByID(id,data){
    return axios.put(`https://605ac85e27f0050017c053ed.mockapi.io/quiz/${id}`, data);
}

export function DeleteQuiz(id){
    return axios.delete(`https://605ac85e27f0050017c053ed.mockapi.io/quiz/${id}`)
}