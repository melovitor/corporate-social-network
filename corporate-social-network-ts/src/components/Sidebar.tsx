import { PencilSimpleLine } from "phosphor-react"
import { Avatar } from "./Avatar";
import styles from './Sidebar.module.css';


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/melovitor.png" />
        <strong>Vitor de Melo</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}