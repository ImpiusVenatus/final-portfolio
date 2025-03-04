import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/react-portfolio.jpg";
import project2 from "../../public/images/projects/react-landing-page.jpg";
import project3 from "../../public/images/projects/constructed.jpg";
import project4 from "../../public/images/projects/videograph.jpg";
import project5 from "../../public/images/projects/sneaky.jpg";
import project6 from "../../public/images/projects/webmaster.jpg";
import project7 from "../../public/images/projects/project-travelo.jpg";
import buckyy from "../../public/images/projects/buckyy.jpg";
import rini from "../../public/images/projects/rini.jpg";
import lifestory from "../../public/images/projects/lifestory.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10 md:w-6">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Sadman Hossain | Projects</title>
        <meta name="description" content="Sadman Hossain's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Buckyy"
                img={buckyy}
                summary="A research driven fintech startup"
                link="https://buckyy.com"
                github="https://github.com/ImpiusVenatus"
                type="Featured Work"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Rini"
                img={rini}
                summary="An AI Power Credit Scoring Engine"
                link="https://rini.vercel.app"
                github="https://github.com/ImpiusVenatus"
                type="Featured Work"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Lifestory"
                img={lifestory}
                summary="A blockchain based project for sharing your cherished moments with others"
                link="https://app.lifestoryapp.app"
                github="https://github.com/ImpiusVenatus"
                type="Featured Work"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React Portfolio"
                img={project1}
                link="https://my-portfolio-puce-two-80.vercel.app"
                github="https://github.com/ImpiusVenatus/my-portfolio"
                type="React Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Landing Page"
                img={project2}
                link="https://react-landing-page-rouge.vercel.app/"
                github="https://github.com/ImpiusVenatus/react-landing-page"
                type="React Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Construction Page"
                img={project3}
                link="https://impiusvenatus.github.io/constructed/"
                github="https://github.com/ImpiusVenatus/constructed"
                type="HTML CSS Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Videography Website"
                img={project4}
                summary="A feature-rich videographer's portfolio made using HTML CSS and Bootstrap"
                link="https://impiusvenatus.github.io/videograph/"
                github="/"
                type="Featured HTML CSS Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Restaurant Website"
                img={project5}
                link="https://impiusvenatus.github.io/sneaky/"
                github="https://github.com/ImpiusVenatus/sneaky"
                type="HTML CSS Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio Website"
                img={project6}
                link="https://impiusvenatus.github.io/webMaster/"
                github="https://github.com/ImpiusVenatus/webMaster"
                type="HTML CSS Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Travelling Website"
                img={project7}
                link="https://impiusvenatus.github.io/Project-Travelo/"
                github="https://github.com/ImpiusVenatus/Project-Travelo"
                type="HTML CSS Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio Website"
                img={project6}
                link="https://impiusvenatus.github.io/webMaster/"
                github="https://github.com/ImpiusVenatus/webMaster"
                type="HTML CSS Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
