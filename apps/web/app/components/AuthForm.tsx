"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import InputBox from "./InputBox";
import React, { useCallback, useEffect, useState } from "react";
import { createUser } from "../actions/serverActions";
import userSchema, { userSchemaType } from "@repo/zod/dist";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
type VARIANT = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<VARIANT>("LOGIN");

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, []);

  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else setVariant("LOGIN");
  }, [variant]);

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const isDataValid = userSchema.safeParse(formData);
    if (isDataValid.error) {
      toast.error(isDataValid.error.message);
      console.log(isDataValid.error);
      return;
    }
    if (variant === "REGISTER") {
      createUser(formData as userSchemaType)
        .then((res) => {
          if (res?.id) {
            toast.success("Account created");
            router.push("/");
          }
        })
        .catch(() => toast.error("Invalid"));
    }
    if (variant === "LOGIN") {
      signIn("credentials", { ...formData, redirect: false }).then((res) => {
        if (res?.error && !res.ok) {
          toast.error("Invalid");
        }
        if (res?.ok) {
          toast.success("Welcome");
          router.push("/");
        }
      });
    }
  };
  console.log(window.location.href);
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
      <div className="flex justify-center my-10 text-4xl font-bold">
        Welcome to Codex
      </div>
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant == "REGISTER" && (
            <InputBox label="name" register={register} type="text" />
          )}
          <InputBox label="email" register={register} type="email" />
          <InputBox label="password" register={register} type="password" />
          <div className="w-full flex items-center justify-center p-1">
            <button className="bg-gray-300 py-1 px-3 rounded-lg hover:cursor-pointer hover:scale-105 transition">
              Submit
            </button>
          </div>
        </form>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN" ? "New to Codex?" : "Already have account?"}
          </div>
          <div onClick={toogleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
