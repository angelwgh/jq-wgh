import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
// ActivatedRoute 当前激活的路由
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	private productId: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
  	this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"])
  	// 获取路由中的参数.[参数订阅]
  	// this.productId = this.routeInfo.snapshot.params["id"];
  	// 获取路由中的参数.[参数快照]
  	// 在同个组件的路由之间切换 参数快照的参数不会更新,要使用参数订阅
  }

}
