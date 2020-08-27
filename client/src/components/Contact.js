import React, {useState, Fragment} from 'react'
import axios from 'axios';
import '../styles/Contact.scss';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '', 
    formSubmitted: false
  }
  )

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

  return (
    <div className='contact'>
    <div className='top-contact'>
      <div className='left'>
        <div className='inner-left'>
          <h1>I Would Love to <br /> Hear From You.</h1>
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
            <input value={name} type="text" name="name" placeholder="name" onChange={e => onChange(e)} />
            <input value={company} type="text" name="company" placeholder="company" onChange={e => onChange(e)} />
            <input value={email} type="email" name="email" placeholder="email" onChange={e => onChange(e)} />
            <input value={phone} type="text" name="phone" placeholder="phone" onChange={e => onChange(e)} />
            <textarea type="text" name="message" placeholder="message" onChange={e => onChange(e)} />
            <button type="submit">SEND</button>
        </form>
      </div>
    </div>
 
      {/* <div className='top-contact'>
 
      </div> */}
    </div>
  )
}

export default Contact;

// AIzaSyDpcOz7Gt7aqwGpx76ViZiPdtboN65FILw