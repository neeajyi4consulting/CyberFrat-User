import React from "react";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import TableComponent from "./table.component";

class ExportPdfComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: "Neeraj Yadav",
      courseName: "Andriod Studio",
    };
  }

  render() {
    return (
      <div>
        <TableComponent
          currentUser={this.state.currentUser}
          courseName={this.state.courseName}
          ref={(response) => (this.componentRef = response)}
        />

        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => (
            <button className="btn btn-primary bg-red-500 rounded-lg  p-3 text-white">
              Print to PDF!
            </button>
          )}
        />
        <Link
          to="/dashboard"
          className="bg-red-500 rounded-lg float-right p-3 text-white"
        >
          Go To Home
        </Link>
      </div>
    );
  }
}

export default ExportPdfComponent;
