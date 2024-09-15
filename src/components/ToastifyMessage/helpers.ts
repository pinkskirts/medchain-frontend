import { ToastOptions, toast } from "react-toastify";

const defaultConfigToastify: ToastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export function defineToastify(
  type: string,
  message: string,
  config?: ToastOptions
) {
  switch (type) {
    case "success":
      return toast.success(message, config ?? defaultConfigToastify);
    case "error":
      return toast.error(message, config ?? defaultConfigToastify);
    case "warning":
      return toast.warning(message, config ?? defaultConfigToastify);
  }
}
