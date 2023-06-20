import React, { useEffect, useState } from "react";
import AudienceBg from "../components/AudienceBg";
import EyeContact from "./EyeContact";
import Karaoke from "./Karaoke";
import { screens } from "./screens";
import Standart from "./Standart";
import Start from "./Start";
import Tags from "./Tags";
import $ from 'jquery'


function Performance() {
    const [level, setLevel] = useState(0)
    const [addition, setAddition] = useState(undefined)
    const [tag, setTag] = useState()
    let url = new URL(window.location.href);
    let param = url.searchParams.get("user_id");
    let w = false, h = false;
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const setSizes = () => {
        h = window.innerHeight
        w = window.innerWidth
    }
    setSizes()
    window.addEventListener('resize', () => { setSizes(); forceUpdate() })
    const nextLevel = () => {
        if (screens.length - 1 > level) {
            setLevel(level + 1);
            setAddition(undefined)
        }
        else {
            setLevel(0);
            setAddition(undefined)
        }
    }
    const showPeople = () => {
        setTimeout(() => {
            nextLevel()
        }, 1800)
    }
    const selectTopic = (topic) => {
        setTag(topic);
        setAddition(0)
    }
    useEffect(() => {
        if (level === 16) {
            setSizes()
        }
    }, [level])
    return (
        <div style={{ height: w < 891 ? level === 16 ? 'calc(var(--vh, 1vh) * 100)' : h : '' }}
            className={`main-content ${level === 0 ? "start-level" : level === 16 ? "final" : screens[level].type === 'eye_contact' ? "eye-container" : ""}`}>

            {w && screens[level].visiblePeople && <AudienceBg visible={w > 891 ? screens[level].visiblePeople : screens[level].visiblePeopleMob} />}
            <>

                {screens[level].type === 'start' ?
                    <Start
                        w={w}
                        level={level}
                        h={h}
                        addition={addition}
                        question={screens[level].question}
                        answers={screens[level].answers}
                        setAddition={setAddition}
                        nextLevel={nextLevel}
                    /> :
                    screens[level].type === 'audience' ?
                        <button
                            onClick={showPeople()}
                        />
                        :
                        screens[level].type === 'eye_contact' ?
                            <EyeContact
                                w={w}
                                h={h}
                                nextLevel={nextLevel}
                                screen={screens[level].screen} /> :
                            screens[level].type === 'sound' ?
                                <div className="interactive" style={{ height: w < 891 ? h : '' }}>
                                    <Standart
                                        w={w}
                                        h={h}
                                        addition={addition}
                                        question={screens[level].question}
                                        answers={screens[level].answers}
                                        setAddition={setAddition}
                                        nextLevel={nextLevel}
                                        sound={true}
                                    /> </div> :
                                screens[level].type === 'karaoke' ?
                                    <Karaoke
                                        w={w}
                                        h={h}
                                        answers={screens[level].answers}
                                        nextLevel={nextLevel}
                                        setAddition={setAddition}
                                        addition={addition}
                                    />
                                    :
                                    screens[level].type === 'standart' ?
                                        <div className="interactive" style={{ height: w < 891 ? level === 16 ? 'calc(var(--vh, 1vh) * 100)' : h : '' }}>
                                            <Standart
                                                w={w}
                                                h={h}
                                                addition={addition}
                                                question={screens[level].question}
                                                answers={screens[level].answers}
                                                setAddition={setAddition}
                                                nextLevel={nextLevel}
                                                people={screens[level].people}
                                                level={level}
                                                user_id={param || ''}
                                            />
                                        </div>
                                        :
                                        screens[level].type === 'tags' ?
                                            <div className="interactive" style={{ height: w < 891 ? level === 16 ? 'calc(var(--vh, 1vh) * 100)' : h : '' }}>
                                                <Tags
                                                    w={w}
                                                    h={h}
                                                    setTag={selectTopic}
                                                    tags={screens[level].answers[0].tags}
                                                    answers={screens[level].answers}
                                                    addition={addition}
                                                    addBtn={screens[level].answers[0].additionText}
                                                    nextLevel={nextLevel}
                                                />
                                            </div>
                                            :
                                            screens[level].type === 'exception' ?
                                                <></> :
                                                <></>
                }
            </>
        </div>
    )
}

export default Performance;