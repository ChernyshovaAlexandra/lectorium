import React from "react";


function Inner({ addition, question, answers, setAddition, nextLevel, w, h }) {
    return (
        <>
            {addition == undefined ?
                <div className="start-container">
                    {/* setheight */}
                    <div className="chel"></div>
                    <div className="w-full">
                        <div dangerouslySetInnerHTML={{ __html: question }}></div>
                        <div className="answers flex gap-4">
                            {answers.map(
                                (ans, id) => (
                                    <button
                                        onClick={() => setAddition(id)}
                                        className="block shadow-sm bg-slate-100 px-8 py-4 rounded-md" key={id}>
                                        <span className="relative block mx-auto" dangerouslySetInnerHTML={{ __html: ans.text }}></span>
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
                :
                <div className="start-container">
                    {/* setheight */}
                    {answers[addition].addition ?
                        <>
                            <div className="chel"></div>
                            <div className="full-width">
                                <div dangerouslySetInnerHTML={{ __html: answers[addition].addition }}></div>
                                <button
                                    onClick={() => nextLevel()}
                                    className="block mt-4 shadow-sm bg-slate-100 px-8 py-4 rounded-md">
                                    <span className="relative block mx-auto" dangerouslySetInnerHTML={{ __html: answers[addition].additionButton }}></span>
                                </button>
                            </div> </> :
                        <>
                            <button onClick={nextLevel()}></button>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default Inner