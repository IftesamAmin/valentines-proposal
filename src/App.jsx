import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const [isNoHovered, setIsNoHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleYesClick = () => {
    setIsModalOpen(true)
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff9a9e', '#f6416c', '#ffdde1', '#ee9ca7']
    })
  }

  return (
    <div className="valentine-page">
      <div className="hearts-background" />
      <main className="proposal-card">
        <p className="small-text">To my dearest wife,</p>
        <h1 className="main-question">Will you be my Valentine<br />today and always?</h1>
        <p className="message">
          I promise extra hugs, cozy dates, bad jokes, and a lifetime supply of love.
        </p>
        <div className="promise-photo">
          <img
            src="/proma.jpeg"
            alt="My beautiful Valentine"
            className="promise-image"
          />
        </div>
        <div className="buttons-row">
          <button
            className="btn yes-btn"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="btn no-btn"
            onMouseEnter={(e) => {
              setIsNoHovered(true)

              const btn = e.currentTarget
              const btnRect = btn.getBoundingClientRect()

              const padding = 20
              // Use viewport dimensions to ensure it stays on screen
              const maxX = window.innerWidth - btnRect.width - padding
              const maxY = window.innerHeight - btnRect.height - padding

              const randomX = Math.max(padding, Math.random() * maxX)
              const randomY = Math.max(padding, Math.random() * maxY)

              // Apply styles to move the button anywhere on the screen
              btn.style.position = 'fixed'
              btn.style.left = `${randomX}px`
              btn.style.top = `${randomY}px`
              btn.style.zIndex = '1000'
              btn.style.margin = '0'
            }}
            onMouseLeave={() => setIsNoHovered(false)}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            No
          </button>
        </div>
        {isNoHovered && (
          <p className="hint">Nice try... the No button will never let you click it!</p>
        )}
      </main>

      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">Thank you for saying yes</h2>
            <p className="modal-text">
              I feel so lucky to share this life with you. Here&apos;s to many more Valentines together.
              Get ready to see a lot of this for the rest of your life . I love you so much. :P
            </p>
            <div className="modal-image-wrapper">
              {/* Replace the src below with your own image path */}
              <img
                src="/sleepy.jpeg"
                alt="A special moment together"
                className="modal-image"
              />
            </div>
            <button
              className="btn close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
