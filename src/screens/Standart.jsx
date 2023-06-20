import axios from "axios";
import React, { useEffect, useState } from "react";
import SoundLevel from "../components/SoundLevel";


function Standart({ addition, question, answers, setAddition, nextLevel, sound, people, level, user_id, w, h }) {
    const [email, setEmail] = useState()
    const sendEmail = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'https://back.lecturerleage.ru/form_save',
            data: {
                email: email,
                user_id: user_id
            }
        })
            .catch(
                error => console.log(error.message)
            )
        nextLevel()
    }
    return (
        <> {addition == undefined ?
            <div className="answer_inner">
                <div className="question_block mx-auto p-8" dangerouslySetInnerHTML={{ __html: question }}></div>
                <div className="answers flex gap-4">
                    {sound ?
                        <SoundLevel setAddition={setAddition} />
                        :
                        !people && answers.map(
                            (ans, id) => (
                                <button
                                    onClick={() => setAddition(id)}
                                    className="block mx-auto shadow-sm bg-slate-100 rounded-md" key={id} >
                                    <span dangerouslySetInnerHTML={{ __html: ans.text }} className="block relative"></span>
                                </button>
                            )
                        )}
                    {people ?
                        <button className="block mx-auto mt-4 shadow-sm bg-slate-100 rounded-md" onClick={() => nextLevel()} >
                            <span className="relative block" dangerouslySetInnerHTML={{ __html: answers[0].additionText }} />
                        </button> : <></>
                    }
                </div>
            </div> :
            <div className="addition_inner">
                {answers && answers[addition].addition ?
                    level === 15 ?
                        <form className="answer_inner" onSubmit={e => sendEmail(e)}>
                            <div className="question_block mx-auto p-8">
                                <p dangerouslySetInnerHTML={{ __html: answers[addition].addition }}></p>
                                <input type="email" placeholder="Введите свою почту" value={email}
                                    onChange={e => setEmail(e.target.value)} />
                                    {/* <a className="block mt-4 violet" 
                                    style={{display: "block", width:"fit-content", margin: "1rem auto 0", padding: "10px 2rem"}}
                                    href="https://www.znanierussia.ru/ligalektorov" target="_blank">Оставь заявку</a> */}
                            </div>
                            
                            <button
                                type="submit"
                                className="block mx-auto mt-4 shadow-sm bg-slate-100 rounded-md"
                                disabled={!email}
                            >
                                <span className="relative block"
                                    dangerouslySetInnerHTML={{ __html: answers[addition].additionButton }}></span>
                            </button>
                            
                        </form>
                        :
                        <>
                            <div className="question_block mx-auto p-8" dangerouslySetInnerHTML={{ __html: answers[addition].addition }}></div>
                            <button
                                onClick={() => nextLevel()}
                                className="block mx-auto mt-4 shadow-sm bg-slate-100 rounded-md">
                                <span className="relative block" dangerouslySetInnerHTML={{ __html: answers[addition].additionButton }}></span>
                            </button>
                          
                        </> :
                    <>
                        <button onClick={nextLevel()}></button>
                    </>
                }
            </div>
        }
        </>

    )
}

export default Standart;