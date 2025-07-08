// src/pages/ContactPage.jsx
import React, { useState } from "react";
import NavigationBar from "../components/navigation-bar";
import Footer from "../components/footer";
import Button from "../components/button";
import classes from "./ContactPage.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    appointmentType: 'consultation',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you! Your appointment request has been sent. We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        appointmentType: 'consultation',
        preferredDate: '',
        preferredTime: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone Consultation",
      items: [
        { label: "General Consultation", value: "+91 86389 95504", link: "tel:+918638995504" },
        { label: "WhatsApp", value: "+91 86389 95504", link: "https://wa.me/918638995504" },
        { label: "Emergency 24/7", value: "+91 0361 352 1600", link: "tel:+910361352160" }
      ]
    },
    {
      icon: "🏥",
      title: "Hospital Locations",
      items: [
        {
          label: "Apollo Hospital Indraprastha",
          value: "Sarita Vihar, Delhi Mathura Road, New Delhi - 110076",
          phone: "+91-11-2692-5858"
        },
        {
          label: "Health City Hospital", 
          value: "Nalapara, Mirza, Guwahati, Assam - 781125",
          phone: "+91-361-296-9999"
        }
      ]
    },
    {
      icon: "⏰",
      title: "Consultation Hours",
      items: [
        { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
        { label: "Saturday", value: "9:00 AM - 2:00 PM" },
        { label: "Sunday", value: "Emergency Only" },
        { label: "Emergency", value: "24/7 Available" }
      ]
    }
  ];

  return (
    <div>
      <NavigationBar />
      
      <main className={classes["contact-page"]}>
        {/* Hero Section */}
        <section className={classes["contact-hero"]}>
          <div className={`${classes["hero-content"]} container`}>
            <div className={classes["hero-badge"]}>
              <span>🩺 Expert Cardiac Care</span>
            </div>
            <h1>Contact Dr. Bhabananda Das</h1>
            <p>Schedule your consultation with India's leading cardiac surgeon</p>
            <div className={classes["hero-stats"]}>
              <div className={classes["stat"]}>
                <span className={classes["stat-number"]}>25,000+</span>
                <span className={classes["stat-label"]}>Successful Surgeries</span>
              </div>
              <div className={classes["stat"]}>
                <span className={classes["stat-number"]}>24/7</span>
                <span className={classes["stat-label"]}>Emergency Care</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Bar */}
        <section className={classes["quick-contact"]}>
          <div className={`${classes["quick-contact-container"]} container`}>
            <div className={classes["quick-contact-item"]}>
              <span className={classes["quick-icon"]}>📞</span>
              <div>
                <span className={classes["quick-label"]}>Call Now</span>
                <a href="tel:+918638995504" className={classes["quick-value"]}>+91 86389 95504</a>
              </div>
            </div>
            <div className={classes["quick-contact-item"]}>
              <span className={classes["quick-icon"]}>💬</span>
              <div>
                <span className={classes["quick-label"]}>WhatsApp</span>
                <a href="https://wa.me/918638995504" className={classes["quick-value"]}>+91 86389 95504</a>
              </div>
            </div>
            <div className={classes["quick-contact-item"]}>
              <span className={classes["quick-icon"]}>🚨</span>
              <div>
                <span className={classes["quick-label"]}>Emergency</span>
                <a href="tel:+910361352160" className={classes["quick-value"]}>+91 0361 352 1600</a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className={classes["contact-content"]}>
          <div className={`${classes["contact-container"]} container`}>
            
            {/* Contact Information */}
            <div className={classes["contact-info"]}>
              <h2>Get in Touch</h2>
              <p className={classes["section-desc"]}>
                Multiple ways to reach Dr. Das for consultations, appointments, and emergency care.
              </p>
              
              <div className={classes["contact-methods"]}>
                {contactMethods.map((method, index) => (
                  <div key={index} className={classes["contact-method"]}>
                    <div className={classes["method-header"]}>
                      <span className={classes["method-icon"]}>{method.icon}</span>
                      <h3>{method.title}</h3>
                    </div>
                    <div className={classes["method-items"]}>
                      {method.items.map((item, itemIndex) => (
                        <div key={itemIndex} className={classes["method-item"]}>
                          <div className={classes["item-content"]}>
                            <strong>{item.label}:</strong>
                            {item.link ? (
                              <a href={item.link} className={classes["contact-link"]}>
                                {item.value}
                              </a>
                            ) : (
                              <span>{item.value}</span>
                            )}
                            {item.phone && (
                              <div className={classes["phone-info"]}>
                                Phone: <a href={`tel:${item.phone.replace(/[^+\d]/g, '')}`}>{item.phone}</a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={classes["contact-form-section"]}>
              <h2>Book an Appointment</h2>
              <p className={classes["section-desc"]}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {submitMessage && (
                <div className={classes["submit-message"]}>
                  {submitMessage}
                </div>
              )}
              
              <form className={classes["contact-form"]} onSubmit={handleSubmit}>
                <div className={classes["form-row"]}>
                  <div className={classes["form-group"]}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className={classes["form-group"]}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className={classes["form-row"]}>
                  <div className={classes["form-group"]}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  
                  <div className={classes["form-group"]}>
                    <label htmlFor="appointmentType">Appointment Type</label>
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleInputChange}
                    >
                      <option value="consultation">General Consultation</option>
                      <option value="surgery">Surgery Consultation</option>
                      <option value="followup">Follow-up Appointment</option>
                      <option value="emergency">Emergency Consultation</option>
                      <option value="second-opinion">Second Opinion</option>
                    </select>
                  </div>
                </div>

                <div className={classes["form-row"]}>
                  <div className={classes["form-group"]}>
                    <label htmlFor="preferredDate">Preferred Date</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className={classes["form-group"]}>
                    <label htmlFor="preferredTime">Preferred Time</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 6 PM)</option>
                    </select>
                  </div>
                </div>
                
                <div className={classes["form-group"]}>
                  <label htmlFor="message">Message / Medical History</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your symptoms, medical concerns, or any relevant medical history..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className={classes["submit-btn"]} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Appointment Request'}
                </Button>
                
                <div className={classes["form-note"]}>
                  <p>
                    📋 <strong>Note:</strong> This is an appointment request. Our team will confirm 
                    availability and contact you within 24 hours. For emergencies, please call directly.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className={classes["emergency-section"]}>
          <div className={`${classes["emergency-notice"]} container`}>
            <div className={classes["emergency-content"]}>
              <div className={classes["emergency-icon"]}>🚨</div>
              <div className={classes["emergency-text"]}>
                <h2>Medical Emergency?</h2>
                <p>For immediate cardiac emergencies, don't wait. Call our 24/7 emergency line or visit the nearest emergency room.</p>
              </div>
            </div>
            <div className={classes["emergency-actions"]}>
              <Button variant="emergency" className={classes["emergency-btn"]}>
                <a href="tel:+910361352160">🚨 Emergency: +91 0361 352 1600</a>
              </Button>
              <Button variant="secondary" className={classes["whatsapp-btn"]}>
                <a href="https://wa.me/918638995504" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp: +91 86389 95504
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;