var customerFistName: string = "John"
var customerLastName: string = "Smith"
var customerAge: number = 25

type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: "Marry",
    lastName: "Johns",
    active: true
}

// type script will give error while assigning the wrong value/compiletime 
// to variable where JavaScript will give that error at runtime.