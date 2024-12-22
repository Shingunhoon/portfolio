import React from 'react'
import { stackList } from '../../data/ProjectData'
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from './AboutElements'
import ScrollAnimation from 'react-animate-on-scroll'
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/profile.jpg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              안녕하세요 <strong>신건훈</strong>입니다.
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              ..소개글 ..
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default About
