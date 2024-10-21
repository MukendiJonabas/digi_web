import digi from "../public/group.png";
import taxes from "../public/travail.png";
import main from "../public/main.png";
import Image from "next/image";
import robot from "../public/digitaliser.jpg";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <section className="bg-zinc-200 flex flex-col md:flex-col justify-center items-center p-10">
        <div className="flex flex-col md:flex-col justify-around items-center gap-10 basis-6/12">
          <div className="flex flex-col md:flex-row justify-around items-center gap-4">
            <p className="flex flex-col md:flex-col justify-around items-center text-center basis-4/12">
              <span className="">
                <Image
                  src={digi}
                  alt="une image"
                  className="  size-28 bg-slate-100 rounded-full p-3 m-3 border-4 border-opacity-100 border-black"
                />
              </span>
              <span className=" text-black text[0.3rem] font-semibold">
                <span className="text-[1.2rem] text-green-500">+</span> hundred
                of people work succesfully on our products
              </span>
            </p>
            <p className="flex flex-col md:flex-col justify-around items-center text-center basis-4/12">
              <span className="">
                <Image
                  src={taxes}
                  alt="une image"
                  className=" size-28 bg-slate-100 rounded-full p-3 m-3 border-4 border-black"
                />
              </span>
              <span className=" text-black text[0.3rem] font-semibold">
                A proffesionnal team which is ready to the best
              </span>
            </p>
            <p className="flex flex-col md:flex-col justify-around items-center text-center basis-4/12">
              <span className="">
                <Image
                  src={main}
                  alt="une image"
                  className="  size-28 bg-slate-100 rounded-full p-3 m-3 border-4 border-black"
                />
              </span>
              <span className=" text-black text[0.3rem] font-semibold">
                with an high workforce from skillful expert
              </span>
            </p>
          </div>
        </div>
        <div className="basis-6/12 bg-zinc-200 ">
          <div className="basis-2/12 bg-white shadow shadow-zinc-500 m-3 ml-20 mr-20 rounded-br-2xl rounded-tl-2xl  p-10 flex flex-col">
            <p className="text-slate-600 text-[1.9rem] font-extrabold basis-1/2">
              Join our newsletter
            </p>
            <p className="text-slate-400 font-semibold text-[0.9rem] basis-1/2">
              Get news in your inbox every week! We love to bring you news it's
              a pleasure for us
            </p>
            <form
              action="/"
              method="post"
              className="flex flex-col gap-2 basis-1/2 "
            >
              <input
                type="text"
                placeholder=" Your full name"
                className="rounded-xl border-2 border-opacity-50 border-slate-700 p-1 basis-3/12"
              />
              <input
                type="mail"
                placeholder=" Your e-mail"
                className="rounded-xl border-2 border-opacity-50 border-slate-700 p-1 basis-3/12"
              />
              <input
                type="submit"
                value="Join us"
                className="rounded-xl border-2 border-opacity-50 border-slate-700 p-1 bg-sky-300 basis-3/12 items-center"
              />
            </form>
          </div>
        </div>
      </section>

      <section className="m-20 mr-40 ml-40 p-5 pl-3 pr-3 pb-10 border-t-2 border-slate-400 text-slate-400 flex flex-col md:flex-row gap-5 items-center justify-around">
        <div className="font-bold justify-center items-center">
          Company
          <p>About Us</p>
          <p>Github</p>
          <p>Freebies</p>
          <p>Premium</p>
          <p>BlogPremium</p>
          <p>Affiliate Program</p>
          <p>Creative Tim Club</p>
        </div>
        <div className=" font-bold justify-center items-center">
          Company
          <p>About Us</p>
          <p>Github</p>
          <p>Freebies</p>
          <p>Premium</p>
          <p>BlogPremium</p>
          <p>Affiliate Program</p>
          <p>Creative Tim Club</p>
        </div>
        <div className=" font-bold justify-center items-center">
          Company
          <p>About Us</p>
          <p>Github</p>
          <p>Freebies</p>
          <p>Premium</p>
          <p>BlogPremium</p>
          <p>Affiliate Program</p>
          <p>Creative Tim Club</p>
        </div>
        <div className=" font-bold justify-center items-center">
          Company
          <p>About Us</p>
          <p>Github</p>
          <p>Freebies</p>
          <p>Premium</p>
          <p>BlogPremium</p>
          <p>Affiliate Program</p>
          <p>Creative Tim Club</p>
        </div>
      </section>

      <section className="border-t-2 border-slate-400 m-20 mr-40 ml-40 p-5 pl-3 pr-3 pb-10 text-slate-400 text-center justify-around ">
        <p className="justify-center flex md:flex-row gap-5 m-5">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m20.947 8.305c-.011-.757-.151-1.508-.419-2.216-.469-1.209-1.424-2.165-2.633-2.633-.699-.263-1.438-.404-2.186-.42-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055c-.747.016-1.486.157-2.185.42-1.209.468-2.165 1.424-2.633 2.633-.263.699-.405 1.438-.419 2.185-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187.469 1.208 1.424 2.164 2.634 2.632.696.272 1.435.426 2.185.45.963.043 1.268.056 3.71.056s2.755 0 3.71-.056c.747-.015 1.486-.156 2.186-.419 1.209-.469 2.164-1.425 2.633-2.633.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623c2.552 0 4.623 2.069 4.623 4.623s-2.071 4.623-4.623 4.623zm4.807-8.339c-.597 0-1.078-.482-1.078-1.078s.481-1.078 1.078-1.078c.595 0 1.077.482 1.077 1.078s-.482 1.078-1.077 1.078z" />
            <circle cx="11.994" cy="11.979" r="3.003" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="size-6"
          >
            <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
          </svg>
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className=" size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            ></path>
          </svg>{" "}
        </p>
        <p>
          &copy; all reserved DigiPublic 2024 the widest solution through
          numeric
        </p>
      </section>
    </footer>
  );
}
