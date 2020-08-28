import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: "root"
})

export class HttpService {
    constructor(private http: HttpClient) { }

    postAppoinment(body: object) {
        return this.http.post('http://localhost:3000/allfriends', body);
    }

    getAllAppointments() {
        return this.http.get('http://localhost:3000/allfriends');
    }
    deleteAppointment(id: string) {
        return this.http.delete(`http://localhost:3000/allfriends/${id}`);
    }
    updateAppointment(id: string, body: object) {
        return this.http.patch(`http://localhost:3000/allfriends/${id}`, body)
    }
    newEnquiry(body) {
        return this.http.post('http://localhost:3000/enquaries', body);
    }
}