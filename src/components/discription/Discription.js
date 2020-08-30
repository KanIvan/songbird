import React, { useContext } from 'react'
import './discription.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BirdContext } from '../context/BirdContext'


export const Discription = () => {

    const {state} = useContext(BirdContext)

    const renderData = state.answerId ? state.birdsList[ state.answerId - 1 ] : null;

    const renderInfo = (

        <div className = 'discription'>
            <div className = 'conteiner'>
                <img alt={ state.currentBird.name } src={ state.currentBird.image } />
                <div className = 'dop_discription'>
                    <p>{state.currentBird.name} / {state.currentBird.species}</p>

                    <AudioPlayer
                            loop={false}
                            autoPlayAfterSrcChange={false}
                            src= { state.currentBird.audio }
                            showJumpControls={false}
                            customAdditionalControls={[]}
                        /> 
                    
                </div>
            </div>     
           <p> {state.currentBird.description} </p>        
        </div>  

    )

    const defaultInfo = (
        <div className='defaultInfo'>
            <span>Послушайте плеер.</span>
            <br/>
            <span>Выберите птицу.</span>
        </div>
    );
    return (
        <div className = 'discription_bird'>
            { renderData === null ? defaultInfo : renderInfo }
        </div>
    );
    
}