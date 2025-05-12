import api from "@/lib/api"
import type { Snippet } from "@/types";
import { useQuery } from "@tanstack/react-query"


export const useGetUserSnippets = () => {
    const { data: userSnippets, ...query } = useQuery<Array<Snippet>>({
        queryKey: ["user-snippets"],
        queryFn: async () => {
            const response = await api.get<Array<Snippet>>('/user/snippets/');
            return response.data;
        }
    });

    return { userSnippets: userSnippets || [], ...query };
}