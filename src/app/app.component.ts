import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dyn-reactive';
  form :FormGroup;
  constructor(private fb:FormBuilder) {
   
  }

  ngOnInit() {
    this.form = this.fb.group({
      // name : ['',Validators.required],
      products : this.fb.array([
        this.createProducts()
      ]) 
    });
  }

  createProducts():FormGroup{
    return this.fb.group({
     name : '',
     description : '',
    });
  }
  // 
  addProducts() {
    const product = this.createProducts();
    this.products.push(product);

    //(<FormArray>this.form.get('products')).push(new FormControl(''));
  }

  removeProducts(index:any) {
    (<FormArray>this.form.get('products')).removeAt(index);
  }

  get products():FormArray {
   return this.form.get('products') as FormArray;
  }

}
