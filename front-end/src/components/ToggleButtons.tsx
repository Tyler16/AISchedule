import React, { useState, useEffect } from 'react'

export default function ToggleButtons(props: {left: string, right: string}) {
  const [selected, setSelected] = useState(false);
  const [leftClasses, setLeftClasses] = useState("");
  const [rightClasses, setRightClasses] = useState("bg-cyan-300 text-white border-cyan-300");

  useEffect(() => {
    const temp = leftClasses;
    setLeftClasses(rightClasses)
    setRightClasses(temp)
  }, [selected]);

  return (
    <div className='flex flex-row text-center justify-center items-center ml'>
      <button className={`block border-2 p-1 w-20 rounded-l-md text-xs ${leftClasses}`}
              onClick={() => setSelected(false)}>{props.left}</button>
      <button className={`block border-2 border-l-0 p-1 w-20 rounded-r-md text-xs ${rightClasses}`}
              onClick={() => setSelected(true)}>{props.right}</button>
    </div>
  )
}
