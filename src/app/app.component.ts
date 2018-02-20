import { Component } from '@angular/core';
import { demoProducts } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public gridData: any[] = demoProducts;
}
