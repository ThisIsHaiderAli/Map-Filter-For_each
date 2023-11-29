
// const cars = ["honda", "suzuki", "ford", "audi", "toyota", "ferrari", "nissan"];

        //  foreach never return any value 

// let newcars = cars.forEach( (item,index) => {
//     if (item === 'ford') {
//         item = item.toUpperCase();
//     }
//     else
//     {
//         item = item.toLowerCase();
//     }
//     console.log(index,item);
// });




                  //  filter


let books = [
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publishDate: "July 16, 1951"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Classic",
        publishDate: "July 11, 1960"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publishDate: "June 8, 1949"
    },
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publishDate: "April 10, 1925"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        genre: "Fantasy",
        publishDate: "June 26, 1997"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publishDate: "September 21, 1937"
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publishDate: "July 29, 1954"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publishDate: "January 28, 1813"
    },
    {
        title: "The Da Vinci Code",
        genre: "Mystery",
        publishDate: "March 18, 2003"
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        genre: "Science Fiction",
        publishDate: "October 12, 1979"
    },
    {
        title: "flowers",
        genre: "Romance",
        publishDate: "January 29, 2015"
    },
];

let userbooks = books.filter( (bk) => {
    // return bk.publishDate >= 2000;
    
    // Convert the publishDate string to a Date object
    const publishDate = new Date(bk.publishDate);
    return publishDate >= new Date("January 1, 2000");
})
console.log(userbooks);