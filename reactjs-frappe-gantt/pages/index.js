import React, { Component } from "react"
import { FrappeGantt, Task, ViewMode } from 'react-frappe-gantt'

let tasks = [
  {
    id: "Task 1",
    name: "Redesign website",
    start: "2016-2-1",
    end: "2016-2-6",
    progress: 30,
    custom_class:'t1',
    dependencies: "",
  },
  {
    id: "Task 2",
    name: "Redesign website",
    start: "2016-2-5",
    end: "2016-2-11",
    progress: 30,
    dependencies: "",
    custom_class:'t2',
  },
  {
    id: "Task 3",
    name: "Redesign website",
    start: "2016-2-3",
    end: "2016-2-6",
    progress: 30,
    custom_class:'t3',

  },
  {
    id: "Task 4",
    name: "Redesign website",
    start: "2016-2-8",
    end: "2016-2-12",
    progress: 30,
    custom_class:'t4',

  },
  {
    id: "Task 5",
    name: "Redesign website",
    start: "2016-2-10",
    end: "2016-2-14",
    progress: 30,
    custom_class:'t5',

  },
  {
    id: "Task 6",
    name: "Redesign website",
    start: "2016-2-10",
    end: "2016-2-16",
    progress: 30,
    custom_class:'t6',
  },
  {
    id: "Task 7",
    name: "Redesign website",
    start: "2016-2-10",
    end: "2016-2-11",
    progress: 30,
    custom_class:'t6',
  },
  {
    id: "Task 8",
    name: "Redesign website",
    start: "2016-2-12",
    end: "2016-2-13",
    progress: 0,
    custom_class:'t6',

  },
  {
    id: "Task 9",
    name: "Redesign website",
    start: "2016-2-13",
    end: "2016-2-15",
    progress: 0,
    custom_class:'t6',

  },
  {
    id: "Task 10",
    name: "Redesign website",
    start: "2016-2-14",
    end: "2016-2-16",
    progress: 0,
    custom_class:'t6',

  },
  {
    id: "Task 11",
    name: "Redesign website",
    start: "2016-2-16",
    end: "2016-2-18",
    progress: 30,
    custom_class:'t7',

  }
].map((x) => new Task(x));


class App1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: ViewMode.Day,
     
    };
    this.day = this.day.bind(this);
    this.week = this.week.bind(this);
    this.month = this.month.bind(this);
  }
  day() {
    this.setState(prevState => ({
      mode: ViewMode.Day
    }));
  };
  week() {
    this.setState(prevState => ({
      mode: ViewMode.Week
    }));
  };
  month() {
    this.setState(prevState => ({
      mode: ViewMode.Month
    }));
  };

  render() {

    return (
      <>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
            <div href="/" className=" align-items-center me-md-auto text-dark text-decoration-none">
              <p className="pt-2 lead">Project Deshboard<br></br><small className="mx-4  k1">Rock on, Lucia!</small></p>
              <div>
                <p className="mt-5 mb-0"><strong>My Project</strong></p>
                <p className="text-secondary"><small>Shared with me</small></p>
              </div>
            </div>
            <ul className=" d-flex">
              <li className="list-group-item border-0"><button type="button" className=" px-5 py-4  bg-white rounded dashed">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button></li>
              <li className="list-group-item border-0"><button type="button" className="btn shadow-sm bg-white rounded">
                <h3 className="px-5 py-0 width">2</h3><small>Enquiries</small>
              </button></li>
              <li className="list-group-item border-0"><button type="button" className="btn shadow-sm bg-white rounded">
                <h3 className="px-5 py-0 width">1</h3><small>Active</small>
              </button></li>
              <li className="list-group-item border-0"><button type="button" className="btn shadow-sm bg-white rounded">
                <h3 className="px-5 py-0 width">3</h3><small>Upcoming</small>
              </button></li>
            </ul>
          </div>
          <div className="container ">
            <div className="row mt-0">
              <div className="col-md-2 border-dark ">
              </div>
              <div className="col-md-10 border-dark ">
                <div className="d-flex margin-t ">
                  <div href="/" className="d-flex align-items-center me-md-2 text-dark text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>


                    <input className="in shadow-sm bg-white rounded  px-3 mx-2  width" type="search" placeholder="Search" aria-label="Search"></input>
                    <div className="container">
                      <div className="dropdown show d-flex drop">

                        <input className="in1 shadow-sm bg-white rounded  px-3  width " type="text" placeholder="Sort By" aria-label="Search"></input>
                        <button className="dropdown-toggle rounded bg-light btn1"></button>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                          <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                  </div>
                  <div className="col-md-7  d-flex">
                    <div className="button-group mt-4 margin-l" role="group" aria-label="Basic example">
                      <button type="submit" className="btn shadow-sm bg-white rounded px-4" onClick={this.day}><small>Day</small></button>
                      <button type="submit" className="btn shadow-sm bg-white rounded px-4" onClick={this.week}><small>Week</small></button>
                      <button type="submit" className="btn shadow-sm bg-white rounded px-4" onClick={this.month}><small>Month</small></button>
                    </div>
                    <div className="vr mx-2 h-25 margin"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list mx-2 margin" viewBox="0 0 16 16">
                      <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-nested margin" viewBox="0 0 16 16">
                      <path d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2 border-dark">
            </div>
            <div className="col-md-2 border-dark">
              <ul className="mt-5">
                <li className="list-group-item border-0 pb-4"><button className="square square-lg border-0 rounded bg-success1 mx-3 p-2"></button><label className="txt1">Acutecrime</label></li>
                <li className="list-group-item border-0 pb-4" ><button className="square square-lg border-0 rounded bg-info1 mx-3 p-2"></button><label className="txt1">Acutecrime</label></li>
                <li className="list-group-item border-0 pb-4"><button className="square square-lg border-0 rounded bg-danger1 mx-3 p-2"></button><label className="txt1">Acutecrime</label></li>
                <li className="list-group-item border-0 pb-4" ><button className="square square-lg border-0 rounded bg-primary1 mx-3 p-2"></button><label className="txt1">Acutecrime</label></li>
                <li className="list-group-item border-0 pb-4"><button className="square square-lg border-0 rounded bg-warning1 mx-3 p-2"></button><label className="txt1">Acutecrime</label></li>
                <li className="list-group-item border-0 pb-3"><button className="square square-lg border-0 rounded bg-secondary1 mx-3 p-2"></button><label className="txt1">Acutecrime</label></li>

                <p className="mx-5 px-4 txt2">Acutecrime</p>
                <p className="mx-5 px-4 txt2">Acutecrime</p>
                <p className="mx-5 px-4 txt2">Acutecrime</p>
                <p className="mx-5 px-4 txt2">Acutecrime</p>

                <li className="list-group-item border-0 pt-4"><button className="square square-lg border-0 rounded mx-3 p-2 kartik"></button><label className="txt1">Acutecrime</label></li>
              </ul>
            </div>
            <div className="col-md-8">
              <FrappeGantt
                tasks={tasks}
                viewMode={this.state.mode}
                onClick={(task) => console.log(task)}
                onDateChange={(task, start, end) => console.log(task, start, end)}
                onProgressChange={(task, progress) => console.log(task, progress)}
                onTasksChange={(tasks) => console.log(tasks)}
              />
            </div>
          </div>
        </div>
      </>

    );
  }
}






export default App1;
// 