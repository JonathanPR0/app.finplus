import { useToast } from "@/components/Toast";
import api from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return {
    login: () =>
      useMutation({
        mutationFn: (data: { email: string; password: string }) =>
          api.post("auth/login", data).then((res) => res.data),
        onSuccess() {
          toast("Login realizado com sucesso", "success");
          queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError(error) {
          //@ts-ignore
          const message = error.response?.data.message || error.message;
          console.log(error);

          toast(message || error.message, "destructive");
        },
      }),
  };
};
