import { Cursos } from './../model/cursos';
import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-cursos',
    imports: [],
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
