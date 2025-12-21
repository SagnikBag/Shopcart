import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from "../component/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ex
            accusamus aut aliquam in, magnam ullam culpa voluptatum fugiat qui,
            deleniti cupiditate sint tempore minima, repudiandae magni
            laudantium aliquid accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            vero, ducimus quos sunt ad eveniet dolor magni labore sapiente
            pariatur quae sed, facere illo fuga dolorem molestias quia
            voluptates cupiditate!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse
            voluptate iusto vero, iste magni recusandae earum quisquam accusamus
            facere ab consequatur ea cumque cupiditate hic? Maxime animi id
            aliquam.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurane:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae
            in nisi veniam dolores eos odio molestiae et aliquid doloribus
            quasi, iste, impedit, fugit quisquam. Nulla repellat quibusdam vero
            deleniti.
          </p>
        </div>

        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae
            in nisi veniam dolores eos odio molestiae et aliquid doloribus
            quasi, iste, impedit, fugit quisquam. Nulla repellat quibusdam vero
            deleniti.
          </p>
        </div>

        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae
            in nisi veniam dolores eos odio molestiae et aliquid doloribus
            quasi, iste, impedit, fugit quisquam. Nulla repellat quibusdam vero
            deleniti.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About