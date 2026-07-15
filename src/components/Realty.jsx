function Realty() {
  return (
    <section className="section alt" id="realty" data-aos="zoom-in">
      <div className="realty-banner">
        <div className="realty-text">
          <img
            src="/real-estate.jpg"
            alt="Real estate services"
            className="realty-side-image"
          />
          <h3>Need Real Estate Help?</h3>
          <p>
            Our partner Ricot Casimir of RC Realty Group handles Buying,
            Selling, Renting, and Investment property.
          </p>
          <a
            href="https://www.rcrealtygroup.net"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-realty"
          >
            Visit RC Realty Group →
          </a>
        </div>

        <div className="realty-contact">
          <p>
            <strong>Ricot Casimir</strong> - RC Realty Group
          </p>
          <p>
            Phone: <a href="tel:9738859929">(973) 885-9929</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:ricot.casimir@gmail.com">
              Ricot.Casimir@gmail.com
            </a>
          </p>
          <a
            href="https://www.google.com/maps/search/1811+Springfield+Ave+Maplewood+NJ+07040"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            1811 Springfield Ave, Maplewood, NJ 07040
          </a>
          <img
            src="/real-estate-keys2.jpg"
            alt="Real estate services"
            className="realty-side-image"
          />
        </div>
      </div>

      <div className="realty-form">
        <h4>Book a Real Estate Appointment</h4>
        <form>
          <input type="text" name="first_name" placeholder="First Name" required />
          <input type="text" name="last_name" placeholder="Last Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input
            type="email"
            placeholder="Email Address"
            required
            style={{ gridColumn: "1 / -1" }}
          />
          <select required>
            <option value="">Select Real Estate Service</option>
            <option>Buying a Home</option>
            <option>Selling a Home</option>
            <option>Renting</option>
            <option>Investment Property</option>
            <option>General Consultation</option>
          </select>
          <input type="date" required />
          <textarea placeholder="Tell us what kind of real estate help you need"></textarea>
          <button type="submit">Book Real Estate Appointment</button>
        </form>
      </div>
    </section>
  );
}

export default Realty;
