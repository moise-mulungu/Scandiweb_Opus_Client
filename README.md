
# completed
* set up monorepo
  * ./.prettierrc.js must be referenced in vsCode settings
* converted Navigation.js to a class component
* converted Book.js to a class component that uses redux
  * deleteBook action
  * see https://reactjs.org/docs/handling-events.html Main Concepts, Chapters 5 and 6
* added Products.js, a class component that uses redux
  * fetch data and load into redux state
# about Git
* run git commands from the root directory only (there is no .git in /api or /client)
* I created a 'dev' branch, then merged it with the 'main' branch
  * so, you can checkout 'dev' and work on that
  * please push before our meetings so that I can pull your changes to 'dev' onto my computer
* install you own version of this repo
  * clone this repo: https://github.com/mcdevv/scandiweb-coding-challenge
  * cd to this repo
  * rm -rf .git
  * create new repo on github.com
  * these commands:
git init
git add --all
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/xxxxx/xxxxx.git
git push -u origin main

# next 
* convert AddBook.js to a class component (similar to Book.js)
* convert Books.js to a class component
* now you know how class components work!

# pending
* I searched the /api source, and found nothing on gender, age, so ... maybe deduce it from the other data? Or, maybe just implement the Men, Women, Kids as tabs in the UI, but no change to the content.


# todos
* babel config error (see first import of any js file in client/)
  * note: as a monorepo, one must take note of separate configs for / and client/
* update some packages because there are some critical vulnerabilities
# notes from last meeting:

Component hierarchy
https://reactjs.org/docs/thinking-in-react.html
* product list
* header
  * men/women/kids/
  * cart
* main page
  * category name
  * grid of products
    * product
      * image
      * description
      * price

```graphql
# Write your query or mutation here
# 1 Ability to add/remove products and change their amounts in cart - on the cart page
#   itself, PLP and PDP should be provided.

# SHOW - queries of what to SHOW to user
query GetProduct($id: String! = "huarache-x-stussy-le") {
  product(id: $id) {
    id
    name
    category 
    prices {
      amount
      currency {
        label
        symbol
      }
    }
    description
  }
}
# STORE - mutations gql or localStorage
# { productId, amount } --> localStorage

########
# - For products that have various options (attributes) - the options should be selected.

# SHOW
# gql query

# STORE (describe the object)

#######
# - The selected options of added to cart products should be visible in cart overlay and
#   in cart page.

# SHOW
# gql query

# STORE (describe the object)

####### ...
# - If an attribute is a swatch attribute (type = swatch), a representation of the value
#   should be rendered on PDP and PLP, rather than text description (e.g. the color itself,
#   not "Blue" or "0000FF")
# - Filtering products by category name for all of the categories from BE
# - The descriptions provided in HTML format should be parsed and presented as HTML,
#   not as plain text
# - Ability to change the currency of the store to one of the available currencies

# see figma

# any repos with react and/or redux

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
        items {
          id
          displayValue
          value
        }
      }
    }
  }
}

```
