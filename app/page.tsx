import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <span className="text-xl block font-semibold text-secondary">
              Hello there,
            </span>
            <h1 className="md:text-5xl text-4xl md:w-full w-11/12 mx-auto font-bold">
              My name is Hamzan Wahyudi.
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold">
              I am a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-info to-secondary">
                Fullstack Web Developer
              </span>
            </h1>
            <p className="py-6 max-w-xl mx-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex md:flex-row flex-col justify-center gap-3">
              <button className="btn btn-primary px-6">Get Started</button>
              <button className="btn btn-white px-6 btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-5">
        <h2 className="text-2xl md:w-1/2 w-3/4 mx-auto text-center font-bold mb-5">
          How do you access our Services?
        </h2>
        <p className="text-lg max-w-xl text-center mb-5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          harum necessitatibus molestias velit, iste consequuntur aliquam
          corporis modi accusamus dicta voluptatibus neque beatae nesciunt.
        </p>
        <ul className="steps md:steps-horizontal steps-vertical">
          <li className="step step-primary">
            <div className="grid gap-3 md:text-center text-left">
              <strong>Register</strong>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus dolores maiores eius harum!
              </p>
            </div>
          </li>
          <li className="step">
            <div className="grid gap-3 md:text-center text-left md:mb-0 mb-12">
              <strong>Choose plan</strong>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                reprehenderit obcaecati rem?
              </p>
            </div>
          </li>
          <li className="step">
            <div className="grid gap-3 md:text-center text-left md:mb-0 mb-12">
              <strong>Purchase</strong>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ratione impedit blanditiis fuga fugit.
              </p>
            </div>
          </li>
          <li className="step">
            <div className="grid gap-3 md:text-center text-left md:mb-0 mb-12">
              <strong>Receive Product</strong>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                reprehenderit explicabo odio numquam, eligendi neque?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
