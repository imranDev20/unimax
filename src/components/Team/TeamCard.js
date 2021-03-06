import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const TeamCard = ({ image, name, designation, slug, expertiseType }) => {
  return (
    <Link
      to={`/team/${slug}`}
      className="shadow-custom rounded-lg overflow-hidden"
    >
      <GatsbyImage
        className="h-80"
        imgClassName="w-full h-full"
        objectFit="cover"
        objectPosition="50% 0%"
        image={image}
        alt={name}
      />

      <div className="text-center py-7 bg-white">
        <h3 className="text-2xl font-semibold text-primary pb-1">{name}</h3>
        <p className="text-secondary font-medium">{designation}</p>
        <p className="text-secondary font-medium">{expertiseType}</p>
      </div>
    </Link>
  );
};

export default TeamCard;
