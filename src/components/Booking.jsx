function Booking() {
  return (
    <section className="section booking-section" id="booking" data-aos="fade-up">
      <div className="container">
        <p className="eyebrow">Schedule Your Visit</p>
        <h2 className="h2-sub">Book Your Appointment</h2>
        <p className="section-text">
          Fill out the form below, select your Service and Preferred Preparer,
          and we will contact you to confirm your appointment.
        </p>

        <div className="card" style={{ maxWidth: "720px", margin: "0 auto 1.2rem" }}>
          <h3>Clients Can Upload Documents to the CCH iFirm Portal</h3>
          <p>
            CCH iFirm is our secure client portal where you can safely upload
            tax documents, download completed files, and share information with
            our office online instead of bringing paperwork in person.
          </p>
          <p>
            Use the portal for items like W-2s, 1099s, IDs, tax organizers,
            dependent documents, proof of address, direct deposit information,
            and other requested tax documents.
          </p>
          <p>
            Be sure to update your email, phone number, and preferred tax
            preparer in the portal.
          </p>
          <p>
            If you need portal access, please contact our office first so we can
            send you the secure upload link.
          </p>
          <p>
            Phone: <a href="tel:9733272340">(973) 327-2340</a>
          </p>
          <a
            href="https://dpsprofessionaltaxservices.cchifirm.us"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Open Secure CCH iFirm Portal
          </a>
        </div>

        <form className="contact-form">
          <div className="name-row">
            <input type="text" name="first_name" placeholder="First Name" required />
            <input type="text" name="last_name" placeholder="Last Name" required />
          </div>

          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email Address" required />

          <select id="service-select" required>
            <option value="">Select a Service</option>
            <option>Tax Preparation</option>
            <option>Copy & Fax Services</option>
            <option>Notary Public</option>
            <option>Translation Services</option>
            <option>Immigration Services</option>
            <option>Insurance Services</option>
          </select>

          <select id="preparer-select" name="tax_preparer">
            <option value="">Select a Preparer</option>
            <option>Pierre Polidor</option>
            <option>Dalia Pierre</option>
            <option>Severe Jacquet</option>
            <option>Jean P Cifrant</option>
            <option>Ricot Casimir</option>
          </select>

          <label htmlFor="appointment-date">Preferred Date</label>
          <input id="appointment-date" type="date" name="appointment_date" required />

          <label htmlFor="appointment-time">Preferred Time</label>
          <input id="appointment-time" type="time" name="appointment_time" required />

          <div className="card">
            <h3>Clients can Upload Documents to the CCH iFirm Portal</h3>
            <p>
              Upload your ID, tax documents, and required information through
              our secure CCH iFirm portal. You can also update your contact
              information, preferred preparer, and direct deposit details.
            </p>
            <a
              href="https://dpsprofessionaltaxservices.cchifirm.us"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Click to Open CCH iFirm Portal
            </a>
          </div>

          <div className="card payment-card" id="payment">
            <h3>Payment Options</h3>
            <p>Please include your last name and tax year in the payment note.</p>
            <p>
              <strong>Venmo:</strong>{" "}
              <a
                href="https://venmo.com/u/DPSTax"
                target="_blank"
                rel="noopener noreferrer"
                className="payment-link"
              >
                @DPSTax
              </a>
            </p>
            <p>
              <strong>Cash App:</strong> <strong>$DPSTAX1811</strong>
            </p>
            <p>
              <strong>Zelle:</strong>{" "}
              <a href="tel:8627661725" className="payment-link">
                862-766-1725
              </a>
            </p>
            <p>
              <strong>Apple Pay:</strong>{" "}
              <a href="tel:8627661725" className="payment-link">
                862-766-1725
              </a>
            </p>
            <p>
              Phone: <a href="tel:9733272340">(973) 327-2340</a>
            </p>
          </div>

          <textarea
            name="message"
            placeholder="Write any questions or details here"
          ></textarea>

          <button type="submit" className="btn">
            Book Your Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;
