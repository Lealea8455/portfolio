import React, {useState, Fragment} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

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

  return (
    <Fragment>
      <h1>Contact me</h1>
      <p>I am currently looking for a position as a full stack developer.<br/>
         Would be happy to get to know you, and share my knowledge and experience with you.  </p>
      <form onSubmit={e => onSubmit(e)} > 
          <input type="text" name="name" placeholder="name" onChange={e => onChange(e)} />
          <input type="text" name="company" placeholder="company" onChange={e => onChange(e)} />
          <input type="email" name="email" placeholder="email" onChange={e => onChange(e)} />
          <input type="text" name="phone" placeholder="phone" onChange={e => onChange(e)} />
          <input type="text" name="message" placeholder="message" onChange={e => onChange(e)} />
          <button type="submit">Submit</button>
      </form>
      {/* <Map /> */}
    </Fragment>
  )
}

export default Contact;

// AIzaSyDpcOz7Gt7aqwGpx76ViZiPdtboN65FILw