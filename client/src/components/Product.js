import React from 'react';
import Proptypes from 'prop-types';
import { GetProductsForAllCategories } from '../redux/product/product';
import { categoryToIdsMap } from '../constants';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  const product = state.productReducer;
  return { product };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => dispatch(GetProductsForAllCategories()),
  };
};

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount initial data load');
    this.props.getProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps?.product !== this.props.product) {
      console.log('cDU', {
        prevPropsProduct: prevProps?.product,
        thisPropsProduct: this.props.product,
      });
    }
  }

  render() {
    const { product, router: {params: { string = 'id' }, // if the user goes to the homepage, there is no categoryId in the URL, so default to 'women'
      },
    } = this.props;

    console.log('Products component ran', { product });
    return (
      <>
        <h1>Category  Name</h1>
        {product.filter(Boolean)
        .filter((product) => categoryToIdsMap[String].includes(product.id))
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
Product.propTypes = {
  product: Proptypes.arrayOf(Proptypes.object).isRequired,
  getProduct: Proptypes.func.isRequired,
  String: Proptypes.string,
  router: Proptypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);