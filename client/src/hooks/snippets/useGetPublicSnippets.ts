import api from "@/lib/api"
import type { Snippet } from "@/types";
import { useQuery } from "@tanstack/react-query"


export const useGetPublicSnippets = () => {
    const { data: snippets, ...query } = useQuery<Array<Snippet>>({
        queryKey: ["public-snippets"],
        queryFn: async () => {
            const response = await api.get<Array<Snippet>>('/snippets/');
            return response.data;
        }
    });

    return { snippets: snippets || [], ...query };
}