function getReadableTime(startTimeSeconds) {
    const date = new Date(startTimeSeconds * 1000); // convert to milliseconds
    return date.toLocaleString(); // readable local date & time
  }
  function getTimeUntilContest(relativeTimeSeconds) {
    let secondsLeft = -relativeTimeSeconds; // contest is in the future
  
    if (secondsLeft <= 0) return "Contest has started or finished";
  
    const months = Math.floor(secondsLeft / (30 * 24 * 3600));
    secondsLeft %= 30 * 24 * 3600;
  
    const weeks = Math.floor(secondsLeft / (7 * 24 * 3600));
    secondsLeft %= 7 * 24 * 3600;
  
    const days = Math.floor(secondsLeft / (24 * 3600));
    secondsLeft %= 24 * 3600;
  
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft %= 3600;
  
    const minutes = Math.floor(secondsLeft / 60);
  
    let result = '';
    if (months) result += `${months}mo `;
    if (weeks) result += `${weeks}w `;
    if (days) result += `${days}d `;
    if (hours) result += `${hours}h `;
    if (minutes) result += `${minutes}m`;
  
    return result.trim() + ' remaining';
  }
  
  
  
 
  
console.log(getTimeUntilContest(-704639))
console.log(getReadableTime(1742016900))