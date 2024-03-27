import createPhone from "../src/createPhone.js";
import { expect } from 'chai';

describe("Phone", () => {
  it("can have a number and a list of contacts", () => {
		let phone = createPhone('9375551234', ['Dawn', 'Kari', 'Courtney']);
    // It looks like that I am invoking the createPhone function
    // passing 2 arguments :
    // first arg is the string number 
    // second is an array of names. 
    // looking at the expects. It looks like the 
    // function is returning an object with name and contacts key, value pair. 
		expect(phone.number).to.equal('9375551234');
    expect(phone.contacts).to.deep.equal(['Dawn', 'Kari', 'Courtney']);
	})
  
	it("can call someone", () => {
		let phone = createPhone('9375551234', ['Fatima', 'Heather', 'Bruce']);
    // it looks like the create phone is also returning a function call as well. and when I pass a name into that call function ir returns a string for me. 
    // i need to find of this name is included within my contact array as well. 
		expect(phone.call('Bruce')).to.equal('Calling Bruce...');
	})

  it("can only call someone from your contacts", () => {
		let phone = createPhone('9375551234', ['Karim', 'Leah', 'Christy']);
		expect(phone.call('Leah')).to.equal('Calling Leah...');
    expect(phone.call('Jess')).to.equal('Unknown User: Jess');
	})
})