
function findAccountById(accounts, id) {
// use find() to check if id matches account.id
  return accounts.find((account) => account.id === id);
};

function sortAccountsByLastName(accounts) {
// use sort to sort array by last name
  return accounts.sort((accountA, accountB) => {
// create var to access last names in account
  const lastNameA = accountA.name.last;
  const lastNameB = accountB.name.last;
// to sort by opposite of alphabetical order, switch syntax from 1: -1 to -1: 1
  return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1 : 1;
  }
)};

function getTotalNumberOfBorrows(account, books) {
//  destructure to access id in account
  const { id } = account;
// accumulator var
  let counter = 0;

// for in loop to check if account id === books borrow id 
  for (let book in books) {
// destructure borrows in books array
    const { borrows } = books[book];
    // use for each to see if element in borrows matches with id in account
    borrows.forEach((element) => {
      if (element.id === id) {
        // add to counter
        counter++;
      }
    })
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  // need books that are checked out, the author information, and the id that currently has them
  // create empty array to store book obj, author info
  const endArray = [];
  // use forEach on books array to access book object
  books.forEach(book => {
  // create const that will find author that matches with author.id in book object
    const targetAuthor = authors.find((author) => (author.id === book.authorId));
    // use for each on borrows array to access borrow.id and borrow.returned boolean
      book.borrows.forEach(borrow => {
        // conditional that will push the book object to endArray if borrow.id matches account.id AND borrow.returned is false
      if (borrow.id === account.id && !borrow.returned) {
        book.author = targetAuthor;
        endArray.push(book);
      }
    })
  })
  return endArray;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
