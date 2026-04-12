import "./App.css"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import Body from "./components/Body/index.jsx"
import MyButton from "./components/button/index.jsx"
import Clicked from "./components/but/index.jsx"

import { MyApp } from "./components/button/index.jsx"
import { useEffect, useState } from "react"


function App() {
  let [val, setVal] = useState(1);

  //this use effect will run when the val is changed!
  useEffect(() => {
    alert("the val is been changed")
  }, [val])
  function handleclick() {
    setVal(val + 1);
  }
  return (
    <div>
      <Header value={val} />
      <main className="page-body">
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Master Your Craft</h2>
            <p className="hero-subtitle">Learn coding, music, and fitness with a structured daily routine.</p>
            <button className="cta-button" onClick={handleclick}>Get Started</button>
          </div>
        </section>

        <Body />

        <section className="main-content">
          <div className="card-container">
            <article className="card">
              <h3>Development</h3>
              <p>Focus on Java, JavaScript, and building interactive web projects.</p>
            </article>

            <article className="card">
              <h3>Creativity</h3>
              <p>Incorporate guitar and music theory into your daily learning habit.</p>
            </article>

            <article className="card">
              <h3>Wellness</h3>
              <p>Balance your screen time with running and gym sessions for peak performance.</p>
            </article>
          </div>
        </section>
      </main>

      <MyButton />
      <MyButton />


      <Clicked />

      <Footer />

    </div>

  )
}

export default App
