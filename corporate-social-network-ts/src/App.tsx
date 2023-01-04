import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/melovitor.png",
      name: 'Vitor de Melo',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir esse projeto para o meu protifolio no Git, deem uma olhada lá!🚀' },
      { type: 'link', content: 'github.com/melovitor/corporate-social-network' },
    ],
    publishedAt: new Date('2022-12-29 23:09:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala Devs 👋' },
      { type: 'paragraph', content: 'Eu sou o Diego Fernandes' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}



