import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSec } from "../../redux/activeSecSlice";

const IsInViewPort = ({ children, className, id, threshold }) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(setActiveSec(entry.target.id));
      }
    },
    { threshold }
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
};

export default IsInViewPort;
