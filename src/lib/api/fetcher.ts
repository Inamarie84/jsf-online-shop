// src/lib/api/fetcher.ts
import toast from "react-hot-toast";

export async function fetcher<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      const errorMessage = `Error ${res.status}: ${res.statusText}`;
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (error: any) {
    toast.error("Something went wrong. Please try again.");
    console.error("Fetcher error:", error);
    throw error;
  }
}
