import React from 'react';

import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      {/* Because BookList is wrapped with connect() it already has a property books in it */}
      <BookList />
      <ShoppingCartTable />
    </div>
  )
}

export default HomePage;
