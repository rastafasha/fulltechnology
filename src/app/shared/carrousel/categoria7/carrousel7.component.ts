import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../../service/categoria.service';
import { Categoria } from '../../../models/category';
import {ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-carrousel7',
  templateUrl: './carrousel7.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./carrousel7.component.css']
})
export class Carrousel7Component implements OnInit {

  categorias: Categoria;
  error: string;
  editorContent: string;
  isDesc: boolean;
  category_name: string;

  p: Number = 1;
  count: Number = 8;

  constructor(private categoriaService: CategoriaService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.categoriaService.getPorCategoria7().subscribe(
      (data: Categoria) => this.categorias = data,
      error => this.error = error
    );
    
  }

}
