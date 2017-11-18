import { CanActivate, CanDeactivate } from '@angular/router';

import { ProductComponent} from '../product/product.component'

export class LoginGuard implements CanActivate {
	canActivate() {
		let loggendIn: boolean = Math.random() < 0.5;

		if(!loggendIn){
			alert('用户未登录')
		}

		return loggendIn
	}

	
}

export class UnsavedGuard implements  CanDeactivate<ProductComponent>{
	canDeactivate(component:ProductComponent){
		return window.confirm("还没保存")
	}
}