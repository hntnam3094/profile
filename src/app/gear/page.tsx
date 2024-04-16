import PageTitle from "@/components/shared/PageTitle";
import Image from "next/image";

export default function Gear() {
  return (
    <div>
      <PageTitle
        title="Gears"
        description="These are tools in my code and daily life"
      />
      <Coding />
      <Running />
      <Bike />
    </div>
  );
}

const Bike = () => {
  const listGearCoding = [
    {
      image:
        "https://giant.vn/wp-content/uploads/2020/07/escape-2-city-disc-charcoal-1.jpg",
      title: "Giant Escape 2 City Disc",
      description: "Giant Escape 2 City Disc",
      link: "https://giant.vn/shop/xe-dap-duong-pho-touring-giant-escape-2-city-disc-phanh-dia-banh-700c-2021/",
    },
  ];

  return (
    <div className="mt-5 sm:mt-20">
      <div>Bike</div>
      <div>
        <GearInfomation listGear={listGearCoding} />
      </div>
    </div>
  );
}

const Running = () => {
  const listGearCoding = [
    {
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c2fff38-9f89-40f1-bbcf-ffbfaab5adbc/wio-8-road-running-shoes-S6jPM3.png",
      title: "Nike Winflo 8",
      description: "Nike Winflo 8",
      link: "",
    },
    {
      image:
        "https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=16x0&format=auto 16w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=32x0&format=auto 32w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=48x0&format=auto 48w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=64x0&format=auto 64w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=96x0&format=auto 96w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=128x0&format=auto 128w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=256x0&format=auto 256w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=320x0&format=auto 320w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=380x0&format=auto 380w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=472x0&format=auto 472w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=576x0&format=auto 576w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=640x0&format=auto 640w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=750x0&format=auto 750w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=828x0&format=auto 828w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=1080x0&format=auto 1080w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=1200x0&format=auto 1200w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=1440x0&format=auto 1440w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=1680x0&format=auto 1680w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=1800x0&format=auto 1800w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=1920x0&format=auto 1920w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=2048x0&format=auto 2048w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=2520x0&format=auto 2520w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=3000x0&format=auto 3000w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=3250x0&format=auto 3250w, https://contents.mediadecathlon.com/p1854944/k$e52b8315208638c6de58cb4f4c8268f2/qu%E1%BA%A7n-short-t%E1%BA%ADp-fitness-fst-100-cho-nam-xanh-navy-domyos-8529981.jpg?f=3620x0&format=auto 3620w",
      title: "Quần short tập gym",
      description: "Quần short tập gym",
      link: "https://www.decathlon.vn/p/qu%C3%A2%CC%80n-short-t%E1%BA%ADp-gym-cho-nam-thoa%CC%81ng-khi%CC%81-%C4%91en-domyos-8506243.html",
    },
    {
      image:
        "https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=16x0&format=auto 16w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=32x0&format=auto 32w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=48x0&format=auto 48w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=64x0&format=auto 64w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=96x0&format=auto 96w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=128x0&format=auto 128w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=256x0&format=auto 256w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=320x0&format=auto 320w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=380x0&format=auto 380w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=472x0&format=auto 472w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=576x0&format=auto 576w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=640x0&format=auto 640w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=750x0&format=auto 750w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=828x0&format=auto 828w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=1080x0&format=auto 1080w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=1200x0&format=auto 1200w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=1440x0&format=auto 1440w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=1680x0&format=auto 1680w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=1800x0&format=auto 1800w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=1920x0&format=auto 1920w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=2048x0&format=auto 2048w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=2520x0&format=auto 2520w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=3000x0&format=auto 3000w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=3250x0&format=auto 3250w, https://contents.mediadecathlon.com/p2511063/k$8e576f79d12290368733dec935f7743f/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.jpg?f=3620x0&format=auto 3620w",
      title: "Áo thun tập fitness",
      description: "Áo thun tập fitness",
      link: "https://www.decathlon.vn/p/%C3%A1o-thun-t%E1%BA%ADp-fitness-100-cho-nam-%C4%91en-domyos-8603265.html",
    },
    {
      image:
        "https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_500,q_auto,w_500/c_pad,h_500,w_500/v1/Product_Images/vi_VN/products/010-02410-40/v/cf-xl-947be65b-9f7d-424d-bac8-c8c0b025f644?pgw=1",
      title: "fēnix 6",
      description: "fēnix 6",
      link: "https://www.garmin.com/vi-VN/p/702902/pn/010-02410-40",
    },
  ];

  return (
    <div className="mt-5 sm:mt-20">
      <div>Running</div>
      <div>
        <GearInfomation listGear={listGearCoding} />
      </div>
    </div>
  );
}

const Coding = () => {
  const listGearCoding = [
    {
      image:
        "https://apple.ngocnguyen.vn/cdn/images/202304/goods_img/macbook-pro-13-inch-2016-i5-ram-8gb-ssd-256gb-P3836-1680836969418.jpg",
      title: "Macbook Pro 13 inch 2016 i5 2.0GHz",
      description: "Macbook Pro 13 inch 2016 i5 2.0GHz",
      link: "https://apple.ngocnguyen.vn/macbook-2016/macbook-pro-13-inch-2016-i5-2-0ghz-slivergray?gad_source=1&gclid=CjwKCAjww_iwBhApEiwAuG6ccAGfrNP-97goF4luafpQYkccTaTeWznQLoj2y-yxjHs0qSpJU5pZsBoCQkwQAvD_BwE",
    },
    {
      image:
        "https://product.hstatic.net/200000420363/product/dell-s2422hz_07066ca63cc040ab94c6a217c3ce0460_master.jpg",
      title: "LCD 24 inch Dell S2422HZ FHD IPS 75Hz",
      description: "LCD 24 inch Dell S2422HZ FHD IPS 75Hz",
      link: "https://tinhocngoisao.com/products/man-hinh-lcd-24-dell-s2422hz-fhd-ips-75hz-gaming-chinh-hang",
    },
    {
      image:
        "https://product.hstatic.net/200000420363/product/mo_lgt_m331_de_4ac0991c1ee3499b95d4bcc89fe79321_master.jpg",
      title: "Logitech M331 | Đen, 2.4GHz, Silent",
      description: "Logitech M331 | Đen, 2.4GHz, Silent",
      link: "https://tinhocngoisao.com/products/chuot-khong-day-logitech-m331-silent-den",
    },

  ];

  return (
    <div className="mt-5 sm:mt-20">
      <div>Desk Setup</div>
      <div>
        <GearInfomation listGear={listGearCoding} />
      </div>
    </div>
  );
};

type GearInfomationType = {
  image: string;
  title: string;
  description: string;
  link: string;
};

type listGearType = GearInfomationType[];
type Props = { listGear: listGearType };

const GearInfomation = ({ listGear }: Props) => {
  return (
    <div className="block sm:flex flex-wrap  w-full">
      {listGear.map((item, index) => (
        <div key={index} className="flex justify-center w-full sm:w-[50%] p-[5px] items-center gap-x-[10px]">
          <div className="border-[1px] w-[70px] h-[70px] rounded-[15px]">
            <Image src={item.image} width={70} height={70} alt={item.title} className="rounded-[15px] object-cover" style={{height: '68px'}}/>
          </div>
          <div className="min-w-[180px] max-w-[180px] w-[60%]">
            <h3 className="text-[14px] text-gray-600">{item.title}</h3>
            <p className="text-[12px] text-gray-400">{item.description}</p>
          </div>
          <div className="w-[20%]">
            <a href={item.link} target="blank" className="bg-gray-400 px-[10px] py-[5px] rounded-[15px] text-white text-[12px]">GET</a>
          </div>
        </div>
      ))}
    </div>
  );
};
