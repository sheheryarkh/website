/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image'
import about from '@/app/pics/about.jpg'
const page = () => {
  return (
    <>
    <div id="main">
        <div id="h1">
          <h1>we are committed to delivering innovative solutions that drive success for our clients. Founded on the principles of integrity, collaboration, and excellence, we bring together a team of experts passionate about solving complex challenges. Our mission is to empower businesses by providing high-quality products and services that are tailored to meet the unique needs of each client. Whether we're working on large-scale projects or small initiatives, we prioritize building strong, lasting relationships based on trust and results. With a focus on continuous improvement and a client-first approach, we are dedicated to helping organizations achieve their goals and thrive in an ever-evolving marketplace</h1>
        </div>
        <hr/>
        <div id="img">
          <Image alt="pic" src={about}></Image>
        </div>
      </div></>
  )
}

export default page
