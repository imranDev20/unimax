import React from "react";

const ServiceDetailsMore = () => {
  return (
    <section>
      <div className="min-h-screen container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center pb-6">
          <div className="w-full lg:w-1/2">
            <h2>Responsive Design For Website</h2>
            <p>
              Making a responsive design template helping your business website
              improve visibility and engagement with audiences is our top
              priority. Responsive Designs are the best ones to go for as it
              ensures audiences comfort while browsing the website as everything
              looks in their place.
            </p>
            <button>Read More</button>
          </div>

          <div className="w-full lg:w-1/2">
            <img className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center pb-6">
          <div className="w-full lg:w-1/2"></div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-bold my-2">Web App Development</h3>
            <p className="text-justify py-3 text-gray-500">
              For diverse groups of clients across the globe, we provide
              state-of-the-art web app development services to meet a wide range
              of business and marketing requirements. We are one of the
              fast-growing web development companies in Bangladesh that
              understand the world's growing technological advancements and
              offer the right web app development solutions for most
              requirements and budgets.
            </p>
            <p className="text-justify py-3 text-gray-500">
              We are committed to providing many content management options to
              clients with our in-depth expertise in developing and delivering
              customized CMS solutions for their unique business requirements.
              Our comprehensive content management implementations include CMS
              evaluation, recommendation, integration, migration,
              infrastructure, and post-go-live support.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center pb-6">
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-bold my-2">E-Commerce</h3>
            <p className="text-justify py-3 text-gray-500">
              We offer the most powerful end-to-end eCommerce solutions for your
              business that provides a seamless and engaging user journey. We
              build creative eCommerce websites using the latest technologies
              which can help to drive extensive growth & revenue generation.
            </p>
          </div>
          <div className="w-full lg:w-1/2"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center pb-6">
          <div className="w-full lg:w-1/2"></div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-bold my-2">WordPress Development</h3>
            <p className="text-justify py-3 text-gray-500">
              We are committed to providing many content management options to
              clients with our in-depth expertise in developing and delivering
              customized CMS solutions for their unique business requirements.
              Our comprehensive content management implementations include CMS
              evaluation, recommendation, integration, migration,
              infrastructure, and post-go-live support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsMore;
