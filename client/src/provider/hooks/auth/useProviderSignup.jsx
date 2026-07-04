//hook
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signupProviderRequest } from "../../services/auth/authService.jsx";

export function useProviderSignupForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: signupProviderRequest,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(["auth", "session"], data);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      navigate("/provider/dashboard");
      
    },
  });

  return {
    signup: signupMutation.mutateAsync,
    isLoading: signupMutation.isLoading,
    error: signupMutation.error,
  };
}