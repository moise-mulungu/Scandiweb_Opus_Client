import { client, Query, Field } from '@tilework/opus';

// const ADD = 'add';
// const DEL = 'del';
const UPDATE = 'getProducts';

const initialState = [];

// Actions

// !!!!! see redux/books/books.js for examples

//                   del = (bookId) => async (dispatch) => {
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
    const categoryQuery = new Query('categories', true) // `true` means 'expect array'
      // .addArgument('id', 'String', "huarache-x-stussy-le") // use for product query when have to provide a specific id
      .addFieldList(['name'])
        .addField(
          new Field('products', true)
            .addFieldList(['id', 'name', 'category', 'description', 'gallery'])
            .addField(
              new Field('attributes', true).addFieldList(['id', 'name', 'type'])
            // follow the same pattern here to add "items" field
          )
      );
    const queryResult = await client.post(categoryQuery);
    console.log('GetProductsForAllCategories() fetchedData', queryResult);
    // this would be a simple test that opus works
    // now that you have the data here, you'll have to
    // adapt this old app to do the scandiweb challenge
    dispatch({ type: UPDATE, payload: queryResult });
  } catch (e) {
    dispatch({ type: UPDATE, payload: [] });
    console.log('error', e);
  }
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD:
    //   return [...state, action.payload];
    // case DEL:
    //   return state.filter((book) => book.item_id !== action.payload);
    case UPDATE: {
      /* 

      "products": [
        {
          "id": "huarache-x-stussy-le",
          "name": "Nike Air Huarache Le",
          "category": "clothes",
          "attributes": [
            {
              "id": "Size",
              "name": "Size",
              "type": "text",

*/
      const products = action.payload?.category?.products;
      console.log('productsReducer() products', {
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
