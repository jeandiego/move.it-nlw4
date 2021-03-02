import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jeandiego.png" alt="Diego Fernandes"/>
      <div>
        <strong>Jean Diego</strong>
        <p>
        <img src="icons/level.svg" alt="Icone de Level"/>
        Level {level}</p>
      </div>
    </div>
  );
}