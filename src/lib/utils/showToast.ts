import toast from "react-hot-toast";
import { TOAST_SETTINGS, ToastType } from "@/common/common";

/**
 * Shows a toast message with predefined settings.
 *
 * @param type - Type of toast ("success", "error", "loading")
 * @param message - Message to display
 */
export function showToast(type: ToastType, message: string) {
  toast[type](message, {
    duration: TOAST_SETTINGS.duration,
    position: TOAST_SETTINGS.position,
  });
}
