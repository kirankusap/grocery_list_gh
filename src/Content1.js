import { useState } from "react";

const Content1 = () => {
const [text,setText] = useState("");

  const handleClickText = () =>{
    let aboutMe = "Hi. Am Kiran and I live in Helsingborg, Sweden";
    setText(aboutMe);
  }
  
  const handleClickText2 = (name) =>{
    console.log(`${name}clicked the button!`);
  }
  
  const handleClickText3 = (e) =>{
    console.log(e);
  }

  return (
    <main>
      <h2>Hello Kiran!</h2> 
      <hr />
      <button onClick={handleClickText}>Click Here</button>
      <p>{text}</p>
      <button onClick={()=>handleClickText2('Kiran')}>Button2</button>
      <button onClick={(e)=>handleClickText3(e)}>Button3</button>
    </main>
  )
}

export default Content1