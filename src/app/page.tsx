"use client"
import { useState } from "react";
import type { MouseEventHandler } from "react";
import RandomFox from "./components/RandomFox";

export default function Home() {

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 123)
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2,9);
  };

  type ImageItems = { id:string, url:string };

  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement>  = (event) => {
    event.preventDefault();
    const newImageItem: ImageItems = { 
      id:generateId(), 
      url:`https://randomfox.ca/images/${getRandomNumber()}.jpg`
    };

    setImages([...images, newImageItem])
  }


  return (
    <main className="flex flex-col justify-center items-center font-nunito">
      <h1 className=" text-4xl my-4 font-bold">Hello fox!</h1>

      <button className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600" onClick={addNewFox}>Add new 🦊</button>
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
