import { Review } from "@prisma/client";
import React from "react";
import { calculateReviewRatingAverage } from "../../../../utils/calculateReviewRatingAverage";
import Stars from "../../../components/Stars";

export default function Rating({ reviews }: { reviews: Review[] }) {
  const reviewsCount = reviews.length;
  const averageRating = calculateReviewRatingAverage(reviews);
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">{averageRating.toFixed(1)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviewsCount} review{reviewsCount === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}
