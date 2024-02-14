function Book(title, author, year){
    this.title = title
    this.author = author
    this.year = year
}
const getDetails = function() {
  return `${this.title}, ${this.author}, ${this.year}`;
}

console.log(getDetails.call(book1));
console.log(getDetails.call(book2));

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book1.getDetails()); // Expected output: Title: The Great Gatsby, Author: F. Scott Fitzgerald, Year: 1925

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2.getDetails()); // Expected output: Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960


