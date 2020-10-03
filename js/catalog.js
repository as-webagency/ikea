'use strict';

import { getData } from './getData.js';
import generateSubCatalog from './generateSubCatalog.js';

export const catalog = () => {

    const upDateSubCatalog = generateSubCatalog();
    const btnBurger = document.querySelector( '.btn-burger' );
    const catalog = document.querySelector( '.catalog' );
    const subCatalog = document.querySelector( '.subcatalog' );
    const overlay = document.createElement( 'div' );
    
    overlay.classList.add( 'overlay' );
    document.body.insertAdjacentElement( 'beforeend', overlay );

    // Открытие меню
    const openMenu = () => {
        catalog.classList.add( 'open' );
        overlay.classList.add( 'active' );
    };

    // Закрытие меню
    const closeMenu = () => {
        closeSubMenu();
        catalog.classList.remove( 'open' );
        overlay.classList.remove( 'active' );
    };

    // Открытие под меню
    const handlerCatalog = event => {
        event.preventDefault();
        const target = event.target;
        const itemList = target.closest( '.catalog-list__item' );

        if ( itemList ) {
            getData.subCatalog( target.textContent, ( data ) => {
                subCatalog.classList.add( 'subopen' );
                upDateSubCatalog( target.textContent, data );
            });
        }

        if ( event.target.closest( '.btn-close' ) ) {
            closeMenu();
        }
    };

    // Закрытие под меню
    const closeSubMenu = () => {
        subCatalog.classList.remove( 'subopen' );
    };

    btnBurger.addEventListener( 'click', openMenu );
    overlay.addEventListener( 'click', closeMenu );
    catalog.addEventListener( 'click', handlerCatalog );
    subCatalog.addEventListener( 'click', ( event ) => {
        const btnReturn = event.target.closest( '.btn-return' );

        if ( btnBurger ) {
            closeSubMenu();
        }
    });

    // Закрытие меню при нажатии клавишы 
    document.addEventListener( 'keydown', ( event ) => {
        if ( event.code === 'Escape' ) {
            closeMenu();
        }
    });

};