import React,{useState} from 'react'

export default function Form(props) {

    const [text, setText] = useState("")
    const onTextChange=(e)=>{
        setText(e.target.value);
    }
    const convertToUppercase=(e)=>{
        e.preventDefault();
        setText(text.toUpperCase());
    }
    const convertToLowerCase=(e)=>{
        e.preventDefault();
        setText(text.toLowerCase());
    }
    const clearText=(e)=>{
        e.preventDefault();
        setText("");
    }
    const handleCopy=(e)=>{
        e.preventDefault();
        navigator.clipboard.writeText(text);
        props.showAlert("success"," : Copy to clipboard");
    }
    const wordsCount=(str)=>{
        var a=str.split(' '),words=0;
        str=a.join('\n');
        console.log(str);
        a=str.split('\n');
        console.log(a);
        for(var i=0;i<a.length;i++){
            if(a[i].length>0){
                words++;
            }
        }
        return words;
    }

    return (
        <>
        <div className="container my-3">
            <form>
                <h2>Your Textarea</h2>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter your text here" value={text} onChange={onTextChange}></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-1" disabled={text.length===0} onClick={convertToUppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" disabled={text.length===0}onClick={convertToLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3 mx-1" disabled={text.length===0} onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary my-3 mx-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            </form>
        </div>

        <div className="container my-5">
            <h3>Text Summary : </h3>
            <p>Word Count : {wordsCount(text)}</p>
            <p>characters Count : {text.length}</p>
            
        </div>
        {
        text.length>0?
            <div className="container my-5">
                <h3>Preview :</h3>
                <p>{text}</p>
            </div>:""
        }
        </>

    )
}
