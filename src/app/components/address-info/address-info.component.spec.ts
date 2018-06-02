import {Component} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {address as addressMock} from 'src/app/domains/testMock';
import {Address} from 'src/app/domains/types';

import { AddressInfoComponent } from './address-info.component';

@Component({
  selector: 'app-host-component',
  template: '<app-address-info [address]="address"></app-address-info>'
})
class TestHostComponent {
  protected address: Address = addressMock;
}

describe('AddressInfoComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressInfoComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
