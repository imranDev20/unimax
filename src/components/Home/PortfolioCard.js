import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioCard = (props) => {
  const { slug, name, image, isEven, technologies, liveLink, summary } =
    props?.item;
  const index = props.index;

  console.log(technologies);

  console.log(image);

  return (
    <div className="project">
      <a
        target="_blank"
        href={liveLink}
        className={`${
          !isEven ? "project-img" : "project-img-even"
        } w-full relative before:content-[''] before:absolute before:w-full before:h-full hover:before:bg-primary/0 before:bg-primary/70 before:transition-colors before:top-0 before:left-0 before:z-[5] before:rounded-lg`}
      >
        <GatsbyImage
          className="w-full h-full"
          imgClassName="w-full rounded-lg shadow-custom"
          objectFit="cover"
          image={getImage(image?.localFile)}
          alt="none"
        />
      </a>
      <div
        className={`${
          !isEven ? "project-info" : "project-info-even"
        }  p-5 sm:p-7 md:p-10 bg-white rounded-lg`}
      >
        <p className="text-secondary mb-2 font-bold text-xl">0{index + 1}.</p>
        <h3 className="text-primary font-semibold text-3xl mb-4">{name}</h3>
        <p className="text-primary leading-7">{summary}</p>
        <div className="text-secondary mt-4 flex flex-wrap">
          {technologies?.map((tech) => (
            <span
              key={tech?.id}
              className="bg-secondary/20 px-2 py-1 rounded mr-2 mb-2 text-sm font-medium"
            >
              {tech?.technologyName}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
