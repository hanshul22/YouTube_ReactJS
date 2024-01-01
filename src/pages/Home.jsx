import React from 'react'
import NavBar from '../component/NavBar'
import SideBarr from '../component/SideBarr'
import Categories from '../component/Categories'
export default function Home() {
  return (
    <div className='position' >
      <NavBar/>
      <div className='flex1'>
      <SideBarr/>
      <Categories/>
      </div>
    </div>
  )
}
