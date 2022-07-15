import React from "react";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiCaretRight } from "react-icons/bi";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";
import sanitizeHtml from "sanitize-html";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import Breadcrumb from "../components/Breadcrumb";

const MemberDetails = ({ data }) => {
  const teamData = data?.strapiTeam;
  console.log(data?.strapiTeam);

  return (
    <Layout>
      <Seo title={teamData?.name} />
      <section>
        <Breadcrumb second="team" third={teamData?.name} />
        <SectionTitle className="text-5xl text-center">
          {teamData?.name}
        </SectionTitle>

        <div className="container mx-auto px-10 flex flex-col lg:flex-row my-20">
          <div className="w-full lg:w-1/3 mr-0 lg:mr-14 rounded overflow-hidden shadow-custom bg-white">
            <GatsbyImage
              image={getImage(teamData?.avatar?.localFile)}
              alt={teamData?.avatar?.alternativeText}
            />

            <div className="py-4 px-6">
              <h2 className="font-bold text-2xl mb-1 text-primary">
                {teamData?.name}
              </h2>
              <p className="text-secondary font-medium">
                {teamData?.designation}
              </p>
              <p className="text-secondary font-medium">
                {teamData?.expertiseType}
              </p>
            </div>
            <div className="px-6 pb-6">
              <span className="text-primary">{teamData?.summary}</span>
            </div>
            <hr className="bg-secondary" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Personal Information
              </h3>
              <div className="flex justify-between pb-3">
                <p className="text-gray-500 font-semibold text-lg">Phone</p>
                <a
                  href={`tel:${teamData?.phone}`}
                  className="text-lg text-gray-500 hover:text-secondary transition duration-300 cursor-pointer"
                >
                  {teamData?.phone}
                </a>
              </div>
              <div className="flex justify-between pb-3 items-center">
                <p className="text-gray-500 font-semibold text-lg">Email</p>
                <a
                  href={`mailto:${teamData?.email}`}
                  className="text-sm text-gray-500 hover:text-secondary transition duration-300 cursor-pointer"
                >
                  {teamData?.email}
                </a>
              </div>
            </div>
            <hr />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">Skill</h3>

              {teamData?.skills?.map((skill) => {
                return (
                  <div key={skill?.strapi_id} className="w-full my-5">
                    <h3 className="text-lg font-semibold text-slate-700 pb-2">
                      {skill?.skillName}
                    </h3>
                    <div className="w-full h-2 bg-gray-300 rounded-3xl">
                      <div
                        className={`
                      ${skill?.expertiseLevel === 0 && "w-0"} 
                      ${skill?.expertiseLevel === 1 && "w-[10%]"} 
                      ${skill?.expertiseLevel === 2 && "w-[20%]"}
                      ${skill?.expertiseLevel === 3 && "w-[30%]"}
                      ${skill?.expertiseLevel === 4 && "w-[40%]"}
                      ${skill?.expertiseLevel === 5 && "w-[50%]"}
                      ${skill?.expertiseLevel === 6 && "w-[60%]"}
                      ${skill?.expertiseLevel === 7 && "w-[70%]"}
                      ${skill?.expertiseLevel === 8 && "w-[80%]"}
                      ${skill?.expertiseLevel === 9 && "w-[90%]"}
                      ${skill?.expertiseLevel === 10 && "w-full"}
                      rounded-full h-2 bg-secondary relative`}
                      >
                        <span className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-secondary"></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="flex my-5 p-6">
              <a
                target="_blank"
                href={teamData?.socials?.facebookLink}
                className="p-4 bg-slate-200 mr-4 rounded hover:bg-secondary text-secondary cursor-pointer hover:text-white transition-all duration-300"
              >
                <FaFacebookSquare className="text-lg" />
              </a>
              <a
                target="_blank"
                href={teamData?.socials?.twitterLink}
                className="p-4 bg-slate-200 mr-4 rounded hover:bg-secondary text-secondary cursor-pointer hover:text-white transition-all duration-300"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a
                target="_blank"
                href={teamData?.socials?.linkedInLink}
                className="p-4 bg-slate-200 mr-4 rounded hover:bg-secondary text-secondary cursor-pointer hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-3 text-primary">
                About {teamData?.name}
              </h2>

              <div
                className="text-primary"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(teamData?.details.data.details),
                }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3 text-primary">
                Capabilities
              </h2>
              <div className="py-3">
                {teamData?.capabilities?.map((capability) => (
                  <div
                    key={capability?.strapi_id}
                    className="flex items-center py-2"
                  >
                    <BiCaretRight className="text-lg text-secondary mr-2" />
                    <span className="text-primary">
                      {capability?.capabilityPoint}
                    </span>
                  </div>
                ))}
              </div>
              <p className="py-3 text-primary">
                Dentist is a Responsive One Page WordPress Theme special crafted
                for dentist, dentist office. We have included all sections that
                a dental website need. Gallery (before&after), testimonials,
                doctors, office description, request form, contacts, services.
                All this stuff is fully editable, you can change colors, fonts,
                order, images, texts, and no coding skills is necessary. Dentist
                is built on luplis Framework with drag & drop page builder.
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-semibold py-4 text-primary">
                Contact Me
              </h2>
              <div className="py-3">
                <div className="flex justify-between">
                  <div className="w-[48%] mb-4">
                    <input
                      className="w-full py-3 outline-none border-b-2 focus:border-secondary transition-all duration-500 placeholder:text-slate-600"
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                    />
                  </div>
                  <div className="w-[48%] mb-4">
                    <input
                      className="w-full py-3 outline-none border-b-2 focus:border-secondary transition-all duration-500 placeholder:text-slate-600"
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                    />
                  </div>
                </div>
                <textarea
                  className="w-full pt-8 pb-20 outline-none border-b-2 focus:border-secondary transition-all duration-500 placeholder:text-slate-600"
                  name="message"
                  placeholder="Message"
                  id=""
                ></textarea>
              </div>
              <button className="text-white text-lg font-medium bg-primary py-4 px-8 my-3 rounded-md hover:bg-secondary transition-all duration-500">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MemberDetails;

export const query = graphql`
  query ($slug: String) {
    strapiTeam(slug: { eq: $slug }) {
      slug
      name
      phone
      summary
      email
      avatar {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, width: 480)
          }
        }
        alternativeText
      }
      designation
      expertiseType
      details {
        data {
          details
        }
      }
      capabilities {
        capabilityPoint
        strapi_id
      }
      skills {
        expertiseLevel
        skillName
        strapi_id
      }
      socials {
        facebookLink
        linkedInLink
        twitterLink
      }
    }
  }
`;
