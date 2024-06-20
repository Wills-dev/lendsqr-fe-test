import { format, parseISO, isValid } from "date-fns";

export const formatDate = (isoString: string): string => {
  try {
    const date = parseISO(isoString);
    if (!isValid(date)) {
      throw new Error("Invalid date");
    }
    return format(date, "MMM dd, yyyy hh:mm a");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};

export const goBack = () => {
  window.history.back();
};
