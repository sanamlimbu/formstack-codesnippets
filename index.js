document.addEventListener("DOMContentLoaded", function () {
  let makeUpDay = document.getElementById("field152316204D");
  let makeUpMonth = document.getElementById("field152316204M");
  let makeUpYear = document.getElementById("field152316204Y");

  let makeUpClassRequestButton = document.getElementById(
    "fsSubmitButton5470042"
  );
  let makeUpClassRequestRow = document.getElementById("fsRow5470042-11");
  const datePickerMakeUpRequestInput =
    document.getElementById("ui-datepicker.div");

  const makeUpRequestWarning = document.createElement("span");
  makeUpRequestWarning.textContent = "Date must not be past!!!";
  makeUpRequestWarning.style.color = "red";
  makeUpRequestWarning.style.marginTop = "4px";

  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  makeUpDay.addEventListener("input", () => {
    handleMakeUpDateChange();
  });

  makeUpMonth.addEventListener("input", () => {
    handleMakeUpDateChange();
  });

  makeUpYear.addEventListener("input", () => {
    handleMakeUpDateChange();
  });

  datePickerMakeUpRequestInput.addEventListener("click", () => {
    console.log("hello");
    handleMakeUpDateChange();
  });

  function handleMakeUpDateChange() {
    let day = makeUpDay.value;
    let month = makeUpMonth.value;
    let year = makeUpYear.value;

    if (day && month && year) {
      const currentDate = new Date();
      const selectedDate = new Date(year, months[month], day);

      if (selectedDate < currentDate) {
        makeUpClassRequestButton.disabled = true;
        makeUpClassRequestButton.style.opacity = 0.5;
        makeUpClassRequestRow.appendChild(makeUpRequestWarning);
      } else {
        makeUpClassRequestButton.disabled = false;
        makeUpClassRequestButton.style.opacity = 1;
        if (makeUpClassRequestRow.contains(makeUpRequestWarning)) {
          makeUpClassRequestRow.removeChild(makeUpRequestWarning);
        }
      }
    }
  }

  //   function handleValueChange(mutationsList, observer) {
  //     for (const mutation of mutationsList) {
  //       console.log(mutation);
  //       if (
  //         mutation.type === "attributes" &&
  //         mutation.attributeName === "value"
  //       ) {
  //         const day = makeUpDay.value;
  //         const month = makeUpMonth.value;
  //         const year = makeUpYear.value;

  //         console.log(day, month, year);
  //       }
  //     }
  //   }

  const makeUpRequestDayObserver = new MutationObserver(
    (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "value"
        ) {
          const newValue = mutation.target.value;
          // Handle the value change here
          console.log("New value:", newValue);
        }
      }
    }
  );

  const config = { attributes: true, attributeFilter: ["value"] };

  makeUpRequestDayObserver.observe(makeUpDay, config);

  //   const makeUpRequestMonthObserver = new MutationObserver(handleValueChange);
  //   const makeUpRequestYearObserver = new MutationObserver(handleValueChange);

  //   const configMakeUpRequest = { attributes: true };

  //   makeUpRequestDayObserver.observe(makeUpDay, configMakeUpRequest);
  //   makeUpRequestMonthObserver.observe(makeUpMonth, configMakeUpRequest);
  //   makeUpRequestYearObserver.observe(makeUpYear, configMakeUpRequest);

  //   $(makeUpDay).on("input", function () {
  //     handleValueChange([
  //       { type: "attributes", attributeName: "value", target: makeUpDay },
  //     ]);
  //   });

  //   $(makeUpMonth).on("input", function () {
  //     handleValueChange([
  //       { type: "attributes", attributeName: "value", target: makeUpMonth },
  //     ]);
  //   });

  //   $(makeUpYear).on("input", function () {
  //     handleValueChange([
  //       { type: "attributes", attributeName: "value", target: makeUpYear },
  //     ]);
  //   });
});

function totalHoursWorkedInADay(
  week,
  day,
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
