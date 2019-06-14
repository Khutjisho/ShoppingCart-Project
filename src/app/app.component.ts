import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingCart';

  

Products = [{ProductName:"Boys_Green_Bike.jpg", ProductDescription:"Kiddies play toy", ProductPrice:450},
            {ProductName:"Dress.jpg", ProductDescription:"Ladies Dress", ProductPrice:280},
            {ProductName:"KidsBlocks.jpg", ProductDescription:"Kiddies play time", ProductPrice:250},
            {ProductName:"LadiesBag.jpg", ProductDescription:"Ladies bag", ProductPrice:450},
           {ProductName:"Watch.jpg", ProductDescription:"Ladies watch", ProductPrice:350},
           {ProductName:"KidsJacket.jpg", ProductDescription:"Kiddies Jacket", ProductPrice:299}]


newProductName:String = "";
newProductDescription: String = "";
newProductPrice :number;
newProducts =[];
empty= true;
TotalAmount: any = 0;


new(Product){
  this.newProducts.push(Product)
  this.Total(Product.ProductPrice)
  this.ProductQuantity(Product)
  //if (this.newProducts.length<=0){
   // this.empty = false
//}
}



Total(newProductPrice){
  this.TotalAmount +=newProductPrice
}
TotalSubtract(newProductPrice){
  this.TotalAmount -=newProductPrice
}

RemoveProduct(newProduct){
let index = this.newProducts.indexOf(this.newProducts)
this.newProducts.splice(index,1)
this.TotalSubtract(newProduct.ProductPrice)

//if (this.newProducts.length<=0){
 //        this.empty = true
//}
}

ProductQuantity(newProduct){
  let Quantity = 0;
   for(let i =0; i < newProduct.length; i++){
     Quantity += newProduct[i]
  } 

}



}