const nodemailer = require('nodemailer');

// Looge transporter, kasutades Gmaili SMTP andmeid
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'isabel.valkrusman@gmail.com', // Teie Gmaili aadress
    pass: 'vilivere5555', // Teie Gmaili salasõna või rakenduse parool
  },
});

// Funktsioon piletiga e-kirja saatmiseks
const sendTicketEmail = async (toEmail, ticketData) => {
  try {
    // E-kirja sisu
    const mailOptions = {
      from: 'teie@gmail.com', // Saatja e-posti aadress
      to: toEmail, // Saaja e-posti aadress
      subject: 'Teie pilet', // E-kirja teema
      html: `<p>Tere,</p><p>Teie pilet:</p><p>...</p>`, // E-kirja HTML sisu
    };

    // Saada e-kiri
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

// Kasutage seda funktsiooni makse edukaks töötlemiseks ja piletiga e-kirja saatmiseks
