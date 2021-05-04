import React, {useState, useEffect} from 'react';
import styles from "./kanye.module.scss";

const kanye = () => {

  const [someYe, setSomeYe] = useState({});

  const getSomeYe = () => {
    fetch("https://api.kanye.rest/")
    .then(res => res.json)
    .then(json => setSomeYe(json))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getSomeYe();
  }, []);
  
  return (
    <div className = {styles.kanye}>
      <div className = {styles.quote}>
      {someYe.quote ? <p>"{someYe.quote}"</p>
      : <p>loading</p>}
      </div>
      <p> - Kanye </p>
      <div className={styles.buttonDiv}>
        <button className={styles.button}
        onClick ={getSomeYe}>Get Some Ye</button>
      </div>
    </div>
  )
}

export default kanye;
