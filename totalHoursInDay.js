function totalHoursWorkedInADay(startTime, endTime, breakMinutes) {
  let startTimeArr = startTime.value.split(":");
  let endTimeArr = endTime.value.split(":");

  let startMinutes;
  let endMinutes;
  if (startTimeArr.length == 2 && endTimeArr.length == 2) {
    startMinutes = parseInt(startTimeArr[0]) * 60 + parseInt(startTimeArr[1]);
    endMinutes = parseInt(endTimeArr[0]) * 60 + parseInt(endTimeArr[1]);
  }

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
