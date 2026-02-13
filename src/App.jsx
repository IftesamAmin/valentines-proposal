import { useState } from 'react'
import './App.css'

function App() {
  const [isNoHovered, setIsNoHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
            onClick={() => setIsModalOpen(true)}
          >
            Yes
          </button>
          <button
            className="btn no-btn"
            onMouseEnter={(e) => {
              setIsNoHovered(true)

              const btn = e.currentTarget
              const container = btn.closest('.proposal-card')
              if (!container) return

              const rect = container.getBoundingClientRect()
              const btnRect = btn.getBoundingClientRect()

              const padding = 20
              const maxX = rect.width - btnRect.width - padding
              const maxY = rect.height - btnRect.height - padding

              const randomX = Math.random() * maxX
              const randomY = Math.random() * maxY

              btn.style.position = 'absolute'
              btn.style.left = `${randomX}px`
              btn.style.top = `${randomY}px`
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
