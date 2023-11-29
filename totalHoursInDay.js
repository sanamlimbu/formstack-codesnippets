function totalHoursWorkedInADay(
  startHour,
  startMinute,
  endHour,
  endMinute,
  breakMinutes
) {
  let startMinutes =
    parseInt(startHour.options[startHour.selectedIndex].value) * 60 +
    parseInt(startMinute.options[startMinute.selectedIndex].value);

  let endMinutes =
    parseInt(endHour.options[endHour.selectedIndex].value) * 60 +
    parseInt(endMinute.options[endMinute.selectedIndex].value);

  if (isNaN(startMinutes) || isNaN(endMinutes) || isNaN(breakMinutes)) {
    return 0;
  }

  if (endMinutes < startMinutes || breakMinutes < 0) {
    return 0;
  }

  let totalMinutes = parseInt(endMinutes - startMinutes - breakMinutes);

  if (totalMinutes < 0) {
    return 0;
  }

  return totalMinutes;
}
