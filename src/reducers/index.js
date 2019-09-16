import updateShopCart from './shop-cart';
import updateBookList from './book-list';

const reducer = (state, action) => {
  console.log(action.type);

  return {
    bookList: updateBookList(state, action),
    shopCart: updateShopCart(state, action)
  };
}

export default reducer;
