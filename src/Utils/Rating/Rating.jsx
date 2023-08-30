import { StarRounded } from "@mui/icons-material";
import { useState } from "react";
import "./rating.css";
const Rating = ({ rateValue, isEdit = true }) => {
  
  const [rate, setRate] = useState(rateValue);
  const [hover, setHover] = useState(null);

  return (
    <div className="rating-parent">
      {[...Array(5)].map((star, index) => {
        const currentStar = index + 1;

        return (
          <label key={index}>
            <input
              className="radio-rating"
              type="radio"
              onClick={() => {
                if (isEdit) {
                  setRate(currentStar);
                }
              }}
            />

            <span
              onMouseEnter={() => {
                if (isEdit) {
                  setHover(currentStar);
                }
              }}
              onMouseLeave={() => setHover(null)}
            >
              <StarRounded
                fontSize="small"
                style={{
                  color: currentStar <= (hover || rate) ? "gold" : "#eee",
                }}
              />
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
