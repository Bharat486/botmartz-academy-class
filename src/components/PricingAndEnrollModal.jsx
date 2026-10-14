import React, { useState } from 'react';
import './PricingAndEnrollModal.css';

export default function PricingAndEnrollModal({ selectedCourse, isOpen, onClose, onEnrollSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    batchTime: 'Weekend Evening (7:00 PM IST)',
    paymentMode: 'upi'
  });
  const [coupon, setCoupon] = useState('TECHPRO2026');
  const [couponApplied, setCouponApplied] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCourse = selectedCourse || {
    title: 'DSA with Python — Live Cohort',
    price: '₹4,999',
    duration: '8 Weeks (24 Live Sessions)',
    badge: 'Batch 3'
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'TECHPRO2026' || coupon.trim().toUpperCase() === 'BOTMARTZ') {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
      alert('Invalid coupon. Try "TECHPRO2026" or "BOTMARTZ"');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onEnrollSuccess) onEnrollSuccess(formData);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="enroll-modal card-3d" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">×</button>

        {!submitted ? (
          <div className="modal-content">
            <div className="modal-header">
              <span className="badge badge-yellow">{currentCourse.badge || 'Live Batch'}</span>
              <h3 className="modal-title">Enroll in {currentCourse.title}</h3>
              <p className="modal-sub">
                Secure your seat in the upcoming cohort. 1:1 mentor access & live classes included.
              </p>
            </div>

            <div className="modal-body-grid">
              {/* Form */}
              <form className="enroll-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arjun Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>College / Company (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. IIT Madras or TCS"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Batch Timing</label>
                  <select
                    value={formData.batchTime}
                    onChange={(e) => setFormData({ ...formData, batchTime: e.target.value })}
                  >
                    <option>Weekend Evening (Sat & Sun, 7:00 PM IST)</option>
                    <option>Weekday Night (Mon, Wed, Fri, 8:30 PM IST)</option>
                    <option>Morning Fast-Track (Tue, Thu, Sat, 7:30 AM IST)</option>
                  </select>
                </div>

                <div className="payment-options">
                  <label className="pay-label">Payment Option</label>
                  <div className="pay-methods">
                    <label className={`pay-method-pill ${formData.paymentMode === 'upi' ? 'pay-method-pill--active' : ''}`}>
                      <input
                        type="radio"
                        name="payMode"
                        value="upi"
                        checked={formData.paymentMode === 'upi'}
                        onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                      />
                      <span>UPI / QR</span>
                    </label>
                    <label className={`pay-method-pill ${formData.paymentMode === 'card' ? 'pay-method-pill--active' : ''}`}>
                      <input
                        type="radio"
                        name="payMode"
                        value="card"
                        checked={formData.paymentMode === 'card'}
                        onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                      />
                      <span>Card / NetBanking</span>
                    </label>
                    <label className={`pay-method-pill ${formData.paymentMode === 'emi' ? 'pay-method-pill--active' : ''}`}>
                      <input
                        type="radio"
                        name="payMode"
                        value="emi"
                        checked={formData.paymentMode === 'emi'}
                        onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                      />
                      <span>No-Cost EMI (0%)</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-submit-enroll">
                  Confirm & Complete Enrollment
                </button>
              </form>

              {/* Order Summary */}
              <div className="order-summary-box">
                <h4 className="summary-title">Cohort Summary</h4>
                <div className="summary-line">
                  <span>Program Fee</span>
                  <span className="summary-val">{currentCourse.price}</span>
                </div>
                <div className="summary-line">
                  <span>GST (18% Included)</span>
                  <span className="summary-val">₹0 Extra</span>
                </div>
                {couponApplied && (
                  <div className="summary-line discount-line">
                    <span>Coupon (TECHPRO2026)</span>
                    <span className="summary-val">-₹1,000</span>
                  </div>
                )}
                <div className="summary-total">
                  <span>Total Amount</span>
                  <span className="total-val">
                    {couponApplied ? '₹3,999' : currentCourse.price}
                  </span>
                </div>

                <div className="coupon-box">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button type="button" className="btn btn-outline btn-sm" onClick={handleApplyCoupon}>
                    Apply
                  </button>
                </div>

                <div className="guarantee-box">
                  <span className="shield-icon">🛡️</span>
                  <span>7-Day 100% Money-Back Guarantee if not satisfied with first 2 sessions.</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="success-screen">
            <div className="success-icon">🎉</div>
            <h3 className="success-title">Enrollment Successful!</h3>
            <p className="success-msg">
              Welcome aboard, <strong>{formData.name || 'Engineer'}</strong>! We've sent your onboarding credentials and Discord invite link to <strong>{formData.email || 'your email'}</strong>.
            </p>
            <div className="success-details">
              <p><strong>Course:</strong> {currentCourse.title}</p>
              <p><strong>Timing:</strong> {formData.batchTime}</p>
              <p><strong>Orientation Class:</strong> Saturday, 7:00 PM IST</p>
            </div>
            <button className="btn btn-primary" onClick={onClose}>
              Go to Student Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
