import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from './Avatar';
import { useState } from 'react';

function Comment({content, onDeleteComment}){
    const [like, setlike] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setlike((state) => {
            return state + 1
        });
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https:/github.com/IgorBarcelo.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Barcelo</strong>
                            <time title="25 de Março de 2024" dateTime='2024-03-01 02:05:00'>Menos de 1h atrás</time>                    
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{like}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}

export default Comment