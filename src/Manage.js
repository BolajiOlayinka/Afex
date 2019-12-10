import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
// import { Form } from "reactstrap";
import Table from "./Table";

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Add, Edit and Delete Loan Requests",
      act: 0,
      index: "",
      datas: []
    };
  }
  componentDidMount() {
    this.refs.name.focus();
  }
  fSubmit = e => {
    e.preventDefault();
    console.log("try");
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let amount = this.refs.amount.value;
    let desc = this.refs.desc.value;
    let loanName=this.refs.loanName.value;
    if (this.state.act === 0) {
      let data = {
        name,
        amount,
        desc,
        loanName

      };
      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].name = name;
      datas[index].amount = amount;
      datas[index].desc = desc;
      datas[index].loanName = loanName;
    }

    this.setState({
      datas: datas,
      act: 0
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  };
  fDelete = i => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });
  };
  fEdit = i => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.amount.value = data.amount;
    this.refs.desc.value = data.desc;
    this.refs.loanName.value = data.loanName;
    

    this.setState({
      act: 1,
      index: i
    });
    this.refs.name.focus();
  };
  render() {
    let datas = this.state.datas;
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <ManageContainer>
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  {/* left column */}
                  <div className="col-md-12 mx-auto">
                    {/* general form elements */}
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title " style={{textAlign:"center",float:"none"}}>
                          {this.state.title}
                        </h3>
                      </div>
                      {/* /.card-header */}
                      {/* form start */}
                      <form ref="myForm">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label>Farmer's Name</label>
                                <input
                                  type="text"
                                  ref="name"
                                  className="form-control"
                                  placeholder="Enter ..."
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label htmlFor="exampleInputName">
                                  Loan Name
                                </label>
                                <input
                                ref="loanName"
                                  type="text"
                                  className="form-control"
                                  id="exampleInputName"
                                  placeholder="Enter Loan Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label htmlFor="exampleInputDesc">
                                  Loan Description
                                </label>
                                <input
                                  type="text"
                                  ref="desc"
                                  className="form-control"
                                  id="exampleInputDesc"
                                  placeholder="Enter Desc"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-sm-3">
                              <div className="form-group">
                                <label htmlFor="exampleInputAmount">
                                  Amount
                                </label>
                                <input
                                  type="amount"
                                  ref="amount"
                                  className="form-control"
                                  id="exampleAmount"
                                  placeholder="# Amount in Naira"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center">
                      <button
                        type="submit"
                        onClick={this.fSubmit}
                        className="btn btn-primary"
                      >
                        Add Loans
                      </button>
                    </div>
                    <section className="content">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-12">
                            <div className="card">
                              <div className="card-header">
                                <h3 className="card-title">Loan Table</h3>
                                <div className="card-tools">
                                  <div
                                    className="input-group input-group-sm"
                                    style={{ width: 150 }}
                                  >
                                    <input
                                      type="text"
                                      name="table_search"
                                      className="form-control float-right"
                                      placeholder="Search"
                                    />
                                    <div className="input-group-append">
                                      <button
                                        type="submit"
                                        className="btn btn-default"
                                      >
                                        <i className="fas fa-search" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body table-responsive p-0">
                                <table className="table table-hover">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Loan Name</th>
                                      <th>Loan Description</th>
                                      <th>Amount</th>
                                      <th>Edit</th>
                                      <th>Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {datas.map((data, i) => (
                                      <Table
                                        key={i}
                                        id={i + 1}
                                        name={data.name}
                                        amount={data.amount}
                                        loanName={data.loanName}
                                        desc={data.desc}
                                        edit={
                                          <button
                                            onClick={e => this.fEdit(i)}
                                            className="btn btn-success"
                                          >
                                            Edit
                                          </button>
                                        }
                                        delete={
                                          <button
                                            onClick={e => this.fDelete(i)}
                                            className="btn btn-danger"
                                          >
                                            Delete
                                          </button>
                                        }
                                      />
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.container-fluid */}
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </ManageContainer>
        </div>
      </div>
    );
  }
}

const ManageContainer = styled.div`
  margin: auto;
`;

// {datas.map((data, i)=>

//     <li key={i} className="myList">
//         {i+1}.{data.name},{data.address}
//         <button onClick={(e)=>this.fDelete(i)} className="myButton">Delete</button>
//         <button onClick={(e)=>this.fEdit(i)} className="myButton">Edit</button>
//     </li>
//     )}
