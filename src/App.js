import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
          ],
          pageTitle: 'React components',
          showCars: false
        }
    }
    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars})
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
    deleteHandler(index) {
        console.log('delete');
        let cars =  this.state.cars.concat();
        cars.splice(index, 1);
        this.setState({cars})
    }

    render() {
    const cars = this.state.cars
      return (
        <div className="App">
          <h1>{this.state.pageTitle}</h1>

          <button onClick={this.toggleCarsHandler}>Toggle cars </button>

          <div style={{width:400, margin: 'auto', paddingTop: '20px'}}>
              { this.state.showCars
                 ? this.state.cars.map((car, index)=> {
                    return (
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={(event)=> this.onChangeName(event.target.value, index)}
                        />
                    )
                  })
                 : null
              }
          </div>
        </div>
      );
    }

}

export default App;
