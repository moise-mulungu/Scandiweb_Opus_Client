import { client, Query } from "@tilework/opus";

const UPDATE = "getProducts";

const initialState = [];

export const GetProductsForAllCategories = () => async (dispatch) => {
  try {
    client.setEndpoint("http://localhost:4000/graphql");

    const categoryQuery = new Query('product', true) // `true` means 'expect array'
    .addArgument('input', 'String', { title: 'all' })
    .addFieldList(['id', 'name', 'InStock', 'gallery'])
      
  const queryResult = await client.post(categoryQuery);
  console.log('GetProductsForAllCategories() fetchedData', queryResult);
   
  dispatch({ type: UPDATE, payload: queryResult });
} catch (e) {
  dispatch({ type: UPDATE, payload: [] });
  console.log('error', e);
}
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE: {

            const product = action.payload?.category?.product?.id;
            console.log('productReducer() product', {
              everything: action.payload,
              product,
            });
      
            return product;
          }
          default:
            return state;
        }
};
      
export default productReducer;
      

