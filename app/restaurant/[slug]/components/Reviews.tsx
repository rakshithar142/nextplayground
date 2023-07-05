import { Review } from "@prisma/client";
import React from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  const reviewsCount = reviews.length;
  console.log(reviews);
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What {reviewsCount} {reviewsCount === 1 ? "person is " : "people are "}
        saying
      </h1>
      <div>
        <ReviewCard reviews={reviews} />
      </div>
    </div>
  );
}
