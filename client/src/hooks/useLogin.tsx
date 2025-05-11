import api from "@/lib/api";
import { useAuthStore } from "@/store";
import type { User } from "@/types";
import type { LoginValues } from "@/validations/auth";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

interface LoginResponse {
  access: string;
  refresh: string;
  user: User;
}

interface LoginFailResponse {
  detail: string;
}

export const useLogin = () => {
  const loginToStore = useAuthStore((state) => state.login);
  const { mutate: login, ...others } = useMutation<
    LoginResponse,
    AxiosError<LoginFailResponse>,
    LoginValues
  >({
    mutationFn: async (values: LoginValues) => {
      const response = await api.post("/auth/login", values);
      return response.data;
    },
    onSuccess: (data) => {
      loginToStore({
        access: data.access,
        refresh: data.refresh,
        user: data.user,
      });
      toast.success("Login Successful");
    },
    onError: (error) => {
      const message =
        error.response?.data?.detail || "Login failed. Please try again.";
      toast.error(message);
    },
  });

  return { login, ...others };
};
