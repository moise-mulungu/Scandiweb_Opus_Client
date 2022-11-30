import React from 'react';
import Proptypes from 'prop-types';
import { getProductById } from '../redux/product/product';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  const product = state.productReducer;
  return { product };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (productId) => {
      console.log('dispatching getProductById for productId', productId);
      dispatch(getProductById(productId));
    },
  };
};

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const productId = this.props.router?.params?.productId;
    console.log('Product componentDidMount initial data load', {});
    if (productId) this.props.getProduct(productId);
  }

  render() {
    const {
      product,
      router: {
        // params: { catexxxgoryId = 'women' },
      },
    } = this.props;

    if (product.error)
      return (
        <div>
          {product.error}, please go to the product listing and select a product
        </div>
      );
    if (!product.id) return <div>loading ...</div>; // TODO: check against figma spec

    console.log('Product component rendered', { product, props: this.props });
    return (
      <>
        <h1>Product Name</h1>
        <pre>{JSON.stringify(product, null, 2)}</pre>
        <div className="cont">
          ProductId:{product.id}
          <h2>Name:{product.name}</h2>
          ProductionDesc:
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          <div>
            ProductGallery :{' '}
            {product.gallery?.map((imageUrl) => {
              return (
                <div key={imageUrl}>
                  <img src={imageUrl} />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

Product.propTypes = {
  product: Proptypes.arrayOf(Proptypes.object).isRequired,
  getProduct: Proptypes.func.isRequired,
  productId: Proptypes.string,
  router: Proptypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
