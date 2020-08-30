import React from 'react'
import './answer.scss'
import { AnswRes } from '../answRes/AnswRes'
import { Discription } from '../discription/Discription'


export const Answer = () => {

    return(

        <div className = 'answer'>
            <AnswRes/>    
            <Discription/>     
        </div>        
    )
}