import React, { useContext } from 'react'
import './navbar.scss'
import { BirdContext } from '../context/BirdContext'

export const Navbar = () => {

    const {state} = useContext(BirdContext)

    const arr = Array.from( document.querySelectorAll( '.level__list' ) );
    
    arr.map( el => {
        if ( Number(state.level) === Number(el.id) ) {
            return el.classList.add( 'active' );
        }
        return el.classList.remove( 'active' );
    } );

    return(
        <>
        <nav>
            <div >
                <span className='level__list active' id='0'>Разминка</span>
                <span className='level__list' id='1'>Всеядные</span>
                <span className='level__list' id='2'>Растительноядные</span>
                <span className='level__list' id='3'>Насекомоядные</span>
                <span className='level__list' id='4'>Хищники</span>
                <span className='level__list' id='5'>Падальщики</span>
            </div>
        </nav>  
        <hr/>  
        </>    
    )
}