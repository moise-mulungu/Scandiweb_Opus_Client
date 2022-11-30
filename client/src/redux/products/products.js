import { client, Query, Field } from '@tilework/opus';

// const ADD = 'add';
// const DEL = 'del';
const UPDATE = 'getProducts';

const initialState = [];

export const GetProductsForAllCategories = () => async (dispatch) => {
  try {
    client.setEndpoint('http://localhost:4000/graphql');

    /* 
query GetProductsForAllCategories {
  category {
    name
    products {
      id
      name
      category
       attributes {
         id
         name 
         type
      }
    }
  }
}
*/
    const categoryQuery = new Query('category', true) // `true` means 'expect array'
      // .addArgument('id', 'String', "huarache-x-stussy-le") // use for product query when have to provide a specific id
      .addArgument('input', 'CategoryInput', { title: 'all' })
      .addFieldList(['name'])
        .addField(
          new Field('products', true)
            .addFieldList(['id', 'name', 'category', 'description', 'gallery'])
              .addField(
                new Field('prices', true)
                  .addFieldList(['amount'])
                    .addField(
                      new Field('currency', true)
                        .addFieldList(['label', 'symbol'])
                    )
              )
      );
    const queryResult = await client.post(categoryQuery);
    console.log('GetProductsForAllCategories() fetchedData', queryResult);
    
    dispatch({ type: UPDATE, payload: queryResult });
  } catch (e) {
    dispatch({ type: UPDATE, payload: [] });
    console.log('error', e);
  }
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE: {

      const products = action.payload?.category?.products;
      console.log('redux/allproducts productsReducer() products', {
        everything: action.payload,
        products,
      });

      return products;
    }
    default:
      return state;
  }
};

export default productsReducer;
