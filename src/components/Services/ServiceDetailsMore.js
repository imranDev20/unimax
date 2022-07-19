import React from "react";
import sanitizeHtml from "sanitize-html";

const ServiceDetailsMore = ({ subServices }) => {
  console.log(subServices);

  return (
    <section>
      <div className="min-h-screen container mx-auto px-10">
        {subServices?.map((subService) => (
          <div
            key={subService?.strapi_id}
            className={`flex flex-col lg:flex-row ${
              subService?.isReverse && "lg:flex-row-reverse"
            } items-center mb-20 justify-between`}
          >
            <div className="w-full lg:w-1/2 max-w-[500px]">
              <img
                className="w-full h-full object-contain"
                src={subService?.subServiceImage?.localFile?.publicURL}
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-4xl font-bold my-4">
                {subService?.subServiceName}
              </h3>
              <div
                className="text-primary text-justify leading-7 ck-content"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(
                    subService?.subServiceText?.data?.subServiceText
                  ),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetailsMore;
