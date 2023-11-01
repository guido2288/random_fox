"use client"
import { useState } from "react";
import RandomFox from "./components/RandomFox";

export default function Home() {

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 123)
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2,9);
  };


  type ImageItems = { id:string, url:string };

  const [images, setImages] = useState<Array<ImageItems>>([
    { id:generateId(), url:`https://randomfox.ca/images/${getRandomNumber()}.jpg`},
    { id:generateId(), url:`https://randomfox.ca/images/${getRandomNumber()}.jpg`},
    { id:generateId(), url:`https://randomfox.ca/images/${getRandomNumber()}.jpg`},
    { id:generateId(), url:`https://randomfox.ca/images/${getRandomNumber()}.jpg`},

  ]);


  return (
    <main className="flex flex-col justify-center items-center">
      <h1>Hello fox!</h1>
      {
        images.map(({id, url}) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
          
        ))
      }
      
    </main>
  )
}
