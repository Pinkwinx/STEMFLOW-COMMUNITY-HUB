import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ submitting: false, success: false })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((s) => ({ ...s, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Please enter a message'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus({ submitting: true, success: false })
    // Simulate send
    setTimeout(() => {
      setStatus({ submitting: false, success: true })
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  return (
    <div className="contact-root">
      <div className="contact-inner" role="main">
        <img src={reactLogo} alt="logo" className="contact-logo" />
        <h1 className="contact-title">Contact STEMFLOW Community</h1>
        <p className="contact-lead">Questions, collaborations, or feedback? Send us a message and we'll get back to you.</p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="field-label">Name</span>
            <input name="name" value={form.name} onChange={handleChange} className={`input ${errors.name ? 'has-error' : ''}`} />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>

          <label className="field">
            <span className="field-label">Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={`input ${errors.email ? 'has-error' : ''}`} />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>

          <label className="field">
            <span className="field-label">Message</span>
            <textarea name="message" rows={6} value={form.message} onChange={handleChange} className={`textarea ${errors.message ? 'has-error' : ''}`} />
            {errors.message && <div className="error">{errors.message}</div>}
          </label>

          <div className="form-actions">
            <button className="btn primary" type="submit" disabled={status.submitting}>{status.submitting ? 'Sending...' : 'Send message'}</button>
            <button type="button" className="btn ghost" onClick={() => { setForm({ name: '', email: '', message: '' }); setErrors({}); setStatus({ submitting: false, success: false }) }}>Clear</button>
          </div>
        </form>

        {status.success && <div className="success">Thanks! Your message was sent. We'll reply soon.</div>}
      </div>
    </div>
  )
}
