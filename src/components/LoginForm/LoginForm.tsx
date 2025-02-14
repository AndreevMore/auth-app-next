"use client";
import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "@/context/AuthContext";
import { User } from "@/types/types";
import styles from "./LoginForm.module.scss";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface FormValues {
  name: string;
  email: string;
}

const LoginForm: FC = () => {
  const { login } = useAuth();
  const router = useRouter();

  const initialValues: FormValues = { name: "", email: "" };

  const handleLogin = (values: FormValues) => {
    const newUser: User = { id: uuidv4(), ...values };
    login(newUser);

    setTimeout(() => {
      router.push("/dashboard");
    }, 5000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting, errors, touched }) => {
        const hasErrors =
          Object.keys(errors).length > 0 && Object.keys(touched).length > 0;

        return (
          <Form>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name:</label>
              <Field
                id="name"
                name="name"
                type="text"
                className={styles.inputField}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <Field
                id="email"
                name="email"
                type="email"
                className={styles.inputField}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.errorMessage}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || hasErrors}
              className={styles.button}
            >
              {isSubmitting ? "Logging In..." : "Log In"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
