import api from "@/lib/api";
import { useAuthStore } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

interface LogoutResponse {
  detail: string;
}

interface LogoutFailResponse {
  refresh_token: string;
}

export const useLogout = () => {
  const { logout, refresh } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<LogoutResponse, AxiosError<LogoutFailResponse>>({
    mutationFn: async () => {
      const response = await api.post<LogoutResponse>("/auth/logout/", {
        refresh_token: refresh,
      });
      return response.data;
    },
    onSuccess: () => {
      logout();
      toast.success("Logout Successful");
      navigate('/sign-in');
    },
    onError: (error) => {
      if (error.code === "ERR_NETWORK") {
        toast.error("Network Error: Could not connect to server!");
        return;
      }
      const detail = error.response?.data?.refresh_token ?? "Logout failed!";
      toast.error(detail);
    },
  });
};
