import React from "react";
import profilepic from "../assets/profilepic.jpg";
import viewBg from "../assets/viewBg.jpg";
import viewDbg from "../assets/viewDbg.jpg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";

const ViewPost = () => {
  return (
    <div className="w-[sm] lg:w-[1240px] px-5 lg:px-0 mx-auto mt-10">
      <div className="w-full lg:w-[1230px] h-[301px]">
        <div className="bg-[#6397e5] w-[130px] h-[37px] rounded-[8px] flex justify-center  items-center my-3">
          <h1 className="text-[#fdfeff] font-[Open_Sans] font-[600] text-[17px]">
            Technology
          </h1>
        </div>
        <div className="w-full lg:w-[957px]">
          <h1 className="font-[700] font-[harmattan] text-[40px] lg:text-[70px] text-[#292929]">
            The 20 Biggest Fintech Companies In Nigeria 2022
          </h1>
        </div>
        <div className="w-full lg:w-[452px] flex gap-2 lg:gap-0 lg:justify-between items-center">
          <img
            src={profilepic}
            alt="pic"
            className="w-[46px] h-[46px] rounded-full"
          />
          <h1 className="font-[Open_Sans] font-[400] text-[18px] lg:text-[25px] text-[#9a9a9a]">
            By <span className="text-[#292929]">Maria Davies</span> - May 21,
            2022
          </h1>
        </div>
      </div>
      <hr className="hidden lg:block w-[1230px] border-[1.5px] border-[#dddddd] my-10" />
      <div className="mt-5">
        <img
          src={viewBg}
          alt=""
          className="w-full lg:w-[1239px] object-cover lg:h-[538px] rounded-[8px]"
        />
      </div>
      <div className="w-full px-3 lg:px-0 lg:w-[1238px] mx-auto lg:h-[879px] font-[Open_Sans] font-[400] text-[15px] lg:text-[27px] text-[#7b7b7b] mt-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          neque, vitae arcu elit amet arcu. Non quam dignissim blandit lectus
          tempus sit molestie fermentum. Mattis morbi fames nullam enim. Vitae
          commodo tellus cras eu, amet id scelerisque quis. Massa donec
          accumsan, maecenas ullamcorper sagittis, ut felis, faucibus. Varius
          nibh tristique a mattis mattis amet in placerat. Donec ultricies
          pharetra turpis proin. Vulputate volutpat neque diam at metus
          scelerisque.
        </p>
        <p className="my-10">
          Imperdiet congue ultrices proin nisi. Id sagittis aenean egestas
          metus, aliquet dolor vitae consectetur diam. Porta aliquet cras nisl
          sed sed ut consequat tempus ultricies. Tellus tortor sapien, et
          sagittis. Convallis nunc sem purus egestas. Semper venenatis
          suspendisse in et, velit ultrices facilisis enim mi. Tortor quis
          sapien pulvinar vitae et neque curabitur velit in.
        </p>
        <p>
          Dictum nulla vitae vitae gravida consectetur libero arcu, id cras.
          Erat sed viverra auctor eget pellentesque velit. Neque nunc sit ut eu
          at id morbi turpis. Interdum in viverra sodales est adipiscing metus
          nunc. Condimentum massa tincidunt consequat mattis dui in fermentum
          faucibus. Faucibus non amet ornare tellus convallis urna malesuada
          sed. Tellus scelerisque eu, eu posuere mattis. Ac in non dui viverra
          mi cras nibh. Amet euismod ut nunc amet, ullamcorper eu cursus eget
          est. Ipsum praesent integer vestibulum lorem elit lectus. Arcu viverra
          dignissim adipiscing velit id arcu nunc, sit mollis. Condimentum
          viverra vitae, in arcu. Bibendum purus tincidunt aenean neque, iaculis
          quam. Sollicitudin enim, aenean commodo arcu ligula consectetur
          porttitor faucibus sed.
        </p>
      </div>
      <div className="w-full md:w-full md:flex md:flex-row px-3 lg:px-0 lg:w-[1240px] h-[441px] flex flex-col items-center gap-5 lg:gap-0 lg:flex lg:flex-row lg:justify-between lg:p-5 md:mt-0 lg:mt-10">
        <div className="w-full md:w-full lg:w-[538px] lg:h-[421px] rounded-[8px]">
          <img
            src={viewDbg}
            alt="bg"
            className="w-full md:w-full lg:w-[538px] lg:h-[421px] object-cover rounded-[8px]"
          />
        </div>
        <div className="w-full md:w-full lg:w-[621px] lg:h-[441px]">
          <div>
            <h1 className="font-[700] font-[harmattan] text-[30px] lg:text-[50px] text-[#292929]">
              Fintech Companies in Nigeria
            </h1>
          </div>
          <div>
            <p className="w-full lg:w-[621px] lg:h-[360px] font-[400] font-[Open_Sans] text-[15px] lg:text-[27px] text-[#7b7b7b]">
              Ac sem pulvinar feugiat elit lobortis. At conllis gravida massa,
              ultricies eu. Erat ornare sed elit sed porta egestas duis. Odio
              phetra, arcu eros, et metus adipiscing enim, odio. Euimod cursus
              elementum pharetra sed cursus cotur etiam id. Fringilla phasellus
              vivamus in vehila aliquam molestie blandit. Duis nibh blandit
              pharetra nisi leo, arcu nunc suspendisse. Vol vel ac aliquam
              aliquam mauris.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-19 px-5 lg:px-0 lg:mt-10 w-full lg:w-[1238px] lg:h-[439px] font-[Open_Sans] font-[400] text-[15px] lg:text-[28px] text-[#7b7b7b]">
        <p>
          Blandit in amet nisl ultrices vitae sit volutpat. Et urna, ullamcorper
          sapien, ut at nibh suscipit tincidunt ac. Et malesuada justo id massa.
          Eu, morbi convallis egestas egestas vel at ipsum. Ultrices viverra
          augue praesent massa, cursus arcu, sit in suscipit. Nunc blandit eget
          lobortis non vestibulum egestas lacinia ut.
        </p>
        <p className="my-5">
          Aliquet lorem tristique eros, neque, eros, amet urna integer ornare.
          Et faucibus tristique quis viverra. Bibendum sit nibh cursus eu.
          Adipiscing elit ultrices faucibus neque nullam. Pharetra, enim ornare
          scelerisque id fermentum proin egestas tristique. Amet, tempor aliquet
          ac eu. Amet, tellus, integer enim leo risus nisl. Aliquet amet, est mi
          tristique tempus nisl tellus morbi massa. Pharetra libero viverra
          nullam eget eu, vel nam at aliquam. Dui bibendum accumsan orci sit.
        </p>
      </div>
      <div className="w-full lg:w-[380px] px-5 lg:px-0 flex gap-1 lg:flex lg:gap-0 lg:justify-between lg:items-center lg:my-15">
        <div className="w-full lg:w-[153px] ">
          <h1 className=" font-[400] font-[Open_Sans] text-[16px] lg:text-[28px] text-[#292929]">
            Share post;
          </h1>
        </div>
        <div className="w-full lg:w-[190px] flex gap-2 lg:gap-0 items-center lg:justify-between">
          <img
            src={twitter}
            alt=""
            className="w-[20px] h-[20px] lg:w-[46px] lg:h-[37px]"
          />
          <img
            src={facebook}
            alt=""
            className="w-[20px] h-[20px] lg:w-[37px] lg:h-[37px]"
          />
          <img
            src={whatsapp}
            alt=""
            className="w-[20px] h-[20px] lg:w-[37px] lg:h-[37px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
