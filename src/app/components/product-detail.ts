import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-detail',
    template: `
    <div>
        Product detail works!
    </div>
  `,
    styleUrls: []
})
export class ProductDetailComponent {

    constructor(private route: ActivatedRoute) {
        console.log(route.snapshot.params)
    }
}
