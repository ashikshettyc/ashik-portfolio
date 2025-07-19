'use client';
import React, { useState } from 'react';
interface ContactInfoProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
export default function Contact2() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  interface FormData {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: HandleSubmitEvent): Promise<void> => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    } else {
      setStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="section-contact-2 position-relative pb-60 overflow-hidden"
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 pb-5 pb-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2">
                <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-3 border border-1 rounded-3"
                        name="message"
                        placeholder="Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary-2 rounded-2"
                      >
                        Send Message <i className="ri-arrow-right-up-line" />
                      </button>
                      {status && <p className="mt-2">{status}</p>}
                    </div>
                  </div>
                </form>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5 d-flex flex-column ps-lg-8">
            <ContactInfo
              icon="ri-phone-fill"
              label="Phone Number"
              value="+91-8105754935"
              href="tel:+918105754935"
            />
            <ContactInfo
              icon="ri-mail-fill"
              label="Email"
              value="ashikshettyc@gmail.com"
              href="mailto:ashikshettyc@gmail.com"
            />
            {/* <ContactInfo
              icon="ri-linkedin-box-fill"
              label="LinkedIn"
              value="ashik-shetty-c"
              href="https://www.linkedin.com/in/ashik-shetty-c"
            /> */}
            <ContactInfo
              icon="ri-map-2-fill"
              label="Address"
              value="Bangalore, India"
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, href }: ContactInfoProps) {
  return (
    <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
      <div className="d-inline-block">
        <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
          <i className={`${icon} text-primary-2 fs-26`} />
        </div>
      </div>
      <div className="ps-3 h-100">
        <span className="text-400 fs-6">{label}</span>
        <h6 className="mb-0">{value}</h6>
      </div>
      {href && (
        <a
          href={href}
          className="position-absolute top-0 start-0 w-100 h-100"
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </div>
  );
}
