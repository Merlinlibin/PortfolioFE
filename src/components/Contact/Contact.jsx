import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";



function Contact() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const Sendmail = async (e) => {
    setLoading(true);
    
    e.preventDefault();
    

    const mailUrl = "https://portfoliobe-g89z.onrender.com/api/email";
    const data = await axios.post(mailUrl, formdata).then((res) => res.data);
    console.log(data);

    if (data) {
      toast.success(data.message );
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      navigate("/");
    } else {
      toast.error(data.message );
      setLoading(false);
    }
  };
  return (
    <section class="contact section" id="contact">
      {/* <!--===== CONTACT =====--> */}
      <h2 class="section-title">Contact</h2>

      <div class="contact__container bd-grid">
        <form action="" class="contact__form text-center" onSubmit={Sendmail}>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            class="contact__input"
            onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
            value={formdata.name}
          />
          <input
            required
            type="email"
            name="emai"
            placeholder="Email"
            class="contact__input"
            onChange={(e) =>
              setFormData({ ...formdata, email: e.target.value })
            }
            value={formdata.email}
          />
          <textarea
            required
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Enter your message..."
            className="contact__input"
            onChange={(e) => {
              setFormData({ ...formdata, message: e.target.value });
            }}
            value={formdata.message}></textarea>

          <button
            type="submit"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  text-center w-24 h-9">
            {loading ? (
              <div className="flex items-center justify-center">
                <Oval color="white" height="20" width="20" />
              </div>
            ) : (
              "send"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
