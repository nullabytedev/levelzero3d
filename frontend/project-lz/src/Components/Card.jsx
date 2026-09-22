import styles from './Card.module.css';

function Card(file){
    return(

        <div className={styles.card}>
            <h2>{file.name}</h2>
            <p>{file.description}</p>
            <div className={styles.downloadButton}>
                <button><a href={file.stl} download>Download .stl</a></button>
                <button><a href={file.stp} download>Download .stp</a></button>
                <button><a href={file.f3d} download>Download .f3d</a></button>
            </div>
        </div>
    );
}

export default Card