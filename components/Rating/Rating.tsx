import { useEffect, useState } from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './RatingProps';
import Star from './Star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, steRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructractRating(rating)
  }, [rating])

  const constructractRating = (currentRating: number) => {
    const newRating = ratingArray.map((e, i) => {
      return (
        <span className={[styles.star, i < currentRating ? styles.filled : '', isEditable ? styles.editable : ''].join(' ')} 
              onMouseOver={() => changeDisplay(i + 1)} 
              onMouseOut={() => constructractRating(rating)} 
              onClick={() => changeRating(i + 1)}>
           <Star/>
        </span>
       )
    });

    steRatingArray(newRating)
  }

  const changeRating = (i: number) => {
    if (!setRating || !isEditable) {
      return
    }
    setRating(i)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return
    }
    constructractRating(i)
  }
 
  return (
    <div {...props}>
      {ratingArray.map((r, i) => 
        <span key={i} >
          {r}
        </span>
      )}
    </div>
  )
}