let weekFourMonday = document.getElementById("field153915107_1");
weekFourMonday.addEventListener("change", calculateWorkingHoursWeekFour);

let weekFourTuesday = document.getElementById("field153915107_2");
weekFourTuesday.addEventListener("change", calculateWorkingHoursWeekFour);

let weekFourWednesday = document.getElementById("field153915107_3");
weekFourWednesday.addEventListener("change", calculateWorkingHoursWeekFour);

let weekFourThursday = document.getElementById("field153915107_4");
weekFourThursday.addEventListener("change", calculateWorkingHoursWeekFour);

let weekFourFriday = document.getElementById("field153915107_5");
weekFourFriday.addEventListener("change", calculateWorkingHoursWeekFour);

let weekFourSaturday = document.getElementById("field153915107_6");
weekFourSaturday.addEventListener("change", calculateWorkingHoursWeekFour);

let weekFourSunday = document.getElementById("field153915107_7");
weekFourSunday.addEventListener("change", calculateWorkingHoursWeekFour);

let weekFourTotalHoursField = document.getElementById("field155563580");

let weekFourCalculateField = document.getElementById("field156010510_1");
weekFourCalculateField.addEventListener(
  "change",
  calculateWorkingHoursWeekFour
);

function calculateWorkingHoursWeekFour() {
  let weekFourMondayLunchBreakField = document.getElementById("field153915111");
  let weekFourStartTimeMonday = document.getElementById("field153915109-time");
  let weekFourEndTimeMonday = document.getElementById("field153915110-time");

  let weekFourTuesdayLunchBreakField =
    document.getElementById("field153915115");
  let weekFourStartTimeTuesday = document.getElementById("field153915113-time");
  let weekFourEndTimeTuesday = document.getElementById("field153915114-time");

  let weekFourWednesdayLunchBreakField =
    document.getElementById("field153915119");
  let weekFourStartTimeWednesday = document.getElementById(
    "field153915117-time"
  );
  let weekFourEndTimeWednesday = document.getElementById("field153915118-time");

  let weekFourThursdayLunchBreakField =
    document.getElementById("field153915123");
  let weekFourStartTimeThursday = document.getElementById(
    "field153915121-time"
  );
  let weekFourEndTimeThursday = document.getElementById("field153915122-time");

  let weekFourFridayLunchBreakField = document.getElementById("field153915127");
  let weekFourStartTimeFriday = document.getElementById("field153915125-time");
  let weekFourEndTimeFriday = document.getElementById("field153915126-time");

  let weekFourSaturdayLunchBreakField =
    document.getElementById("field153915131");
  let weekFourStartTimeSaturday = document.getElementById(
    "field153915129-time"
  );
  let weekFourEndTimeSaturday = document.getElementById("field153915130-time");

  let weekFourSundayLunchBreakField = document.getElementById("field153915135");
  let weekFourStartTimeSunday = document.getElementById("field153915133-time");
  let weekFourEndTimeSunday = document.getElementById("field153915134-time");

  let mondayBreakMinutes = parseInt(weekFourMondayLunchBreakField.value);
  let tuesdayBreakMinutes = parseInt(weekFourTuesdayLunchBreakField.value);
  let wednesdayBreakMinutes = parseInt(weekFourWednesdayLunchBreakField.value);
  let thursdayBreakMinutes = parseInt(weekFourThursdayLunchBreakField.value);
  let fridayBreakMinutes = parseInt(weekFourFridayLunchBreakField.value);
  let saturdayBreakMinutes = parseInt(weekFourSaturdayLunchBreakField.value);
  let sundayBreakMinutes = parseInt(weekFourSundayLunchBreakField.value);

  let mondayMinutes = 0;
  if (weekFourMonday.checked) {
    mondayMinutes = totalHoursWorkedInADay(
      weekFourStartTimeMonday,
      weekFourEndTimeMonday,
      mondayBreakMinutes
    );
  }

  let tuesdayMinutes = 0;
  if (weekFourTuesday.checked) {
    tuesdayMinutes = totalHoursWorkedInADay(
      weekFourStartTimeTuesday,
      weekFourEndTimeTuesday,
      tuesdayBreakMinutes
    );
  }
  let wednesdayMinutes = 0;
  if (weekFourWednesday.checked) {
    wednesdayMinutes = totalHoursWorkedInADay(
      weekFourStartTimeWednesday,
      weekFourEndTimeWednesday,
      wednesdayBreakMinutes
    );
  }
  let thursdayMinutes = 0;
  if (weekFourThursday.checked) {
    thursdayMinutes = totalHoursWorkedInADay(
      weekFourStartTimeThursday,
      weekFourEndTimeThursday,
      thursdayBreakMinutes
    );
  }

  let fridayMinutes = 0;
  if (weekFourFriday.checked) {
    fridayMinutes = totalHoursWorkedInADay(
      weekFourStartTimeFriday,
      weekFourEndTimeFriday,
      fridayBreakMinutes
    );
  }

  let saturdayMinutes = 0;
  if (weekFourSaturday.checked) {
    saturdayMinutes = totalHoursWorkedInADay(
      weekFourStartTimeSaturday,
      weekFourEndTimeSaturday,
      saturdayBreakMinutes
    );
  }

  let sundayMinutes = 0;
  if (weekFourSunday.checked) {
    sundayMinutes = totalHoursWorkedInADay(
      weekFourStartTimeSunday,
      weekFourEndTimeSunday,
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
    weekFourTotalHoursField.value = totalHours;
  }
}
