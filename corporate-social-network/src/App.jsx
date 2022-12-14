import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author='Vitor de Melo'
        content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      />
    </div>

  )
}

