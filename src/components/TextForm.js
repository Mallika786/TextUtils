import React,{useState} from 'react'



export default function TextForm(props) {
    const [text,setText]=useState("");

    const handleUpclick=() => {
        // console.log("upper clicked"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showalert("Text Converted to Uppercase.","success");
    }

    const handleloclick=() => {
        // console.log("upper clicked"+text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showalert("Text Converted to Lowercase.","success");
    }

    const handlereclick=() => {
        // console.log("upper clicked"+text);
        let newText= " ";
        setText(newText);
        props.showalert("Text Cleared.","success");
    }

    const handleonclick=(event)=>{
        setText(event.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

  return (
    <>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h1>Try TextUtils - word count, character count, uppercase, lowercase</h1>
        <div className="mb-3">
            <textarea className={`form-control bg-${props.mode==='light'?'white':'black'} text-${props.mode==='light'?'dark':'light'}`} id="myBox" value={text} rows="8" onChange={handleonclick} placeholder='Enter Your text here'></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Change to UPPERCASE</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Change to lowercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlereclick}>Reset</button>
        <button type="submit" disabled={text.length===0} onClick={speak} className="btn btn-primary mx-2 my-1">Speak</button>
    </div>
    <div className={` my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
