import api from "@/lib/api";
import { useAuthStore } from "@/store";
import type { User } from "@/types";
import type { RegisterValues } from "@/validations/auth";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

interface RegisterResponse {
    access: string;
    refresh: string;
    user: User;
}

interface RegisterFailResponse {
    errors: string[];
}

export const useRegister = () => {
    const { login } = useAuthStore();
    const navigate = useNavigate();

    return useMutation<RegisterResponse, AxiosError<RegisterFailResponse>, RegisterValues>(
        {
            mutationFn: async (values: RegisterValues) => {
                const response = await api.post("/auth/register/", values);
                return response.data;
            },
            onSuccess: (data) => {
                login({
                    access: data.access,
                    refresh: data.refresh,
                    authUser: data.user,
                });
                toast.success("Account created Successful");
                navigate('/dashboard');
            },
            onError: (error) => {
                if (error.code === "ERR_NETWORK") {
                    toast.error("Network Error: Could not connect to server!");
                    return;
                }
                const errors = error.response?.data?.errors;
                if (errors && Array.isArray(errors)) {
                    errors.forEach((errorMsg) => toast.error(errorMsg));
                } else {
                    const fallBackMessage = "Registration failed! Please try again.";
                    toast.error(fallBackMessage);
                }
            },
        }
    );
};
