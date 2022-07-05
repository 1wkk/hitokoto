import { useEffect, useState } from 'react'
import './App.css'
import usePreferredDark from './usePreferredDark'

interface Hitokoto {
  hitokoto: string
  from: string
  from_who: string
}

function App() {
  const isDark = usePreferredDark()

  const [hitokoto, setHitokoto] = useState<Hitokoto>()

  const update = () =>
    fetch('https://v1.hitokoto.cn/')
      .then(response => response.json())
      .then(data => setHitokoto(data))

  useEffect(() => {
    update()
  }, [])

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <h1 id='hitokoto' onClick={update}>
        {hitokoto?.hitokoto}
      </h1>
      <div className='author'>
        — <span id='from_who'>{hitokoto?.from_who}</span>「
        <span id='from'>{hitokoto?.from}</span>」
      </div>
      <footer>
        Powered by
        <br />
        <a href='https://hitokoto.cn/'>Hitokoto.cn</a>
      </footer>
    </div>
  )
}

export default App
