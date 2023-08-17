import React from 'react'
import {Link} from 'react-scroll'
import './intro.css'
import bg from './../assets/image.png'
import hiremeImg from './../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introText">I'm  <span className="introName">Smith </span><br /> Web Developer</span>
            <p>I am a skilled web designer with experience in creating beautiful and functional websites</p>
            <Link><button className='introBtn'><img src={hiremeImg} alt="hire me" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
  )
}

export default Intro