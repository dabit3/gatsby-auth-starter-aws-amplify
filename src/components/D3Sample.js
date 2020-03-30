import React, { Component } from "react";
import * as d3 from "d3";

const data =[
  {
    "score": 8,
    "weight": 96,
    "category": "Commercial",
    "label": "Hydrogen"
  },
  {
    "score": 63,
    "weight": 75,
    "category": "Commercial",
    "label": "Helium"
  },
  {
    "score": 61,
    "weight": 71,
    "category": "Finance",
    "label": "Lithium"
  },
  {
    "score": 84,
    "weight": 51,
    "category": "Super Business",
    "label": "Beryllium"
  },
  {
    "score": 8,
    "weight": 69,
    "category": "Commercial",
    "label": "Boron"
  },
  {
    "score": 74,
    "weight": 95,
    "category": "Commercial",
    "label": "Carbon"
  },
  {
    "score": 33,
    "weight": 12,
    "category": "Finance",
    "label": "Nitrogen"
  },
  {
    "score": 29,
    "weight": 61,
    "category": "Commercial",
    "label": "Oxygen"
  },
  {
    "score": 31,
    "weight": 19,
    "category": "Super Business",
    "label": "Fluorine"
  },
  {
    "score": 42,
    "weight": 62,
    "category": "Commercial",
    "label": "Neon"
  }
]

class Circle extends Component {
  state = {};
  render() {
    let { x, y, r, fill, ...props } = this.props;
    return <circle cx={x} cy={y} r={r} fill={fill} {...props} />;
  }
}

class D3Sample extends Component {
  state = {
    width: 300,
    height: 500,
    padding: 20,
    data,
    x: "score",
    y: "weight"
  };

  render() {
    let { width, height, padding, data, x, y } = this.state;

    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data.map(d => d[x]))])
      .range([0 + padding, width - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data.map(d => d[y]))])
      .range([height - padding, 0 + padding]);

    return (
      <div>
        <svg width={width} height={height}>
          {this.state.data.map(d => {
            return <Circle x={xScale(d[x])} y={yScale(d[y])} r={6} />;
          })}
        </svg>
      </div>
    );
  }
}

export default D3Sample;
