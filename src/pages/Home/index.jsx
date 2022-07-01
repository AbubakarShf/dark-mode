import React, { useEffect, useState } from "react"
import Article from "../../components/Article"
import Data from "../../data"
import "./Home.css"

const Home = () => {
  const getTheme = () =>{
    let CurrentTheme="light-theme"
    if(localStorage.getItem("theme") === CurrentTheme){
      CurrentTheme = localStorage.getItem("theme")
      return CurrentTheme;
    }
    return CurrentTheme;
  }
  const [theme, setTheme] = useState(getTheme())

  // Toggle Color
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }
  useEffect(() => {
    // set the theme
    document.documentElement.className = theme
    //set theme to localStorage
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <React.Fragment>
      <nav>
        <h1 className='AppName'>Overreacted</h1>
        <div className='toggle-btn'>
          <button className='toggle' onClick={toggleTheme}>
            Toggle
          </button>
        </div>
      </nav>
      <main>
        {Data.map((dt) => {
          return <Article key={dt.id} {...dt} />
        })}
      </main>
    </React.Fragment>
  )
}

export default Home
