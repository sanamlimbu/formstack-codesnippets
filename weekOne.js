let weekOneDays = 156160358;
let weekOneStartTime = weekOneDays + 1;
let weekOneEndTime = weekOneDays + 2;
let weekOneLunchBreak = weekOneDays + 3;

let weekOneDaysIDs = [];
let weekOneStartHourIDs = [];
let weekOneStartIntervalIDs = [];
let weekOneEndHourIDs = [];
let weekOneEndIntervalIDs = [];
let weekOneLunchBreakIDs = [];

for (let i = 0; i < 7; i++) {
  let dayID = `field${weekOneDays}_${i + 1}`;
  weekOneDaysIDs.push(dayID);

  let startHourID = `field${weekOneStartTime + i * 3}H`;
  let startIntervalID = `field${weekOneStartTime + i * 3}I`;
  weekOneStartHourIDs.push(startHourID);
  weekOneStartIntervalIDs.push(startIntervalID);

  let endHourID = `field${weekOneEndTime + i * 3}H`;
  let endIntervalID = `field${weekOneEndTime + i * 3}I`;
  weekOneEndHourIDs.push(endHourID);
  weekOneEndIntervalIDs.push(endIntervalID);

  let lunchBreakID = `field${weekOneLunchBreak + i * 3}`;
  weekOneLunchBreakIDs.push(lunchBreakID);
}

let weekOneLastLunchBreak = parseInt(
  weekOneLunchBreakIDs[6].replace("field", "")
);
let weekOneTotalHoursElement = document.getElementById(
  `field${weekOneLastLunchBreak + 1}`
);
let weekOneCalculateElement = document.getElementById(
  `field${weekOneLastLunchBreak + 2}_1`
);
weekOneCalculateElement.addEventListener("change", () => {
  let totalMinutes = calculateInWeek(
    weekOneDaysIDs,
    weekOneStartHourIDs,
    weekOneStartIntervalIDs,
    weekOneEndHourIDs,
    weekOneEndIntervalIDs,
    weekOneLunchBreakIDs
  );

  if (totalMinutes >= 0) {
    let totalHours = parseFloat(totalMinutes / 60).toFixed(2);
    weekOneTotalHoursElement.value = totalHours;
  }
});

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
    return 0;
  }

  let totalMinutes = parseInt(endMinutes - startMinutes - lunchBreakMinutes);

  if (totalMinutes < 0) {
    return 0;
  }
  return totalMinutes;
}
