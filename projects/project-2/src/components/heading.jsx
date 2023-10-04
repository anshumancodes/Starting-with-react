import styles from './heading.module.css';

const Heading = ({ text, style }) => {
    return (
        <h2 className={styles.SecHeading} style={style}>
            {text}
        </h2>
    );
}

export default Heading;

