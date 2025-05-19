import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Photo upload submitted (demo only)");
  };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <img src="/logo.png" alt="Pottery Patch Logo" style={{ width: 100 }} />
      <h1>Welcome to Pottery Patch Oamaru</h1>
      <p>
        Ceramic painting by the sea — relax, create and sip in one of
        Aotearoa’s most inspiring spots. Follow us on{" "}
        <a href="https://www.facebook.com/potterypatchoamaru">Facebook</a> or{" "}
        <a href="https://www.tripadvisor.com/UserReviewEdit-g255677-d26368726-Pottery_Patch-Oamaru_Otago_Region_South_Island.html">
          TripAdvisor
        </a>.
      </p>

      <h2>Upload your painted piece</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <textarea placeholder="Optional message" value={message} onChange={(e) => setMessage(e.target.value)} /><br />
        <input type="file" accept="image/*" required /><br />
        <label>
          <input type="checkbox" /> Send me updates and promos
        </label><br />
        <button type="submit">Submit Photo</button>
      </form>

      <h2>Book a Session</h2>
      <iframe
        src="https://calendly.com/potterypatchoamaru"
        width="100%"
        height="400"
        frameBorder="0"
        title="Calendly Booking"
      ></iframe>

      <p style={{ fontSize: "12px", color: "#666" }}>
        This is a prototype site hosted for testing purposes. Final features coming soon!
      </p>
    </main>
  );
}