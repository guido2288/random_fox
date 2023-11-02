import { useEffect, useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {image:string};

const RandomFox = ( {image}:Props ) :JSX.Element => {

  const node = useRef<HTMLImageElement>(null);

  


  return (
    <LazyLoadImage ref={node} className="w-80 rounded-md" src={image} effect="blur"/>
  )
}

export default RandomFox