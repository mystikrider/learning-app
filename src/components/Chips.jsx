import { useState } from "react";

const Chips = () => {
    const [inputText, setInputText] = useState("");
    const[chips, setChips] = useState([]);
    const handleKeyDown = (e) => {
        if(e.key === "Enter" && inputText.trim() !== "") {
            setChips((prev) => [...prev, inputText]);
            setInputText("")
        }   
        
    }
    const handleDeleteChips = (index) => {
        const copyChips = [...chips];
        copyChips.splice(index, 1)
        setChips(copyChips)
    }
    return (
        <div className="pad">
            <h2>Chips Input</h2>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} type="text" />
            <div>
                <div>{chips?.map((chip, index) => <div key={index}><span style={{ backgroundColor: "grey", padding: 5}}>{chip}</span><button onClick={() => handleDeleteChips(index)} style={{ color: "red"}}>X</button></div>)}</div>
            </div>
        </div>
    )
}

export default Chips;