import { useMutation } from "@tanstack/react-query";
import { API_URL } from "./const";

export default function useUpdateCart(handleSuccess = () => {}) {
  return useMutation(
    async ({ id, quantity }) => {
      const response = await fetch(`${API_URL}/cart/update`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ id: Number(id), quantity: Number(quantity) }),
      });
      return response.json();
    },
    { onSuccess: handleSuccess }
  );
}
