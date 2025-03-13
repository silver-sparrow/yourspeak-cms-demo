"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LOGIN_SCHEMA } from "@/schema/auth-schema";
import FormField from "@/components/shared/auth/FormField";
import { useAuthHandler } from "@/hooks/auth/useAuthHandler";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/redux/store/store";

// INITIAL VALUES
const initialValues = {
  email: "",
  password: "",
  betaCode: "",
};

const Page = () => {
  //HOOK
  const router = useRouter();
  const { handleLogin } = useAuthHandler();

  //REDUX
  const { access_token } = useSelector((state: RootState) => state.auth);

  // STATES
  const [showPassword, setShowPassword] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  // FORM HANDLER
  const formik = useFormik({
    initialValues,
    validationSchema: LOGIN_SCHEMA,
    onSubmit: (values, { setSubmitting }) => {
      handleLogin({ values, setSubmitting });
    },
  });

  //USE EFFECT
  useEffect(() => {
    if (access_token) {
      router.push("/");
    }
    setIsCheckingAuth(false);
  }, [access_token, router]);

  if (isCheckingAuth || access_token) {
    return null;
  }

  return (
    <Card className="w-full max-w-md mx-4 bg-white border-none">
      <CardHeader className="space-y-1 flex flex-row justify-between items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Your Management System
          </h2>
          <p className="text-md text-gray-500 mt-1">Login to your account</p>
        </div>
        <div className="text-red-600 hidden sm:block">
          <Image
            src="/icons/logo.png"
            alt="Your Speak Logo"
            height={1000}
            width={1000}
            className="w-12"
          />
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <FormField
            label="Email Address / Username"
            id="email"
            type="text"
            formik={formik}
            placeholder="Enter your email address"
          />

          <FormField
            label="Password"
            id="password"
            type={showPassword ? "text" : "password"}
            formik={formik}
            showToggle
            onToggle={() => setShowPassword(!showPassword)}
            placeholder="Enter your password"
          />

          <FormField
            label="Beta Code"
            id="betaCode"
            type="text"
            formik={formik}
            placeholder="Enter your beta code"
          />

          <Button
            type="submit"
            className="w-full bg-primary text-white cursor-pointer"
            disabled={formik.isSubmitting}
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Page;
