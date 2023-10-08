import { Link } from "react-router-dom";
import SignInWithOthers from "../components/SignInWithOthers";
import { Player } from "@lottiefiles/react-lottie-player";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col gap-6 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In Now!</h1>
          <Player
            autoplay
            loop
            src="/sign-in.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
          <p className="text-center">
            Don't have a account,{" "}
            <Link className="text-blue-500" to="/sign-up">
              Sign Up!
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="mx-auto mb-5">
            <SignInWithOthers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
