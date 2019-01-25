import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  //   state = {
  //     counters: [
  //       { name: "item 1", id: 1, value: 4 },
  //       { name: "item 2", id: 2, value: 0 },
  //       { name: "item 3", id: 3, value: 0 },
  //       { name: "item 4", id: 4, value: 0 }
  //     ]
  //   };

  //   handleDelete = counterId => {
  //     // console.log("Event Handler Called", counterId);
  //     const counters = this.state.counters.filter(
  //       counter => counter.id !== counterId
  //     );
  //     this.setState({
  //       counters
  //     });
  //   };

  //   handleReset = () => {
  //     const counters = this.state.counters.map(counter => {
  //       counter.value = 0;
  //       return counter;
  //     });
  //     this.setState({ counters });
  //   };

  //   handleIncrement = counter => {
  //     // console.log(counter);
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(counter);
  //     counters[index] = { ...counter };
  //     counters[index].value++;
  //     this.setState({ counters });
  //   };

  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}
