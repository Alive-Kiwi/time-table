import React, { Component } from 'react';

import axios from 'axios';
import moment from 'moment';

class TimeTableForm extends Component {
  state = {
    teachers: [],
    subjects: [],
    batches: [],
    rooms: [],
    teacher: null,
    room: null,
    batch: null,
    subject: null,
    start: '00:00',
    end: '00:00',
    classDetailType: null,
    day: '',
    message: null
  };

  onOptionChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAddClassClick = e => {
    e.preventDefault();
    let classDetail = {
      teacher: this.state.teacher,
      batch: this.state.batch,
      room: this.state.room,
      subject: this.state.subject,
      start: new moment.utc(this.state.start, 'HH:mm a'),
      end: new moment.utc(this.state.end, 'HH:mm a'),
      classDetailType: this.state.classDetailType,
      day: this.state.day
    };

    console.log('class detail', classDetail);

    axios
      .post('/api/classDetail', classDetail)
      .then(res => {
        this.setState({
          message: res.data.message
        });
        console.log('res', res);
      })
      .catch(err => console.log('err', err));
  };

  componentDidMount() {
    axios
      .get('/api/fetchDetails/all')
      .then(res => {
        console.log(res.data.teachers);
        this.setState({
          teachers: res.data.teachers,
          rooms: res.data.rooms,
          subjects: res.data.subjects,
          batches: res.data.batches
        });
      })
      .catch(err => console.log('err', err));
  }

  render() {
    let teachers = this.state.teachers
      ? this.state.teachers.map((teacher, index) => (
          <option key={index} value={teacher._id}>
            {teacher.name}
          </option>
        ))
      : null;

    let rooms = this.state.rooms
      ? this.state.rooms.map((room, index) => (
          <option key={index} value={room._id}>
            {room.name}
          </option>
        ))
      : null;

    let subjects = this.state.subjects
      ? this.state.subjects.map((subject, index) => (
          <option key={index} value={subject._id}>
            {subject.name}
          </option>
        ))
      : null;

    let batches = this.state.batches
      ? this.state.batches.map((batch, index) => (
          <option key={index} value={batch._id}>
            {batch.name}
          </option>
        ))
      : null;

    return (
      <div style={{ marginTop: 80 }}>
        <center>
          <form onSubmit={this.onAddClassClick}>
            <select
              style={{ marginRight: 10 }}
              name="day"
              onChange={this.onOptionChange}
            >
              <option>Day</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">wednesday</option>
              <option value="thursady">thursady</option>
              <option value="friday">friday</option>
              <option value="saturday">saturday</option>
            </select>
            <select
              name="teacher"
              onChange={this.onOptionChange}
              style={{ marginRight: 10 }}
            >
              <option>select teacher</option>
              {teachers}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="room"
              onChange={this.onOptionChange}
            >
              <option>select room</option>
              {rooms}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="subject"
              onChange={this.onOptionChange}
            >
              <option>select subject</option>
              {subjects}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="batch"
              onChange={this.onOptionChange}
            >
              <option>select batch</option>
              {batches}
            </select>
            <select
              style={{ marginRight: 10 }}
              name="classDetailType"
              onChange={this.onOptionChange}
            >
              <option>Class Type</option>
              <option value="theory">Theory</option>
              <option value="practical">Practical</option>
            </select>
            From
            <input
              type="time"
              name="start"
              value={this.state.start}
              style={{ marginRight: 10 }}
              onChange={this.onOptionChange}
            />
            To
            <input
              type="time"
              name="end"
              value={this.state.end}
              style={{ marginRight: 10 }}
              onChange={this.onOptionChange}
            />
            <button onClick={this.onAddClassClick}>Add Class</button>
          </form>
        </center>
        <h3>{this.state.message ? this.state.message : null}</h3>
      </div>
    );
  }
}

export default TimeTableForm;
