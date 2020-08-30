import React, { useContext } from 'react'
import './final.scss'
import { BirdContext } from '../context/BirdContext'
import winBird from '../../img/winBird.gif'
import soundPlayer from '../../utils/soundPlayer'
import winAudio from '../../sounds/winAudio.mp3'


export const Final = () => {

    const {state} = useContext(BirdContext)

    const loserBlock = (

        <>
      <p>Поздравляем с окончанием игры!</p>
      <p>
        Вы набрали
        {' '}
        <span>{state.score}</span>
        {' '}
        баллов.
      </p>
      <p>
        Из возможных
        {' '}
        <span>30</span>
        .
      </p>
      <a href = '/'>Еще раз</a>
    </> 
        
    )

    const winnerBlock = (
        <>
          <p>Поздравляем!</p>
          <p>Вы победили!</p>     
          <p>Игра окончена.</p>
          <img
            src={winBird}
            alt="bird dance"
          />
        </>
      );


      return (
        <>
          <div className="final-block">
            {state.score === 30 ? winnerBlock : loserBlock}
            {state.score === 30 ? soundPlayer(winAudio) : null}
          </div>
        </>
    )


}