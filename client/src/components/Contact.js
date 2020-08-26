import React, {useState, Fragment} from 'react'
import axios from 'axios';
import '../styles/Contact.scss';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const {name, company, email, phone, message} = formData;

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
      if(res) console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  const title = "I Would Love To Hear From You!";
  return (
    <div className='contact'>
      <div className='left'>
      <div className='inner-left'>
        <h1>I Would Love to <br /> Hear From You.</h1>
        <p>I am currently looking for a position as a full stack developer.<br/>
          Would be happy to get to know you, and share my knowledge and experience with you.  </p>   
      </div>
      </div>
      <div className='top-contact'>
      <div className='right'>
        <div className="phone-details">
          <h2>Call me: <span><strong>050 - 430 - 7456</strong></span></h2>
        </div>
        <h2>Or contact me via email</h2>
        <form onSubmit={e => onSubmit(e)} > 
            <input type="text" name="name" placeholder="name" onChange={e => onChange(e)} />
            <input type="text" name="company" placeholder="company" onChange={e => onChange(e)} />
            <input type="email" name="email" placeholder="email" onChange={e => onChange(e)} />
            <input type="text" name="phone" placeholder="phone" onChange={e => onChange(e)} />
            <textarea type="text" name="message" placeholder="message" onChange={e => onChange(e)} />
            <button type="submit">Send</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact;

// AIzaSyDpcOz7Gt7aqwGpx76ViZiPdtboN65FILw