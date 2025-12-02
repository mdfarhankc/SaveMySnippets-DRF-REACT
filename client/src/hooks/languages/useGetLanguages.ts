import api from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { type Lanugage } from "@/types";


export const useGetLanguages = () => {
    const { data: languages, ...query } = useQuery({
        queryKey: ["languages"],
        queryFn: async () => {
            const response = await api.get<Array<Lanugage>>('/snippets/languages/');
            return response.data;
        },
    });
    return { languages: languages || [], ...query }
}