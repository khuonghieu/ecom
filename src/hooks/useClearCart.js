import { useMutation } from "@tanstack/react-query";
import { API_URL } from "./const";

export default function useClearCart(handleSuccess = () => {}) {
  return useMutation(
    async () => {
      const response = await fetch(`${API_URL}/cart/clear`);
      return response.json();
    },
    { onSuccess: handleSuccess }
  );
}
