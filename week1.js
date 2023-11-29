document.addEventListener("DOMContentLoaded", function (event) {
  let weekTwoMonday = document.getElementById("field153914784_1");
  let weekTwoTuesday = document.getElementById("field153914784_2");
  let weekTwoWednesday = document.getElementById("field153914784_3");
  let weekTwoThursday = document.getElementById("field153914784_4");
  let weekTwoFriday = document.getElementById("field153914784_5");
  let weekTwoSaturday = document.getElementById("field153914784_6");
  let weekTwoSunday = document.getElementById("field153914784_7");

  let weekThreeMonday = document.getElementById("field153914872_1");
  let weekThreeTuesday = document.getElementById("field153914872_2");
  let weekThreeWednesday = document.getElementById("field153914872_3");
  let weekThreeThursday = document.getElementById("field153914872_4");
  let weekThreeFriday = document.getElementById("field153914872_5");
  let weekThreeSaturday = document.getElementById("field153914872_6");
  let weekThreeSunday = document.getElementById("field153914872_7");

  let weekFourMonday = document.getElementById("field153915107_1");
  let weekFourTuesday = document.getElementById("field153915107_2");
  let weekFourWednesday = document.getElementById("field153915107_3");
  let weekFourThursday = document.getElementById("field153915107_4");
  let weekFourFriday = document.getElementById("field153915107_5");
  let weekFourSaturday = document.getElementById("field153915107_6");
  let weekFourSunday = document.getElementById("field153915107_7");

  let weekFiveMonday = document.getElementById("field154242576_1");
  let weekFiveTuesday = document.getElementById("field154242576_2");
  let weekFiveWednesday = document.getElementById("field154242576_3");
  let weekFiveThursday = document.getElementById("field154242576_4");
  let weekFiveFriday = document.getElementById("field154242576_5");
  let weekFiveSaturday = document.getElementById("field154242576_6");
  let weekFiveSunday = document.getElementById("field154242576_7");

  let weekSixMonday = document.getElementById("field154864272_1");
  let weekSixTuesday = document.getElementById("field154864272_2");
  let weekSixWednesday = document.getElementById("field154864272_3");
  let weekSixThursday = document.getElementById("field154864272_4");
  let weekSixFriday = document.getElementById("field154864272_5");
  let weekSixSaturday = document.getElementById("field154864272_6");
  let weekSixSunday = document.getElementById("field154864272_7");

  let weekSevenMonday = document.getElementById("field154864629_1");
  let weekSevenTuesday = document.getElementById("field154864629_2");
  let weekSevenWednesday = document.getElementById("field154864629_3");
  let weekSevenThursday = document.getElementById("field154864629_4");
  let weekSevenFriday = document.getElementById("field154864629_5");
  let weekSevenSaturday = document.getElementById("field154864629_6");
  let weekSevenSunday = document.getElementById("field154864629_7");

  let weekEightMonday = document.getElementById("field154864724_1");
  let weekEightTuesday = document.getElementById("field154864724_2");
  let weekEightWednesday = document.getElementById("field154864724_3");
  let weekEightThursday = document.getElementById("field154864724_4");
  let weekEightFriday = document.getElementById("field154864724_5");
  let weekEightSaturday = document.getElementById("field154864724_6");
  let weekEightSunday = document.getElementById("field154864724_7");

  let weekNineMonday = document.getElementById("field154866614_1");
  let weekNineTuesday = document.getElementById("field154866614_2");
  let weekNineWednesday = document.getElementById("field154866614_3");
  let weekNineThursday = document.getElementById("field154866614_4");
  let weekNineFriday = document.getElementById("field154866614_5");
  let weekNineSaturday = document.getElementById("field154866614_6");
  let weekNineSunday = document.getElementById("field154866614_7");

  let weekTenMonday = document.getElementById("field154866799_1");
  let weekTenTuesday = document.getElementById("field154866799_2");
  let weekTenWednesday = document.getElementById("field154866799_3");
  let weekTenThursday = document.getElementById("field154866799_4");
  let weekTenFriday = document.getElementById("field154866799_5");
  let weekTenSaturday = document.getElementById("field154866799_6");
  let weekTenSunday = document.getElementById("field154866799_7");

  let weekElevenMonday = document.getElementById("field154867087_1");
  let weekElevenTuesday = document.getElementById("field154867087_2");
  let weekElevenWednesday = document.getElementById("field154867087_3");
  let weekElevenThursday = document.getElementById("field154867087_4");
  let weekElevenFriday = document.getElementById("field154867087_5");
  let weekElevenSaturday = document.getElementById("field154867087_6");
  let weekElevenSunday = document.getElementById("field154867087_7");

  let weekTwelveMonday = document.getElementById("field154867156_1");
  let weekTwelveTuesday = document.getElementById("field154867156_2");
  let weekTwelveWednesday = document.getElementById("field154867156_3");
  let weekTwelveThursday = document.getElementById("field154867156_4");
  let weekTwelveFriday = document.getElementById("field154867156_5");
  let weekTwelveSaturday = document.getElementById("field154867156_6");
  let weekTwelveSunday = document.getElementById("field154867156_7");

  // Week 1
  // -------------------------------------------------------------------------
  let weekOneMonday = document.getElementById("field153914270_1");
  let weekOneTuesday = document.getElementById("field153914270_2");
  let weekOneWednesday = document.getElementById("field153914270_3");
  let weekOneThursday = document.getElementById("field153914270_4");
  let weekOneFriday = document.getElementById("field153914270_5");
  let weekOneSaturday = document.getElementById("field153914270_6");
  let weekOneSunday = document.getElementById("field153914270_7");

  let weekOneTotalHoursField = document.getElementById("field154867538");

  let weekOneMondayLunchBreakField = document.getElementById("field153911743");
  weekOneMondayLunchBreakField.addEventListener(
    "input",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartHourMonday = document.getElementById("field153911732H");
  weekOneStartHourMonday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartMinuteMonday = document.getElementById("field153911732I");
  weekOneStartMinuteMonday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndHourMonday = document.getElementById("field153911734H");
  weekOneEndHourMonday.addEventListener("change", calculateWorkingHoursWeekOne);
  let weekOneEndMinuteMonday = document.getElementById("field153911734I");
  weekOneEndMinuteMonday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );

  let weekOneTuesdayLunchBreakField = document.getElementById("field153914231");
  weekOneTuesdayLunchBreakField.addEventListener(
    "input",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartHourTuesday = document.getElementById("field153914219H");
  weekOneStartHourTuesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartMinuteTuesday = document.getElementById("field153914219I");
  weekOneStartMinuteTuesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndHourTuesday = document.getElementById("field153914230H");
  weekOneEndHourTuesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndMinuteTuesday = document.getElementById("field153914230I");
  weekOneEndMinuteTuesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );

  let weekOneWednesdayLunchBreakField =
    document.getElementById("field153914237");
  weekOneWednesdayLunchBreakField.addEventListener(
    "input",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartHourWednesday = document.getElementById("field153914235H");
  weekOneStartHourWednesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartMinuteWednesday = document.getElementById("field153914235I");
  weekOneStartMinuteWednesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndHourWednesday = document.getElementById("field153914236H");
  weekOneEndHourWednesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndMinuteWednesday = document.getElementById("field153914236I");
  weekOneEndMinuteWednesday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );

  let weekOneThursdayLunchBreakField =
    document.getElementById("field153914246");
  weekOneThursdayLunchBreakField.addEventListener(
    "input",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartHourThursday = document.getElementById("field153914243H");
  weekOneStartHourThursday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartMinuteThursday = document.getElementById("field153914243I");
  weekOneStartMinuteThursday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndHourThursday = document.getElementById("field153914244H");
  weekOneEndHourThursday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndMinuteThursday = document.getElementById("field153914244I");
  weekOneEndMinuteThursday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );

  let weekOneFridayLunchBreakField = document.getElementById("field153914252");
  weekOneFridayLunchBreakField.addEventListener(
    "input",
    calculateWorkingHoursWeekOne
  );
  let weeKOneStartHourFriday = document.getElementById("field153914250H");
  weeKOneStartHourFriday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartMinuteFriday = document.getElementById("field153914250I");
  weekOneStartMinuteFriday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndHourFriday = document.getElementById("field153914251H");
  weekOneEndHourFriday.addEventListener("change", calculateWorkingHoursWeekOne);
  let weekOneEndMinuteFriday = document.getElementById("field153914251I");
  weekOneEndMinuteFriday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );

  let weekOneSaturdayLunchBreakField =
    document.getElementById("field153914261");
  weekOneSaturdayLunchBreakField.addEventListener(
    "input",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartHourSaturday = document.getElementById("field153914259H");
  weekOneStartHourSaturday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartMinuteSaturday = document.getElementById("field153914259I");
  weekOneStartMinuteSaturday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndHourSaturday = document.getElementById("field153914260H");
  weekOneEndHourSaturday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndMinuteSaturday = document.getElementById("field153914260I");
  weekOneEndMinuteSaturday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );

  let weekOneSundayLunchBreakField = document.getElementById("field153914265");
  weekOneSundayLunchBreakField.addEventListener(
    "input",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartHourSunday = document.getElementById("field153914263H");
  weekOneStartHourSunday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneStartMinuteSunday = document.getElementById("field153914263I");
  weekOneStartMinuteSunday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );
  let weekOneEndHourSunday = document.getElementById("field153914264H");
  weekOneEndHourSunday.addEventListener("change", calculateWorkingHoursWeekOne);
  let weekOneEndMinuteSunday = document.getElementById("field153914264I");
  weekOneEndMinuteSunday.addEventListener(
    "change",
    calculateWorkingHoursWeekOne
  );

  function calculateWorkingHoursWeekOne(breakMinutes) {
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
        weekOneStartHourMonday,
        weekOneStartMinuteMonday,
        weekOneEndHourMonday,
        weekOneEndMinuteMonday,
        mondayBreakMinutes
      );
    }

    let tuesdayMinutes = 0;
    if (weekOneTuesday.checked) {
      tuesdayMinutes = totalHoursWorkedInADay(
        weekOneStartHourTuesday,
        weekOneStartMinuteTuesday,
        weekOneEndHourTuesday,
        weekOneEndMinuteTuesday,
        tuesdayBreakMinutes
      );
    }
    let wednesdayMinutes = 0;
    if (weekOneWednesday.checked) {
      wednesdayMinutes = totalHoursWorkedInADay(
        weekOneStartHourWednesday,
        weekOneStartMinuteWednesday,
        weekOneEndHourWednesday,
        weekOneEndMinuteWednesday,
        wednesdayBreakMinutes
      );
    }
    let thursdayMinutes = 0;
    if (weekOneThursday.checked) {
      thursdayMinutes = totalHoursWorkedInADay(
        weekOneStartHourThursday,
        weekOneStartMinuteThursday,
        weekOneEndHourThursday,
        weekOneEndMinuteThursday,
        thursdayBreakMinutes
      );
    }

    let fridayMinutes = 0;
    if (weekOneFriday.checked) {
      fridayMinutes = totalHoursWorkedInADay(
        weeKOneStartHourFriday,
        weekOneStartMinuteFriday,
        weekOneEndHourFriday,
        weekOneEndMinuteFriday,
        fridayBreakMinutes
      );
    }

    let saturdayMinutes = 0;
    if (weekOneSaturday.checked) {
      saturdayMinutes = totalHoursWorkedInADay(
        weekOneStartHourSaturday,
        weekOneStartMinuteSaturday,
        weekOneEndHourSaturday,
        weekOneEndMinuteSaturday,
        saturdayBreakMinutes
      );
    }

    let sundayMinutes = 0;
    if (weekOneSunday.checked) {
      sundayMinutes = totalHoursWorkedInADay(
        weekOneStartHourSunday,
        weekOneStartMinuteSunday,
        weekOneEndHourSunday,
        weekOneEndMinuteSunday,
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

    if (totalMinutes > 0) {
      let totalHours = parseFloat(totalMinutes / 60).toFixed(1);
      weekOneTotalHoursField.value = totalHours;
    }
  }

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
});
