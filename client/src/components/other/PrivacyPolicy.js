import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';

class PrivacyPolicy extends Component{
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render(){
      return(
        <Container maxWidth="lg" className="minHeight">
          <h1 className="primary-textColor" style={{color: 'white'}}>Privacy Policy</h1>

          <Typography variant="h6" style={{color: 'white'}}>
            This web app may collects data such as:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" style={{color: 'white'}}>
                Name
              </Typography>
            </li>
            <li>
              <Typography variant="body1" style={{color: 'white'}}>
                Email
              </Typography>
            </li>
            <li>
              <Typography variant="body1" style={{color: 'white'}}>
                Location
              </Typography>
            </li>
            <li>
              <Typography variant="body1" style={{color: 'white'}}>
                Favorite Event
              </Typography>
            </li>
            <li>
              <Typography variant="body1" style={{color: 'white'}}>
                Bio
              </Typography>
            </li>
          </ul>  
          
          <Typography variant="h6" paragraph style={{color: 'white'}}>
            We only use your data for this web app.
          </Typography>

          <Typography variant="h6" paragraph style={{color: 'white'}}>
            You can contact us to remove your data and account.
          </Typography>

          <Typography variant="h6" style={{color: 'white'}}>
            If you do not want us to collect your data, then do not use this web app.
          </Typography>
        </Container>
      );
  }
}

export default PrivacyPolicy;
