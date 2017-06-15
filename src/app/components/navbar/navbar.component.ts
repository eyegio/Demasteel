import { Component } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';



@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.sass']
})
export class NavbarComponent {
  brand = 'DEMASTEEL';
  isCollapsedMenu = false;

  constructor () {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 800;
  }
}

