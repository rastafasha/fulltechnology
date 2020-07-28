import { Component, OnInit } from '@angular/core';
import { Banemergente } from '../../models/banemergente';
import { BannemergenteService } from '../../service/banemergente.service';

@Component({
  selector: 'app-modal-emergente',
  templateUrl: './modal-emergente.component.html',
  styleUrls: ['./modal-emergente.component.css']
})
export class ModalEmergenteComponent implements OnInit {

  banners: Banemergente;
  error: string;
  image: string;

  constructor( 
    private bannemergenteService: BannemergenteService
    ) { }

  ngOnInit() {

    this.bannemergenteService.getBaners().subscribe(
      (data: Banemergente) => this.banners = data,
      error => this.error = error
    );
  }

}
