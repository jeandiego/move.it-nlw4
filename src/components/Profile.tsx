import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jeandiego.png" alt="Diego Fernandes"/>
      <div>
        <strong>Jean Diego</strong>
        <p>
        <img src="icons/level.svg" alt="Icone de Level"/>
        Level 1</p>
      </div>
    </div>
  );
}