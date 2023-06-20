import React, { useEffect } from "react";
import Inner from "../components/Inner";
import StartMob from "../components/StartMob";



function Start({ addition, question, answers, setAddition, nextLevel, w, h, level }) {


    return (
        <>
            {w && w < 891 ?
                <>
                    {w && <StartMob w={w} h={h} level={level} />}
                    <Inner addition={addition} question={question} answers={answers} setAddition={setAddition} nextLevel={nextLevel} w={w} h={h} />
                </>
                :
                <Inner addition={addition} question={question} answers={answers} setAddition={setAddition} nextLevel={nextLevel} w={w} h={h} />
            }
        </>
    )
}

export default Start;