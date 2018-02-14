import React from 'react';

import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import { EventLink } from './utils/EventLink';
import moment from 'moment';
import _ from 'lodash';

import './events.css';


// lessTextSummary takes an event description and returns a shorter
// description that's easy to scan.
function lessTextSummary(desc) {
  // Trim desc it can't start with a newline.
  desc = desc.trim();
  let newlineIndex = desc.indexOf('\n');
  if (newlineIndex === -1) {
    return desc;
  }
  return desc.slice(0, newlineIndex);
}

const IconText = ({ glyph, text }) => (
  <span>
    <Glyphicon glyph={glyph} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }
  findLocation(place) {
    let street = _.get(place, 'location.street', undefined)
    let city = _.get(place, 'location.city', undefined)
    let state = _.get(place, 'location.state', undefined)

    if (street && city && state) return street + ', ' + city + ', ' + state
    if (street && city) return street + ', ' + city
    if (street && state) return street + ', ' + state
    if (city && state) return city + ' ,' + state
    if (street) return street
    if (city) return city
    if (state) return state
    else return;
  }

  render() {
    let item = this.props.item;

    let actions = [
      <IconText key="attending" glyph="check" text={item.attendingCount + " attending"}/>,
    ];

    let location = this.findLocation(item.place);
    if (location) {
      actions.push(<IconText key="location" glyph="check" text={location} />);
    }

    return (
      <div className="eventItem">
        <Row>
          <Col md={4}>
            <div className="leftGutter">
              <div><EventLink analytics-type="picture" href={item.href}><img className="eventImg" alt="logo" src={item.avatar} /></EventLink></div>
              <div><EventLink analytics-type="attend-button" href={item.href}><Button className="attendBtn" bsStyle="primary">Attend</Button></EventLink></div>
            </div>
          </Col>

          <Col md={8}>
            <div>
              {moment(item.startTime).format("dddd, MMMM D") + " at " +
               moment(item.startTime).format("h:mm A") + " - " +
               moment(item.endTime).format("h:mm A")}
            </div>

            <h2 className="eventTitle">
              <EventLink analytics-type="title" href={item.href}>{item.title}</EventLink>
            </h2>

            <p className="eventDescription">{item.lessText}</p>

            {actions}

          </Col>
        </Row>
      </div>
    );
  }
}

class EventList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div className="eventList">
          Loading events
        </div>
      );
    }

    if (this.props.eventList.length === 0) {
      return (
        <div className="eventList">
          No events
        </div>
      );
    }

    let events = [];
    for (let i = 0; i < this.props.eventList.length; i++) {
      let event = this.props.eventList[i];

      events.push(<EventItem item={{
        title: event.name,
        startTime: event.start_time,
        endTime: event.end_time,
        attendingCount: event.attending_count,
        description: event.description,
        lessText: lessTextSummary(event.description),
        href: `https://www.facebook.com/${event.id}`,
        avatar: event.cover.source,
        place: event.place,
      }} key={i} />);
    }

    return (
      <div className="eventList">
        {events}
      </div>
    )
  }
}

export default EventList;