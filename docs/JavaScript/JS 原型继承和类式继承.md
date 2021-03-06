## 类式继承（构造函数）

> JS中其实是没有类的概念的，所谓的类也是模拟出来的。特别是当我们是用new 关键字的时候，就使得“类”的概念就越像其他语言中的类了。类式继承是在函数对象内调用父类的构造函数，使得自身获得父类的方法和属性。call和apply方法为类式继承提供了支持。通过改变this的作用环境，使得子类本身具有父类的各种属性。
```
var father = function() {

this.age = 52;

this.say = function() {

alert('hello i am '+ this.name ' and i am '+this.age + 'years old');

}

}

var child = function() {

this.name = 'bill';

father.call(this);

}

var man = new child();

man.say();
```
## 原型继承

> 原型继承在开发中经常用到。它有别于类继承是因为继承不在对象本身，而在对象的原型上（prototype）。每一个对象都有原型，在浏览器中它体现在一个隐藏的__proto__属性上。在一些现代浏览器中你可以更改它们。比如在zepto中，就是通过添加zepto的fn对象到一个空的数组的__proto__属性上去，从而使得该数组成为一个zepto对象并且拥有所有的方法。话说回来，当一个对象需要调用某个方法时，它回去最近的原型上查找该方法，如果没有找到，它会再次往下继续查找。这样逐级查找，一直找到了要找的方法。 这些查找的原型构成了该对象的原型链条。原型最后指向的是null。我们说的原型继承，就是将父对像的方法给子类的原型。子类的构造函数中不拥有这些方法和属性。
```
var father = function() {

}

father.prototype.a = function() {

}

var child = function(){}

//开始继承

child.prototype = new father();

var man = new child();

man.a();

可以看到第七行实现了原型继承。很多人并不陌生这种方式。通过在浏览器中打印man我们就可以查看各个原型的继承关系。

可以看到逐级的关系child->object（father实例化的对象）->father。child是通过中间层继承了father的原型上的东西的。但是为什么中间还有一层object呢，为什么不把child.prototype = father.prototype。答案是如果这样做child和father就没有区别了。大家应该还记得在prototype中有个constructor属性，指向的是构造函数。按照正常的情况我们要把constructor的值改回来指向child的构造函数。但如果直接把father.prototype赋值给child.prototype，那么constructor应该指向谁呢？所以很显然只能通过中间层才能使得child和father保持为独立的对象。
```
## 对比

>和原型对比起来，构造函数（类）式继承有什么不一样呢？首先，构造函数继承的方法都会存在父对象之中，每一次实例，都回将funciton保存在内存中，这样的做法毫无以为会带来性能上的问题。其次类式继承是不可变的。在运行时，无法修改或者添加新的方法，这种方式是一种固步自封的死方法。而原型继承是可以通过改变原型链接而对子类进行修改的。另外就是类式继承不支持多重继承，而对于原型继承来说，你只需要写好extend对对象进行扩展即可。

## 组合模式

>另外的一种模式，是结合类继承和原型继承的各自优点来进行对父类的继承。用类式继承属性，而原型继承方法。这种模式避免了属性的公用，因为一般来说，每一个子类的属性都是私有的，而方法得到了统一。这种模式称为组合模式，也是继承类式常用到的一种方法。
```
function father() {

this.a = 'father'  

}

father.prototype.b = function() {

alert(this.a)

}

var child = function() {

father.call(this)

}

child.prototype = new father();
```
## new 关键字和Obeject.create方法

>在文章中，博主指出了使用new关键字的弊端。他说：“new关键字掩盖了Javascript中真正的原型继承，使得它更像是基于类的继承。其实new关键字只是Javascript在为了获得流行度而加入与Java类似的语法时期留下来的一个残留物”。作者推荐我们使用Object.create方法创建或者实例化对象。露珠做过测试，使用new和使用object.create方法都是将对象添加到原型上去。我们可以看一下代码：
```
var father = function() {

this.a = 'father'  

}

father.prototype.b = function() {alert(this.a)}

var obj = new father();

在浏览器中打印obj，可以观察它的结构。它本身是一个对象，有自身属性，同时在其__proto__熟悉上也有b方法。在__proto__的后面有father，可以看出原型是自father来的。



那么objcet.create方法呢，我们也可以通过下面代码测试之:

var father = {

a: 'father',

b: function() {

alert(this.a);

}

}

var obj = Object.create(father);

console.dir(obj)

可以看到，用create的方法构造出来的对象，a属性和b方法都是在对象的原型上，也就是说我们可以通过更改father的属性动态改变obj的原型上的方法和属性，而上面通过new关键字用构造函数生成的实例，a属性是无法改变的。从这里，我们也可以看到类继承和原型基础的一些区别。
```