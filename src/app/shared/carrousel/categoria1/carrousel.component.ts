import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../../service/categoria.service';
import { Categoria } from '../../../models/category';




@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  collection = [];

  categorias1: Categoria;
  error: string;
  editorContent: string;
  isDesc: boolean;
  category_name: string;

  sortDirection: string = 'asc';

  sortFields: Array<string> = [
    'Modem',
    'Router',
    'Access Point',
    'Cables',
    'Portatil',
    'Otros'
  ];


  p: Number = 1;
  count: Number = 8;

  constructor(private categoriaService: CategoriaService, private router: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.categoriaService.getPorCategoria1().subscribe(
      (data: Categoria) => this.categorias1 = data,
      error => this.error = error
    );

    
  }

}
