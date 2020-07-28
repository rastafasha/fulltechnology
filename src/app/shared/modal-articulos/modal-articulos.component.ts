import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../../service/articulo.service';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-modal-articulos',
  templateUrl: './modal-articulos.component.html',
  styleUrls: ['./modal-articulos.component.css']
})
export class ModalArticulosComponent implements OnInit {

  articulos: Articulo;

  error: string;
  image: string;

  constructor(
    private articuloService: ArticuloService, 
    private router: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.articuloService.getArticulos().subscribe(
      (data: Articulo) => this.articulos = data,
      error => this.error = error
    );

  }

}
