import api from "@/lib/api";
import type { Snippet } from "@/types";
import { useQuery } from "@tanstack/react-query";



export const useGetSnippetBySlug = (slug: string) => {
    const { data: snippet, ...query } = useQuery<Snippet>({
        queryKey: ["snippet", slug],
        queryFn: async () => {
            const response = await api.get<Snippet>(`/snippets/${slug}/`);
            return response.data;
        }
    });

    return { snippet, ...query };
}