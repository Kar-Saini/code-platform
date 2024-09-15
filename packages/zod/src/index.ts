import zod from "zod";

const userSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(6),
});
export type userSchemaType = zod.infer<typeof userSchema>;
export default userSchema;
