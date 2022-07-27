import { Injectable } from "@angular/core";
import axios from 'axios';
import { Bug } from "../models/bug.model";

@Injectable({
    providedIn : 'root'
})
export class BugApiService{

    getAll(){
        return axios.get<Bug[]>('http://localhost:3000/bugs')
            .then(response => response.data)
    }
}