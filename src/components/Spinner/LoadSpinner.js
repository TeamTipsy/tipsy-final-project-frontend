import styles from './components/Spinner/Loader.css';

export function LoadSpinner() {
    return (
        <div className={`button is-loading is-large ${styles.loader}`}>Loading</div>
    );
}