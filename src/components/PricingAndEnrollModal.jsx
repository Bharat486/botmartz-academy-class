import React, { useState } from 'react';
import './PricingAndEnrollModal.css';

export default function PricingAndEnrollModal({ selectedCourse, isOpen, onClose, onEnrollSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    batchTime: 'Weekend Evening (Sat & Sun, 7:00 PM IST)',
    paymentMode: 'upi'
  });

  const [coupon, setCoupon] = useState('TECHPRO2026');
  const [couponApplied, setCouponApplied] = useState(true);
  const [couponMessage, setCouponMessage] = useState('Coupon applied successfully!');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Determine course details
  const courseTitle = selectedCourse?.title || 'BOTMARTZ Fast-Track Application';
  const isDsa = courseTitle.toLowerCase().includes('dsa');
  const isGenAi = courseTitle.toLowerCase().includes('genai') || courseTitle.toLowerCase().includes('generative');

  // Pricing calculations
  const originalFee = isDsa ? 2999 : isGenAi ? 41000 : 4999;
  const discountAmount = couponApplied ? 1000 : 0;
  const totalAmount = originalFee - discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const clean = coupon.trim().toUpperCase();
    if (clean === 'TECHPRO2026' || clean === 'BOTMARTZ' || clean === 'SCHOLARSHIP') {
      setCouponApplied(true);
      setCouponMessage('Coupon applied successfully!');
    } else {
      setCouponApplied(false);
      setCouponMessage('Invalid coupon code');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onEnrollSuccess) onEnrollSuccess(formData);
  };

  // Determine progress step states
  const hasStep1 = Boolean(formData.name && formData.email && formData.phone);
  const hasStep2 = Boolean(formData.batchTime);
  const hasStep3 = Boolean(formData.paymentMode);

  // Dynamic Bot Message
  const getBotGreeting = () => {
    if (formData.name.trim()) {
      return `Hi ${formData.name.trim().split(' ')[0]}! I'll help you complete your application. ✨`;
    }
    return "Hi! I'll help you complete your application. ✨";
  };

  // Dynamic Batch tip
  const getBatchTip = () => {
    if (formData.batchTime.includes('Weekend')) {
      return {
        title: 'Weekend evening batch selected? Great choice!',
        sub: 'Perfect for students and working professionals.'
      };
    }
    if (formData.batchTime.includes('Weekday')) {
      return {
        title: 'Weekday night batch selected!',
        sub: 'Ideal for consistent learning after college or office hours.'
      };
    }
    return {
      title: 'Morning fast-track slot selected!',
      sub: 'Fresh mind start before your daily schedule begins.'
    };
  };

  const batchTip = getBatchTip();

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="enroll-modal card-3d" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        {!submitted ? (
          <div className="modal-content">
            
            {/* Top Modal Header */}
            <div className="enroll-modal-header">
              <span className="priority-pill">Priority</span>
              <h2 className="enroll-modal-title">
                Enroll in BOTMARTZ <span className="highlight-blue">Fast-Track Application</span>
              </h2>
              <p className="enroll-modal-sub">
                Secure your seat in the upcoming cohort. 1:1 mentor access & live classes included.
              </p>
            </div>

            {/* 3-Column Body Grid */}
            <div className="enroll-3col-grid">
              
              {/* ========================================================
                  COLUMN 1: Left Form
                  ======================================================== */}
              <form className="enroll-form-col" onSubmit={handleSubmit} id="enroll-modal-form">
                
                {/* Full Name */}
                <div className="input-field-group">
                  <label htmlFor="modal-name">
                    Full Name <span className="req-star">*</span>
                  </label>
                  <div className="field-icon-wrap">
                    <span className="field-icon">👤</span>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder="e.g. Arjun Reddy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="field-row-2">
                  <div className="input-field-group">
                    <label htmlFor="modal-email">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <div className="field-icon-wrap">
                      <span className="field-icon">✉️</span>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        placeholder="arjun@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="input-field-group">
                    <label htmlFor="modal-phone">
                      Phone / WhatsApp <span className="req-star">*</span>
                    </label>
                    <div className="field-icon-wrap">
                      <span className="field-icon">📞</span>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                {/* College / Company (Optional) */}
                <div className="input-field-group">
                  <label htmlFor="modal-college">College / Company (Optional)</label>
                  <div className="field-icon-wrap">
                    <span className="field-icon">🏢</span>
                    <input
                      id="modal-college"
                      type="text"
                      placeholder="e.g. IIT Madras or TCS"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    />
                  </div>
                </div>

                {/* Preferred Batch Timing */}
                <div className="input-field-group">
                  <label htmlFor="modal-batch">Preferred Batch Timing</label>
                  <div className="field-icon-wrap">
                    <span className="field-icon">📅</span>
                    <select
                      id="modal-batch"
                      value={formData.batchTime}
                      onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                    >
                      <option value="Weekend Evening (Sat & Sun, 7:00 PM IST)">
                        Weekend Evening (Sat & Sun, 7:00 PM IST)
                      </option>
                      <option value="Weekday Night (Mon, Wed, Fri, 8:30 PM IST)">
                        Weekday Night (Mon, Wed, Fri, 8:30 PM IST)
                      </option>
                      <option value="Morning Fast-Track (Tue, Thu, Sat, 7:30 AM IST)">
                        Morning Fast-Track (Tue, Thu, Sat, 7:30 AM IST)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Payment Option */}
                <div className="input-field-group">
                  <label className="payment-heading-label">Payment Option</label>
                  <div className="payment-options-grid">
                    
                    <button
                      type="button"
                      className={`pay-option-card ${formData.paymentMode === 'upi' ? 'pay-option-card--active' : ''}`}
                      onClick={() => setFormData({ ...formData, paymentMode: 'upi' })}
                    >
                      <span className="pay-opt-icon">📱</span>
                      <span className="pay-opt-text">UPI / QR</span>
                      {formData.paymentMode === 'upi' && <span className="opt-check">✔</span>}
                    </button>

                    <button
                      type="button"
                      className={`pay-option-card ${formData.paymentMode === 'card' ? 'pay-option-card--active' : ''}`}
                      onClick={() => setFormData({ ...formData, paymentMode: 'card' })}
                    >
                      <span className="pay-opt-icon">💳</span>
                      <span className="pay-opt-text">Card / NetBanking</span>
                      {formData.paymentMode === 'card' && <span className="opt-check">✔</span>}
                    </button>

                    <button
                      type="button"
                      className={`pay-option-card ${formData.paymentMode === 'emi' ? 'pay-option-card--active' : ''}`}
                      onClick={() => setFormData({ ...formData, paymentMode: 'emi' })}
                    >
                      <span className="pay-opt-icon">🛍️</span>
                      <span className="pay-opt-text">No-Cost EMI (0%)</span>
                      {formData.paymentMode === 'emi' && <span className="opt-check">✔</span>}
                    </button>

                  </div>
                </div>

                {/* Security Note */}
                <div className="enroll-security-notice">
                  <div className="security-shield-icon">🛡️</div>
                  <p className="security-text">
                    Your data is secure and will only be used for your enrollment.
                    <br />
                    By proceeding, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                  </p>
                </div>

              </form>

              {/* ========================================================
                  COLUMN 2: Center Mini Bot & Progress Stepper
                  ======================================================== */}
              <div className="enroll-bot-col">
                
                {/* Speech Bubble */}
                <div className="bot-speech-bubble">
                  <p className="bubble-text">
                    {getBotGreeting()}
                  </p>
                  <div className="bubble-tail"></div>
                </div>

                {/* Animated 3D Mini Bot (Exact Match) with Natural Eye Blinking & Motion */}
                <div className="mini-bot-stage" aria-label="Animated BOTMARTZ Assistant Bot">
                  {/* Ambient glowing radial backdrop */}
                  <div className="bot-ambient-glow"></div>

                  <div className="bot-character-wrap">
                    {/* Exact 100% 3D Mascot Bot from User Image */}
                    <img
                      src="/botmartz_mini_bot.png"
                      alt="BOTMARTZ 3D Mascot Bot"
                      className="bot-base-img"
                    />

                    {/* Left Eye Blinking Visor Overlay */}
                    <div className="bot-blink-eyelid bot-blink-eyelid--left">
                      <span className="blink-slit"></span>
                    </div>

                    {/* Right Eye Blinking Visor Overlay */}
                    <div className="bot-blink-eyelid bot-blink-eyelid--right">
                      <span className="blink-slit"></span>
                    </div>
                  </div>
                </div>

                {/* 3-Step Vertical Progress Indicator */}
                <div className="bot-timeline-steps">
                  
                  <div className={`timeline-step ${hasStep1 ? 'timeline-step--done' : 'timeline-step--active'}`}>
                    <div className="step-badge-num">
                      {hasStep1 ? '✓' : '1'}
                    </div>
                    <div className="step-content">
                      <h4 className="step-title">Enter your details</h4>
                      <p className="step-desc">Fill in your basic information</p>
                    </div>
                  </div>

                  <div className={`timeline-step ${hasStep1 ? (hasStep2 ? 'timeline-step--active' : '') : ''}`}>
                    <div className="step-badge-num">2</div>
                    <div className="step-content">
                      <h4 className="step-title">Choose batch timing</h4>
                      <p className="step-desc">Select your preferred slot</p>
                    </div>
                  </div>

                  <div className={`timeline-step ${hasStep1 && hasStep2 ? 'timeline-step--active' : ''}`}>
                    <div className="step-badge-num">3</div>
                    <div className="step-content">
                      <h4 className="step-title">Select payment option</h4>
                      <p className="step-desc">Complete your enrollment</p>
                    </div>
                  </div>

                </div>

                {/* Dynamic Assistant Tip Box */}
                <div className="bot-tip-card">
                  <div className="tip-icon-wrap">💡</div>
                  <div>
                    <h5 className="tip-title">{batchTip.title}</h5>
                    <p className="tip-sub">{batchTip.sub}</p>
                  </div>
                </div>

              </div>

              {/* ========================================================
                  COLUMN 3: Right Cohort Summary & Checkout
                  ======================================================== */}
              <div className="enroll-summary-col">
                <h3 className="summary-main-heading">Cohort Summary</h3>

                {/* Selected Cohort Card */}
                <div className="selected-cohort-pill-card">
                  <div className="cohort-icon-title">
                    <span className="grad-cap-icon">🎓</span>
                    <strong>{selectedCourse?.badge || 'Scholarship Cohort'}</strong>
                  </div>
                  <span className="badge-selected-tag">Selected</span>
                </div>

                {/* Price Breakdown */}
                <div className="summary-pricing-rows">
                  <div className="summary-row">
                    <span className="row-lbl">Program Fee</span>
                    <span className="row-val">₹{originalFee.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="summary-row">
                    <span className="row-lbl">GST (18% Included)</span>
                    <span className="row-val">₹0 Extra</span>
                  </div>

                  {couponApplied && (
                    <div className="summary-row summary-row--discount">
                      <span className="row-lbl">Coupon ({coupon})</span>
                      <span className="row-val">-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                {/* Total Amount */}
                <div className="summary-total-banner">
                  <span className="total-lbl">Total Amount</span>
                  <span className="total-big-price">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>

                {/* Coupon Input Box */}
                <div className="summary-coupon-group">
                  <div className="coupon-input-wrap">
                    <input
                      type="text"
                      placeholder="TECHPRO2026"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn-coupon-apply"
                      onClick={handleApplyCoupon}
                    >
                      Apply
                    </button>
                  </div>

                  {couponApplied ? (
                    <div className="coupon-status-pill coupon-status-pill--success">
                      <span className="status-chk">✔</span> {couponMessage}
                    </div>
                  ) : (
                    <div className="coupon-status-pill coupon-status-pill--error">
                      ⚠️ {couponMessage}
                    </div>
                  )}
                </div>

                {/* 7-Day Money-Back Guarantee Card */}
                <div className="summary-guarantee-card">
                  <div className="guarantee-shield">🛡️</div>
                  <div className="guarantee-text">
                    <strong>7-Day 100% Money-Back Guarantee</strong>
                    <p>If not satisfied with first 2 sessions.</p>
                  </div>
                </div>

                {/* Big CTA Button */}
                <button
                  type="submit"
                  form="enroll-modal-form"
                  className="btn-pay-enroll-cta"
                >
                  Pay Now & Enroll <span className="cta-arrow">→</span>
                </button>

              </div>

            </div>
          </div>
        ) : (
          /* ========================================================
             Enrollment Success Screen
             ======================================================== */
          <div className="enrollment-success-view">
            <div className="success-confetti-badge">🎉</div>
            <h2 className="success-head">Enrollment Successful!</h2>
            <p className="success-subtitle">
              Welcome to the cohort, <strong>{formData.name || 'Engineer'}</strong>! 
              Your seat has been reserved and onboarding instructions have been dispatched.
            </p>

            <div className="success-meta-card">
              <div className="meta-line">
                <span className="meta-lbl">Cohort:</span>
                <span className="meta-val">{courseTitle}</span>
              </div>
              <div className="meta-line">
                <span className="meta-lbl">Batch Timing:</span>
                <span className="meta-val">{formData.batchTime}</span>
              </div>
              <div className="meta-line">
                <span className="meta-lbl">Registered Phone:</span>
                <span className="meta-val">{formData.phone}</span>
              </div>
              <div className="meta-line">
                <span className="meta-lbl">Amount Paid:</span>
                <span className="meta-val text-green">₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="success-actions-row">
              <a
                href={`https://api.whatsapp.com/send?phone=919999999999&text=${encodeURIComponent(
                  `Hi BOTMARTZ Team, I just enrolled in ${courseTitle}! My name is ${formData.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-success"
              >
                💬 Join Student WhatsApp Community
              </a>
              <button type="button" className="btn btn-primary" onClick={onClose}>
                Go to Dashboard
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
