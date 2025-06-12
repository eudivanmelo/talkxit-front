import { useQuery } from "@tanstack/react-query";
import api from "@/services/api";
import { Post } from "@/models/post";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await api.get("/post/");
      return data as Array<Post>;
    },
    refetchInterval: 60000, // Atualiza a cada 10 segundos
  });
}