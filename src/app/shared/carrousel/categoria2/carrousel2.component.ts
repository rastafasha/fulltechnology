import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../../service/categoria.service';
import { Categoria } from '../../../models/category';


@Component({
  selector: 'app-carrousel2',
  templateUrl: './carrousel2.component.html',
  styleUrls: ['./carrousel2.component.css']
})
export class Carrousel2Component implements OnInit {

  categorias2: Categoria;
  error: string;
  editorContent: string;
  isDesc: boolean;
  category_name: string;

  p: Number = 1;
  count: Number = 8;

  constructor(private categoriaService: CategoriaService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.categoriaService.getPorCategoria2().subscribe(
      (data: Categoria) => this.categorias2 = data,
      error => this.error = error
    );
    
  }

}
