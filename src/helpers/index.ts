import { format, parseISO, isValid } from "date-fns";

export const formatDate = (isoString: string): string => {
  try {
    // Parse the ISO string to a Date object
    const date = parseISO(isoString);

    // Check if the date is valid
    if (!isValid(date)) {
      throw new Error("Invalid date");
    }

    // Format the date to the desired format
    return format(date, "MMM dd, yyyy hh:mm a");
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};
