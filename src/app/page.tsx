import Image from "next/image";
import PageTitle from "../components/shared/PageTitle";
import Link from "next/link";
const avatar = "/asset/images/avatar.png";
export default function Home() {
  return (
    <div className="pt-10">
      <div>
        <Image
          src={avatar}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full"
        />
        <PageTitle
          title="Nam Hoang Ngoc Thanh"
          description={
            <>
              Hi there, I`m a software engineer who coding website in Ho Chi
              Minh City, Viet Nam
              <br />
              Welcome to my world !!
            </>
          }
          className="mt-[20px]"
        />

        <Dashboard />

        <div className="w-full flex justify-center mt-[20px]">
          <Link
            href={"/about"}
            className="border-[1px] text-center px-[30px] py-[10px] rounded-[5px] bg-white text-gray-900 text-[12px] hover:bg-white hover:text-gray-600"
          >
            ABOUT ME
          </Link>
        </div>
      </div>
    </div>
  );
}

const Dashboard = () => {
  const instagram =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";
  const linkedin = "/asset/images/tech/LinkedIn_icon.svg.png";
  const laravel = "/asset/images/tech/1969px-Laravel.svg.png";
  const react = "/asset/images/tech/React-icon.svg.png";
  const docker = "/asset/images/tech/Docker-Logo.png";
  const linux = "/asset/images/tech/Tux.svg.png";
  const github = "/asset/images/tech/github.png";
  const listTech = [
    {
      image: laravel
    },
    {
      image: react
    },
    {
      image: docker
    },
    {
      image: linux
    }
  ]
  return (
    <div className="mt-5 sm:mt-20 flex flex-col sm:flex-wrap sm:flex-row">
      <div className="w-full sm:w-[30%] p-5">
        <div className=" h-[150px] border-[1px] rounded-[15px] bg-gray-100">
          <div className="p-[15px]">
            <div className="mb-[30px] flex items-center gap-x-[10px]">
              <Image src={instagram} width={40} height={40} alt="Instagram" unoptimized/>
              <p className="text-[10px] text-gray-400">@hnt.namm</p>
            </div>
            <a
              href="https://www.instagram.com/hnt.namm/"
              target="blank"
              className="text-[14px] text-white py-[5px] px-[10px] bg-gray-400 rounded-[15px] hover:bg-white hover:text-gray-400 hover:border-[1px]"
            >
              Follow
            </a>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[70%] p-5">
        <div className=" h-[150px] border-[1px] rounded-[15px] bg-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.449434866633!2d106.62456367448183!3d10.853380789300067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a20cc3645ff%3A0xb6999d6234a95087!2zSE9TRSBCdWlsZGluZywgUXVhbmcgVHJ1bmcsIFNvZnR3YXJlIENpdHksIFF14bqtbiAxMiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1713275201544!5m2!1svi!2s"
            style={{ width: "100%", height: "100%", borderRadius: "15px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="w-full sm:w-[70%] p-5">
        <div className="flex h-[150px] border-[1px] rounded-[15px] bg-gray-100">
          <div className="w-[40%] p-[10px] flex flex-col justify-center items-center">
            <Image src={linkedin} width={50} height={50} alt="LinkedIn" />
            <div className="mt-[20px]">
              <a
                href="https://www.linkedin.com/in/nam-thanh-190ba427b/"
                target="blank"
                className="text-[14px] text-white py-[5px] px-[10px] bg-gray-400 rounded-[15px] hover:bg-white hover:text-gray-400 hover:border-[1px]"
              >
                Connect
              </a>
            </div>
          </div>
          <div className="w-[60%] flex">
            <div className="w-full flex flex-wrap justify-center items-center">
              {
                listTech.map((item, index) => (
                  <div key={index} className="w-[40%] sm:w-[45%] h-[55px] sm:h-[65px] border-[1px] rounded-[10px] m-1 flex justify-center items-center bg-white">
                    <Image src={item.image} width={45} height={50} alt="LinkedIn" unoptimized/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[30%] p-5">
        <a href="https://github.com/hntnam3094?tab=repositories" target="blank">
        <div className=" h-[150px] border-[1px] rounded-[15px] bg-gray-100 flex justify-center items-center">
          <Image src={github} width={40} height={40} alt="Github" unoptimized/>
        </div>
        </a>
      </div>
    </div>
  );
};

const TechStack = () => {
  const teckStack = [
    {
      title: "Backend",
      children: [
        {
          title: "PHP",
        },
        {
          title: "Ruby",
        },
        {
          title: "NodeJs",
        },
      ],
    },
    {
      title: "Frontend",
      children: [
        {
          title: "HTML",
        },
        {
          title: "CSS",
        },
        {
          title: "ReactJS",
        },
        {
          title: "VueJS",
        },
      ],
    },
    {
      title: "DevOps",
      children: [
        {
          title: "LINUX",
        },
        {
          title: "Docker",
        },
        {
          title: "Gitlab",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-between items-center p-3">
      {teckStack.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
    </div>
  );
};
