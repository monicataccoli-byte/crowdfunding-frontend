import { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (mode === "register") {
      setMessage(
        `Account details ready for registration: ${formData.name || "No name entered"}`
      );
    } else {
      setMessage(`Login details entered for ${formData.username || "user"}.`);
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-toggle">
          <button
            type="button"
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setMessage("");
            }}
          >
            Login
          </button>

          <button
            type="button"
            className={mode === "register" ? "active" : ""}
            onClick={() => {
              setMode("register");
              setMessage("");
            }}
          >
            Register
          </button>
        </div>

        <h1>{mode === "login" ? "Login" : "Create an Account"}</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </>
          )}

          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Choose a username"
            required
          />

          {mode === "register" && (
            <>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </>
          )}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <button className="submit-button" type="submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        {message && <p className="login-message">{message}</p>}
      </section>
    </main>
  );
}

export default LoginPage;