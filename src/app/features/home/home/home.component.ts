import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  

  constructor(private store: Store<any> ){}

  ngOnInit(): void {
    this.store.select('loginSuccess').subscribe(val => {console.log('val', val)})

  }
}
