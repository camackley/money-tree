import './Chart.css';

import React from "react";
import { AxisOptions, Chart as ReactChart } from "react-charts";
import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";

type MyDatum = { date: Date; stars: number };

function Chart() {
  const hoy = new Date();

  function randomStars(): number {
    return Math.round((Math.random() * 9 + 1) * 100) / 100;
  }

  const data = [
    {
      label: "MTA",
      data: [] as MyDatum[],
    },
  ];

  for (let i = 0; i < 10; i++) {
    const fecha = new Date();
    fecha.setDate(hoy.getDate() - i);
    data[0].data.push({ date: fecha, stars: randomStars() });
  }

   const primaryAxis = React.useMemo(
     (): AxisOptions<MyDatum> => ({
       getValue: (datum) => datum.date,
     }),
     []
   );

   const secondaryAxes = React.useMemo(
     (): AxisOptions<MyDatum>[] => [
       {
         getValue: (datum) => datum.stars
       },
     ],
     []
   );

   return (
    <div className="chart-group">
      <ButtonGroup size="sm" className="time-frames">
        <Button variant="secondary">1D</Button>
        <Button variant="secondary">1M</Button>
        <Button variant="secondary">1Y</Button>
        <Button variant="secondary">Max</Button>
      </ButtonGroup>
      <div className="chart-container">
        <ReactChart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </div>
   );
}

export { Chart };
