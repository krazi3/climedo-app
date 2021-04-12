import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(
    private http: HttpClient,
  ) { }

  get(params?: any) {
    return this.http.get('/department', { params });
  }

  save(body) {
    return this.http.post('/department', body);
  }

  update(id, body) {
    return this.http.put(`/department/${id}`, body);
  }

  delete(id) {
    return this.http.delete(`/department/${id}`);
  }
}
