import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioCard = (props) => {
  const { slug, name, image } = props?.item;
  const index = props.index;
  const isReverse = props?.isReverse;
  console.log(image);

  return (
    <div className="project">
      <GatsbyImage
        className="project-img w-full relative before:content-[''] before:absolute before:w-full before:h-full before:bg-primary/80 before:top-0 before:left-0 before:z-[5]"
        imgClassName="w-full rounded-lg shadow-custom "
        objectFit="cover"
        image={getImage(image?.localFile)}
        alt="none"
      />
      <div className={`project-info p-5 sm:p-7 md:p-10 bg-white rounded-lg`}>
        <p className="text-secondary mb-2 font-bold text-xl">0{index + 1}.</p>
        <h3 className="text-primary font-semibold text-3xl mb-4">{name}</h3>
        <p className="text-primary leading-7">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          voluptates? Aperiam, rem aliquid minus illo fugit fuga. Saepe
          molestiae labore vitae exercitationem, nemo ullam repudiandae placeat
          dolorem ratione atque non. Ipsum suscipit officiis corrupti quis
          maiores mollitia, libero sunt ut? Quasi eligendi eveniet non
          praesentium officia dolore, a odio dolorum!
        </p>
        <div className="text-secondary mt-4 flex flex-wrap">
          {[0, 1, 2, 3].map((n) => (
            <span
              key={n}
              className="bg-secondary/20 px-2 py-1 rounded mr-2 mb-2"
            >
              WordPress
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
