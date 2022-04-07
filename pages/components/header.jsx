import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png';

export default function Header() {
  return (
    <>
      <Image src={logo}/>   
    </>    
  )
}