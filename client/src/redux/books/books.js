import { client, Query, Field } from '@tilework/opus';

const API =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9Mp6empbKHhj96nJbJTP/books';
const ADD = 'add';
const DEL = 'del';
const UPDATE = 'getBooks';

const initialState = [];

// Actions

export const add = (book) => async (dispatch) => {
  await fetch(API, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(book),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: ADD, payload: book }),
      () => dispatch({ type: ADD, payload: null })
    );
};

export const del = (bookId) => async (dispatch) => {
  await fetch(`${API}/${bookId}`, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ item_id: bookId }),
  })
    .then((response) => response.text())
    .then(
      () => dispatch({ type: DEL, payload: bookId }),
      () => dispatch({ type: DEL, payload: null })
    );
};

export const getProductsForAllCategories = () => async (dispatch) => {
  try {
    client.setEndpoint('http://localhost:4000/graphql');

    /* 
query GetProductsForAllCategories {
  category {
    name
    products {
      id
      name
      description
      gallery
       attributes {
         id
         name 
         type
      }
    }
  }
}
*/
//     const categoryQuery = new Query('category', true) // `true` means 'expect array'
//       // .addArgument('id', 'String', "huarache-x-stussy-le") // use for product query when have to provide a specific id
//       .addFieldList(['name'])
//       .addField(
//         new Field('products', true)
//           .addFieldList(['id', 'name', 'description', 'gallery'])
//           .addField(
//             new Field('attributes', true).addFieldList(['id', 'name', 'items'])
//             // follow the same pattern here to add "items" field
//           )
//       );
    const queryResult = await client.post(categoryQuery);
    console.log('data', queryResult);
    // this would be a simple test that opus works
    // now that you have the data here, you'll have to
    // adapt this old app to do the scandiweb challenge
    // dispatch({ type: UPDATE, payload: queryResult });
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
      const bookList = [];
      Object.keys(action.payload).forEach((key) => {
        const book = action.payload[key][0];
        book.item_id = key;
        bookList.push(book);
      });
      return bookList;
    }
    default:
      return state;
  }
};

export const getBooks = () => async (dispatch) => {
  await fetch(API)
    .then((books) => books.json())
    .then(
      (data) => dispatch({ type: UPDATE, payload: data }),
      () => dispatch({ type: UPDATE, payload: [] }) // error only
    );
};

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DEL:
      return state.filter((book) => book.item_id !== action.payload);
    case UPDATE: {
      const bookList = [];
      // console.log('booksReducer', action);
      Object.keys(action.payload).forEach((key) => {
        const book = action.payload[key][0];
        book.item_id = key;
        bookList.push(book);
      });
      return bookList;
    }
    default:
      return state;
  }
};
export default booksReducer;
