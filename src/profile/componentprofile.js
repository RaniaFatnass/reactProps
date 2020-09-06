import React from 'react'
import PropTypes from 'prop-types';

const Componentprofile = (props)=>{

      return(
            {props.handleName(props.fullname)}
        <div>
            <p>{props.fullname}</p>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
    {props.children}
      </div>
      );
      }

      componentprofile.propTypes={
        fullname: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string
      }
      
      componentprofile.defaultProps = {
      fullname:  "yyyy",
      bio:  "iii",
      profession: "nnn"
      }; 
      
      export default Componentprofile;
