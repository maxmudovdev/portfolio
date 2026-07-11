import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen.jsx'
import Sidebar from './components/Sidebar.jsx'
import CodePane from './components/CodePane.jsx'
import AmbientBackground from './components/AmbientBackground.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [activeFile, setActiveFile] = useState('readme')

  return (
    <>
      <AnimatePresence onExitComplete={() => {}}>
        {loading && <LoadingScreen key="boot" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="ide-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AmbientBackground />
          <Sidebar activeFile={activeFile} setActiveFile={setActiveFile} />
          <CodePane activeFile={activeFile} setActiveFile={setActiveFile} />
        </motion.div>
      )}
    </>
  )
}
