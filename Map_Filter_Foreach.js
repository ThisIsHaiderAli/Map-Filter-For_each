
const cars = ["honda", "suzuki", "ford", "audi", "toyota", "ferrari", "nissan"];

//  foreach never return any value 

let newcars = cars.forEach( (item,index) => {
    if (item === 'ford') {
        item = item.toUpperCase();
    }
    else
    {
        item = item.toLowerCase();
    }
    console.log(index,item);
});