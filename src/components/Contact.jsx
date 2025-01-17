import { Element } from "react-scroll";
import mail from "../assets/icons/mail_icon.svg";
import call from "../assets/icons/call_icon.svg";
import location from "../assets/icons/location_icon.svg";
import spinner from "../assets/icons/spinner.svg";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import PropTypes from "prop-types";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setSetStatusMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isError, setError] = useState(false);

  const access_key = import.meta.env.VITE_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setSetStatusMessage("Sending...");
    setLoading(true);
    setError(false);

    const formData = new FormData(event.target);

    formData.append("access_key", access_key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form`);
      }

      const data = await response.json();

      if (data.success) {
        setLoading(false);
        setError(false);
        setSetStatusMessage("Message sent successfully");
        setShowToast(true);
        event.target.reset();
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } else {
        setLoading(false);
        setError(true);
        setSetStatusMessage("Error:" + data.message);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      setSetStatusMessage("An error occured. Please try again.");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      console.error("Submission Error: " + error.message);
    }
  };

  return (
    <Element name="contact" className="py-5 px-6 md:py-10 md:px-12">
      <section id="contact">
        <h1 className="text-4xl font-bold text-center text-sky-600">
          Get in touch
        </h1>
        <section className="flex flex-col md:flex-row justify-between md:items-center gap-10 mt-5">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">Let&#39;s talk</h2>
            <p className="mt-2 md:mt-5 text-base md:text-lg">
              I&#39;m currently available to take new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>

            <div className="flex flex-col gap-5 mt-5 text-base md:text-lg">
              <div className="flex items-center gap-2">
                <img src={mail} alt="mail" className="w-6 h-6" />
                <a
                  href="mailto:himanshudevaiya679@gmail.com"
                  className="text-wrap"
                >
                  himanshudevaiya679@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img src={call} alt="call" className="w-6 h-6" />
                <a href="tel:+91-926-506-7967">+91-926-506-7967</a>
              </div>
              <div className="flex items-center gap-2">
                <img src={location} alt="location" className="w-6 h-6" />
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>

          <form className="flex-1" onSubmit={onSubmit}>
            <div className="mb-5 flex flex-col text-base md:text-lg">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="mt-2 bg-slate-500/20 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="mt-2 bg-slate-500/20 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="mb-5 flex flex-col">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
                rows={5}
                className="mt-2 bg-slate-500/20 rounded-md px-3 py-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`flex justify-center items-center gap-2 w-56 font-semibold text-xl bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600 transition duration-300 ease-in-out ${
                loading && "cursor-not-allowed"
              }`}
              disabled={loading}
              aria-live={loading ? "assertive" : "off"}
              aria-busy={loading ? "true" : "false"}
            >
              {loading ? (
                <img src={spinner} alt="spinner" className="animate-spin" />
              ) : (
                <IoIosSend className="text-2xl" />
              )}

              <span className="sr-only">
                {loading ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>

          {showToast && (
            <SuccessfullToast
              isError={isError}
              showToast={showToast}
              setToast={setShowToast}
              statusMessage={statusMessage}
            />
          )}
        </section>
      </section>
    </Element>
  );
}

const SuccessfullToast = ({ isError, showToast, setToast, statusMessage }) => (
  <div
    id="toast-success"
    className={`flex items-center justify-center fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-xs w-fit p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${
      showToast
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 hidden translatel-y-4"
    } transition-all duration-700 ease-in-out`}
    role="alert"
  >
    {isError ? (
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
        <span className="sr-only">Error icon</span>
      </div>
    ) : (
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      </div>
    )}

    <div className="mx-3 text-sm font-normal">{statusMessage}</div>
    <button
      type="button"
      className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      onClick={() => setToast(false)} // Manually close toast
      aria-label="Close"
    >
      <span className="sr-only">Close</span>
      <svg
        className="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  </div>
);

SuccessfullToast.propTypes = {
  isError: PropTypes.bool.isRequired,
  showToast: PropTypes.bool.isRequired,
  setToast: PropTypes.func.isRequired,
  statusMessage: PropTypes.string.isRequired,
};

export default Contact;
