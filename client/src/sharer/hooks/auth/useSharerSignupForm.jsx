//hook
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signupSharerRequest } from "../../services/auth/authService";

export function useSharerSignupForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: signupSharerRequest,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(["auth", "session"], data);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/sharer/dashboard");
    },
  });

  return {
    signup: signupMutation.mutateAsync,
    isLoading: signupMutation.isLoading,
    error: signupMutation.error,
  };
}