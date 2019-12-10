import React, { Component } from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import man from './images/man.png';
import woman from './images/woman.png';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      chartData: {
        labels: ["May", "June", "July", "August", "September", "October", "November"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "My Second dataset",
            backgroundColor: "#8e5ea2",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90],
          }
        ]
    
      
      }
    }
  }
    render() {
      
        return (
            <div>
                <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Admin Dashboard</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active"></li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Info boxes */}
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-info elevation-1"><i className="fas fa-money" /></span>
            <div className="info-box-content">
              <span className="info-box-text">All Loans</span>
              <span className="info-box-number">
                2,200
                <small></small>
              </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-remove" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Due Loans</span>
              <span className="info-box-number">300</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        {/* fix for small devices only */}
        <div className="clearfix hidden-md-up" />
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-success elevation-1"><i className="fas fa-thumbs-down" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Bad Loans</span>
              <span className="info-box-number">25</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box mb-3">
            <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
            <div className="info-box-content">
              <span className="info-box-text">New Farmers</span>
              <span className="info-box-number">300</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Monthly Recap Report</h5>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <div className="btn-group">
                  <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                    <i className="fas fa-wrench" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" role="menu">
                    <Link to="/" className="dropdown-item">Action</Link>
                    <Link to="/"  className="dropdown-item">Another action</Link>
                    <Link to="/"  className="dropdown-item">Something else here</Link>
                    <Link to="/" className="dropdown-divider"> </Link>
                    <Link to="/" className="dropdown-item">Separated link</Link>
                  </div>
                </div>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <p className="text-center">
                    <strong>Loans: May, 2019 - Nov, 2019</strong>
                  </p>
                  <div className="chart">
                  {/* <canvas id="areaChart" style={{minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%"}}> */}
                    <Bar data ={this.state.chartData} options={{}}/>
                  {/* </canvas> */}
                </div>
                  {/* /.chart-responsive */}
                </div>
                
              </div>
              {/* /.row */}
            </div>
            {/* ./card-body */}
            <div className="card-footer">
              <div className="row">
                <div className="col-sm-3 col-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 17%</span>
                    <h5 className="description-header">$35,210.43</h5>
                    <span className="description-text">TOTAL REVENUE</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-warning"><i className="fas fa-caret-left" /> 0%</span>
                    <h5 className="description-header">$10,390.90</h5>
                    <span className="description-text">TOTAL COST</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-6">
                  <div className="description-block border-right">
                    <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 20%</span>
                    <h5 className="description-header">$24,813.53</h5>
                    <span className="description-text">TOTAL PROFIT</span>
                  </div>
                  {/* /.description-block */}
                </div>
                {/* /.col */}
                <div className="col-sm-3 col-6">
                  <div className="description-block">
                    <span className="description-percentage text-danger"><i className="fas fa-caret-down" /> 18%</span>
                    <h5 className="description-header">1200</h5>
                    <span className="description-text">GOAL COMPLETIONS</span>
                  </div>
                  {/* /.description-block */}
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <div className="col-md-8">
          {/* MAP & BOX PANE */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Visitors Report</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-3">
            <div className="chart"> <Pie data ={this.state.chartData} options={{}}/></div>
              
            </div>
            
          </div>
          {/* /.card */}
          <div className="row">
            <div className="col-md-6">
              
            </div>
         
            
          </div>
          {/* /.row */}
          {/* TABLE: LATEST ORDERS */}
          <div className="card">
            <div className="card-header border-transparent">
              <h3 className="card-title">Latest Loans</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Loans</th>
                      <th>Status</th>
                      <th>amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Link to="/">OR9842</Link></td>
                      <td>Dolly Farms</td>
                      <td><span className="badge badge-success">Granted</span></td>
                      <td>
                        <div className="sparkbar" data-color="fake_url00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><Link to="/">OR1848</Link></td>
                      <td>Acem Agrics</td>
                      <td><span className="badge badge-warning">Pending</span></td>
                      <td>
                        <div className="sparkbar" data-color="fake_urlf39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td><Link to="/">OR7429</Link></td>
                      <td>Shaynath Feeds</td>
                      <td><span className="badge badge-danger">Denied</span></td>
                      <td>
                        <div className="sparkbar" data-color="fake_urlf56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><Link to="/">OR7429</Link></td>
                      <td>Birden Poultry</td>
                      <td><span className="badge badge-info">Processing</span></td>
                      <td>
                        <div className="sparkbar" data-color="fake_url00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><Link to="/"> OR1848</Link></td>
                      <td>Samsung Smart TV</td>
                      <td><span className="badge badge-warning">Pending</span></td>
                      <td>
                        <div className="sparkbar" data-color="fake_urlf39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
              {/* /.table-responsive */}
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
            <Link to="/"className="btn btn-sm btn-info float-left">View More Loans</Link>
            <Link to="/" className="btn btn-sm btn-secondary float-right">View Other Loans</Link>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-4">
          {/* Info Boxes Style 2 */}
          <div className="info-box mb-3 bg-warning">
            <span className="info-box-icon"><i className="fas fa-tag" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Inventory</span>
              <span className="info-box-number">5,200</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 bg-success">
            <span className="info-box-icon"><i className="far fa-heart" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Loans</span>
              <span className="info-box-number">92,050</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 bg-danger">
            <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Debts</span>
              <span className="info-box-number">114,381</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 bg-info">
            <span className="info-box-icon"><i className="far fa-comment" /></span>
            <div className="info-box-content">
              <span className="info-box-text">Received</span>
              <span className="info-box-number">163,921</span>
            </div>
            {/* /.info-box-content */}
          </div>
          
              {/* USERS LIST */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Latest Farmers</h3>
                  <div className="card-tools">
                    <span className="badge badge-danger">8 New Members</span>
                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <ul className="users-list clearfix">
                    <li>
                      <img src={man} alt="User" />
                      <Link to="/" className="users-list-name">Agric Feeds</Link>
                      <span className="users-list-date">Today</span>
                    </li>
                    <li>
                    <img src={woman} alt="User" />
                    <Link to="/" className="users-list-name">Feeeds man</Link>
                      <span className="users-list-date">Yesterday</span>
                    </li>
                    <li>
                    <img src={man} alt="User" />
                    <Link to="/" className="users-list-name"> Maize Young</Link>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                    <img src={woman} alt="User" />
                    <Link to="/"className="users-list-name">Fertle Soil</Link>
                      <span className="users-list-date">12 Jan</span>
                    </li>
                    <li>
                    <img src={man} alt="User" />
                    <Link to="/" className="users-list-name">Bean Savant</Link>
                      <span className="users-list-date">13 Jan</span>
                    </li>
                    <li>
                    <img src={woman} alt="User" />
                      <Link to="/" className="users-list-name" >Rice Lord</Link>
                      <span className="users-list-date">14 Jan</span>
                    </li>
                    <li>
                    <img src={man} alt="User" />
                      <Link to="/" className="users-list-name">Ibrahim</Link>
                      <span className="users-list-date">15 Jan</span>
                    </li>
                    <li>
                    <img src={man} alt="User" />
                    <Link to="/" className="users-list-name">Seeyyy</Link>
                      <span className="users-list-date">15 Jan</span>
                    </li>
                  </ul>
                  {/* /.users-list */}
                </div>
                {/* /.card-body */}
                <div className="card-footer text-center">
                  <Link to ="/">View All Farmers</Link>
                </div>
                {/* /.card-footer */}
              </div>
         
          
        </div>
        
      </div>
      
    </div>
  </section>
  
</div>

            </div>
        )
    }
}
