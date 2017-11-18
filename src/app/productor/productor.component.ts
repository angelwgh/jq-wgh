import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productor',
  templateUrl: './productor.component.html',
  styleUrls: ['./productor.component.css']
})
export class ProductorComponent implements OnInit {
	// 定义一个Product类的数组
	// 数组的内容是 Product 类的示例
	private products: Array<Product>;


  constructor() { }

  // 组件生命周期钩子,组件实例化后调用一次
  ngOnInit() {

  	this.products = [
  		new Product(1,"第一个商品", 1.99, 3.5, "第一个商品", ["课程"]),
  		new Product(1,"第二个商品", 2.99, 2.5, "第二个商品", ["爱死"]),
  		new Product(1,"第三个商品", 3.99, 4.5, "第三个商品", ["打发似的"]),
  		new Product(1,"第四个商品", 4.99, 5., "第四个商品", ["圣诞氛围"]),
  		new Product(1,"第五个商品", 5.99, 3.5, "第五个商品", ["呃的程"]),
  		new Product(1,"第六个商品", 6.99, 3, "第六个商品", ["水电费3呃"])
  	]
  }

}

// 定义一个 Product类
export class Product {
	constructor (
			public id:number,
			public title:string,
			public price:number,
			public rating:number,
			public desc:string,
			public categories: Array<string>
		) {}
}