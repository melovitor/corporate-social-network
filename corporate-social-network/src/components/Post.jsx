import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/melovitor.png' />
          <div className={styles.authorInfo}>
            <strong>Vitor Santo</strong>
            <span> Mobile Developer</span>
          </div>
        </div>
        <time
          title='20 de Dezembro às 23:11h'
          dateTime='2022-12-20 23:11:55'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da </p>Rocketseat. O nome do projeto é DoctorCare 🚀
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>

      </div>

    </article>
  )
}
