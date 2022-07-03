import React from 'react';
import { useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import Phone from '../img/phone.png';
import Email from '../img/email.png';
import Address from '../img/address.png';


function Contact(props) {
  const formRef = useRef();
  const [done,setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    var templateParams = {
      name: 'James',
      notes: 'Check this out!'
    };
    emailjs.sendForm('service_3sglh9p', 'template_5irqcal', formRef.current, 'user_3RUvFbtE3qPMctBDjc4iK')
      .then(response => {
          console.log('SUCCESS!', response.status, response.text);
          setDone(true)
      }, err => {
          console.log('FAILED...', err);
      });
  };
  console.log('biaoge',formRef.current);
  return (
    <div id='contact' className='pt-[100px] h-[50vh] px-5 grid md:grid-cols-2 md:gap-4  lg:h-screen dark:bg-gray-700 dark:text-white'>
      <div className='pb-8 md:col-span-1 lg:mx-auto'>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold md:text-2xl lg:text-3xl'>
          Feel Free to <span className='text-orange-500'>Contact Me </span>
          </h1>

          <div className='mt-[50px] '>
            <div className='flex items-center text-[20px] font-normal mb-3'>
              <img 
                src={Phone}
                alt="" 
                className='h-[30px] w-[30px] mr-2'
              />
              +61 404105233
            </div>
            <div className='flex items-center text-[20px] font-normal mb-3'>
              <img 
                src={Email}
                alt="" 
                className='h-[30px] w-[30px] mr-2'
              />
              yunpeng.wang525@gmail.com
            </div>
            <div className='flex items-center text-[20px] font-normal'>
              <img 
                src={Address}
                alt="" 
                className='h-[30px] w-[30px] mr-2'
              />
              Sydney
            </div>
          </div>
        </div>
      </div>
      <div className='md:col-span-1'>
        <div className='flex flex-col justify-center  '>
          <p className='w-4/5 text-xl md:text-2xl lg:text-3xl'>
            <b>What’s your story?</b> <span className='text-orange-500 font-bold'>Get in touch. .</span>
          </p>
          <form className='w-4/5 flex flex-col mt-[20px]' ref={formRef} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" className=' text-l   w-3/5 border-b-2 border-gray-600'/>
            <input type="text" placeholder="Subject" name="subject" className=' text-l mt-3 w-3/5 border-b-2 border-gray-600'/>
            <input type="text" placeholder="Email" name="user_email" className=' text-l mt-3 w-3/5 border-b-2 border-gray-600'/>
            <textarea name="message"   rows="5" className='w-3/5 mt-3 text-l pl-[10px] border-2 border-gray-600 text-black' placeholder="Message"/>
            <button type="submit" name="btn" className='w-[80px] p-4 rounded-lg mt-3 bg-orange-500 text-white font-medium cursor-pointer'>Submit</button>

          </form>
          {done&&'Thank you for your consulting,  I will reply you ASAP.' }
        </div>
      </div>
    </div>
    
  );
}

export default Contact;