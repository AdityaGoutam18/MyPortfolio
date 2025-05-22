import { useEffect, useState } from 'react'
import {
  faNodeJs,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import cpp from '../../assets/images/cpp.svg'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a passionate and dedicated BTech student at Rustamji Institute
            of Technology in Gwalior, Madhya Pradesh. I am passionate about
            technology and aim to become a successful software engineer.
          </p>
          <p>
            Over the years, I’ve worked on a range of practical projects—from
            building real-time Disease Predictor Web Application and AI-powered resume analyzers to
            developing Flutter-based mobile apps and interactive websites. With
            hands-on experience in technologies like Flutter, React, Node.js,
            Django, Firebase, and MongoDB, I enjoy bringing creative ideas to
            life through code.
          </p>
          <p align="LEFT">
            Beyond technical skills, I thrive in collaborative environments. As
            a core member of the Google Developer Student Club and the captain
            of my college football team, I’ve developed strong leadership and
            team management abilities. I also take pride in mentoring junior
            developers and contributing to college-level workshops, helping
            others grow as I continue learning myself.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={cpp} height="100px" alt="C++" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNodeJs} color="#8CC84B" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
