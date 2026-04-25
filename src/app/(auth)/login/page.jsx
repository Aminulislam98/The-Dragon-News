// import React from "react";

// const LogInPage = () => {
//   return (
//     <div>
//       <p>Login page</p>
//     </div>
//   );
// };

// export default LogInPage;

"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

export default function LogInPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
  };

  return (
    <div className="py-30  max-w-7xl  w-full mx-auto flex justify-center items-center px-4">
      <div className=" bg-white max-w-150 w-full p-10 md:p-19 flex flex-col justify-center items-center gap-10 rounded-xl shadow">
        <h1 className="font-semibold text-2xl text-center">
          Login your account
        </h1>
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
        <h2 className="font-semibold text-base">
          Dont’t Have An Account ?{" "}
          <Link href={`/register`} className="font-semibold text-[#F75B5F]">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
}
