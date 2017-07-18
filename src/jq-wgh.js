(function (global,factory) {
	if(typeof module === "object" && typeof module.exports === "object"){

		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	}else{
		factory( global );
	}
})(typeof window !== "undefined" ? window : this, function (window,noGlobal) {
	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var obj = {};

	var toString = obj.toString;

	var hasOwn = hasOwnProperty;

	var support = {};

	var strundefined = typeof undefined;
	

	var version = "1.0.0", //假装还有个版本。。。

		$wgh = function (selector,context) {
			//返回一个$wgh对象示例
			return new $wgh.fn.init(selector , context) ;
		};

	//设置原型
	$wgh.fn = $wgh.prototype = {
		//当前版本
		$wgh:version,

		//指定构造函数
		constructor:$wgh,

		//默认为空的选择器
		selector: "",

		length: 0,

	};

	//对象扩展
	$wgh.extend = $wgh.fn.extend = function () {
		var src,
			copyIsArray,
			copy,
			name,
			options,
			clone,
			target = arguments[0] || {},  //要进行扩展的对象
			i = 1, //从第几个参数开始向target合并
			length = arguments.length,
			deep = false;

		//处理深复制的情况
		if(typeof target === "boolean"){
			deep = target;

		//如果第一个参数是布尔值,判断是否进行深复制
		//跳过第一个参数
			target = arguments [i] || {}
			i++;
		}

		//处理当target 是一个字符串或其他类型的情况(特别是在深复制的时候)
		if(typeof target !== "object" && !$wgh.isFunction(target)){
			target = {}
		}

		//如果只有一个参数通过
		//就对$wgh和$wgh.fn本身进行扩展
		if ( i === length ) {
			target = this;
			i--;
		}

		for(;i<length;i++){
			//值处理不为null或undefined的值
			if( (options = arguments[ i ]) !=null){
				//扩展基本对象
				//options存储被扩展的对象
				//遍历options
				for(name in options){
					src = target[name];
					copy = options [name];

					//防止陷入死循环,比如extend(true, target, {'target':target});
					if ( target === copy ) {
						continue;
					}

					//在处理对象或数组的时候递归复制
					//isPlainObject : "纯粹的对象",通过"{}"或"new Object"创建的。
					//深复制的条件:
					// 1.deep为true;
					// 2.copy值不为null 或 undefined
					// 2.copy值是一个 "纯粹的对象" 或者 数组
					if(deep && copy && ($wgh.isPlainObject(copy) || (copyIsArray = $wgh.isArray(copy)) ) ){
						//数组
						if(copyIsArray){
							copyIsArray = false;
							clone = src && $wgh.isArray(src) ? src : [];
						}

						//对象
						else{
							clone = src && $wgh.isPlainObject(src) ? src : {};
						}

						//调用递归,把copy复制给clone,然后赋值给target[ name ]
						target[ name ] = $wgh.extend( deep, clone, copy );
					//不处理undefined值
					}else if(copy !== undefined){
						target[ name ] = copy;
					}
				}


			}
		}

		//返回修改过的对象
		return target;
	}

	//扩展$wgh对象
	$wgh.extend({
		expando: "$wgh" + ( version + Math.random() ).replace( /\D/g, "" ),
		isReady: true,

		//
		error: function( msg ) {
			throw new Error( msg );
		},

		//自定义一个空函数,什么也不做
		noop: function() {},

		isFunction: function( obj ) {
			return $wgh.type(obj) === "function";
		},

		//Array.isArray() 如果对象是 Array ，则返回true，否则为false。
		//ie8以下不支持
		isArray:Array.isArray || function( obj ) {
			return $wgh.type(obj) === "array";
		},

		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},

		isNumeric: function( obj ) {
			//parseFloat()解析一个字符串参数并返回一个浮点数。
			//parseFloat是个全局函数,不属于任何对象.
			//+1修正精度损失
			return !$wgh.isArray( obj ) && (obj - parseFloat( obj ) ) >= 0;
		},
	})


	if ( typeof noGlobal === strundefined ) {
		window.$wgh = $wgh;
	}

	console.dir($wgh.isNumeric("0x100"))
	return $wgh;
})