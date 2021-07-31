import React, { useRef, useState, useContext } from 'react'
import FilterContext from "../../Context/FilterContext"
import './Search.scss'

export default function Search() {
    const searchRef = useRef()
    const [icon, setIcon] = useState('🔍')
    const filterUsers = useContext(FilterContext)

    const handleClick = (e) => {
        e.preventDefault()
        if(searchRef.current.value && icon === '🔍') {
            changeIcon()            
        } 
        if(searchRef.current.value && icon === '🔙') {
            changeIcon()
            clearInput()
        }
        filterUsers(searchRef.current.value)
    }

    const clearInput = () => {
        searchRef.current.value = ''
    }

    const changeIcon = () => {
        if( icon === '🔍' ) {
            setIcon('🔙') 
        } else {
            setIcon('🔍')
        }
    }

    return (
      <form className='search'>
        <input className='searchInput' type="text" placeholder='Search name or state' ref={searchRef} />
        <button className='searchBtn' onClick={ (e) => handleClick(e) } > {icon} </button>
      </form>
    )
}
