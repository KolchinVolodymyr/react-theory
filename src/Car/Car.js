import React from 'react';
import './Car.css';
import PropTypes from 'prop-types';

class Car extends React.Component {
    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Car getDerivedStateFromProps', nextProps, prevState)

        return prevState
    }
    getSnapshotBeforeUpdate() {
        console.log('Car getSnapshotBeforeUpdate')
    }


    render() {
//        if (Math.random() > 0.7) {
//          throw new Error('Car random failed')
//        }
        console.log('Car render')
        const inputClasses = ['input']

        if(this.props.name !== '') {
         inputClasses.push('green')
        } else {
         inputClasses.push('red')
        }

        if(this.props.name.length >4) {
         inputClasses.push('bold')
        }

        const style = {
         border: '1px solid #ccc',
         boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
         ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px rgba(0, 0, 0, .25)',
            cursor: 'pointer'
         }
        }

        return (
             <div className='Car' style={style}>
                 <h2>Car name: {this.props.name}</h2>
                 <p>Year: <strong>{this.props.year}</strong></p>
                 <input
                     type="text"
                     onChange={this.props.onChangeName}
                     value={this.props.name}
                     className={inputClasses.join(' ')}
                     />
                 <button onClick={this.props.onDelete}>Delete</button>
            </div>)}
 }

 Car.propTypes = {
   name: PropTypes.string.isRequired,
   year: PropTypes.number,
   onChangeName: PropTypes.func,
   onDelete: PropTypes.func
 }

export default Car