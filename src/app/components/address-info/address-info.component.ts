import {Component, Input} from '@angular/core';
import {Address} from 'src/app/domains/types';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent {

  @Input() protected address: Address;

  constructor() {
  }

}
