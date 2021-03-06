import React from "react";
import Layout from "../components/layout/layout";
import styles from "./pages.module.scss";
import EventsDateTimeVenue from "../../src/components/toolkit/dateTimeVenue/EventsDateTimeVenue";
import { Link } from "gatsby";

const upcomingEvents = [
  {
    details: require("../../content/pages/events/20022019-fellowTeaTembusu/writeup")
      .fellowTeaTembusuDetails,
    component: require("../../content/pages/events/20022019-fellowTeaTembusu/writeup")
      .default
  },
  {
    details: require("../../content/pages/events/25022019-3DM@NUS/writeup.jsx")
      .edmNusDetails,
    component: require("../../content/pages/events/25022019-3DM@NUS/writeup.jsx")
      .default
  },
  {
    details: require("../../content/pages/events/18032019-NCC/writeup")
      .nccDetails,
    component: require("../../content/pages/events/18032019-NCC/writeup")
      .default
  }
];

const highlights = [
  {
    link: "/events/ncc",
    title: "ALSET for National Coding Championships 2019",
    image: require("../../content/assets/pictures/NCCandAOC/ncc2017.jpeg"),
    imageAlt: "students at NCC 2017 competition venue"
  },
  {
    link: "/events/3dm@nus",
    title: "ALSET for Data-Driven Decision-Making \n (3DM@NUS)",
    image: require("../../content/pages/activities/edmNus/edm.jpg"),
    imageAlt: "team discussion in progress"
  }
];
export function HighlightSection(props) {
  return (
    <React.Fragment>
      <Link to={props.highlight.link}>
        <section className={styles.section}>
          <img src={props.highlight.image} alt={props.highlight.imageAlt} />
          <h3>{props.highlight.title}</h3>
        </section>
      </Link>
      <br />
    </React.Fragment>
  );
}

export default function Events() {
  return (
    <Layout>
      <article className={styles.article}>
        <h1>Alset: TRU Events</h1>
        <h2>Highlights</h2>
        {highlights.map(item => (
          <HighlightSection highlight={item} />
        ))}
        <hr />
        <h2>Upcoming events</h2>
        {upcomingEvents.map(event => (
          <EventsDateTimeVenue
            eventInfo={event.details}
            key={event.details.title}
          >
            <event.component />
          </EventsDateTimeVenue>
        ))}
      </article>
      <br />
    </Layout>
  );
}
