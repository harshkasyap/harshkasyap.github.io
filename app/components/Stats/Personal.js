import React, { Fragment, useState, useEffect } from 'react';

import Table from './Table';

import strings from '../../static/language/strings'

const PersonalStats = () => {
  const [data, setData] = useState({});

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date(strings.dateOfBirth);
    setData(Object.assign({}, data, {
      age: {
        label: 'Current age',
        value: ((Date.now() - birthTime) / divisor).toFixed(11),
      },
      time: {
        label: 'Let me remind you the time',
        value: new Intl.DateTimeFormat(undefined, {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
      },
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <Fragment>
      {/* <h3>Some stats about me</h3> */}
      <Table data={Object.keys(data).map(key => data[key])} />
    </Fragment>
  );
};

export default PersonalStats;
