import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function NavigateController(props) {
  const { navigate, setNavigate } = props;

  const scrolData = useScroll();
  const scrollLastPoint = useRef(0);
  const isAnimating = useRef(false);

  scrolData.fill.classList.add("top-0");
  scrolData.fill.classList.add("absolute");
  useFrame(() => {
    if (isAnimating.current) {
      scrollLastPoint.current = scrolData.scroll.current;
      return;
    }
    const currentPoint = Math.floor(scrolData.scroll.current * scrolData.pages);
    if (scrolData.scroll > scrollLastPoint.current && currentPoint === 0) {
      setNavigate(0);
    }
    if (
      scrolData.scroll.current < scrollLastPoint.current &&
      scrolData.scroll.current < 1 / (scrolData.pages - 1)
    ) {
      setNavigate(0);
    }
    scrollLastPoint.current = scrolData.scroll.current;
  });
  return null;
}
