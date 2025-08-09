import { cn } from "../../lib/utils.js";

const Instructions = () => {
  return (
    <div className="relative bg-[#000000] flex min-h-[50rem] w-full items-center justify-center px-4 py-8">
      <img
        src="/star 1.svg"
        alt="star 1"
        className="z-49 absolute top-20 left-0 w-16 h-16 md:top-80 md:left-20 md:w-24 md:h-24"
      />
      <img
        src="/star2.svg"
        alt="star 2"
        className="z-49 absolute top-85 left-0 w-16 h-16 md:top-80 md:left-130 md:w-24 md:h-24"
      />
      <img
        src="/star3.svg"
        alt="star 3"
        className="z-49 absolute top-145 left-0 w-24 h-24 md:top-76 md:left-230 md:w-36 md:h-36"
      />
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center"></div>
      <section className="relative flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        <h1 className="text-white small-heading mb-8 mt-12 text-center">
          How it Works
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6">
          <section className="bg-[#FFCB45] border-4 border-black rounded-xl overflow-hidden h-full">
            <div style={{ padding: "1.5rem" }} className="h-full flex flex-col">
              <h2
                className="sub-heading"
                style={{ margin: "0 0 1rem 0", padding: "0" }}
              >
                Browse through Amazon and Myntra
              </h2>
              <p
                className="bodyText"
                style={{ margin: "0", padding: "0", flexGrow: "1" }}
              >
                On the product page, you can press the "Genie it" button
                appearing at the bottom right of the screen.
              </p>
            </div>
          </section>
          <section className="bg-[#D59FFF] border-4 border-black rounded-xl overflow-hidden h-full">
            <div style={{ padding: "24px" }} className="h-full flex flex-col">
              <h2
                className="sub-heading"
                style={{ margin: "0 0 16px 0", padding: "0" }}
              >
                Open Genie from browser toolbar
              </h2>
              <p
                className="bodyText"
                style={{ margin: "0", padding: "0", flexGrow: "1" }}
              >
                It will show all your wishlisted items from that store.
              </p>
            </div>
          </section>
          <section className="bg-[#EFFEC4] border-4 border-black rounded-xl overflow-hidden h-full">
            <div style={{ padding: "24px" }} className="h-full flex flex-col">
              <h2
                className="sub-heading"
                style={{ margin: "0 0 16px 0", padding: "0" }}
              >
                Press "Go to Genie" to see all your products
              </h2>
              <p
                className="bodyText"
                style={{ margin: "0", padding: "0", flexGrow: "1" }}
              >
                Compare prices, check availability, and make a common wishlist
                for all your shopping needs.
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Instructions;
