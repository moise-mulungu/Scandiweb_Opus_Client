import { client, Query } from '@tilework/opus';

const UPDATE = 'getProduct';

const initialState = {};

export const getProductById = (productId) => async (dispatch) => {
  try {
    client.setEndpoint('http://localhost:4000/graphql');

    const productQuery = new Query('product', true) // `true` means 'expect array'
      .addArgument('id', 'String!', productId)
      .addFieldList(['id', 'name', 'inStock', 'gallery']);

    const queryResult = await client.post(productQuery);
    console.log('redux/product getProductById() fetchedData', queryResult);

    dispatch({ type: UPDATE, payload: { queryResult } });
  } catch (e) {
    console.log('error', e);
    dispatch({ type: UPDATE, payload: [] });
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE: {
      const product = action.payload?.queryResult?.product;
      console.log('redux/product  productReducer() product', {
        actionPayload: action.payload,
        product,
      });

      return product || { error: 'unknown product' };
    }
    default:
      return state;
  }
};

export default productReducer;