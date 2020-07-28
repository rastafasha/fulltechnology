import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestacadoService } from '../../service/destacado.service';
import { Destacado } from '../../models/destacado';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  destacados: Destacado;
  error: string;
  editorContent: string;

  constructor(private destacadoService: DestacadoService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.destacadoService.getDestacados().subscribe(
      (data: Destacado) => this.destacados = data,
      error => this.error = error
    );
  }

}
