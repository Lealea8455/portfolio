import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Top from './layout/Top';
import '../styles/Contact.scss';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '', 
    formSubmitted: false
  })

  const [isMobile, setIsMobile] = useState(window.innerWidth < 780);

  useEffect(() => {
  window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 780;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);

  const {name, company, email, phone, message, formSubmitted} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  
  const onSubmit = async e => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }

      const res = await axios.post('/send', formData, config);
      if(res) {
       
        setFormData({...formData, 
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '', 
          formSubmitted: true
        }       
        );

      }
    } catch (err) {
      console.error(err);
    }
  }

  const title = `I Would Love to Hear From You!`;

  return (
    <div className={isMobile ? '' : 'contact'}>
      {isMobile ? <Top title={title} /> : ''}
      <div className='top-contact'>
        <div className='left'>
          <div className='inner-left'>
            {isMobile? '' : <h1>I Would Love to <br /> Hear From You.</h1>}
            <p>I am currently looking for a position as a full stack developer.<br/>
              Would be happy to get to know you, and share my knowledge and experience with you.  </p>   
          </div>
        </div>
        <div className='right'>
          { formSubmitted 
              ? <h1>Thank you :) !!</h1>
              : <div className="phone-details">
                  <p>Call me: <span>050 - 430 - 7456</span></p>
                  <p>Or contact me via email</p>
                </div>
          }
          <form onSubmit={e => onSubmit(e)} > 
              <input minLength={2} required value={name} type="text" name="name" placeholder="name" onChange={e => onChange(e)} />
              <input minLength={2} required value={company} type="text" name="company" placeholder="company" onChange={e => onChange(e)} />
              <input required value={email} type="email" name="email" placeholder="email" onChange={e => onChange(e)} />
              <input required value={phone} type="tel" pattern="^[0-9]{3}[-]{0,1}[0-9]{7}$" name="phone" placeholder="phone" onChange={e => onChange(e)} />
              <textarea type="text" name="message" placeholder="message" onChange={e => onChange(e)} />
              <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;

