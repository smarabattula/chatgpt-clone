import { Link } from 'react-router-dom';
import './homePage.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const HomePage = () => {
    const [typingStatus, setTypingStatus] = useState("human1");

    return (
        <div>
        <div className = 'homePage'>
            <img className='orbital' src='/orbital.png'></img>
            <div className='left'>
                <h1>LLM DEV AI</h1>
                <h2>Boost your productivity!</h2>
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora velit nesciunt culpa consectetur, incidunt beatae at animi aliquid rerum neque aliquam porro obcaecati ea debitis dolore ullam, inventore sit omnis!</h3>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
            </div>
            <div className='right'>
                <div className = 'imgContainer'>
                    <div className = 'bgContainer'>
                        <div className='bg'></div>
                    </div>
                    <img src = '/bot.png' className='bot'></img>
                </div>
                <div className='typeContainer'>
                    <img
                    src={
                        typingStatus === 'human1'
                    ? '/human1.jpeg'
                    :typingStatus === 'human2'
                    ? '/human2.jpeg'
                    :'/bot.png' } />
                    <TypeAnimation className = 'typeAnimate'
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Human: What does cow feed on?',
                            1500, () =>{
                                setTypingStatus("bot");
                            },
                            'Bot: Cow feeds on grass.',
                            1500,() =>{
                                setTypingStatus("human2");
                            },
                            'Human: What is the capital of Italy?',
                            1500,() =>{
                                setTypingStatus("bot");
                            },
                            'Bot: The capital of Italy is Rome.',
                            1500, () =>{
                                setTypingStatus("human1");
                            },
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}
                        />
                </div>
            </div>
        </div>
</div>
    );
}

export default HomePage;
