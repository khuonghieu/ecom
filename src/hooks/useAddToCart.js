import { useMutation } from "@tanstack/react-query";
import { API_URL } from "./const";

export default function useAddToCart(handleSuccess = () => {}) {
  return useMutation(
    async (id) => {
      const response = await fetch(`${API_URL}/add`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ id }),
      });
      return response.json();
    },
    {
      onSuccess: handleSuccess,
    }
  );
}
