import React, { useContext } from 'react'
import './header.scss'
import { BirdContext } from '../context/BirdContext'


export const Header = () => {

    const {state} = useContext(BirdContext)

    return(

        <div className = 'header'>
            <div className = 'headerWrap'>
                <div className = 'logo'>
                    <a href = '/'>
                        <img src = {require('../../img/logo.png')}
                        alt="logo"/>                       
                    </a>
                </div>
                <div className='score'>
                    <span>Баллы:</span>
                    &nbsp;
                    <span>{state.score}</span>
                </div>
            </div>
            <hr />
        </div>        
    )
}