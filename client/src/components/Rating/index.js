import React from "react";

// Icons
import { ReactComponent as StarIconFull } from '../../assets/icons/starfull.svg';
import { ReactComponent as StarIconEmpty } from '../../assets/icons/starempty.svg';

// StyledComponets
import { RatingWrapper } from "./styles"

const Rating = ({ stars }) => {
  return (
    <RatingWrapper>
      {
        [...Array(stars)].map(s => <StarIconFull />)
      }
      {
        [...Array(5 - stars)].map(s => <StarIconEmpty />)
      }
    </RatingWrapper>
  )
}

export default Rating;