import styles from './Avatar.module.css';

// eslint-disable-next-line react/prop-types
function Avatar({ hasBorder = true, src }){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    )
}

export default Avatar