import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-prodotti',
  templateUrl: 'prodotti.component.html',
  styleUrls: ['prodotti.component.sass']
})
export class ProdottiComponent  {
    public oneAtATime: boolean = true;
}
