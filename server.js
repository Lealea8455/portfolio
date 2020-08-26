const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

const PORT = process.env.PORT || 5001;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.post('/send', async (req, res) => {

  const output = `
    <p>You have a new message from your website</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Name: ${req.body.company}</li>
      <li>Name: ${req.body.email}</li>
      <li>Name: ${req.body.phone}</li>
    </ul>
    ${req.body.message}
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'dif8455@gmail.com', 
      pass: 'bdzqypvurykclwoo',
    },
  });

  // send mail with defined transport object
  try {
    let info = await transporter.sendMail({
      from: '"Nodemailer contact <dif8455@gmail.com>', 
      to: 'lea.gront@gmail.com', 
      subject: 'Node contact request', 
      text: "Hello world?", 
      html: output,
    });  

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send('Email sent');
  } catch (error) {
    console.error(error);
    res.status(404).json('error sending mail');
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static files
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
