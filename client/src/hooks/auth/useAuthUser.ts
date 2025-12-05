import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import type { User } from "@/types";

export const useAuthUser = () => {

    const { data: authUser, ...query } = useQuery<User>({
        queryKey: ["authUser"],
        queryFn: async () => {
            const response = await api.get<User>("/auth/me/");
            return response.data;
        },
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 10, // 10 minutes
    });
    return { authUser: authUser, ...query };
};
