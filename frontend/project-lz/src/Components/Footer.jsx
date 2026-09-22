import styles from './Footer.module.css'

function Footer(){
    return(
        <nav className={styles.container_footer}>
            <footer className={styles.footer}>
                <ul className={styles.socials}>
                    <li>
                        <a href='https://www.youtube.com/@levelzero3D'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7183 3.125H3.28167C1.4725 3.125 0 4.59833 0 6.4075V14.0083C0 15.8183 1.4725 17.2917 3.28167 17.2917H16.7192C18.5275 17.2917 20 15.8183 20 14.0083V6.4075C20 4.59833 18.5275 3.125 16.7183 3.125ZM13.7817 10.2342L8.14083 13.8433C8.0725 13.8867 7.99417 13.9092 7.91667 13.9092C7.8475 13.9092 7.77917 13.8917 7.71667 13.8575C7.58333 13.785 7.5 13.6442 7.5 13.4925V6.27417C7.5 6.12083 7.58333 5.98083 7.71667 5.9075C7.85083 5.835 8.01333 5.84083 8.14167 5.9225L13.7825 9.5325C13.9025 9.60917 13.975 9.74083 13.975 9.88333C13.9742 10.0258 13.9017 10.1575 13.7817 10.2342Z" fill="currentColor"></path>
                            </svg>
                        </a>
                        <a href='https://www.instagram.com/level0designs/'>
                            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99525 0H15.0047C17.7635 0 20 2.23604 20 4.99525V15.0047C20 17.7635 17.764 20 15.0047 20H4.99525C2.23645 20 0 17.764 0 15.0047V4.99525C0 2.23645 2.23604 0 4.99525 0ZM2 15.0047C2 16.6592 3.34085 18 4.99525 18H15.0047C16.6592 18 18 16.6591 18 15.0047V4.99525C18 3.34078 16.6591 2 15.0047 2H4.99525C3.34078 2 2 3.34085 2 4.99525V15.0047ZM5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10ZM13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10ZM15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
                <ul className={styles.copyright}>
                    <li>&copy; {new Date().getFullYear()} LEVEL ZERO</li>
                </ul>
                
            </footer>
        </nav>
    );
}

export default Footer