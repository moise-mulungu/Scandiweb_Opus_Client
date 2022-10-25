/* 
query GetCategories {
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
        items {
          id
          displayValue
          value
        }
      }
    }
  }
}
*/

import { client, Query, Field} from '@tilework/opus';

// localhost:4000/graphql ?, http://localhost:4000/graphql ? ... not sure how to specify the port otherwise 
// 
client.setEndpoint('/graphql') 

const categoryQuery = new Query('category', true) // `true` means 'expect array'
    // .addArgument('id', 'String', "huarache-x-stussy-le") // use for product query when have to pass a specific id
    .addFieldList(['name'])
    .addField(
			new Field('products', true)
        .addFieldList(['id','name', 'category'])
				.addField(
					new Field('attributes', true)
					.addFieldList(['id', 'name', 'type'])
					// follow the same pattern here to add items
				)
    )

const queryResult = await client.post(categoryQuery);
