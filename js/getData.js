'use strict';

export const getData = {
    url: 'database/database.json',
    get( process ) {
        fetch( this.url )
    }
};