import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';
import React from 'react';

class App extends React.Component {
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010},
        ],
        pageTitle: 'React components',
        showCars: false
    }
    changeTitleHandler = (newTitle) => {
        this.setState({
          pageTitle: newTitle
        })
    }

    toggleCarsHandler = () => {
        this.setState({
          showCars: !this.state.showCars
        })
    }

    handleInput = (event) => {
        this.setState({
          pageTitle: event.target.value
        })
    }

    render() {
    const cars = this.state.cars
      return (
        <div className="App">
          <h1>{this.state.pageTitle}</h1>

          <button onClick={this.toggleCarsHandler}>Toggle cars </button>

          { this.state.showCars
             ? this.state.cars.map((car, index)=> {
                return (
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={()=> this.changeTitleHandler(car.name)}
                    />
                )
              })
             : null
          }
        </div>
      );
    }

}

export default App;
