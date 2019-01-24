import React from "react";

//Stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span>NavBar</span>
        <span className="badge badge-pill badge-secondary">
          Category: {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// export default class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             Category: {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
