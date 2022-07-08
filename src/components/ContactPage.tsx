import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { FaBusinessTime, FaEnvelopeOpen, FaMapMarkedAlt, FaPhoneVolume } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactPage = () => {

    const SERVICE_ID = "service_9emuymn";
    const TEMPLATE_ID = "template_yt1ajer";
    const USER_ID = "lWZ0o6fVMl2v3eLUd";
    
    const handleOnSubmit = React.useCallback(async (e: any) => {
      e.preventDefault();
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result: any) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
          e.target.reset()
        }, (error: any) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
    }, []);

    return <div className='contact-us-wrapper p-md-5'>
    <div className="contact-us row" id='contact'>
    <div className='col-lg-8 col-md-12 contact-us-section'>
        <div className='sub-heading'>Get In Touch</div>
        <h3 className="mb-0">Contact Us</h3>
        <p style={{'padding':'0.5em 0'}}>We want to hear from you! Tell us
        about your upcoming masonry needs.  Upload a picture of your project and we will contact you within
        the next business day.</p>
        <Form onSubmit={handleOnSubmit} encType="multipart/form-data" method="post">
            <FloatingLabel aria-required controlId='formName' label='Name' className='mb-3'>
                <Form.Control name='from_name' required type='text' placeholder='Enter your name' />
            </FloatingLabel>
            <FloatingLabel aria-required controlId='formEmail' label='Email Address' className='mb-3'>
                <Form.Control name='from_email' type='email' placeholder='Enter your email address' />
            </FloatingLabel>
            <FloatingLabel aria-required controlId='formPhone' label='Phone Number' className='mb-3'>
                <Form.Control name='phone' type='phone' placeholder='Enter your phone number' />
            </FloatingLabel>
            {/* <Form.Group controlId='formImage' className='mb-3'>
                <Form.Label>Upload an image <span className='text-muted'>(optional)</span></Form.Label>
                <Form.Control type='file' name="my_file" accept='image/*' placeholder='Upload an image' />
            </Form.Group> */}
            <FloatingLabel aria-required controlId='formMessage' label='Message' className='mb-3'>
                <Form.Control required name='message' rows={6} as='textarea' type='text' placeholder='Enter your message' />
            </FloatingLabel>
            <div className="col-lg-12">
            <button name="submit" type="submit" value="Submit" className="btn button-md radius-sm"> Send Message</button>
            </div>
        </Form>
    </div>

    <div className='col-lg-4 col-md-12 bg-primary contact-us-section'>
        <div className="contact-icon-box">
            <h5 className="title"><FaMapMarkedAlt className='icon' />Location</h5>		
            <p>Norwalk, Ohio, USA</p>
            <p>Serving Huron county, Erie county, and surrounding areas</p>
            <i className="la la-map-marker-alt bg-icon"></i>
        </div>
        <div className="contact-icon-box">
            <h5 className="title"><FaPhoneVolume className='icon' />Contact Number</h5>		
            <a href="tel:5678058719">(567) 805-8719</a>
            <i className="la la-phone-volume bg-icon"></i>
        </div>
        <div className="contact-icon-box">
            <h5 className="title"><FaEnvelopeOpen className='icon' />Email Address</h5>		
            <a href="mailto::toptierstonework@gmail.com">toptierstonework@gmail.com</a>
            <i className="la la-envelope-open bg-icon"></i>
        </div>
        <div className="contact-icon-box">
            <h5 className="title"><FaBusinessTime className='icon' />Working hours</h5>		
            <p>Mon – Fri: 8:00 – 5:00 EST</p>
            <i className="la la-business-time bg-icon"></i>
        </div>
    </div>
    </div>
</div>;
}

export default ContactPage;