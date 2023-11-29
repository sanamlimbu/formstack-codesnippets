// Lunch break minutes
let weekOneMondayLunchBreakMinute = document.getElementById("field153911743");
weekOneMondayLunchBreakMinute.addEventListener("change", (event) => {
  calculateWeekOneWorkingHours(event.target.value);
});

let weekOneTuesdayLunchBreakMinute;
let weekOneWednesdayLunchBreakMinute;
let weekOneThursdayLunchBreakMinute;
let weekOneFridayLunchBreakMinute;
let weekOneSaturdayLunchBreakMinute;
let weekOneSundayLunchBreakMinute;

function calculateWeekOneWorkingHours(minutes) {
  // Start hour
  let weekOneMondayStartHour = document.getElementById("field153911732H");
  let weekOneTuesdayStartHour;
  let weekOneWednesdayStartHour;
  let weekOneThursdayStartHour;
  let weekOneFridayStartHour;
  let weekOneSaturdayStartHour;
  let weekOneSundayStartHour;

  // Start minutes
  let weekOneMondayStartMinute = document.getElementById("field153911732I");
  let weekOneTuesdayStartMinute;
  let weekOneWednesdayStartMinute;
  let weekOneThursdayStartMinute;
  let weekOneFridayStartMinute;
  let weekOneSaturdayStartMinute;
  let weekOneSundayStartMinute;

  // End hour
  let weekOneMondayEndHour = document.getElementById("field153911734H");
  let weekOneTuesdayEndHour;
  let weekOneWednesdayEndHour;
  let weekOneThursdayEndHour;
  let weekOneFridayEndHour;
  let weekOneSaturdayEndHour;
  let weekOneSundayEndHour;

  // End minutes
  let weekOneMondayEndMinute = document.getElementById("field15391173I");
  let weekOneTuesdayEndMinute;
  let weekOneWednesdayEndMinute;
  let weekOneThursdayEndMinute;
  let weekOneFridayEndMinute;
  let weekOneSaturdayEndMinute;
  let weekOneSundayEndMinute;

  let endMinutesMonday =
    parseInt(weekOneMondayEndHour.value) * 60 +
    parseInt(weekOneMondayEndMinute);

  let startMinutesMonday =
    parseInt(weekOneMondayStartHour.value) * 60 +
    parseInt(weekOneMondayStartMinute);

  console;

  if (endMinutesMonday < startMinutesMonday) {
    alert("Error input - start and end time.");
  }
}

function calculateWeekTwoWorkingHours() {
  // Start hour
  let weekTwoMondayStartHour;
  let weekTwoTuesdayStartHour;
  let weekTwoWednesdayStartHour;
  let weekTwoThursdayStartHour;
  let weekTwoFridayStartHour;
  let weekTwoSaturdayStartHour;
  let weekTwoSundayStartHour;

  // Start minutes
  let weekTwoMondayStartMinute;
  let weekTwoTuesdayStartMinute;
  let weekTwoWednesdayStartMinute;
  let weekTwoThursdayStartMinute;
  let weekTwoFridayStartMinute;
  let weekTwoSaturdayStartMinute;
  let weekTwoSundayStartMinute;

  // End hour
  let weekTwoMondayEndHour;
  let weekTwoTuesdayEndHour;
  let weekTwoWednesdayEndHour;
  let weekTwoThursdayEndHour;
  let weekTwoFridayEndHour;
  let weekTwoSaturdayEndHour;
  let weekTwoSundayEndHour;

  // End minutes
  let weekTwoMondayEndMinute;
  let weekTwoTuesdayEndMinute;
  let weekTwoWednesdayEndMinute;
  let weekTwoThursdayEndMinute;
  let weekTwoFridayEndMinute;
  let weekTwoSaturdayEndMinute;
  let weekTwoSundayEndMinute;

  // Lunch break minutes
  let weekTwoMondayLunchBreakMinute;
  let weekTwoTuesdayLunchBreakMinute;
  let weekTwoWednesdayLunchBreakMinute;
  let weekTwoThursdayLunchBreakMinute;
  let weekTwoFridayLunchBreakMinute;
  let weekTwoSaturdayLunchBreakMinute;
  let weekTwoSundayLunchBreakMinute;
}

function calculateWeekThreeWorkingHours() {
  // Start hour
  let weekThreeMondayStartHour;
  let weekThreeTuesdayStartHour;
  let weekThreeWednesdayStartHour;
  let weekThreeThursdayStartHour;
  let weekThreeFridayStartHour;
  let weekThreeSaturdayStartHour;
  let weekThreeSundayStartHour;

  // Start minutes
  let weekThreeMondayStartMinute;
  let weekThreeTuesdayStartMinute;
  let weekThreeWednesdayStartMinute;
  let weekThreeThursdayStartMinute;
  let weekThreeFridayStartMinute;
  let weekThreeSaturdayStartMinute;
  let weekThreeSundayStartMinute;

  // End hour
  let weekThreeMondayEndHour;
  let weekThreeTuesdayEndHour;
  let weekThreeWednesdayEndHour;
  let weekThreeThursdayEndHour;
  let weekThreeFridayEndHour;
  let weekThreeSaturdayEndHour;
  let weekThreeSundayEndHour;

  // End minutes
  let weekThreeMondayEndMinute;
  let weekThreeTuesdayEndMinute;
  let weekThreeWednesdayEndMinute;
  let weekThreeThursdayEndMinute;
  let weekThreeFridayEndMinute;
  let weekThreeSaturdayEndMinute;
  let weekThreeSundayEndMinute;

  // Lunch break minutes
  let weekThreeMondayLunchBreakMinute;
  let weekThreeTuesdayLunchBreakMinute;
  let weekThreeWednesdayLunchBreakMinute;
  let weekThreeThursdayLunchBreakMinute;
  let weekThreeFridayLunchBreakMinute;
  let weekThreeSaturdayLunchBreakMinute;
  let weekThreeSundayLunchBreakMinute;
}

function calculateWeekFourWorkingHours() {
  // Start hour
  let weekFourMondayStartHour;
  let weekFourTuesdayStartHour;
  let weekFourWednesdayStartHour;
  let weekFourThursdayStartHour;
  let weekFourFridayStartHour;
  let weekFourSaturdayStartHour;
  let weekFourSundayStartHour;

  // Start minutes
  let weekFourMondayStartMinute;
  let weekFourTuesdayStartMinute;
  let weekFourWednesdayStartMinute;
  let weekFourThursdayStartMinute;
  let weekFourFridayStartMinute;
  let weekFourSaturdayStartMinute;
  let weekFourSundayStartMinute;

  // End hour
  let weekFourMondayEndHour;
  let weekFourTuesdayEndHour;
  let weekFourWednesdayEndHour;
  let weekFourThursdayEndHour;
  let weekFourFridayEndHour;
  let weekFourSaturdayEndHour;
  let weekFourSundayEndHour;

  // End minutes
  let weekFourMondayEndMinute;
  let weekFourTuesdayEndMinute;
  let weekFourWednesdayEndMinute;
  let weekFourThursdayEndMinute;
  let weekFourFridayEndMinute;
  let weekFourSaturdayEndMinute;
  let weekFourSundayEndMinute;

  // Lunch break minutes
  let weekFourMondayLunchBreakMinute;
  let weekFourTuesdayLunchBreakMinute;
  let weekFourWednesdayLunchBreakMinute;
  let weekFourThursdayLunchBreakMinute;
  let weekFourFridayLunchBreakMinute;
  let weekFourSaturdayLunchBreakMinute;
  let weekFourSundayLunchBreakMinute;

  // Continue this pattern for subsequent weeks...
}

function calculateWeekFiveWorkingHours() {
  // Start hour
  let weekFiveMondayStartHour;
  let weekFiveTuesdayStartHour;
  let weekFiveWednesdayStartHour;
  let weekFiveThursdayStartHour;
  let weekFiveFridayStartHour;
  let weekFiveSaturdayStartHour;
  let weekFiveSundayStartHour;

  // Start minutes
  let weekFiveMondayStartMinute;
  let weekFiveTuesdayStartMinute;
  let weekFiveWednesdayStartMinute;
  let weekFiveThursdayStartMinute;
  let weekFiveFridayStartMinute;
  let weekFiveSaturdayStartMinute;
  let weekFiveSundayStartMinute;

  // End hour
  let weekFiveMondayEndHour;
  let weekFiveTuesdayEndHour;
  let weekFiveWednesdayEndHour;
  let weekFiveThursdayEndHour;
  let weekFiveFridayEndHour;
  let weekFiveSaturdayEndHour;
  let weekFiveSundayEndHour;

  let weekFiveMondayEndMinute;
  let weekFiveTuesdayEndMinute;
  let weekFiveWednesdayEndMinute;
  let weekFiveThursdayEndMinute;
  let weekFiveFridayEndMinute;
  let weekFiveSaturdayEndMinute;
  let weekFiveSundayEndMinute;

  let weekFiveMondayLunchBreakMinute;
  let weekFiveTuesdayLunchBreakMinute;
  let weekFiveWednesdayLunchBreakMinute;
  let weekFiveThursdayLunchBreakMinute;
  let weekFiveFridayLunchBreakMinute;
  let weekFiveSaturdayLunchBreakMinute;
  let weekFiveSundayLunchBreakMinute;
}
