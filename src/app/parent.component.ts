import { Component } from '@angular/core';
import { demoProducts } from './product.model';

@Component({
  selector: 'parent-root',
  templateUrl: './parent.component.html',
  styleUrls: ['./app.component.css']
})
export class ParentComponent {
  title = 'app';
  public gridData: any[] = demoProducts;
}
