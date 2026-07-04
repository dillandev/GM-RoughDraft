import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/auth/authService.jsx";

export function useLoginForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(["auth", "session"], data);
      queryClient.invalidateQueries({ queryKey: ["auth"] });

      if (data.user.role === "provider") {
        navigate("/provider/dashboard");
      } else if (data.user.role === "sharer") {
        navigate("/sharer/dashboard");
      } else {
        navigate("/signin");
      }
    },
  });

  return {
    signin: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
}