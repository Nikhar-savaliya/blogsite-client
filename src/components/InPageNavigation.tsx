import { useEffect, useRef, useState } from "react";

export let activeTabLineRef: any;
export let activeTabRef: any;

const InPageNavigation = ({
  routes,
  defaultHidden = [],
  defaultActiveIndex = 0,
  children,
}: any) => {
  let [inPageNavIndex, setInPageNavIndex] = useState(defaultActiveIndex);

  activeTabLineRef = useRef();
  activeTabRef = useRef();

  const handleInPageNavigation = (button: any, index: any) => {
    let { offsetWidth, offsetLeft } = button;
    activeTabLineRef.current.style.width = offsetWidth + "px";
    activeTabLineRef.current.style.left = offsetLeft + "px";
    setInPageNavIndex(index);
  };

  useEffect(() => {
    handleInPageNavigation(activeTabRef.current, defaultActiveIndex);
  }, []);

  return (
    <>
      <div className="relative border-b flex flex-nowrap overflow-x-auto">
        {routes.map((item: string, index: number) => {
          return (
            <button
              ref={index == defaultActiveIndex ? activeTabRef : null}
              className={`p-4 px-5 capitalize ${
                inPageNavIndex === index
                  ? "text-foreground"
                  : "text-muted-foreground"
              } ${defaultHidden.includes(item) ? " md:hidden" : ""}`}
              key={index}
              onClick={(e) => handleInPageNavigation(e.target, index)}
            >
              {item}
            </button>
          );
        })}
        <hr
          ref={activeTabLineRef}
          className="absolute bottom-0 border-primary duration-200"
        />
      </div>
      {children}
    </>
  );
};

export default InPageNavigation;
