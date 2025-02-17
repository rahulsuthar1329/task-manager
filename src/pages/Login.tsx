import { useState } from "react";
import { TextInput, Link, Button } from "../components";
import { useHttpClient } from "../hooks/HttpRequest";
import { showToastSuccess } from "../utils/Toast";
import { setLogin, User } from "../store/features/authSlice";
import { useAppDispatch } from "../store/hooks";
import { useNavigate } from "react-router-dom";

type LoginResponseType = {
  token: string;
  user: User;
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const httpClient = useHttpClient();

  const resetLoginForm = () => {
    setUsername("");
    setPassword("");
  };

  const onSubmit = async () => {
    const { token, user } = await httpClient.post<LoginResponseType>(
      "/auth/login",
      {
        username,
        password,
      }
    );
    resetLoginForm();
    dispatch(setLogin({ user, token }));
    navigate("/");
    showToastSuccess("Login successfully");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />{" "}
          Task Manager
        </span>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <TextInput
                type="text"
                state={username}
                setState={setUsername}
                label="Your Username"
                placeholder="eg. johndoe123"
              />
              <TextInput
                type="password"
                state={password}
                setState={setPassword}
                label="Password"
                placeholder="•••••••••••••"
              />
              <Button title="Sign in" onClick={onSubmit} />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link routeTo="/register">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
