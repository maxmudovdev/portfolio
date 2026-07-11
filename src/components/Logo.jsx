import { motion } from 'framer-motion'

export default function Logo({ size = 40, animated = false }) {
  const bracket = { hidden: { opacity: 0, x: 0 }, show: { opacity: 1, x: 0 } }
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      initial={animated ? 'hidden' : false}
      animate="show"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C792EA" />
          <stop offset="100%" stopColor="#7FDBCA" />
        </linearGradient>
      </defs>
      <motion.rect
        width="64"
        height="64"
        rx="14"
        fill="#161B24"
        stroke="#2A3040"
        initial={animated ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.text
        x="32"
        y="41"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="24"
        fontWeight="700"
        textAnchor="middle"
        fill="url(#logoGrad)"
        variants={bracket}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {'<M/>'}
      </motion.text>
    </motion.svg>
  )
}
