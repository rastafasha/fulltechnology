import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizacion-form',
  templateUrl: './cotizacion-form.component.html',
  styleUrls: ['./cotizacion-form.component.css']
})
export class CotizacionFormComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: any = {};

  constructor(
    private router: Router,
    private cmspageService: CmspageService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    return this.cmspageService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

  refresh(): void {
    window.location.reload();
}


}
