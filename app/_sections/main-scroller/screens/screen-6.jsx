import { useRef } from "react";

import useStaggerAnimation from "@/hooks/use-stagger-animatation";

const Screen6 = () => {
  const screenRef = useRef(null);
  const listRef = useRef(null);

  useStaggerAnimation(screenRef, listRef, 0.2);

  return (
    <section
      aria-labelledby="screen6-heading"
      ref={screenRef}
      className="screen relative min-w-full"
    >
      <div className="flex h-full w-full flex-col gap-4 overflow-hidden lg:flex-row">
        <article className="flex items-end justify-center max-md:py-28 lg:w-1/2 lg:pb-40">
          <div className="flex flex-col">
            <div className="relative max-w-fit">
              <h2 className="text-foreground z-10 font-serif text-5xl font-bold lg:text-7xl">
                Perfect <br /> Screenshots
              </h2>
              <div className="screen-3-floatingtext absolute top-1/2 left-4/6 -rotate-12">
                <span className="text-md z-20 w-full rotate-6 transform bg-rose-600 px-2 pt-1 font-bold text-nowrap text-rose-200 lg:pt-2 lg:text-xl">
                  Flexible Editor
                </span>
              </div>
            </div>
            <p className="text-md text-foreground/60 mt-7 max-w-96 lg:text-xl">
              Crop, add padding, change colors, set background images, and
              adjust roundness and shadows — all with a few clicks to make your
              visuals truly stand out.
            </p>
          </div>
        </article>

        <figure className="relative flex h-[50vh] w-full shrink-0 justify-center lg:h-auto lg:w-1/2 lg:shrink-0">
          <video
            src="/ss-editor.mp4"
            autoPlay
            muted
            loop
            preload="auto"
            className="bg-foreground/5"
            aria-label="Screenshot editor demonstration"
          />
          <figcaption className="absolute top-0 left-0 z-20 text-4xl font-extrabold mix-blend-difference lg:top-1/6 lg:-left-36 lg:text-6xl">
            Image <br className="lg:hidden" /> Editor
          </figcaption>
        </figure>
      </div>

      <svg
        viewBox="0 0 101 126.25"
        version="1.1"
        xmlSpace="preserve"
        className="rotate-svg absolute -left-1/6 hidden size-[30rem] origin-center opacity-80 lg:top-12 lg:block"
        x="0px"
        y="0px"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        aria-hidden="true"
      >
        <g fill="#ffffff" transform="matrix(1,0,0,1,-635,-97)">
          <g transform="matrix(1,0,0,1,635.007,109.053)">
            <rect x="0" y="0" width="100" height="100" fill="none" />
            <g transform="matrix(1.58993,0,0,1.58993,-25.3215,-36.041)">
              <path d="M41.327,37.502C41.719,34.696 44.294,32.462 47.374,32.462C50.454,32.462 53.029,34.696 53.421,37.502C55.525,35.605 58.934,35.548 61.293,37.528C63.653,39.508 64.189,42.875 62.686,45.276C65.517,45.175 68.165,47.323 68.7,50.356C69.234,53.389 67.481,56.313 64.786,57.187C67.02,58.929 67.667,62.276 66.127,64.944C64.588,67.611 61.365,68.724 58.739,67.661C59.33,70.431 57.674,73.411 54.78,74.465C51.886,75.518 48.702,74.299 47.374,71.797C46.046,74.299 42.862,75.518 39.968,74.465C37.074,73.411 35.418,70.431 36.009,67.661C33.384,68.724 30.161,67.611 28.621,64.944C27.081,62.276 27.729,58.929 29.962,57.187C27.267,56.313 25.514,53.389 26.049,50.356C26.583,47.323 29.231,45.175 32.062,45.276C30.559,42.875 31.096,39.508 33.455,37.528C35.814,35.548 39.224,35.605 41.327,37.502Z" />
            </g>
            <g transform="matrix(1.58993,0,0,1.58993,-25.3215,-36.041)">
              <path
                d="M40.579,35.446C41.722,32.95 44.34,31.151 47.374,31.151C50.409,31.151 53.026,32.95 54.169,35.446C56.649,34.269 59.811,34.574 62.136,36.524C64.46,38.475 65.309,41.535 64.58,44.182C67.237,44.875 69.463,47.14 69.99,50.128C70.517,53.117 69.2,56.007 66.94,57.566C68.53,59.804 68.78,62.971 67.262,65.599C65.745,68.227 62.878,69.594 60.145,69.336C59.925,72.072 58.08,74.658 55.229,75.696C52.377,76.734 49.302,75.939 47.374,73.984C45.446,75.939 42.371,76.734 39.52,75.696C36.668,74.658 34.824,72.072 34.603,69.336C31.87,69.594 29.003,68.227 27.486,65.599C25.969,62.971 26.218,59.804 27.808,57.566C25.548,56.007 24.231,53.117 24.758,50.128C25.285,47.14 27.511,44.875 30.168,44.182C29.439,41.535 30.288,38.475 32.613,36.524C34.937,34.574 38.099,34.269 40.579,35.446ZM40.449,38.475C38.805,36.992 36.141,36.985 34.297,38.532C32.453,40.079 31.998,42.704 33.173,44.581C33.43,44.992 33.439,45.511 33.197,45.931C32.954,46.351 32.5,46.603 32.015,46.585C29.803,46.506 27.757,48.213 27.339,50.584C26.921,52.954 28.26,55.258 30.366,55.94C30.827,56.089 31.168,56.481 31.252,56.959C31.337,57.437 31.15,57.921 30.768,58.22C29.022,59.581 28.552,62.204 29.756,64.288C30.959,66.373 33.465,67.277 35.517,66.446C35.967,66.264 36.48,66.345 36.851,66.657C37.223,66.968 37.392,67.46 37.291,67.934C36.829,70.099 38.154,72.41 40.416,73.234C42.678,74.057 45.179,73.138 46.217,71.183C46.444,70.755 46.889,70.487 47.374,70.487C47.859,70.487 48.304,70.755 48.532,71.183C49.569,73.138 52.07,74.057 54.332,73.234C56.594,72.41 57.92,70.099 57.458,67.934C57.356,67.46 57.525,66.968 57.897,66.657C58.268,66.345 58.782,66.264 59.231,66.446C61.283,67.277 63.789,66.373 64.993,64.288C66.196,62.204 65.726,59.581 63.98,58.22C63.598,57.921 63.412,57.437 63.496,56.959C63.58,56.481 63.921,56.089 64.382,55.94C66.488,55.258 67.827,52.954 67.409,50.584C66.991,48.213 64.945,46.506 62.733,46.585C62.248,46.603 61.794,46.351 61.551,45.931C61.309,45.511 61.318,44.992 61.576,44.581C62.75,42.704 62.295,40.079 60.451,38.532C58.607,36.985 55.943,36.992 54.299,38.475C53.939,38.8 53.429,38.899 52.973,38.733C52.518,38.567 52.191,38.163 52.124,37.683C51.817,35.491 49.781,33.772 47.374,33.772C44.967,33.772 42.931,35.491 42.625,37.683C42.558,38.163 42.231,38.567 41.775,38.733C41.319,38.899 40.809,38.8 40.449,38.475Z"
                fill="none"
              />
            </g>
          </g>
        </g>
      </svg>
    </section>
  );
};

export default Screen6;
