import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'

const LINES = [
  { prompt: '$', text: 'whoami' },
  { prompt: '>', text: 'maxmudovdev' },
  { prompt: '$', text: 'status --check' },
  { prompt: '>', text: 'full-stack developer · uzbekistan' },
  { prompt: '$', text: 'open maxmudovdev.uz' },
]

export default function LoadingScreen({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => setShowLogo(true), 250)
      return () => clearTimeout(t)
    }
    const current = LINES[lineIndex].text
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1)
      setCharIndex(0)
    }, 260)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex])

  useEffect(() => {
    if (!showLogo) return
    const t = setTimeout(onDone, 1100)
    return () => clearTimeout(t)
  }, [showLogo, onDone])

  return (
    <motion.div
      className="boot-screen"
      onClick={onDone}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="boot-window">
        <div className="boot-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="boot-title">zsh — maxmudovdev.uz</span>
        </div>
        <div className="boot-body">
          {LINES.slice(0, lineIndex).map((l, i) => (
            <div className="boot-line" key={i}>
              <span className="boot-prompt">{l.prompt}</span> {l.text}
            </div>
          ))}
          {lineIndex < LINES.length && (
            <div className="boot-line">
              <span className="boot-prompt">{LINES[lineIndex].prompt}</span>{' '}
              {LINES[lineIndex].text.slice(0, charIndex)}
              <span className="cursor" />
            </div>
          )}
          <AnimatePresence>
            {showLogo && (
              <motion.div
                className="boot-logo"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Logo size={56} animated />
                <span className="boot-logo-text">maxmudovdev</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="boot-hint">click anywhere to skip</div>
    </motion.div>
  )
}
