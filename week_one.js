document.addEventListener("DOMContentLoaded", function (event) {
  // Monday
  let weekOneMondayLunchBreakField = document.getElementById("field153911743");
  weekOneMondayLunchBreakField.addEventListener("input", (event) => {
    calculateWorkingHoursWeekOne(parseInt(event.target.value));
  });

  // Tuesday
  let weekOneTuesdayLunchBreakField = document.getElementById("field153914231");
  weekOneTuesdayLunchBreakField.addEventListener("input", (event) => {
    calculateWorkingHoursWeekOne(parseInt(event.target.value));
  });

  // Wednesday
  let weekOneWednesdayLunchBreakField =
    document.getElementById("field153914237");
  weekOneWednesdayLunchBreakField.addEventListener("input", (event) => {
    calculateWorkingHoursWeekOne(parseInt(event.target.value), "Wednesday");
  });

  // Thursday
  let weekOneThursdayLunchBreakField =
    document.getElementById("field153914246");
  weekOneThursdayLunchBreakField.addEventListener("input", (event) => {
    calculateWorkingHoursWeekOne(parseInt(event.target.value), "Thursday");
  });

  // Friday
  let weekOneFridayLunchBreakField = document.getElementById("field153914252");
  weekOneFridayLunchBreakField.addEventListener("input", (event) => {
    calculateWorkingHoursWeekOne(parseInt(event.target.value), "Friday");
  });

  // Saturday
  let weekOneSaturdayLunchBreakField =
    document.getElementById("field153914261");
  weekOneSaturdayLunchBreakField.addEventListener("input", (event) => {
    calculateWorkingHoursWeekOne(parseInt(event.target.value), "Saturday");
  });

  // Sunday
  let weekOneSundayLunchBreakField = document.getElementById("field153914265");
  weekOneSundayLunchBreakField.addEventListener("input", (event) => {
    calculateWorkingHoursWeekOne(parseInt(event.target.value), "Sunday");
  });

  function calculateWorkingHoursWeekOne(breakMinutes) {
    const week = 1;
    // Monday
    let startHourMonday = document.getElementById("field153911732H");
    let startMinuteMonday = document.getElementById("field153911732I");

    let endHourMonday = document.getElementById("field153911734H");
    let endMinuteMonday = document.getElementById("field153911734I");

    // Tuesday
    let startHourTuesday = document.getElementById("field153914219H");
    let startMinuteTuesday = document.getElementById("field153914219I");

    let endHourTuesday = document.getElementById("field153914230H");
    let endMinuteTuesday = document.getElementById("field153914230I");

    // Wednesday
    let startHourWednesday = document.getElementById("field153914235H");
    let startMinuteWednesday = document.getElementById("field153914235I");

    let endHourWednesday = document.getElementById("field153914236H");
    let endMinuteWednesday = document.getElementById("field153914236I");

    // Thursday
    let startHourThursday = document.getElementById("field153914243H");
    let startMinuteThursday = document.getElementById("field153914243I");

    let endHourThursday = document.getElementById("field153914244H");
    let endMinuteThursday = document.getElementById("field153914244I");

    // Friday
    let startHourFriday = document.getElementById("field153914250H");
    let startMinuteFriday = document.getElementById("field153914250I");

    let endHourFriday = document.getElementById("field153914251H");
    let endMinuteFriday = document.getElementById("field153914251I");

    // Saturday
    let startHourSaturday = document.getElementById("field153914259H");
    let startMinuteSaturday = document.getElementById("field153914259I");

    let endHourSaturday = document.getElementById("field153914260H");
    let endMinuteSaturday = document.getElementById("field153914260I");

    // Sunday
    let startHourSunday = document.getElementById("field153914263H");
    let startMinuteSunday = document.getElementById("field153914263I");

    let endHourSunday = document.getElementById("field153914264H");
    let endMinuteSunday = document.getElementById("field153914264I");

    let totalHoursField = document.getElementById("field154867538");

    let mondayChecked = document.getElementById("field153914270_1");
    let mondayMinutes = 0;
    if (mondayChecked.checked) {
      mondayMinutes = totalHoursWorkedInADay(
        week,
        "Monday",
        startHourMonday,
        startMinuteMonday,
        endHourMonday,
        endMinuteMonday,
        breakMinutes
      );
    }

    let tuesdayMinutes = totalHoursWorkedInADay(
      week,
      "Tuesday",
      startHourTuesday,
      startMinuteTuesday,
      endHourTuesday,
      endMinuteTuesday,
      breakMinutes
    );

    let wednesdayMinutes = totalHoursWorkedInADay(
      week,
      "Wednesday",
      startHourWednesday,
      startMinuteWednesday,
      endHourWednesday,
      endMinuteWednesday,
      breakMinutes
    );

    let thursdayMinutes = totalHoursWorkedInADay(
      week,
      "Thursday",
      startHourThursday,
      startMinuteThursday,
      endHourThursday,
      endMinuteThursday,
      breakMinutes
    );

    let fridayMinutes = totalHoursWorkedInADay(
      week,
      "Friday",
      startHourFriday,
      startMinuteFriday,
      endHourFriday,
      endMinuteFriday,
      breakMinutes
    );

    let saturdayMinutes = totalHoursWorkedInADay(
      week,
      "Saturday",
      startHourSaturday,
      startMinuteSaturday,
      endHourSaturday,
      endMinuteSaturday,
      breakMinutes
    );

    let sundayMinutes = totalHoursWorkedInADay(
      week,
      "Sunday",
      startHourSunday,
      startMinuteSunday,
      endHourSunday,
      endMinuteSunday,
      breakMinutes
    );

    let totalMinutes =
      mondayMinutes +
      tuesdayMinutes +
      wednesdayMinutes +
      thursdayMinutes +
      fridayMinutes +
      saturdayMinutes +
      sundayMinutes;

    if (totalMinutes > 0) {
      let totalHours = parseFloat(totalMinutes / 60).toFixed(1);
      totalHoursField.value = totalHours;
    }
  }
});

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
