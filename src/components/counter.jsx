// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     tags: ["tag1", "tag2", "tag3"]
//   };

//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button className="btn btn-secondary btn-sm">Increment</button>
//         <ul>
//           {this.state.tags.map(tag => (
//             <li key={tag}>{tag}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;

import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("DidUpdated");
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  // }

  // componentWillUnmount() {
  //   console.log("Counter - WillUnmount");
  // }

  render() {
    // console.log("Props", this.props.id);
    return (
      <div>
        <span className="badge badge-primary m-2">
          {this.props.counter.name}
        </span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button className="btn btn-secondary btn-sm m-2">-</button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
