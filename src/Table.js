import React from "react";
export default function Table(props) {
  return (
    <React.Fragment>
      {/* /.card-header */}

      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.loanName}</td>
        <td>{props.desc}</td>
       
        <td>{props.amount}</td>
        <td>{props.edit}</td>
        <td>{props.delete}</td>
      </tr>
    </React.Fragment>
  );
}


