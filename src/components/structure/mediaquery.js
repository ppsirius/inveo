const MediaQuery = (props) => {
  const siezeInPx = props.width.slice(0, props.width.length - 2) * 16
  const viewport = typeof window !== 'undefined' && window.matchMedia(`screen and (min-width: ${siezeInPx}px)`);
  typeof window !== 'undefined' && window.addEventListener("resize", viewport);

  // @todo check implementation
  return null;
}

export default MediaQuery