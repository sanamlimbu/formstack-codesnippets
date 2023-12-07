let weekTwoMonday = document.getElementById("field153914784_1");
weekTwoMonday.addEventListener("change", calculateWorkingHoursWeekTwo);

let weekTwoTuesday = document.getElementById("field153914784_2");
weekTwoTuesday.addEventListener("change", calculateWorkingHoursWeekTwo);

let weekTwoWednesday = document.getElementById("field153914784_3");
weekTwoWednesday.addEventListener("change", calculateWorkingHoursWeekTwo);

let weekTwoThursday = document.getElementById("field153914784_4");
weekTwoThursday.addEventListener("change", calculateWorkingHoursWeekTwo);

let weekTwoFriday = document.getElementById("field153914784_5");
weekTwoFriday.addEventListener("change", calculateWorkingHoursWeekTwo);

let weekTwoSaturday = document.getElementById("field153914784_6");
weekTwoSaturday.addEventListener("change", calculateWorkingHoursWeekTwo);

let weekTwoSunday = document.getElementById("field153914784_7");
weekTwoSunday.addEventListener("change", calculateWorkingHoursWeekTwo);

let weekTwoTotalHoursField = document.getElementById("field155038272");

let weekTwoCalculateField = document.getElementById("field156006406_1");
weekTwoCalculateField.addEventListener("change", calculateWorkingHoursWeekTwo);

function calculateWorkingHoursWeekTwo() {
  let weekTwoMondayLunchBreakField = document.getElementById("field153914788");
  let weekTwoStartTimeMonday = document.getElementById("field153914786-time");
  let weekTwoEndTimeMonday = document.getElementById("field153914787-time");

  let weekTwoTuesdayLunchBreakField = document.getElementById("field153914792");
  let weekTwoStartTimeTuesday = document.getElementById("field153914790-time");
  let weekTwoEndTimeTuesday = document.getElementById("field153914791-time");

  let weekTwoWednesdayLunchBreakField =
    document.getElementById("field153914792");
  let weekTwoStartTimeWednesday = document.getElementById(
    "field153914794-time"
  );
  let weekTwoEndTimeWednesday = document.getElementById("field153914795-time");

  let weekTwoThursdayLunchBreakField =
    document.getElementById("field153914800");
  let weekTwoStartTimeThursday = document.getElementById("field153914798-time");
  let weekTwoEndTimeThursday = document.getElementById("field153914799-time");

  let weekTwoFridayLunchBreakField = document.getElementById("field153914804");
  let weekTwoStartTimeFriday = document.getElementById("field153914802-time");
  let weekTwoEndTimeFriday = document.getElementById("field153914803-time");

  let weekTwoSaturdayLunchBreakField =
    document.getElementById("field153914808");
  let weekTwoStartTimeSaturday = document.getElementById("field153914806-time");
  let weekTwoEndTimeSaturday = document.getElementById("field153914807-time");

  let weekTwoSundayLunchBreakField = document.getElementById("field153914812");
  let weekTwoStartTimeSunday = document.getElementById("field153914810-time");
  let weekTwoEndTimeSunday = document.getElementById("field153914811-time");

  let mondayBreakMinutes = parseInt(weekTwoMondayLunchBreakField.value);
  let tuesdayBreakMinutes = parseInt(weekTwoTuesdayLunchBreakField.value);
  let wednesdayBreakMinutes = parseInt(weekTwoWednesdayLunchBreakField.value);
  let thursdayBreakMinutes = parseInt(weekTwoThursdayLunchBreakField.value);
  let fridayBreakMinutes = parseInt(weekTwoFridayLunchBreakField.value);
  let saturdayBreakMinutes = parseInt(weekTwoSaturdayLunchBreakField.value);
  let sundayBreakMinutes = parseInt(weekTwoSundayLunchBreakField.value);

  let mondayMinutes = 0;
  if (weekTwoMonday.checked) {
    mondayMinutes = totalHoursWorkedInADay(
      weekTwoStartTimeMonday,
      weekTwoEndTimeMonday,
      mondayBreakMinutes
    );
  }

  let tuesdayMinutes = 0;
  if (weekTwoTuesday.checked) {
    tuesdayMinutes = totalHoursWorkedInADay(
      weekTwoStartTimeTuesday,
      weekTwoEndTimeTuesday,
      tuesdayBreakMinutes
    );
  }
  let wednesdayMinutes = 0;
  if (weekTwoWednesday.checked) {
    wednesdayMinutes = totalHoursWorkedInADay(
      weekTwoStartTimeWednesday,
      weekTwoEndTimeWednesday,
      wednesdayBreakMinutes
    );
  }
  let thursdayMinutes = 0;
  if (weekTwoThursday.checked) {
    thursdayMinutes = totalHoursWorkedInADay(
      weekTwoStartTimeThursday,
      weekTwoEndTimeThursday,
      thursdayBreakMinutes
    );
  }

  let fridayMinutes = 0;
  if (weekTwoFriday.checked) {
    fridayMinutes = totalHoursWorkedInADay(
      weekTwoStartTimeFriday,
      weekTwoEndTimeFriday,
      fridayBreakMinutes
    );
  }

  let saturdayMinutes = 0;
  if (weekTwoSaturday.checked) {
    saturdayMinutes = totalHoursWorkedInADay(
      weekTwoStartTimeSaturday,
      weekTwoEndTimeSaturday,
      saturdayBreakMinutes
    );
  }

  let sundayMinutes = 0;
  if (weekTwoSunday.checked) {
    sundayMinutes = totalHoursWorkedInADay(
      weekTwoStartTimeSunday,
      weekTwoEndTimeSunday,
      sundayBreakMinutes
    );
  }

  let totalMinutes =
    mondayMinutes +
    tuesdayMinutes +
    wednesdayMinutes +
    thursdayMinutes +
    fridayMinutes +
    saturdayMinutes +
    sundayMinutes;

  if (totalMinutes >= 0) {
    let totalHours = parseFloat(totalMinutes / 60).toFixed(2);
    weekTwoTotalHoursField.value = totalHours;
  }
}
