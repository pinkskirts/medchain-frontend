import classes from "./signup-form.module.css";
import MainHeader from "@/components/main-header/main-header";
function SignUpForm() {
  // useState variables
  const [isLogin, setIsLogin] = useState(false); // Tracks if login mode is turned on/off
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      // Prevents blank inputs if the "required" tag is tampered with
      setError("All fields are necessary");
      return;
    }

  }

  return (
    <section>
      {!isLogin && ( // Component is rendered if not logged in
        <div>
          <div>
            <MainHeader showHome showDashboard/>
          </div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
            />
            <br />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <br />
            <button>Create new account</button>
            {error && <div>{error}</div>}
            <br />
            <Link href="/login">Already have an account? Login</Link>
            <br />
          </form>
        </div>
      )}
    </section>
  );
}

export default SignUpForm;
