import { motion } from 'framer-motion'

const GLYPHS = ['{ }', '</>', '( )', '=>', '[ ]', '&&', '::', '#!']

export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      {GLYPHS.map((g, i) => (
        <motion.span
          key={i}
          className="ambient-glyph"
          style={{
            left: `${(i * 13 + 5) % 100}%`,
            top: `${(i * 27 + 8) % 100}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.25, 0], y: [-10, 10, -10] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6,
          }}
        >
          {g}
        </motion.span>
      ))}
    </div>
  )
}
