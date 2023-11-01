type Props = {image:string};

const RandomFox = ( {image}:Props ) :JSX.Element => {

  return (
    <img className="w-80 rounded-md" src={image}/>
  )
}

export default RandomFox