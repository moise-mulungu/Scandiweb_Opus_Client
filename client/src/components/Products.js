import React from 'react';
import Proptypes from 'prop-types';
import { GetProductsForAllCategories } from '../redux/products/products';
import { categoryToIdsMap, defaultCurrencyLabel } from '../constants';
import Price from './common/price';

import { connect } from 'react-redux';
import Gallery from './common/gallery';

function mapStateToProps(state) {
  const products = state.productsReducer;
  return { products };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(GetProductsForAllCategories()),
  };
};

class Products extends React.Component {
  constructor(props) {
    super(props);
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
    const {
      products,
      router: {
        params: { categoryId = 'women' }, // if the user goes to the homepage, there is no categoryId in the URL, so default to 'women'
      },
    } = this.props;

    console.log('Products component ran', {
      products,
      props: this.props,
      categoryId,

    });
    return (
      <>
        <h1 className='title'>Category Name</h1>
        <div className='allCards'>

        {products
          .filter(Boolean)
          .filter((product) =>
            categoryToIdsMap[categoryId].includes(product.id)
          )
          .map(
            (
              product,
              idx // TODO: don't use index
            ) => (
              (<pre key={idx}>{JSON.stringify(product, null, 2)}</pre>),
              (
                <div key={idx} className="cont">
                  ProductId:{product.id}{' '}
                  <a href={`/product/${product.id}`}>GOTO: {product.name}</a>
                  {/* ProductionDesc:
                  <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                /> */}
                   {/* <div className='productGallery'>
                    ProductGallery :{' '}
                    {product.gallery?.map((imageUrl) => {
                      return (
                        <div key={imageUrl} className="img">
                          <img src={imageUrl} />
                        </div>
                      );
                    })} */}
                    {/* {product.gallery.forEach((imageUrl) => {
                      return (
                        <div key={imageUrl} className="img">
                          <img src={imageUrl} />
                        </div>
                      );
                      
                    })} */}
                  <div >
                    <Gallery
                      images={product.gallery}
                    />
                  </div>
                  {/* </div> */}
                  <h2>{product.name}</h2>
                  <div>
                    <Price
                      prices={product.prices}
                      currencyLabel={defaultCurrencyLabel}
                    />
                  </div>
                </div>
              )
            )
          )}
        </div>
      </>
    );
  }
}
Products.propTypes = {
  products: Proptypes.arrayOf(Proptypes.object).isRequired,
  getProducts: Proptypes.func.isRequired,
  categoryId: Proptypes.string,
  router: Proptypes.object,
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
