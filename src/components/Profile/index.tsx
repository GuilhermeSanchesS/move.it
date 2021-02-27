import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/62891985?s=460&u=0a10365bfb4c5ef1f5ac4e83a8caedb609f5c3aa&v=4" alt="Guilherme Sanches Simões" />
            <div>
                <strong>Guilherme Sanches Simões</strong>
                <p>
                    <img src="icons/level.svg" alt="icon level" />
                    Level {level}
                    <div className={styles.tagget}>
                        <input className={styles.checkbox} type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className={styles.label}>
                            <div className={styles.moon}>🌙</div>
                            <div className={styles.sun}>🌞</div>
                            <div className={styles.ball}></div>
                        </label>
                    </div>
                </p>
            </div>
        </div>
    );
}

