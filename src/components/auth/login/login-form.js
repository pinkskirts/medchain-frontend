import classes from "./login-form.module.css";
import { useState } from "react";
import Link from "next/link";
import MainHeader from "@/components/main-header/main-header";

function LoginForm() {
  // useState variables
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    // todo: add user authentication
  }

  return (
    <section>
      {!isLogin && ( // Same as signup-form component
        <div>
          <div>
            <MainHeader showHome showDashboard />
          </div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" required></input> <br />
            <input type="password" placeholder="Password" required></input>
            <br />
            <button>Login</button>
            <br />
            <Link href="/signup">
              Don't have an account?
              <span> Sign Up!</span>
            </Link>
            {error && <div>{error}</div>}
            <br />
          </form>
        </div>
      )}
    </section>
  );
}

export default LoginForm;
