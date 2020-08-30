import React, { useContext} from 'react'
import './question.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BirdContext } from '../context/BirdContext'


export const Question = () => {

    const {state} = useContext(BirdContext)

    console.log('Правильный ответ - ' + state.question.name)
    
    return(
        <>
        <div className = 'question'>
            <img src = { state.correct ? state.question.image  : state.img } alt='фото птички' />
            <div className = 'qstConteiner'>
                <span> { state.correct ? <> { state.question.name }</> : <>*********</> } </span>
                <br/><br/>
                
                <AudioPlayer  
                            loop={false}
                            autoPlayAfterSrcChange={false}
                            src= { state.question.audio }
                            showJumpControls={false}
                            customAdditionalControls={[]} 
                        /> 
            </div>
        </div>
            <hr/>  
        </>      
    )
}