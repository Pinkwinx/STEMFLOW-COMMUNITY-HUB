import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ submitting: false, success: false })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(e => ({ ...e, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
    if (!form.message.trim()) errs.message = 'Message required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus({ submitting: true, success: false })

    setTimeout(() => {
      setStatus({ submitting: false, success: true })
      setForm({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section className="contact-root">
      <div className="contact-card">
        <div className="contact-info">
          <h1>Contact STEMFLOW</h1>
          <p>Have ideas, feedback, or want to collab? Drop a message.</p>

          <div className="contact-meta">
            <span>📧 stemflow.community@gmail.com</span>
            <span>🌐 STEMFLOW Community Hub</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              className={errors.name ? 'has-error' : ''}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="field">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              className={errors.email ? 'has-error' : ''}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="field full">
            <label>Message</label>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              className={errors.message ? 'has-error' : ''}
            />
            {errors.message && <small>{errors.message}</small>}
          </div>

          <button className="send-btn" disabled={status.submitting}>
            {status.submitting ? 'Sending…' : 'Send Message'}
          </button>

          {status.success && (
            <div className="success">
              Message sent. We’ll hit you back soon.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
