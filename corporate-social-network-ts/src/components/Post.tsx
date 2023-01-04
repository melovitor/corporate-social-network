import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

interface PostProps {
  author: Author,
  publishedAt: Date,
  content: content[]
}

interface content {
  type: 'paragraph' | 'link',
  content: string
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(['Showww!'])
  const [newCommentText, setNewCommentText] = useState('')

  console.log(newCommentText)


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const isNewCommentEmpty = newCommentText == ''

  function handleNewComentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewComentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativetoNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type == 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário!</strong>
        <textarea
          name='comment'
          placeholder='Escreva um comentário...'
          onChange={handleNewComentChange}
          value={newCommentText}
          onInvalid={handleNewComentInvalid}
          required
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Publicar!</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>

    </article >
  )
}
