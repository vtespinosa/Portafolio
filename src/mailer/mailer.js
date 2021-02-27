const sgMail = require('@sendgrid/mail')

function sendMail(name, email, message, callback) {
  sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
  const msg = {
    to: 'vespinosa98@gmail.com',
    from: 'vtespinosa@uc.cl',
    subject: 'Mensaje de Portafolio',
    text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<strong>${new Date()}</strong>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      callback(true);
    })
    .catch((error) => {
      console.log(error);
      callback(false);
  })
}

export default sendMail;