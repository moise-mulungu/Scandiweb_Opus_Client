import { constant } from "lodash";
import React from "react";

export const categoryToIdsMap = {
    men: [
    'huarache-x-stussy-le',
    'apple-imac-2021',
    'apple-iphone-12-pro',
    'apple-airpods-pro',
    'apple-airtag',
    ],

    women: [
    'jacket-canada-goosee',
    'apple-imac-2021',
    'apple-iphone-12-pro',
    'apple-airpods-pro',
    'apple-airtag',
    ],

    kids: [
        'huarache-x-stussy-le', 'ps-5', 'xbox-series-s'
    ]
};

export const defaultCurrencyLabel = 'USD';

export const productIdToImageMapping = {
    "huarache-x-stussy-le": "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
    "apple-imac-2021": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    "apple-iphone-12-pro": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    "apple-airpods-pro": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    "apple-airtag": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    "jacket-canada-goosee": "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
    "ps-5": "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
    "xbox-series-s": "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
};
