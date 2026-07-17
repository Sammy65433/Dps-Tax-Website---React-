import { useState } from "react";

function Realty() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    service: "",
    appointment_date: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "Sending...", type: "sending" });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/realty-appointments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          message: "Thank you. Your real estate request has been sent.",
          type: "success",
        });

        setFormData({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          service: "",
          appointment_date: "",
          message: "",
        });
      } else {
        setStatus({
          message: data.message || "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setStatus({
        message: "Could not connect to the real estate server.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            value={formData.first_name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            value={formData.last_name}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ gridColumn: "1 / -1" }}
          />

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Real Estate Service</option>
            <option value="Buying a Home">Buying a Home</option>
            <option value="Selling a Home">Selling a Home</option>
            <option value="Renting">Renting</option>
            <option value="Investment Property">Investment Property</option>
            <option value="General Consultation">General Consultation</option>
          </select>

          <input
            type="date"
            name="appointment_date"
            value={formData.appointment_date}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us what kind of real estate help you need"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? "Sending..."
              : "Book Real Estate Appointment"}
          </button>

          {status.message && (
            <p className={`form-status ${status.type}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Realty;
