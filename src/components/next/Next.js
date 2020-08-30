import React, { useContext } from 'react'
import './next.scss'
import { BirdContext } from '../context/BirdContext'


export const Next = () => {

    const {state, nextLevel} = useContext(BirdContext)

    return(
        <button className='btnNext'
                disabled={ !state.activeNextLevel  }
                onClick={nextLevel}
        >Дальше</button>      
    )
}