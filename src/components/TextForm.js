import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase click"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        console.log("lowercase click"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space","success");
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Clear text","success");
    }
    const handleCopy =()=>{
        var text=document.getElementById("myBox");      
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy text  ","success");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");
    // setText("new stat");
    return (
        <>
        <div className='container' style={{color: props.mode==="light"?'#042743':'white'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" placeholder='Enter text here' style={{backgroundColor: props.mode==="light"?'white':'black',color: props.mode==="light"?'#042743':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra space</button>
        </div>
        <div className="container my-3"  style={{color: props.mode==="light"?'#042743':'white'}}>
            <h2>your text summry</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <div>
            <span className="font-link">
              {text.length>0?text:"Enter text in textbox"}
            </span>
      </div>
        </div>
        </>
    )
}
