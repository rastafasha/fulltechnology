import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../../service/articulo.service';
import { Articulo } from '../../models/articulo';
import { Categoria } from 'src/app/models/category';
import { CategoriaService } from 'src/app/service/categoria.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articulos: Articulo;
  categorias: Categoria;
  categorias1: Categoria;
  categorias2: Categoria;
  categorias3: Categoria;
  categorias4: Categoria;
  categorias5: Categoria;
  categorias6: Categoria;
  categorias7: Categoria;
  
  
  error: string;
  editorContent: string;

  selectedCategoria: Categoria;

  p: Number = 1;
  count: Number = 8;


  constructor(private articuloService: ArticuloService,
    private categoriaService: CategoriaService,
     private router: ActivatedRoute) { }

  ngOnInit() {
    this.articuloService.getFeaturedArticulos().subscribe(
      (data: Articulo) => this.articulos = data,
      error => this.error = error
    );

    this.categoriaService.getPorCategorias().subscribe(
      (data: Categoria) => this.categorias = data,
      error => this.error = error
    );

    this.categoriaService.getPorCategoria1().subscribe(
      (data: Categoria) => this.categorias1 = data,
      error => this.error = error
    );

    this.categoriaService.getPorCategoria2().subscribe(
      (data: Categoria) => this.categorias2 = data,
      error => this.error = error
    );

    this.categoriaService.getPorCategoria3().subscribe(
      (data: Categoria) => this.categorias3 = data,
      error => this.error = error
    );

    this.categoriaService.getPorCategoria4().subscribe(
      (data: Categoria) => this.categorias4 = data,
      error => this.error = error
    );

    this.categoriaService.getPorCategoria5().subscribe(
      (data: Categoria) => this.categorias5 = data,
      error => this.error = error
    );
    this.categoriaService.getPorCategoria6().subscribe(
      (data: Categoria) => this.categorias6 = data,
      error => this.error = error
    );
    this.categoriaService.getPorCategoria7().subscribe(
      (data: Categoria) => this.categorias7 = data,
      error => this.error = error
    );

    
  }


}
