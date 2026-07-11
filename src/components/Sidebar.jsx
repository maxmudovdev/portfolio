import { motion } from 'framer-motion'
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaEnvelope,
  FaRegFileAlt,
} from 'react-icons/fa'
import Logo from './Logo.jsx'
import { files, socials } from '../data/content.js'

const ICONS = {
  telegram: FaTelegramPlane,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  github: FaGithub,
  gmail: FaEnvelope,
}

export default function Sidebar({ activeFile, setActiveFile }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Logo size={28} />
        <span>maxmudovdev.uz</span>
      </div>

      <div className="sidebar-section-label">Explorer</div>
      <ul className="file-list">
        {files.map((f) => (
          <li key={f.id}>
            <button
              className={`file-item ${activeFile === f.id ? 'active' : ''}`}
              onClick={() => setActiveFile(f.id)}
            >
              <FaRegFileAlt className="file-icon" />
              {f.name}
              {activeFile === f.id && (
                <motion.span layoutId="active-indicator" className="active-indicator" />
              )}
            </button>
          </li>
        ))}
      </ul>

      <div className="sidebar-section-label">Social — installed</div>
      <ul className="social-list">
        {socials.map((s) => {
          const Icon = ICONS[s.id]
          return (
            <li key={s.id}>
              <a
                className="social-item"
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                title={`${s.label}: ${s.value}`}
              >
                <Icon />
                <span>{s.label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      <div className="sidebar-status">
        <span>⎇ main</span>
        <span>UTF-8</span>
      </div>
    </aside>
  )
}
