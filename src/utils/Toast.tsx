import { toast } from "react-toastify";

const toastId = "1";

const showToastSuccess = (message: string) =>
  toast.success(message, { toastId });

const showToastError = (message: string) => toast.error(message, { toastId });

const showToastWarning = (message: string) => toast.warn(message, { toastId });

export { showToastError, showToastSuccess, showToastWarning };
