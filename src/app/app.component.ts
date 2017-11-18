import { Component } from '@angular/core';


// 组件元数据装饰器
// 所有组件都需要用一个装饰器来注解
@Component({
	// 通过app-root标签来调用
  selector: 'app-root',
  // 组件模版
  templateUrl: './app.component.html',
  // 组件样式
  styleUrls: ['./app.component.css']
})

// ts类, 定义组件的控制器
export class AppComponent {
  title = 'app';
}
