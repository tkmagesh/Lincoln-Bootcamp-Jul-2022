import { Injectable } from "@angular/core";
import axios from 'axios';
import { Bug } from "../models/bug.model";

@Injectable({
    providedIn : 'root'
})
//using async await
export class BugApiService{

    async getAll() : Promise<Bug[]> {
        const response = await axios.get<Bug[]>('http://localhost:3000/bugs')
        return response.data;
    }

    async save(bugData : Bug) : Promise<Bug> {
        if (bugData.id === 0){
            const response = await axios.post<Bug>('http://localhost:3000/bugs', bugData)
            return response.data;
        } else {
            const response = await axios.put<Bug>(`http://localhost:3000/bugs/${bugData.id}`, bugData)
            return response.data;
        }
    }

    async remove(bugData : Bug) : Promise<any> {
        const response = await axios.delete(`http://localhost:3000/bugs/${bugData.id}`)
        return response.data;
    }
}

/* 
//Using .then
export class BugApiService{

    getAll() : Promise<Bug[]> {
        return axios.get<Bug[]>('http://localhost:3000/bugs')
            .then(response => response.data)
    }

    save(bugData : Bug) : Promise<Bug> {
        if (bugData.id === 0){
            return axios.post<Bug>('http://localhost:3000/bugs', bugData)
                .then(response => response.data)
        } else {
            return axios.put<Bug>(`http://localhost:3000/bugs/${bugData.id}`, bugData)
                .then(response => response.data)
        }
    }

    remove(bugData : Bug) : Promise<any> {
        return axios.delete(`http://localhost:3000/bugs/${bugData.id}`)
                .then(response => response.data)
    }
} */