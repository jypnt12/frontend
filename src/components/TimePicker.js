import React, { useState } from 'react';

const TimePicker = ({value, timeName}) => {
  const [time, setTime] = useState({ hours: '', minutes: '' });

  const handleHourChange = (e) => {
    setTime({ ...time, hours: e.target.value });
  };

  const handleMinuteChange = (e) => {
    setTime({ ...time, minutes: e.target.value });
  };

  // Generate options for hours (0 to 23)
  const hourOptions = [];
  for (let i = 0; i < 24; i++) {
    hourOptions.push(<option key={i} value={i}>{String(i).padStart(2, '0')}</option>);
  }

  // Generate options for minutes (0 to 59)
  const minuteOptions = [];
  for (let i = 0; i < 60; i++) {
    minuteOptions.push(<option key={i} value={i}>{String(i).padStart(2, '0')}</option>);
  }

  return (
    <div >
        <label>{timeName}</label>
        <div className='time-picker'>
            

            {/* <label htmlFor="hours">Hours:</label> */}
            <select  value={time.hours} onChange={handleHourChange}>
                <option value="">Hour</option>
                {hourOptions}
            </select>

            {/* <label htmlFor="minutes">Minutes:</label> */}
            <select  value={time.minutes} onChange={handleMinuteChange}>
                <option value="">Minutes</option>
                {minuteOptions}
            </select>
        </div>
    
    </div>
  );
};

export default TimePicker;
