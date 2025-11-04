const combineIntervals = (intervals) => {
  const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);
  const combined = [ intervals[0] ];
  
  for (let currentInterval of sortedIntervals.slice(1)) {
    const lastInterval = combined[combined.length - 1];
    const [ lastStart, lastEnd ] = lastInterval;
    const [ currentStart, currentEnd ] = currentInterval;

    if (currentStart <= lastEnd) {
      if (currentEnd > lastEnd) {
        lastInterval[1] = currentEnd;
      }
    } else {
      combined.push(currentInterval);
    }
  }

  return combined;
};