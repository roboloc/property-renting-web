import { axiosInstance } from "@/lib/axios";
import { LoginPayload } from "@/types/next-auth";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: Pick<User, "email" | "password">) => {
      const { data } = await axiosInstance.post<LoginPayload>(
        "/auth/login",
        values,
      );

      return data;
    },

    onSuccess: async (data) => {
      await signIn("credentials", { ...data, redirect: false });
      toast.success("login success");
      router.push("/");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      // console.log(error);
      toast.error(error.response?.data.message);
    },
  });
};

export default useLogin;
