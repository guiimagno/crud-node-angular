
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Candidato } from "../models/candidato";

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  selectedCandidato: Candidato;
  candidatos: Candidato[];

  readonly URL_API = 'http://localhost:3000/api/candidatos';

  constructor(private http: HttpClient) {
    this.selectedCandidato = new Candidato;
   }

  getCandidatos(){
    return this.http.get<Candidato>(this.URL_API);
  }

  postCandidato(Candidato: Candidato){
    return this.http.post(this.URL_API, Candidato);
  }

  putCandidato(candidato: Candidato){
    return this.http.put(this.URL_API + `/${candidato.id}`, candidato);
  }

  deleteCandidato(id: string){
    return this.http.delete(this.URL_API + `/${id}`);
  }
}
