let weekThreeMonday = document.getElementById("field153914872_1");
weekThreeMonday.addEventListener("change", calculateWorkingHoursWeekThree);

let weekThreeTuesday = document.getElementById("field153914872_2");
weekThreeTuesday.addEventListener("change", calculateWorkingHoursWeekThree);

let weekThreeWednesday = document.getElementById("field153914872_3");
weekThreeWednesday.addEventListener("change", calculateWorkingHoursWeekThree);

let weekThreeThursday = document.getElementById("field153914872_4");
weekThreeThursday.addEventListener("change", calculateWorkingHoursWeekThree);

let weekThreeFriday = document.getElementById("field153914872_5");
weekThreeFriday.addEventListener("change", calculateWorkingHoursWeekThree);

let weekThreeSaturday = document.getElementById("field153914872_6");
weekThreeSaturday.addEventListener("change", calculateWorkingHoursWeekThree);

let weekThreeSunday = document.getElementById("field153914872_7");
weekThreeSunday.addEventListener("change", calculateWorkingHoursWeekThree);

let weekThreeTotalHoursField = document.getElementById("field155563499");

let weekThreeCalculateField = document.getElementById("field156010506_1");
weekThreeCalculateField.addEventListener(
  "change",
  calculateWorkingHoursWeekThree
);

function calculateWorkingHoursWeekThree() {
  let weekThreeMondayLunchBreakField =
    document.getElementById("field153914876");
  let weekThreeStartTimeMonday = document.getElementById("field153914874-time");
  let weekThreeEndTimeMonday = document.getElementById("field153914875-time");

  let weekThreeTuesdayLunchBreakField =
    document.getElementById("field153914880");
  let weekThreeStartTimeTuesday = document.getElementById(
    "field153914878-time"
  );
  let weekThreeEndTimeTuesday = document.getElementById("field153914879-time");

  let weekThreeWednesdayLunchBreakField =
    document.getElementById("field153914884");
  let weekThreeStartTimeWednesday = document.getElementById(
    "field153914882-time"
  );
  let weekThreeEndTimeWednesday = document.getElementById(
    "field153914883-time"
  );

  let weekThreeThursdayLunchBreakField =
    document.getElementById("field153914888");
  let weekThreeStartTimeThursday = document.getElementById(
    "field153914886-time"
  );
  let weekThreeEndTimeThursday = document.getElementById("field153914887-time");

  let weekThreeFridayLunchBreakField =
    document.getElementById("field153914892");
  let weekThreeStartTimeFriday = document.getElementById("field153914890-time");
  let weekThreeEndTimeFriday = document.getElementById("field153914891-time");

  let weekThreeSaturdayLunchBreakField =
    document.getElementById("field153914896");
  let weekThreeStartTimeSaturday = document.getElementById(
    "field153914894-time"
  );
  let weekThreeEndTimeSaturday = document.getElementById("field153914895-time");

  let weekThreeSundayLunchBreakField =
    document.getElementById("field153914900");
  let weekThreeStartTimeSunday = document.getElementById("field153914898-time");
  let weekThreeEndTimeSunday = document.getElementById("field153914899-time");

  let mondayBreakMinutes = parseInt(weekThreeMondayLunchBreakField.value);
  let tuesdayBreakMinutes = parseInt(weekThreeTuesdayLunchBreakField.value);
  let wednesdayBreakMinutes = parseInt(weekThreeWednesdayLunchBreakField.value);
  let thursdayBreakMinutes = parseInt(weekThreeThursdayLunchBreakField.value);
  let fridayBreakMinutes = parseInt(weekThreeFridayLunchBreakField.value);
  let saturdayBreakMinutes = parseInt(weekThreeSaturdayLunchBreakField.value);
  let sundayBreakMinutes = parseInt(weekThreeSundayLunchBreakField.value);

  let mondayMinutes = 0;
  if (weekThreeMonday.checked) {
    mondayMinutes = totalHoursWorkedInADay(
      weekThreeStartTimeMonday,
      weekThreeEndTimeMonday,
      mondayBreakMinutes
    );
  }

  let tuesdayMinutes = 0;
  if (weekThreeTuesday.checked) {
    tuesdayMinutes = totalHoursWorkedInADay(
      weekThreeStartTimeTuesday,
      weekThreeEndTimeTuesday,
      tuesdayBreakMinutes
    );
  }
  let wednesdayMinutes = 0;
  if (weekThreeWednesday.checked) {
    wednesdayMinutes = totalHoursWorkedInADay(
      weekThreeStartTimeWednesday,
      weekThreeEndTimeWednesday,
      wednesdayBreakMinutes
    );
  }
  let thursdayMinutes = 0;
  if (weekThreeThursday.checked) {
    thursdayMinutes = totalHoursWorkedInADay(
      weekThreeStartTimeThursday,
      weekThreeEndTimeThursday,
      thursdayBreakMinutes
    );
  }

  let fridayMinutes = 0;
  if (weekThreeFriday.checked) {
    fridayMinutes = totalHoursWorkedInADay(
      weekThreeStartTimeFriday,
      weekThreeEndTimeFriday,
      fridayBreakMinutes
    );
  }

  let saturdayMinutes = 0;
  if (weekThreeSaturday.checked) {
    saturdayMinutes = totalHoursWorkedInADay(
      weekThreeStartTimeSaturday,
      weekThreeEndTimeSaturday,
      saturdayBreakMinutes
    );
  }

  let sundayMinutes = 0;
  if (weekThreeSunday.checked) {
    sundayMinutes = totalHoursWorkedInADay(
      weekThreeStartTimeSunday,
      weekThreeEndTimeSunday,
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
    weekThreeTotalHoursField.value = totalHours;
  }
}
