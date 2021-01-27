import { Component, OnInit } from '@angular/core';
import { CatalogoPais } from './catalogo-pais';
import { ConsultaPais } from './consulta-pais';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  paisSeleccionado: CatalogoPais;
  consultaPais: ConsultaPais = new ConsultaPais();
  constructor() {
    this.paisSeleccionado = null;
  }
  ngOnInit(): void {
    this.paisSeleccionado = this.consultaPais.getPaisByName('eeuu');
    console.log(this.paisSeleccionado);
  }



}
