import React, { useState } from "react";


function SoundLevel({ setAddition }) {
    const [level, setLevel] = useState(50)
    const checkLevel = (e) => {
        setLevel(e.target.value)
        if (e.target.value < 50) {
            setTimeout(() => { setAddition(0) }, 300)
        }
        else {
            setTimeout(() => { setAddition(1) }, 300)
        }
    }

    return (
        <div className="sound-level ">
            <input type='range' id="sound" name="sound" value={level}
                onChange={e => setLevel(e.target.value)}
                onTouchEnd={e => checkLevel(e)}
                onMouseUp={e => checkLevel(e)} />
            <label htmlFor="sound">
                <div className="plus">
                    <svg viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00851 3.80746C5.00851 3.80746 9.2368 2.19943 14.6079 5.3187C20.3922 8.67791 20.7088 12.9253 20.7088 12.9253" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.50034 8.70995C5.50034 8.70995 8.30967 7.75554 11.9847 9.88978C15.9423 12.1882 16.2426 14.9485 16.2426 14.9485" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.47659 13.8687C5.47659 13.8687 7.27202 13.0643 9.43932 14.323C11.7733 15.6784 11.8118 17.5479 11.8118 17.5479" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
                <div className="minus">
                    <svg viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* <path d="M5.00851 3.80746C5.00851 3.80746 9.2368 2.19943 14.6079 5.3187C20.3922 8.67791 20.7088 12.9253 20.7088 12.9253" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> */}
                        <path d="M5.50034 8.70995C5.50034 8.70995 8.30967 7.75554 11.9847 9.88978C15.9423 12.1882 16.2426 14.9485 16.2426 14.9485" stroke="black" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.47659 13.8687C5.47659 13.8687 7.27202 13.0643 9.43932 14.323C11.7733 15.6784 11.8118 17.5479 11.8118 17.5479" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </div>
            </label>
        </div>
    )
}

export default SoundLevel;