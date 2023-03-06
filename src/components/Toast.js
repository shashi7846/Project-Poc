import { toast } from "react-toastify";

export const successToast = (message = "Success!") =>
  toast.success(message, {
    position: "top-center",
    theme: "dark",
  });

export const errorToast = (message = "Error!") =>
  toast.error(message, {
    position: "top-center",
    theme: "dark",
  });
