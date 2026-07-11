import { AnimatePresence, motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { files, profile, projects, socials } from '../data/content.js'

function Readme() {
  return [
    <>
      <span className="tok-com"># maxmudovdev</span>
    </>,
    <>
      <span className="tok-com">&gt; {profile.role} — {profile.location}</span>
    </>,
    <> </>,
    <>
      <span className="tok-kw">## </span>About
    </>,
    <>{profile.bioLines[0]}</>,
    <>{profile.bioLines[1]}</>,
    <> </>,
    <>
      <span className="tok-kw">## </span>Stack
    </>,
    <>
      {profile.stack.map((s, i) => (
        <span key={s}>
          <span className="tok-str">`{s}`</span>
          {i < profile.stack.length - 1 ? ', ' : ''}
        </span>
      ))}
    </>,
  ]
}

function About() {
  return [
    <><span className="tok-com">/**</span></>,
    <><span className="tok-com"> * about.js — who's behind the keyboard.</span></>,
    <><span className="tok-com"> */</span></>,
    <> </>,
    <><span className="tok-kw">export const</span> <span className="tok-fn">dev</span> = {'{'}</>,
    <>&nbsp;&nbsp;name: <span className="tok-str">"{profile.name}"</span>,</>,
    <>&nbsp;&nbsp;role: <span className="tok-str">"{profile.role}"</span>,</>,
    <>&nbsp;&nbsp;base: <span className="tok-str">"{profile.location}"</span>,</>,
    <>&nbsp;&nbsp;stack: [
      {profile.stack.map((s, i) => (
        <span key={s}>
          <span className="tok-str">"{s}"</span>
          {i < profile.stack.length - 1 ? ', ' : ''}
        </span>
      ))}
      ],
    </>,
    <>{'}'};</>,
  ]
}

function Projects() {
  return [
    <><span className="tok-com">/**</span></>,
    <><span className="tok-com"> * projects.js — shipped, not just started.</span></>,
    <><span className="tok-com"> */</span></>,
    <> </>,
    <><span className="tok-kw">export const</span> <span className="tok-fn">projects</span> = [</>,
    ...projects.flatMap((p, idx) => [
      <>&nbsp;&nbsp;{'{'}</>,
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;name:{' '}
        <a className="tok-link" href={p.url} target="_blank" rel="noreferrer noopener">
          <span className="tok-str">"{p.name}"</span> <FaExternalLinkAlt size={10} />
        </a>
        ,
      </>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;tag: <span className="tok-str">"{p.tag}"</span>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;description: <span className="tok-str">"{p.description}"</span>,</>,
      <>&nbsp;&nbsp;{'}'}{idx < projects.length - 1 ? ',' : ','}</>,
    ]),
    <>&nbsp;&nbsp;<span className="tok-com">// more on GitHub →</span></>,
    <>];</>,
  ]
}

function Contact() {
  return [
    <><span className="tok-com">/**</span></>,
    <><span className="tok-com"> * contact.js — say hi. actually, click.</span></>,
    <><span className="tok-com"> */</span></>,
    <> </>,
    <><span className="tok-kw">export const</span> <span className="tok-fn">contact</span> = {'{'}</>,
    ...socials.map((s) => (
      <>
        &nbsp;&nbsp;{s.id}:{' '}
        <a className="tok-link" href={s.url} target="_blank" rel="noreferrer noopener">
          <span className="tok-str">"{s.value}"</span> <FaExternalLinkAlt size={10} />
        </a>
        ,
      </>
    )),
    <>{'}'};</>,
  ]
}

const RENDERERS = { readme: Readme, about: About, projects: Projects, contact: Contact }

export default function CodePane({ activeFile, setActiveFile }) {
  const activeMeta = files.find((f) => f.id === activeFile)
  const Renderer = RENDERERS[activeFile]
  const lines = Renderer()

  return (
    <main className="code-pane">
      <div className="tab-bar">
        {files.map((f) => (
          <button
            key={f.id}
            className={`tab ${activeFile === f.id ? 'active' : ''}`}
            onClick={() => setActiveFile(f.id)}
          >
            {f.name}
          </button>
        ))}
      </div>

      <div className="pane-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFile}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="code-lines"
          >
            {lines.map((line, i) => (
              <div className="code-line" key={i}>
                <span className="line-no">{i + 1}</span>
                <span className="line-content">{line}</span>
              </div>
            ))}
            <div className="code-line">
              <span className="line-no">{lines.length + 1}</span>
              <span className="line-content">
                <span className="cursor" />
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="status-bar">
        <span>⎇ main</span>
        <span>{activeMeta.lang}</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
    </main>
  )
}
