import React from 'react';
import { connect } from 'react-redux';

import './shopping-cart-table.css';

import { bookAddedToCart, bookRemovedFromCart, allBookRemovedFromCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onInc, onDec, onDel }) => {

  const renderRow = (item, idx) => {
    const { id, title, count, price } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${price}</td>
        <td>
          <button
            onClick={() => onInc(id)}
            className="btn btn-outline-success">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDec(id)}
            className="btn btn-outline-warning">
            <i className="fa fa-minus-circle" />
          </button>
          <button
            onClick={() => onDel(id)}
            className="btn btn-outline-danger">
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item, idx) => renderRow(item, idx))
          }
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
}

const mapStateToProps = ({ shopCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = (dispatch) => ({
  onInc: id => dispatch(bookAddedToCart(id)),
  onDec: id => dispatch(bookRemovedFromCart(id)),
  onDel: id => dispatch(allBookRemovedFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
