import { Component, OnInit } from '@angular/core';

import { CandidatoService } from '../../services/candidato.service';
import { NgForm } from '@angular/forms';
import { Candidato } from '../../models/candidato';

@Component({
  selector: 'app-orgcad',
  templateUrl: './org-cad.component.html',
  styleUrls: ['./org-cad.component.css'],
  providers: [CandidatoService],
})

export class OrgcadComponent implements OnInit {

  constructor(private candidatoService: CandidatoService){}

  ngOnInit() {
    this.getCandidatos();
  }

  addCandidato(form: NgForm) {
    if (form.value.id) {
      this.candidatoService.putCandidato(form.value).subscribe(res => {
        this.resetForm(form);
        this.getCandidatos();
      });
    } else {
      this.candidatoService.postCandidato(form.value).subscribe(res => {
        this.getCandidatos();
        this.resetForm(form);
      });
    }
  }

  getCandidatos() {
    this.candidatoService.getCandidatos().subscribe(res => {
      this.candidatoService.candidatos = res as Candidato[];
    })
  }

  editCandidato(candidato: Candidato) {
    this.candidatoService.selectedCandidato = candidato;
  }

  deleteCandidato(id: string, form: NgForm) {
    if (confirm("Tem certeza que deseja excluir?")) {
      this.candidatoService.deleteCandidato(id).subscribe(res => {
        this.getCandidatos();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.candidatoService.selectedCandidato = new Candidato();
    }
  }
}
