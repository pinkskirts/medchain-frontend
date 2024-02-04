import classes from "./signup-form.module.css";
import MainHeader from "@/components/main-header/main-header";
function SignUpForm() {
  return (
    <section>
      {!isLogin && ( // Component is rendered if not logged in
        <div>
          <div>
            <MainHeader showHome showDashboard/>
          </div>
          <h1>Sign Up</h1>
        </div>
      )}
    </section>
  );
}

export default SignUpForm;
