function findAuthorById(authors, id) {
// use find() to match author.id to id 
   return authors.find((author) => author.id === id);
};

function findBookById(books, id) {
// use find() to match book.id to id 
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // create empty array to store values
  const result = [];
  // use filter on books array and if it has not been returned
   const returned = books.filter(book => !book.borrows[0].returned);
  // use filter on books array and if it has been returned
  const notReturned = books.filter(book => book.borrows[0].returned);
  // push values onto previously created array 
  result.push(returned);
  result.push(notReturned);
  
  return result;
}

function getBorrowersForBook(book, accounts) {
  // return array of ten or fewer account objects that match the id in the books borrows array, each account should include the boolean for borrows.returned

  const endArray = [];

  book.borrows.forEach((borrow) => {
    accounts.forEach((account) => {
      if (borrow.id === account.id) {
        account.returned = borrow.returned;
        endArray.push(account);
      }
    })
  })
  return endArray.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
