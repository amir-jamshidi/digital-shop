import { StarRounded } from "@mui/icons-material";
import { useState } from "react";
import "./rating.css";
const Rating = () => {
  const [rate, setRate] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentStar = index + 1;
        return (
          <label key={index}>
            <input
              className="radio-rating"
              type="radio"
              onClick={() => setRate(currentStar)}
            />

            <span
              onMouseEnter={() => setHover(currentStar)}
              onMouseLeave={() => setHover(null)}
            >
              <StarRounded
                style={{
                  color: currentStar <= (hover || rate) ? "gold" : "#eee",
                }}
              />
            </span>
          </label>
        );
      })}
    </>
  );
};

export default Rating;
