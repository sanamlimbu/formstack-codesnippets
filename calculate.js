let weekStartValues = [156160358, 156160388, 156160416];
let weekNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];
let weeks = {};

for (let i = 0; i < weekStartValues.length; i++) {
  let week = {
    dayIDs: [],
    startHourIDs: [],
    startIntervalIDs: [],
    endHourIDs: [],
    endIntervalIDs: [],
    lunchBreakIDs: [],
  };

  let day = weekStartValues[i];
  let startTime = day + 1;
  let endTime = day + 2;
  let lunchBreak = day + 3;

  for (let j = 0; j < 7; j++) {
    let dayID = `field${day}_${j + 1}`;
    week.dayIDs.push(dayID);

    let startHourID = `field${startTime + j * 3}H`;
    let startIntervalID = `field${startTime + j * 3}I`;
    week.startHourIDs.push(startHourID);
    week.startIntervalIDs.push(startIntervalID);

    let endHourID = `field${endTime + j * 3}H`;
    let endIntervalID = `field${endTime + j * 3}I`;
    week.endHourIDs.push(endHourID);
    week.endIntervalIDs.push(endIntervalID);

    let lunchBreakID = `field${lunchBreak + j * 3}`;
    week.lunchBreakIDs.push(lunchBreakID);
  }

  weeks[weekNames[i]] = week;

  let lastLunchBreak = parseInt(week.lunchBreakIDs[6].replace("field", ""));

  let calculateElement = document.getElementById(
    `field${lastLunchBreak + 1}_1`
  );
  let totalHourID = `field${lastLunchBreak + 2}`;

  calculateElement.addEventListener("change", () => {
    let totalMinutes = calculateInWeek(
      week.dayIDs,
      week.startHourIDs,
      week.startIntervalIDs,
      week.endHourIDs,
      week.endIntervalIDs,
      week.lunchBreakIDs
    );

    if (totalMinutes >= 0) {
      let totalHours = parseFloat(totalMinutes / 60).toFixed(2);
      let totalHourElement = document.getElementById(totalHourID);
      totalHourElement.value = totalHours;
    }
  });
}
console.log(weeks);

function calculateInWeek(
  dayIDs,
  startHourIDs,
  startIntervalIDs,
  endHourIDs,
  endIntervalIDs,
  lunchBreakIDs
) {
  let total = 0;
  for (i = 0; i < 7; i++) {
    let dayElement = document.getElementById(dayIDs[i]);
    if (dayElement.checked) {
      total =
        total +
        calculateInDay(
          startHourIDs[i],
          startIntervalIDs[i],
          endHourIDs[i],
          endIntervalIDs[i],
          lunchBreakIDs[i]
        );
    }
  }
  return total;
}

function calculateInDay(
  startHourID,
  startIntervalID,
  endHourID,
  endIntervalID,
  lunchBreakID
) {
  let startHourElement = document.getElementById(startHourID);
  let startIntervalElement = document.getElementById(startIntervalID);
  let endHourElement = document.getElementById(endHourID);
  let endIntervalElement = document.getElementById(endIntervalID);
  let lunchBreakElement = document.getElementById(lunchBreakID);

  let startMinutes =
    parseInt(startHourElement.options[startHourElement.selectedIndex].value) *
      60 +
    parseInt(
      startIntervalElement.options[startIntervalElement.selectedIndex].value
    );

  let endMinutes =
    parseInt(endHourElement.options[endHourElement.selectedIndex].value) * 60 +
    parseInt(
      endIntervalElement.options[endIntervalElement.selectedIndex].value
    );

  let lunchBreakMinutes = parseInt(lunchBreakElement.value);

  if (isNaN(startMinutes) || isNaN(endMinutes) || isNaN(lunchBreakMinutes)) {
    return 0;
  }

  if (endMinutes < startMinutes || lunchBreakMinutes < 0) {
    alert("Invalid input!!!");
    return 0;
  }

  let totalMinutes = parseInt(endMinutes - startMinutes - lunchBreakMinutes);

  if (totalMinutes < 0) {
    return 0;
  }
  return totalMinutes;
}
