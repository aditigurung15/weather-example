import React, { useEffect, useState } from 'react';

const Clock = ({ format, interval, ticking }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (ticking) {
      const timerId = setInterval(() => {
        setTime(new Date());
      }, interval || 1000); // default to 1000ms if no interval is specified
      return () => clearInterval(timerId);
    }
  }, [ticking, interval]);

  // Format the time based on the `format` prop
  const formattedTime = format
    ? new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(time)
    : time.toLocaleTimeString();

  return <div>{formattedTime}</div>;
};

export default Clock;
