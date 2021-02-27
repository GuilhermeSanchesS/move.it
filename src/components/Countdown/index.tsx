import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css'

export function Countdown() {

    const {
        minutes,
        segunds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown } = useContext(CountdownContext)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [segundLeft, segundRight] = String(segunds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{segundLeft}</span>
                    <span>{segundRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={styles.countdownButton}
                >
                    <span className={styles.countdownButtonGrid}>
                        <span className={styles.countdownButtonIcon}>
                            <img src="icons/clockwhite.svg" />
                        </span>
                    Ciclo encerrado
                </span>
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                <span className={styles.countdownButtonGrid}>
                                    <span className={styles.countdownButtonIcon}>
                                        <img src="icons/clockblue.svg" />
                                    </span>
                                    Abandonar ciclo
                                </span>
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}
                                >
                                    <span className={styles.countdownButtonGrid}>
                                        <span className={styles.countdownButtonIcon}>
                                            <img src="icons/clockwhite.svg" />
                                        </span>
                                        Iniciar um ciclo
                                    </span>
                                </button>
                            )}
                    </>
                )}


        </div>

    )
}
