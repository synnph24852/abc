import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input('data') product!: Iproduct;
}



// function ProductDetail(props){
//   props.data
// }