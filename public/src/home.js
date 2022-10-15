function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
// create holder var for borrowed value
 let borrowed = 0;
//  use forEach to loop thru books and use holder var to add for each book not returned
  books.forEach((book) => {
    if (!book.borrows[0].returned) {
      borrowed++;
    }
  })
  return borrowed;
}

function getMostCommonGenres(books) {
  // create array that returns the most common genres, including the name and how many items it occurs, it should not have more than 5 objects
 const endArray = [];
 const endObj = {};
 books.forEach((book) => {
   if (endObj[book.genre]) {
    endObj[book.genre] = endObj[book.genre] + 1;
   } else {
    endObj[book.genre] = 1;
   }
 })
for (const [name, count] of Object.entries(endObj)) {
   const finalObj = { name: name  , count: count } 
   endArray.push(finalObj);
}
  return topFive(endArray);
}

function getMostPopularBooks(books) {
  const endArray = [];
  books.forEach((book) => {
      endArray.push({ name: book.title, count: book.borrows.length });
    })
    return topFive(endArray);
  }


function getMostPopularAuthors(books, authors) {
  const endArray = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id){
        endArray.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length })
      }
    })
  })
return topFive(endArray);
}

function topFive(array) {
  array.sort((counterA, counterB) => (counterA.count < counterB.count ? 1 : -1))
return array.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
