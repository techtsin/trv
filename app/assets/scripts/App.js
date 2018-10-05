//App.js

import MobileMenu from './modules/MobileMenu';
import Person from './modules/Person'; //ES6 Syntax
// var Person = require ('./modules/Person'); require is part of nodejs not JS


class Adult extends Person{
	payTaxes(){
		console.log(this.name + "now owes $0 in taxes.");
	}
}

var johny = new Person("John Doe", "blue");
johny.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

var mobileMenu = new MobileMenu();
console.log("this is a test"); 
alert("This is a test for our webpack automation;-) !!!!");