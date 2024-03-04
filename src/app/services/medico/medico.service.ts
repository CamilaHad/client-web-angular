import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = "https://localhost:44380/api/medicos";
  }

  getAll():Observable<Medico[]>{
    return this.httpClient.get<Medico[]>(this.url);
  }

  getById(id:number):Observable<Medico>{
    return this.httpClient.get<Medico>(`${this.url}/${id}`);
  }

  post(medico:Medico):Observable<Medico> {
    return this.httpClient.post<Medico>(this.url, medico);
  }

  delete(id:number):Observable<Medico|null>{
    return this.httpClient.delete<Medico>(`${this.url}/${id}`);
  }

  put(id: number, medico:Medico):Observable<Medico>{
    return this.httpClient.put<Medico>(`${this.url}/${id}`, medico);
  }
}
