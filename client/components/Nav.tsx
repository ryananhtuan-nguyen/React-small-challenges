import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
function Nav() {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="/"> Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About us</a>
        <button>
          <FaTimes />
        </button>
      </nav>
      <button>
        <FaBars />
      </button>
    </header>
  )
}

export default Nav
