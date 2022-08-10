import React, { useState, Component } from 'react';
import { ReactDOM } from 'react';
import '../components/landing.css'
import '../components/landing.css'
import i1 from '../images/1.png'
import i2 from '../images/2.png'
import i3 from '../images/3.png'
import i4 from '../images/4.png'
import i5 from '../images/5.png'
import i6 from '../images/6.png'
import i7 from '../images/7.png'
import i8 from '../images/8.png'
import i9 from '../images/9.png'
import i10 from '../images/10.png'
import i11 from '../images/11.png'
import i12 from '../images/12.png'

document.addEventListener("mousemove", parallax)


function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
 
function Landing(){
    const [jokeText, setJokeText] = useState("Click to generate a joke!")
    function fetchJoke() {
        let URL = "https://icanhazdadjoke.com/";

        fetch(URL, {
            method: 'GET',
            headers: {
                accept: 'application/json'}})
        .then(response => response.json())
        .then(data => {
            const joke = data.joke
            setJokeText(joke)
        })
        .catch(error => console.error(error))
    }

    return (
        <div class="main">
            <img src={i1} data-speed="-5" class="layer"></img>
            <img src={i2} data-speed="5" class="layer"></img>
            <img src={i3} data-speed="2" class="layer"></img>
            <img src={i4} data-speed="6" class="layer"></img>
            <img src={i5} data-speed="8" class="layer"></img>
            <img src={i6} data-speed="3" class="layer"></img>
            <img src={i7} data-speed="4" class="layer"></img>
            <img src={i8} data-speed="-9" class="layer"></img>
            <img src={i9} data-speed="-7" class="layer"></img>
            <img src={i10} data-speed="-2" class="layer"></img>
            <img src={i11} data-speed="5" class="layer"></img>
            <img src={i12} data-speed="1" class="layer"></img>
            <div className="box" >
                <div class="thought" id="joke">{jokeText}</div>
                <button class="submitBtn" onClick={fetchJoke} >Get Another Joke</button>
            </div>
        </div>
    );

}
 
export default Landing;