import React, { Component } from 'react';
import {Grid, Button, withStyles, GridListTileBar} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import zefNetPro from './zefpro.png';
import wallmount from './wallMount.jpg';
import single from './singleheadped.jpg';
import double from './dualheadped.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const styles = theme => ({ 
  card: {
    transition: 'all .2s ease-in-out',
    maxWidth: '2500px',
    width: '250px',
    border: '1px solid black',
    margin: '0px 30px 25px 0px',
    boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028),0 12.5px 10px rgba(0, 0, 0, 0.035),0 22.3px 17.9px rgba(0, 0, 0, 0.042),0 41.8px 33.4px rgba(0, 0, 0, 0.05),0 100px 80px rgba(0, 0, 0, 0.07)',
                '&:hover': {transform: 'scale(1.07)',boxShadow: '0 0 15px #c8ffff,-5px 0 20px #66fbfb, 5px 0 25px #049494',}
  },
  media: {
    height: '250px',
    width: '250px'
  },
  previousButton: {
    paddingLeft: '8px',
  },
  previousButton: {
    paddingLeft: '8px'
  },
})

class DeviceSelectType extends Component {

 setTypeReducer = (id, img, name) => {
  this.props.dispatch({ type: "SET_TYPE", payload: {id,img,name} });
  this.props.history.push('/deviceSerial')
}

  render() {
    const {classes} = this.props;
    return (
      <Grid container justify='center' alignContent='center' alignItems='center'>
        {/*Title */}
        <Grid item xs={12} align='center'>
          <h1 style={{color:'white',marginBottom: '30px'}}>Please Select Your Charging Device Type</h1>
        </Grid>
      
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
              {/*Wall Mount Device Card*/}
              <Card className={classes.card}>
                <CardActionArea onClick={()=>{this.setTypeReducer(1,'./wallMount.jpg','Wall Mount Charger')}}
                   component = {Link} to ="/deviceSerial"
                >
                  <CardMedia
                  image={wallmount}
                  title="Wall Mount Charger" 
                  className={classes.media} />
                  <GridListTileBar
                      title="Wall Mount Charger"
                  />
                  </CardActionArea>
                </Card>
    
            {/*Single Head Device Card*/}
              <Card className={classes.card}>
                <CardActionArea onClick={()=>{this.setTypeReducer(2,'./singleheadped.jpg','Single Head Pedestal Charger')}}
                  component = {Link} to ="/deviceSerial">
                  <CardMedia
                  image={single}
                  title="Single Head Pedestal Charger" 
                  className={classes.media} />
                  <GridListTileBar
                      title="Single Head Pedestal Charger"
                  />
                  </CardActionArea>
              </Card>
    
              {/*Dual Head Device Card*/}
              <Card className={classes.card}>
                <CardActionArea onClick={()=>{this.setTypeReducer(3,'./dualheadped.jpg','Dual Head Pedestal Charger')}} 
                  component = {Link} to ="/deviceSerial">
                    <CardMedia
                      image={double}
                      title="Double Head Pedestal Charger" 
                      className={classes.media} />
                    <GridListTileBar
                        title="Double Head Pedestal Charger"
                    />
                  </CardActionArea>
              </Card>
            
            {/*ZEFNET Pro Device Card*/}
                <Card className={classes.card}>
                  <CardActionArea onClick={()=>{this.setTypeReducer(4,'./zefpro.png','ZEFNET Pro Charger')}}
                    component = {Link} to ="/deviceSerial">
                    <CardMedia
                    image={zefNetPro}
                    title="ZEFNET Pro Charger" 
                    className={classes.media} />
                    <GridListTileBar
                        title="ZEFNET Pro Charger"
                    />
                    </CardActionArea>
                </Card>
        </div>

        {/*Previous Button*/}
        <Grid item align='center' xs={12}>
          <div style={{ align: 'center' }}>
            <Button
              variant="contained"
              style={{ margin: "20px" }}
              color="default"
              component = {Link} to ="/breakerSelect"
              className={classes.previousButton}
             >
              <ChevronLeft/>Previous
            </Button>
          </div>
        </Grid>

      </Grid>

    );
  }
}

DeviceSelectType.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default withStyles(styles)(connect(mapStateToProps)(DeviceSelectType));