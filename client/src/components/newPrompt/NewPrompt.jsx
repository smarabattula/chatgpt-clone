import { useRef, useEffect } from 'react';
import './newPrompt.css';

const NewPrompt = () => {
    const endRef = useRef(null);
    // Scroll to the end of current chat page
    useEffect(() => {
        endRef.current.scrollIntoView({behavior : "smooth"});
    }, []);
    return (
        <div className='newPrompt'>
            <div className="endChat" ref = {endRef}></div>
            <form className='newForm'>
                <label htmlFor='file'>
                    <img src = '/attachment.png' alt = ""/>

                </label>
                <input id = "file" type="file" multiple={false} hidden/>
                <input type='text' placeholder='Ask for anything'/>
                <button>
                <img src = '/arrow.png' alt=""/>
                </button>
            </form>
        </div>
    );
};

export default NewPrompt;
