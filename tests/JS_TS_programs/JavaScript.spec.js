var cars = ["Volvo", "Toyota", "Tesla"]

for (let car1 of cars){
    console.log(car1)
    if (car1 = "Toyota"){
        break
    }
}

// BS6 systax for forEach loop (it will iterate the cars array)
cars.forEach( car2 => {
    console.log(car2)
})