import styles from './Home.module.css'

export function Home() {

    return(
        <>
            <div className={styles.background}>
                <img src='src/assets/LZ Wallpaper.png'></img>
                <div className={styles.greeting}>
                    <h1>Welcome!</h1>
                    <p>You are now entering ground zero! We hope you enjoy your stay.</p>
                </div>
            </div>
        </>
    );
}