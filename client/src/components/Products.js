import React from 'react';
import Proptypes from 'prop-types';
import { GetProductsForAllCategories } from '../redux/products/products';
import { categoryToIdsMap } from '../constants';

import { connect } from 'react-redux';
// to implement 'add book', see deleteBook in Book.js example of converting a hook to class component with mapDispatchToProps
// import AddBook from './AddBook';

function mapStateToProps(state) {
  const products = state.productsReducer;
  return { products };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(GetProductsForAllCategories()),
    //     deleteBook: (bookId) => dispatch(del(bookId)),
  };
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    // note: Moise ask me when you need local state, I'll show you some examples
    // this.state = { };
  }

  componentDidMount() {
    console.log('componentDidMount initial data load');
    this.props.getProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps?.products !== this.props.products) {
      console.log('cDU', {
        prevPropsProducts: prevProps?.products,
        thisPropsProducts: this.props.products,
      });
    }
  }

  render() {
    const { products = [] } = this.props;

    console.log('Products component ran', { products });
    return (
      <>
        <h1>Category  Name</h1>
        {products.filter(Boolean)
        .filter((product) => categoryToIdsMap['women'].includes(product.id))
        .map(
          (
            product,
            idx // TODO: don't use index
          ) => (
            <pre key={idx}>{JSON.stringify(product, null, 2)}</pre>,
            <div key={idx} className="cont">
              ProductId:{product.id}
              <h2>Name:{product.name}</h2>
              ProductionDesc: 
              <div
                dangerouslySetInnerHTML={{ __html: product.description}}
              />
              <div>
                ProductGallery : {' '}
                {product.gallery?.map((imageUrl) => {
                  return(
                    <div key={imageUrl}>
                      <img src={imageUrl} />
                    </div>
                  );
                })}
              </div>
              
            </div>
          )
        )}
        {/* // <AddBook /> */}
      </>
    );
  }
}
Products.propTypes = {
  products: Proptypes.arrayOf(Proptypes.object).isRequired,
  getProducts: Proptypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);

/*

Hooks version:

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Book from './Book';
// import AddBook from './AddBook';
import { getProducts } from '../redux/products/products';

export default function Products() {
  const products = useSelector((state) => state.productsReducer) || [];
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect initial data load');
    dispatch(getProducts());
  }, []);
  console.log('Products component ran', { products });
  return (
    <>
      {products
        .filter(Boolean)
        // .filter((product) => product.title)
        .map(
          (
            product,
            idx // TODO: don't use index
          ) => (
            <pre key={idx}>{JSON.stringify(product, null, 2)}</pre>
          )
        )}

    </>
  );
}
*/
