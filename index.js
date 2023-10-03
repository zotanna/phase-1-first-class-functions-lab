const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function(drivers) {
    const length = drivers.length;
    return drivers.slice(length - 2, length);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
