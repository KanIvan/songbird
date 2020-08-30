import React, { useContext } from 'react'
import './layout.scss'
import { Header } from '../header/Header'
import { Navbar } from '../navbar/Navbar'
import { Question } from '../question/Question'
import { Answer } from '../answer/Answer'
import { Next } from '../next/Next'
import { Final } from '../final/Final'
import { BirdContext } from '../context/BirdContext'


const Layout = () => {

    const {state} = useContext(BirdContext)

    const GamePage = (
        <div className = 'layout'>
            <Header/>
            <Navbar/>
            <Question/>
            <Answer/>
            <Next/>
        </div>
    );

    const FinishPage = (
        <div className = 'layout'>
            <Final/>
        </div>
    );

    return(
        <div>
            { !state.finish ? GamePage : FinishPage }
        </div>
    )
}

export default Layout