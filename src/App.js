import React, { Component } from 'react';
import "./App.css";
import $ from 'jquery'
import { Bar } from "react-chartjs-2";
import {
  Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip
} from 'chart.js';
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: [],
      indiceI: 0,
      indiceJ: 0,
      clickBubblee: 0
    };
    this.ordenar = this.ordenar.bind(this)

  }

  componentDidMount() {
    const dat = new Array();
    // !LLENAMOS EL ARREGLO
    for (var i = 0; i < 10; i++) {
      var num = Math.floor(Math.random() * 40);
      dat.push(num)
    }
    this.setState({
      labels: dat,
      data: dat,
      indiceJ: this.state.indiceI + 1,
    });

  }
  ordenar() {
    this.setState({
      clickBubblee: this.state.clickBubblee + 1
    })
    var dat = new Array(10);
    dat = this.state.data;
    var lenght = dat.length;
    var i = this.state.indiceI;
    var j = this.state.indiceJ;
    var x;
    if (j < lenght) {

      if (dat[j] < dat[i]) {

        var aux = dat[i];
        dat[i] = dat[j];
        dat[j] = aux;
        x = dat;
        this.setState({
          labels: x,
          data: x
        })
      }

      this.setState({
        indiceJ: this.state.indiceJ + 1,
      });
      
    } else if (i < lenght - 1) {
      
      this.setState({
        indiceI: this.state.indiceI + 1,
        indiceJ: this.state.indiceI + 1,
      });

    } else if (i == 9 && j == 10) {
      alert('Arreglo ordenado en ' + this.state.clickBubblee + " clicks")
    }
  }
  render() {
    return (
      <div className="App">
        <div style={{ width: 700 }} className="App">
          <Bar
            data={{
              labels: this.state.labels,
              datasets: [{
                label: 'BubbleSort',
                data: this.state.data,
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                  'rgb(0,0,0)',
                ],
                borderWidth: 2
              }]
            }} />
        </div>
        <button className='btn btn-primary btn-lg' id='btn' onClick={this.ordenar}>Click</button>

      </div>
    );

  }
}

export default App;
