import React, {useContext} from 'react'
import './answres.scss'
import { BirdContext } from '../context/BirdContext'



export const AnswRes = () => {

    const {state, getButtonValue} = useContext(BirdContext)
    
    const arr = Array.from( document.querySelectorAll( '.bird' ) );

    arr.map( el => {
        if ( !state.сorrect && state.answerId === '' ) {
            return el.classList.remove( 'correct', 'incorrect' );
        }
        return null
    } );

    return(
        <div className = 'answRes' id='ans'>
            { state.birdsList.map(e =>{
                return (
                    <button 
                    type='button'
                    className='bird'
                    key={e.id} 
                    // eslint-disable-next-line
                    onClick = {() => getButtonValue( e )}
                    > { e.name } </button> 
                )  
            }) 
            }
        </div>
    )
}