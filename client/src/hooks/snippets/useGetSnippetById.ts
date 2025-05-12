import api from "@/lib/api";
import type { Snippet } from "@/types";
import { useQuery } from "@tanstack/react-query";



export const useGetSnippetById = (snippetId: string) => {
    const { data: snippet, ...query } = useQuery<Snippet>({
        queryKey: ["snippet", snippetId],
        queryFn: async () => {
            const response = await api.get<Snippet>(`/snippets/${snippetId}/`);
            return response.data;
        }
    });

    return { snippet, ...query };
}