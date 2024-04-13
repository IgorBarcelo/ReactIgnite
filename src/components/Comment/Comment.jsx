import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from '../Avatar/Avatar';
import { useState } from 'react';
import moment from 'moment';

function Comment({comment, onDeleteComment}){
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
                            <span>{`${moment(comment.createdAt).calendar()}`}</span>                    
                            {/* <span>{`${moment(comment.createdAt).locale('pt-br').format('L')} às ${moment(comment.createdAt).locale('pt-br').format('LT')}`}</span>                     */}
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{comment.text}</p>
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