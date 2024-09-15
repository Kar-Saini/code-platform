"use server";
import userSchema, { userSchemaType } from "@repo/zod/dist/index";
import bcrypt from "bcrypt";
import client from "@repo/db/dist";
import { NextResponse } from "next/server";

export async function createUser(data: userSchemaType) {
  const isValidData = userSchema.safeParse(data);

  if (!isValidData.success) {
    NextResponse.json({ message: "Invalid data" });
  }
  if (data && isValidData.success) {
    const hashedPassword: string = await bcrypt.hash(data.password, 10);
    const newUser = await client.user.create({
      data: { ...data, password: hashedPassword },
    });
    return newUser;
  }
}
