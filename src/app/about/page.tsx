import Image from "next/image";
import PageTitle from "../../components/shared/PageTitle";
import { ArrowIcon, MailIcon } from "@/assets/icon";
import { InstagramIcon } from "@/assets/icon/InstagramIcon";
import { LinkedInIcon } from "@/assets/icon/LinkedInICon";
import { GitHubIcon } from "@/assets/icon/GitHubIcon";
import { url } from "inspector";

const About = () => {
  return (
    <div className="px-[20px]">
      <PageTitle title="ABOUT" description="Look it" />
      <Images />
      <Infomation />
      <Connect />
      <Work />
    </div>
  );
};

const Images = () => {
  const image1 = "/asset/images/image_1.jpg";
  const image2 = "/asset/images/image_2.jpg";
  const image3 = "/asset/images/image_3.jpg";
  const image4 = "/asset/images/image_4.jpg";
  const backBg = "/asset/images/photopaper.png"
  const listImage = [
    {
      image: image1,
      width: 300,
      height: 200,
      backText: "Ly Son, Quang Ngai, Viet Nam.png",
    },
    {
      image: image4,
      width: 300,
      height: 350,
      backText: "Giant.png",
    },
    {
      image: image3,
      width: 300,
      height: 350,
      backText: "BaDen Mountain Marathon 2023.png",
    },
    {
      image: image2,
      width: 300,
      height: 200,
      backText: "Be Island, Ly Son, Quang Ngai, Viet Nam.png",
    },
  ];
  return (
    <section className="flex justify-center pt-20 items-center flex-column flex-wrap">
      {listImage.map((item, index) => (
        <div
          key={index}
          className="flipbox rounded-xl p-2"
          style={{
            backgroundColor: "transparent",
            width: item.width + "px",
            height: item.height + "px",
            perspective: "1000px",
          }}
        >
          <div
            className="flipbox-inner rounded-xl"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              textAlign: "center",
              transition: "transform 0.4s",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="rounded-xl"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                backgroundImage: "#bbb",
                color: "black",
                transform: "rotateY(0deg)",
              }}
            >
              <Image
                src={item.image}
                layout="fill"
                alt="about_1"
                className="rounded-xl"
                objectFit="cover"
              />
            </div>
            <div
              className="rounded-xl flex justify-center items-center text-gray-950 text-[10px]"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                backgroundImage: `url(${backBg})` ,
                transform: "rotateY(180deg)",
              }}
            >
              {item.backText}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const Infomation = () => {
  return (
    <section className="flex w-full mt-20 text-[15px] font-light">
      <div className="w-[30%] text-gray-400">About</div>
      <div className="w-[70%] text-gray-600">
        Hi, I`m Nam, born in Binh Phuoc, Viet Nam and currently living Ho Chi
        Minh, Viet Nam. I have been coding 4 years. As software engineer, I
        specialize in full-stack web development.
        <br />
        <br />
        When I`m not at my desk i am probably running, playing badminton or
        computer game
      </div>
    </section>
  );
};

const Connect = () => {
  const listConnects = [
    {
      title: "Mail",
      icon: <MailIcon />,
      link: "mailto:hntnam98@gmail.com",
    },
    {
      title: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/hnt.namm/",
    },
    {
      title: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/nam-thanh-190ba427b/",
    },
    {
      title: "Github",
      icon: <GitHubIcon />,
      link: "https://github.com/hntnam3094?tab=repositories",
    },
  ];
  return (
    <section className="flex w-full mt-20 text-[15px] font-light">
      <div className="w-[30%] text-gray-400">Connect</div>
      <div className="w-[70%] text-gray-600 flex flex-wrap group-hoverrize">
        {listConnects.map((item, index) => (
          <div className="w-[45%] hoverrize" key={index}>
            <a
              href={item.link}
              target="blank"
              className="flex items-center justify-center sm:justify-between border-[1px] border-gray-600 rounded-[5px] px-2 py-[10px] m-1 hoverrize-item"
            >
              <div className="flex gap-x-[5px] justify-between items-center hoverrize-item">
                {item.icon}
                <p className="hidden sm:block font-normal text-[13px]">{item.title}</p>
              </div>
              <div className="hidden sm:block hoverrize-item">
                <ArrowIcon />
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Work = () => {
  const anyses = "/asset/images/anyses.png";
  const lampart = "/asset/images/lampart.jpeg";
  const huit = "/asset/images/huit.png";

  const listWorks = [
    {
      image: anyses,
      name: "Anyses",
      role: "Sofrware Engineer",
      start_year: 2023,
      end_year: "",
      link: "https://anyses.vn/",
    },
    {
      image: lampart,
      name: "Lampart",
      role: "Frontend Engineer",
      start_year: 2020,
      end_year: 2023,
      link: "https://lampart-vn.com/",
    },
    {
      image: huit,
      name: "University of industry and trade",
      role: "Student",
      start_year: 2017,
      end_year: 2020,
      link: "https://huit.edu.vn/",
    },
  ];

  return (
    <section className="flex w-full mt-20 text-[15px] font-light">
      <div className="w-[30%] text-gray-400">Work</div>
      <div className="w-[70%] text-gray-600">
        <div>
          I specialize in PHP, Data struction, Vue, React, web development. I am
          always learning new things.
          <br />
          Here are some of the places i have worked.
        </div>
        <div className="flex flex-col gap-y-[15px] mt-10 group-hoverrize">
          {listWorks.map((item, index) => (
            <div
              key={index}
              className="block sm:flex justify-between items-center text-gray-400 hoverrize"
            >
              <div className="block sm:flex gap-x-[20px] hoverrize-item items-center">
                <div className="flex justify-center items-center cursor-pointer w-[50px] h-[50px]">
                  <a href={item.link} target="blank">
                    <Image
                      src={item.image}
                      width={50}
                      height={50}
                      alt={item.name}
                      className="rounded-[100%]"
                    />
                  </a>
                </div>

                <div className="text-[12px]">
                  <p>{item.name}</p>
                  <p>{item.role}</p>
                </div>
              </div>
              <div className="flex gap-x-[5px] text-[12px] hoverrize-item">
                <p>{item.start_year}</p>
                <p>-</p>
                <p>{item.end_year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
