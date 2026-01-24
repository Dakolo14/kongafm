/**
 * Utility functions for checking if a show is live
 * Uses West African Time (WAT) - UTC+1
 */

export function getCurrentWATTime(): Date {
  // Get current UTC time and convert to WAT (UTC+1)
  const now = new Date();
  const utcTime = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  const watTime = new Date(utcTime.getTime() + 1 * 60 * 60 * 1000);
  return watTime;
}

export function parseTimeRange(timeString: string): {
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
} | null {
  // Parse time strings like "5:00am - 7:00am" or "1:00pm - 2:00pm"
  const timeRegex = /(\d{1,2}):(\d{2})(am|pm)\s*-\s*(\d{1,2}):(\d{2})(am|pm)/i;
  const match = timeString.match(timeRegex);

  if (!match) return null;

  let startHour = parseInt(match[1]);
  const startMinute = parseInt(match[2]);
  const startPeriod = match[3].toLowerCase();

  let endHour = parseInt(match[4]);
  const endMinute = parseInt(match[5]);
  const endPeriod = match[6].toLowerCase();

  // Convert to 24-hour format
  if (startPeriod === "pm" && startHour !== 12) startHour += 12;
  if (startPeriod === "am" && startHour === 12) startHour = 0;

  if (endPeriod === "pm" && endHour !== 12) endHour += 12;
  if (endPeriod === "am" && endHour === 12) endHour = 0;

  return {
    startHour,
    startMinute,
    endHour,
    endMinute,
  };
}

export function isShowLive(timeString: string): boolean {
  const timeRange = parseTimeRange(timeString);
  if (!timeRange) return false;

  const now = getCurrentWATTime();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const currentTotalMinutes = currentHour * 60 + currentMinute;
  const startTotalMinutes = timeRange.startHour * 60 + timeRange.startMinute;
  const endTotalMinutes = timeRange.endHour * 60 + timeRange.endMinute;

  // Handle case where show spans midnight (e.g., 11pm - 1am)
  if (startTotalMinutes > endTotalMinutes) {
    return (
      currentTotalMinutes >= startTotalMinutes ||
      currentTotalMinutes < endTotalMinutes
    );
  }

  return (
    currentTotalMinutes >= startTotalMinutes &&
    currentTotalMinutes < endTotalMinutes
  );
}
