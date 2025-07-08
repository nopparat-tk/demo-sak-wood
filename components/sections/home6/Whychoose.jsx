"use client";
import Link from "next/link";
import { useState } from "react";
export default function Whychoose() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [massege, setMassege] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [massegeError, setMassegeError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null); // Clear any previous errors

    // Check for empty fields
    let hasError = false;
    if (!name) {
      setNameError("Name is required.");
      hasError = true;
    } else {
      setNameError(null);
    }
    if (!phone) {
      setPhoneError("Phone No. is required.");
      hasError = true;
    } else if (phone.length < 10) {
      setPhoneError("Phone number must be at least 10 digits.");
      hasError = true;
    } else {
      setPhoneError(null);
    }
    if (!massege) {
      setMassegeError("Message is required.");
      hasError = true;
    } else {
      setMassegeError(null);
    }
    if (hasError) {
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("massege", massege);

    try {
      const response = await fetch(
        "https://script.google.com/a/macros/sakww.com/s/AKfycbzTUxapb2f-JQVOCtep5C1R8N90OPvjjrtxzt5kLiHBlrbqmghaR5c3ir1LezhLJA-C/exec",
        {
          method: "POST",
          body: formData, // Send FormData directly
        }
      );

      if (!response.ok) {
        const errorData = await response.text(); // Get error message from server
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData}`
        );
      }

      setSuccess(true);
      // Clear the form after successful submission
      setName("");
      setPhone("");
      setMassege("");
    } catch (error) {
      console.error("Submission failed! Please try again.", error);
      setError(error.message); // Set the error message
      setSuccess(false); // Make sure success is false in case of error
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      {/*Start slogan-one*/}
      <section className="slogan-one">
        <div
          className="whychoose__bg jarallax"
          style={{
            backgroundImage:
              " url(assets/images/backgrounds/whychoose-cover.png)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="slogan-one__content text-center">
                <div className="title">
                  <h3 style={{ fontWeight: "bold", letterSpacing: "0.025em" }}>
                    Get a Call Back from Our Experts
                  </h3>
                  <h4>
                    Seeking the ideal hardwood timber for your projects? <br />
                    We’re here to help!
                  </h4>
                  <p>
                    Whether for{" "}
                    <span style={{ fontWeight: "bold" }}>
                      expert guidance, custom sizing,
                    </span>{" "}
                    or a{" "}
                    <span style={{ fontWeight: "bold" }}>
                      personalized consultation.
                    </span>{" "}
                    <br />
                    Let our team guide your journey every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="contact-page__right" style={{ marginTop: "0px" }}>
                <form
                  id="contact-form"
                  className="contact-page__form"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-page__input-box">
                        <input
                          type="text"
                          // name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required=""
                        />
                        {nameError && (
                          <p className="error-message">{nameError}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-page__input-box">
                        <input
                          type="text"
                          // name="Phone"
                          value={phone}
                          onChange={(e) => {
                            const value = e.target.value
                              .replace(/[^0-9,+]/g, "")
                              .slice(0, 15);
                            setPhone(value);
                            if (value.length > 0 && value.length < 10) {
                              setPhoneError(
                                "Phone number must be at least 10 digits."
                              );
                            } else {
                              setPhoneError(null);
                            }
                          }}
                          placeholder="Your Phone No."
                        />
                        {phoneError && (
                          <p className="error-message">{phoneError}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div
                        className="contact-page__input-box"
                        style={{
                          marginBottom: "30px",
                        }}
                      >
                        <input
                          type="text"
                          name="message"
                          value={massege}
                          onChange={(e) => setMassege(e.target.value)}
                          maxLength={84}
                          placeholder="Your Short Messege"
                          required=""
                        ></input>
                        {massegeError && (
                          <p className="error-message">{massegeError}</p>
                        )}
                      </div>
                      <div className="contact-page__btn-box">
                        <button
                          type="submit"
                          className="thm-btn contact-page__btn"
                          // data-loading-text="Please wait..."
                          disabled={submitting}
                          style={{
                            fontWeight: "800",
                          }}
                        >
                          {submitting ? "Sending..." : "Request a Callback"}
                          <span className="icon-up-right-arrow"></span>
                        </button>
                        {success && (
                          <p className="success-message">
                            Message sent successfully!
                          </p>
                        )}
                        {error && <p className="error-message">{error}</p>}
                      </div>
                    </div>
                  </div>
                </form>
                <p className="ajax-response mb-0 error"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End slogan-one*/}
    </>
  );
}
