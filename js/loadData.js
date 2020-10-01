'use strict';

import { getData } from './getData.js';

const wishList = ['idd005', 'idd100', 'idd077', 'idd033'];
const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd045',
        count: 1
    },
    {
        id: 'idd095',
        count: 2
    },
];

export const loadData = () => {

    if ( location.search ) {
        const search = decodeURI( location.search ); 
        const prop = search.split( '=' )[0].substring(1);
        const value = search.split( '=' )[1];
        if ( prop === 's' ) {
            console.log(value);
        } else if ( prop === 'wishlist' ) {
            console.log(wishList);
        } else {
            console.log(prop, value);
        }
    } 
    
    if ( location.hash ) {
        console.log(location.hash.substring(1));
    } 

    if ( location.pathname.includes( 'cart' ) ) {
        console.log(cartList);
    }

};