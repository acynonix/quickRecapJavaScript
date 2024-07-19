// Objects in JS
// Note: There are multiple methods associated with the objects, but we're not covering any methods here !
const myObj = {
		name: "Dummy",
		age: 12,
		employement: "Student",
		
		introduce: function()
		{
			console.log(`Hello ${this.name}, I am ${this.age} years old !`);
		}
	}

const mySecObj = Object();


myObj.introduce();

myObj.name = "Jarvis";
myObj.age = 11;
myObj.employement = "Assistant";

myObj.introduce();


