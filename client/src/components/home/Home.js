import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Button } from '@material-ui/core';

import styles from './Home.module.css';
import LandingImg from '../../img/landingImg.png';
import HowitworkImg1 from '../../img/howitworkImg1.png';
import HowitworkImg2 from '../../img/howitworkImg2.png';
import StepsImg from '../../img/stepsImg.png';

class Home extends Component{
  onLogoutClick(e){
      e.preventDefault();
      this.props.logoutUser();
  }
  
  render(){
      const { isAuthenticated } = this.props.auth;
      const {
        header,
        header__text,
        header__buttons,
        header__img,
        howItWork,
        howItWork__container,
        howItWork__text,
        howItWork__imgReverse,
        steps__text,
        steps__list } = styles;
      
      const guestLinks = (
        <div className={header__buttons}>
          <Button className="primary-color marginR-1" component={Link} to="/register" variant="contained" size="large">
            Get Started
          </Button>
          <Button className="secondary-color" component={Link} to="/events" variant="contained" size="large">
            See Events
          </Button>
      	</div>
      );
      
      const userLinks = (
        <div className={header__buttons}>
          <Button className="primary-color marginR-1" component={Link} to="/profile" variant="contained" size="large">
            Your Profile
          </Button>
          <Button className="secondary-color" component={Link} to="/events" variant="contained" size="large">
            See Events
          </Button>
      	</div>
      );

      return(
        <Container maxWidth="lg">
          <header className={header}>
            <div className={header__text}>
              <h1>Search for Events to Participate</h1>
              <p>Pick a day, time, and place and Rock the Event with group of people</p>
              {isAuthenticated ? userLinks : guestLinks}
            </div>
            <img src={LandingImg} alt="Landing" className={header__img}/>
          </header>
          
          <main>
            <div className={howItWork}>
              <div className={howItWork__container}>
                <img src={StepsImg} alt="HowitworkImg2" />
                <div className={steps__text}>
                  <h2>It is easy to find Events to Join In!</h2>
                  <ol className={steps__list}>
                    <li>Set up your account</li>
                    <li>Post an event to Invite</li>
                    <li>Help others to join the Event through this portal</li>
                    <li>Meet your friends in various Events</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className={howItWork}>
              <div className={howItWork__container}>
                <img src={HowitworkImg1} className={howItWork__imgReverse} alt="HowitworkImg1" />
                <div className={howItWork__text}>
                  <h2>Search for Event</h2>
                  <p>You can find any Type of event that was post by You/Client to join</p>
                  <Button className="primary-color marginB-2" component={Link} to="/events" variant="contained" size="large">
                    See Events
                  </Button>
                </div>
              </div>

              <div className="mb-5"></div>

              <div className={howItWork__container}>
                <img src={HowitworkImg2} alt="HowitworkImg2" />
                <div className={howItWork__text}>
                  <h2>Create an Event</h2>
                  <p>You can create event so that any Participant can join you in Event together</p>
                  <Button className="primary-color" component={Link} to="/create-event" variant="contained" size="large">
                    Post Event
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </Container>
      );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);