import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6 space-y-10">

        {/* PAGE HEADER */}
        <section className="text-center">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <p className="text-gray-600 mt-2">
            Feel free to reach out for collaboration or opportunities
          </p>
        </section>

        {/* CONTACT INFO */}
        <section className="bg-white p-6 rounded shadow grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">ashutoshsahoo753@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-gray-600">India</p>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Send a Message
          </h2>

          <form className="space-y-4 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border p-2 rounded"
            />

            <button className="bg-blue-600 text-white px-6 py-2 rounded w-full">
              Submit
            </button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;
