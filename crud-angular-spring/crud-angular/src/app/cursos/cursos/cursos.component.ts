import { Cursos } from './../model/cursos';
import { Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

@Component({
    selector: 'app-cursos',
    imports: [MatTableModule],
    templateUrl: './cursos.component.html',
    styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  cursos: Cursos[] = [];

    constructor(){
      //this.cursos = [];
    }
    ngOnInit(): void {

    }

}
