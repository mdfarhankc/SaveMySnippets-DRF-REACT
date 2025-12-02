import { useInfiniteQuery } from "@tanstack/react-query"
import api from "@/lib/api"
import type { PaginatedResponse, Snippet } from "@/types";

const LIMIT = 20;


export const useGetUserSnippets = () => {
    return useInfiniteQuery<PaginatedResponse<Snippet>>({
        queryKey: ["user-snippets"],
        queryFn: async ({ pageParam = 0 }) => {
            const response = await api.get<PaginatedResponse<Snippet>>(
                `/snippets/me/?limit=${LIMIT}&offset=${pageParam}`
            );
            return response.data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            if (!lastPage.next) return undefined;

            const url = new URL(lastPage.next);
            return Number(url.searchParams.get("offset"));
        },
    });
};