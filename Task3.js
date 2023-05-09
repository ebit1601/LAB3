// task 1
let product = {
    productName: "book",
    quantity: 500,
    price: 7.50
  };
  
  console.log("Product Name: " + product.productName);
  console.log("Quantity: " + product.quantity);
  console.log("Price: " + product.price);
  
  // task 2
  function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
  }
  
  Book.prototype.price = 15.79;
  
  let myBook = new Book("Ever After High: The Storybook", "Shannon Hale");
  
  console.log("Book Name: " + myBook.bookName);
  console.log("Author Name: " + myBook.authorName);
  console.log("Price: " + myBook.price);
  
  
  //task 3
  let employee = {
    employeeName: "Ali Bin Abu",
    employeeId: 00001,
    salary: 2500
  };
  
  let manager = Object.create(employee);
  manager.managerName = "Rabiatul";
  manager.branch = "Malaysia";
  
  console.log("Employee Name: " + manager.employeeName);
  console.log("Employee ID: " + manager.employeeId);
  console.log("Salary: " + manager.salary);
  console.log("Manager Name: " + manager.managerName);
  console.log("Branch: " + manager.branch);
  