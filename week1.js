let weekOneMonday = document.getElementById("field153914270_1");
weekOneMonday.addEventListener("change", calculateWorkingHoursWeekOne);

let weekOneTuesday = document.getElementById("field153914270_2");
weekOneTuesday.addEventListener("change", calculateWorkingHoursWeekOne);

let weekOneWednesday = document.getElementById("field153914270_3");
weekOneWednesday.addEventListener("change", calculateWorkingHoursWeekOne);

let weekOneThursday = document.getElementById("field153914270_4");
weekOneThursday.addEventListener("change", calculateWorkingHoursWeekOne);

let weekOneFriday = document.getElementById("field153914270_5");
weekOneFriday.addEventListener("change", calculateWorkingHoursWeekOne);

let weekOneSaturday = document.getElementById("field153914270_6");
weekOneSaturday.addEventListener("change", calculateWorkingHoursWeekOne);

let weekOneSunday = document.getElementById("field153914270_7");
weekOneSunday.addEventListener("change", calculateWorkingHoursWeekOne);

let weekOneTotalHoursField = document.getElementById("field154867538");

let weekOneCalculateField = document.getElementById("field156003409_1");
weekOneCalculateField.addEventListener("change", calculateWorkingHoursWeekOne);

function calculateWorkingHoursWeekOne() {
  let weekOneMondayLunchBreakField = document.getElementById("field153911743");
  let weekOneStartTimeMonday = document.getElementById("field153911732-time");
  let weekOneEndTimeMonday = document.getElementById("field153911734-time");

  let weekOneTuesdayLunchBreakField = document.getElementById("field153914231");
  let weekOneStartTimeTuesday = document.getElementById("field153914219-time");
  let weekOneEndTimeTuesday = document.getElementById("field153914230-time");

  let weekOneWednesdayLunchBreakField =
    document.getElementById("field153914237");
  let weekOneStartTimeWednesday = document.getElementById(
    "field153914235-time"
  );
  let weekOneEndTimeWednesday = document.getElementById("field153914236-time");

  let weekOneThursdayLunchBreakField =
    document.getElementById("field153914246");
  let weekOneStartTimeThursday = document.getElementById("field153914243-time");
  let weekOneEndTimeThursday = document.getElementById("field153914244-time");

  let weekOneFridayLunchBreakField = document.getElementById("field153914252");
  let weekOneStartTimeFriday = document.getElementById("field153914250-time");
  let weekOneEndTimeFriday = document.getElementById("field153914251-time");

  let weekOneSaturdayLunchBreakField =
    document.getElementById("field153914261");
  let weekOneStartTimeSaturday = document.getElementById("field153914259-time");
  let weekOneEndTimeSaturday = document.getElementById("field153914260-time");

  let weekOneSundayLunchBreakField = document.getElementById("field153914265");
  let weekOneStartTimeSunday = document.getElementById("field153914263-time");
  let weekOneEndTimeSunday = document.getElementById("field153914264-time");

  let mondayBreakMinutes = parseInt(weekOneMondayLunchBreakField.value);
  let tuesdayBreakMinutes = parseInt(weekOneTuesdayLunchBreakField.value);
  let wednesdayBreakMinutes = parseInt(weekOneWednesdayLunchBreakField.value);
  let thursdayBreakMinutes = parseInt(weekOneThursdayLunchBreakField.value);
  let fridayBreakMinutes = parseInt(weekOneFridayLunchBreakField.value);
  let saturdayBreakMinutes = parseInt(weekOneSaturdayLunchBreakField.value);
  let sundayBreakMinutes = parseInt(weekOneSundayLunchBreakField.value);

  let mondayMinutes = 0;
  if (weekOneMonday.checked) {
    mondayMinutes = totalHoursWorkedInADay(
      weekOneStartTimeMonday,
      weekOneEndTimeMonday,
      mondayBreakMinutes
    );
  }

  let tuesdayMinutes = 0;
  if (weekOneTuesday.checked) {
    tuesdayMinutes = totalHoursWorkedInADay(
      weekOneStartTimeTuesday,
      weekOneEndTimeTuesday,
      tuesdayBreakMinutes
    );
  }
  let wednesdayMinutes = 0;
  if (weekOneWednesday.checked) {
    wednesdayMinutes = totalHoursWorkedInADay(
      weekOneStartTimeWednesday,
      weekOneEndTimeWednesday,
      wednesdayBreakMinutes
    );
  }
  let thursdayMinutes = 0;
  if (weekOneThursday.checked) {
    thursdayMinutes = totalHoursWorkedInADay(
      weekOneStartTimeThursday,
      weekOneEndTimeThursday,
      thursdayBreakMinutes
    );
  }

  let fridayMinutes = 0;
  if (weekOneFriday.checked) {
    fridayMinutes = totalHoursWorkedInADay(
      weekOneStartTimeFriday,
      weekOneEndTimeFriday,
      fridayBreakMinutes
    );
  }

  let saturdayMinutes = 0;
  if (weekOneSaturday.checked) {
    saturdayMinutes = totalHoursWorkedInADay(
      weekOneStartTimeSaturday,
      weekOneEndTimeSaturday,
      saturdayBreakMinutes
    );
  }

  let sundayMinutes = 0;
  if (weekOneSunday.checked) {
    sundayMinutes = totalHoursWorkedInADay(
      weekOneStartTimeSunday,
      weekOneEndTimeSunday,
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
    weekOneTotalHoursField.value = totalHours;
  }
}
