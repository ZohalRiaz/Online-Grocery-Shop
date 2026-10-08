import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { api } from "../services/api";
import Feedback from "../components/Feedback";

export default function AuthPage({ register = false, admin = false }) {
  const { login } = useAuth();
  const {
    register: registerField,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    mode: "onTouched"
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  async function submit(values) {
    setError("");
    setMessage("");
    try {
      if (register) {
        await api("/auth/register/", { method: "POST", body: values });
        setMessage("Your account is ready. Log in to start shopping.");
        reset();
        window.location.hash = "/login";
      } else {
        await login(values.email, values.password, admin);
        window.location.hash = admin ? "/admin" : "/products";
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <section className="animate-fade-up mx-auto my-[30px] max-w-[480px] rounded-[2rem] border border-white bg-white/85 p-7 shadow-lift backdrop-blur-xl sm:mb-[70px] sm:mt-[50px] sm:p-10">
      <span className="eyebrow">
        {admin ? "FRESH MART ADMIN" : "WELCOME TO YOUR NEIGHBORHOOD SHOP"}
      </span>
      <h1 className="page-title">
        {register
          ? "Create an account"
          : admin
            ? "Admin login"
            : "Welcome back"}
      </h1>
      <p className="mb-4 text-sm text-[#788473]">
        {register
          ? "Fresh choices are just a few steps away."
          : "Log in with your email and password."}
      </p>
      <Feedback error={error} message={message} />
      <form onSubmit={handleSubmit(submit)} className="grid gap-4" noValidate>
        {register && (
          <label className="field">
            Full name
            <input
              className="input"
              aria-invalid={!!errors.full_name}
              maxLength={150}
              autoComplete="name"
              {...registerField("full_name", {
                required: "Enter your full name.",
                maxLength: {
                  value: 150,
                  message: "Name must be 150 characters or fewer.",
                },
                minLength: {
                  value: 3,
                  message: "Name must at least 3.",
                },
              })}
            />
            {errors.full_name && <small role="alert" className="text-clay">{errors.full_name.message}</small>}
          </label>
        )}
        <label className="field">
          Email address
          <input
            className="input"
            type="email"
            aria-invalid={!!errors.email}
            maxLength={150}
            autoComplete="email"
            {...registerField("email", {
              required: "Enter your email address.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
              maxLength: {
                value: 150,
                message: "Email must be 150 characters or fewer.",
              },
            })}
          />
          {errors.email && <small role="alert" className="text-clay">{errors.email.message}</small>}
        </label>
        <label className="field">
          Password
          <input
            className="input"
            type="password"
            aria-invalid={!!errors.password}
            autoComplete={register ? "new-password" : "current-password"}
            {...registerField("password", {
              required: "Enter your password.",
              ...(register && {
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
              }),
            })}
          />
          {errors.password && <small role="alert" className="text-clay">{errors.password.message}</small>}
        </label>
        {register && (
          <>
            <small className="text-[11px] text-[#84917c]">
              Use at least 8 characters; avoid common passwords and personal
              information.
            </small>
            <label className="field">
              Confirm password
              <input
                className="input"
                type="password"
                aria-invalid={!!errors.confirm_password}
                autoComplete="new-password"
                {...registerField("confirm_password", {
                  required: "Confirm your password.",
                  validate: (value) =>
                    value === getValues("password") || "Passwords must match.",
                })}
              />
              {errors.confirm_password && <small role="alert" className="text-clay">{errors.confirm_password.message}</small>}
            </label>
          </>
        )}
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Please wait…" : register ? "Create account" : "Log in"}
        </button>
      </form>
      <p className="mt-5 text-sm text-[#788473]">
        {register ? (
          <a href="#/login" className="inline-flex items-center gap-1">
            Already have an account? Log in <ArrowRight size={14} />
          </a>
        ) : (
          <a href="#/register" className="inline-flex items-center gap-1">
            New here? Create an account <ArrowRight size={14} />
          </a>
        )}
      </p>
    </section>
  );
}
