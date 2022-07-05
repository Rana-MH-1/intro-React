import React from "react";
import { Button } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';
import propTypes from 'prop-types';

export const Home = ({title,image,Des,fun,number,Lists,Age}) => {
  
 // let {title,image,Des,fun}= props //Destructuring of props
 // console.log(props)
  //props.title = 'Wonder Woman' ==> We cannot change a props from a child bz it's immutable
  return (
   
    <div>
      <div className="card" style={{width: '18rem',margin:'0 auto'}}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {Des}
          </p>
          <h3>I have {number} props</h3>
          {(Age>=20) && Lists.map((el,i)=> <li key={i}>{el}</li>)}
          <Button className="btn btn-primary" onClick={()=>fun()}>
           Click me
          </Button>
         
        </div>
      </div>
    </div>
  );
};

Home.defaultProps={
  title:'movie'
}


Home.propTypes ={
  title : propTypes.string,
  Des: propTypes.string.isRequired,
  fun : propTypes.func
}









