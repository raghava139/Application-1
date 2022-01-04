import React from 'react';
import { useHistory } from 'react-router-dom';
import {useLocation} from 'react-router-dom'


function About() {
    // const Location=useLocation()
    // console.log(Location)
    // const History=useHistory()
    // console.log(History)
    // function ClickME()
    // {
    //     // History.goBack()
    //     //History.push('/')
    // }
    return (
        <div className='bg-light text-dark p-3 container-fluid'>
            <h5 className='text-center'>ABOUT US</h5>
                <blockquote className="blockquote text-center">
                <p className="mb-0 p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, mollitia quos? 
                Ad fuga porro, magni quas repellat vitae fugiat iure.</p>
                <footer className="blockquote-footer">-<cite title="Source Title"> Magical Products</cite></footer>
                </blockquote>
                </div>
    )
}

export default About
