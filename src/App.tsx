import "./App.css";
import MainBanner from "./assets/images/main-banner.png";
import { GlobeIcon } from "./assets/icons/globe.tsx";
import { Tag } from "./components/Tag";
import { Card } from "./components/Card.tsx";
function App() {
  return (
    <main className="bg-gray-900">
      <section className="px-body bg-yellow">
        <h1 className="text-9xl text-black font-bold w-36 uppercase leading-none">
          Digitize ideas
        </h1>
        <div className="flex gap-3">
          <Tag Icon={GlobeIcon} title="2022 Best Agency" selected />
          <Tag Icon={GlobeIcon} title="World Class Agency" selected />
        </div>
        <img
          src={MainBanner}
          className="w-full rounded-t-[5rem] object-cover h-96 mt-16"
          alt=""
        />
      </section>
      <section className="w-full h-20 bg-black text-yellow text-3xl font-bold flex items-center [&>*]:uppercase">
        <p>Discuss your ideias</p>
      </section>
      <section className="bg-gray-900 w-full px-body text-white py-14">
        <div className="flex gap-16 items-end justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="uppercase text-7xl font-bold">
              Our services <span className="text-yellow text-8xl">.</span>
            </h2>
            <p className="text-sm text-gray-700 max-w-[525px]">
              Description description description description description
              description description description description description
              description description description description
            </p>
          </div>
          <div className="min-w-80">
            <ul className="flex gap-4 w-full justify-end flex-wrap text-white">
              <li>
                <Tag Icon={GlobeIcon} title="Design" color="white" selected />
              </li>
              <li>
                <Tag Icon={GlobeIcon} title="Development" color="white" />
              </li>
              <li>
                <Tag Icon={GlobeIcon} title="Data Marketing" color="white" />
              </li>
              <li>
                <Tag Icon={GlobeIcon} title="SEO" color="white" />
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10">
          <Card title="UI/UX Design" />
          <Card title="Web Design" />
          <Card title="Brand Design" />
          <Card title="Graphic Design" />
        </div>
      </section>

      <section className="p-body bg-gray-900">
        <p className="uppercase font-bold text-white bg-gray-700 px-32 py-24 text-6xl text-justify">
          a creative{" "}
          <span className="h-[1.1ch] w-20 bg-yellow inline-block rounded-full"></span>{" "}
          mind knows{" "}
          <span className="h-[1.1ch] w-20 bg-yellow inline-block rounded-full"></span>{" "}
          how to do the{" "}
          <span className="h-[1.1ch] w-20 bg-yellow inline-block rounded-full"></span>{" "}
          right thing at the right place and at the{" "}
          <span className="h-[1.1ch] w-20 bg-yellow inline-block rounded-full"></span>{" "}
          right time
        </p>
      </section>

      <section className="bg-yellow mx-body rounded-b-[5rem] h-fit py-20 flex flex-col items-center justify-center gap-10">
        <p className="font-black uppercase text-6xl w-[28rem] text-center">
          Let's discuss your ideas
        </p>
        <div className="flex items-center gap-2">
          <button className="uppercase px-6 py-2 bg-black text-yellow rounded-full text-sm">
            Talks now
          </button>
          <button className="uppercase px-6 py-2 border-black border-[1px] text-black rounded-full text-sm">
            Follow us
          </button>
        </div>
      </section>

      <section className="mx-body pt-16 pb-4 text-yellow">
        <p className="text-center mb-16 text-4xl">Breno Romeiro</p>
        <ul className="uppercase flex items-center justify-between font-light text-xs">
          <li>terms and agreements</li>
          <li>@2024 breno romeiro all rights reserved</li>
          <li>privacy policy</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
