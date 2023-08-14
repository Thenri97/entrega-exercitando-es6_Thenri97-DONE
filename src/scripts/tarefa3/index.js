

const findBooksByCategory = (bookList, category) => bookList.filter(
  (element) => element.categories.includes(category));

// console.log(findBooksByCategory(bookStoreBooks,"Ficção Clássica"));



const findBookById = (bookList, bookId) => bookList.find((element) => element.id == bookId);

// console.log(findBookById(bookStoreBooks,1));


const sellBook = (bookList, bookId, userType = 'normal') => {

  const book = bookList.find((book) => book.id == bookId);

  if (book && book.quantity > 0) {

      book.quantity = book.quantity - 1;

      if (userType == 'normal') {
          return `Livro ${book.title} vendido com sucesso por R$ ${book.price} (0% de desconto.)`;
      }
      else if (userType == "bronze") {
          let discount = book.price / 100 * 5;
          discount = discount.toFixed(2);

          const bookWithDiscount = book.price - discount;
          

          return `Livro ${book.title} vendido com sucesso por R$ ${bookWithDiscount} (5% de desconto.)`;
      }
      else if (userType == "silver") {
          let discount = book.price / 100 * 10;
          discount = discount.toFixed(2);

          const bookWithDiscount = book.price - discount;
          

          return `Livro ${book.title} vendido com sucesso por R$ ${bookWithDiscount} (10% de desconto.)`;

      }
      else if (userType == "gold") {
          let discount = book.price / 100 * 12;
          discount = discount.toFixed(2);

          const bookWithDiscount = book.price - discount;
         

          return `Livro ${book.title} vendido com sucesso por R$ ${bookWithDiscount} (12% de desconto.)`;
      }
      else if (userType == "gold") {

          let discount = book.price / 100 * 15;
          discount = discount.toFixed(2);

          const bookWithDiscount = book.price - discount;
         

          return `Livro ${book.title} vendido com sucesso por R$ ${bookWithDiscount} (15% de desconto.)`;
      }
  }
  return 'Livro indisponível para compra.';
}

// console.log(sellBook(bookStoreBooks, 13, "gold"));


const calculateAverageRating = (bookList,bookId) => {
  const book = bookList.find((book) => book.id == bookId);
  
  
  if(book && book.ratings.length > 0){
      
      const soma = book.ratings.reduce((accumulator,currentValue) => accumulator+currentValue,0);
      // console.log(soma);
      let average =soma/book.ratings.length;
      average = average.toFixed(2);
      // console.log(average);
      
      return `O livro ${book.title} possui uma média de avaliação igual a ${average}.`;
  }
  
  else if(book && book.ratings.length == 0){
      return `O ${book.title} não possui nenhuma avaliação.`;
  }

  return `Livro não encontrado.`;
}
// console.log(calculateAverageRating(bookStoreBooks,1));





