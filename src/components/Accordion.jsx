import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({items}) => {
    const [openIndex, setOpenIndex] = useState(null)
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return !items || (items?.length === 0) ? "No Items Available" : (
        <div className="accordion">
            {items?.map((item, index) => {
                return <div key={index} className="accordion-item">
                    <button onClick={() => handleToggle(index)} className="accordion-title">
                        {item?.title}
                        <span className="right">{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                        
                    </button>
                    {openIndex === index && <div className="accordion-content">{item?.content}</div>}
                </div>
            })}
        </div>
    )
}

export default Accordion;