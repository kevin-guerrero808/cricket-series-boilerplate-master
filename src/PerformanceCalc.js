
const PerformanceCalculator=(runs,balls)=>{
      if (runs > 100 && balls < 50) {
            return calculateAverage(runs, balls, 20);
      } else if (runs > 50 && balls < 20) {
            return calculateAverage(runs, balls, 10);
      } else if (runs > 30 && balls < 15) {
            return calculateAverage(runs, balls, 1);
      } else {
            return calculateAverage(runs, balls, 0);
      }
}

const calculateAverage = (runs, balls, aditionalPercent) => {
      const average = runs / balls;
      return average + (average * aditionalPercent / 100);
}

module.exports={PerformanceCalculator}
