import React from 'react';
import { useRef ,useState} from 'react';
import emailjs from 'emailjs-com';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import styles from './Contact.module.css'
function Contact(props) {
  const formRef = useRef();
  const [done,setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3sglh9p', 'template_5irqcal', formRef.current, 'user_3RUvFbtE3qPMctBDjc4iK')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contact' className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
        Feel Free to <span>Contact Me </span>
        </h1>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <img 
              src={Phone}
              alt="" 
              className={styles.icon}
            />
            +61 404105233
          </div>
          <div className={styles.infoItem}>
            <img 
              src={Email}
              alt="" 
              className={styles.icon}
            />
            yunpeng.wang525@gmail.com
          </div>
          <div className={styles.infoItem}>
            <img 
              src={Address}
              alt="" 
              className={styles.icon}
            />
            Sydney
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.desc}>
          <b>What’s your story?</b> Get in touch. .
        </p>
        <form className={styles.form} ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" className={styles.input}/>
          <input type="text" placeholder="Subject" name="subject" className={styles.input}/>
          <input type="text" placeholder="Email" name="user_email" className={styles.input}/>
          <textarea name="message"   rows="5" className={styles.textarea} placeholder="Message"/>
          <button type="submit" name="btn" className={styles.btn}>Submit</button>

        </form>
        {done&&'Thank you for your consulting,  I will reply you ASAP.' }
      </div>
    </div>
    
  );
}

export default Contact;