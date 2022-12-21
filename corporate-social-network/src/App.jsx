import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author='Vitor de Melo'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit ut pariatur, magnam sint placeat sunt distinctio, nesciunt facilis beatae deleniti unde ipsam nostrum perferendis. Suscipit iste accusamus officiis. Deserunt.'
          />
          <Post
            author='Vitor Santos'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
          />
        </main>

      </div>
    </div>
  )
}



