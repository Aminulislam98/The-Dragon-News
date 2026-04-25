//

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

import { authClient } from "@/lib/auth-client";
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
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LogInPage() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [success, setSuccess] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email(
      {
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
      },
      {
        onSuccess: () => {
          redirect("/login");
        },
      },
    );
    if (error) {
      setErrorMsg(error?.message);
      setSuccess(false);
    } else {
      setErrorMsg(null);
      setSuccess(true);
    }
  };

  return (
    <div className="py-20  max-w-7xl  w-full mx-auto flex justify-center items-center px-4">
      <div className=" bg-white max-w-150 w-full p-10 md:p-19 flex flex-col justify-center items-center gap-10 rounded-xl shadow">
        <h1 className="font-semibold text-2xl text-center">
          Register your account
        </h1>
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* name */}
          <TextField
            isRequired
            name="name"
            type="text"
            validate={(value) => {
              if (value < 4) {
                return "Name must be at least 4 characters";
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your Name" />
            <FieldError />
          </TextField>
          {/* email */}
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
          {/* password */}
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
          Already have an account?{" "}
          <Link href={`/login`} className="font-semibold text-[#F75B5F]">
            Sign in
          </Link>
        </h2>
        <div>
          {errorMsg && <p className="text-rose-600">{errorMsg}</p>}
          {success && <p className="text-green-600">Signup Successful</p>}
        </div>
      </div>
    </div>
  );
}
