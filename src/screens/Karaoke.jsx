import React, { useRef, useState } from "react";
import Countdown from 'react-countdown';




function Karaoke({ answers, nextLevel, setAddition, addition, w, h }) {
    const errors = [
        "Короче",
        "как бы",
        "в целом",
        "Вообще",
        "типа",
        "значит",
        "так сказать",
        "в принципе"
    ]

    const Completionist = () => <button onClick={checkResult()}></button>;
    const clockRef = useRef();
    const handlePause = () => clockRef.current.stop();
    const renderer = ({ seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <span className="renderer">00:{seconds}</span>;
        }
    };
    const [stricked, setStricke] = useState([]);
    const [result, setResult] = useState({ errors: 0, correct: 0 });
    const [date, setDate] = useState(Date.now() + 45000)
    const performKaraoke = (tap) => {
        if (stricked.indexOf(tap) !== -1) {
            let index = stricked.indexOf(tap)
            setStricke(stricked => stricked.filter((img, i) => i !== index));
            errors.indexOf(tap) !== -1 ?
                setResult({ correct: result.correct, errors: result.errors - 1 }) :
                setResult({ correct: result.correct - 1, errors: result.errors });

        } else {
            setStricke(stricked => [...stricked, tap])
            errors.indexOf(tap) !== -1 ?
                setResult({ correct: result.correct + 1, errors: result.errors }) :
                setResult({ correct: result.correct, errors: result.errors + 1 })
        }
    };
    const checkResult = () => {
        handlePause()
        if (result.errors <= 2 && result.correct >= 4) {
            setAddition(0)
        }
        else {
            setAddition(1)
        }
    }

    return (
        <div className="interactive" style={{ height: w < 891 ? h : '' }}>
            {addition == undefined && <Countdown ref={clockRef} renderer={renderer} date={date} checkResult={checkResult}> </Countdown>}

            <div className="answer_inner">
                {addition == undefined ? <>
                    <div className="question_block mx-auto p-8">
                        <h2>Отметь лишние слова!</h2>
                        <p className="karaoke-text karaoke">
                            <span className={`violet ${stricked.indexOf('Короче') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('Короче')}>Короче</span>
                            <span className={`violet ${stricked.indexOf('дискурсивные') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('дискурсивные')}>дискурсивные</span> слова,
                            <span className={`violet ${stricked.indexOf('или') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('или')}>или</span> «слова паразиты»&nbsp;– это
                            <span className={`violet ${stricked.indexOf('слова') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('слова')}>слова</span> или словосочетания,
                            <span className={`violet ${stricked.indexOf('как бы') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('как бы')}>как бы</span> вносимые
                            <span className={`violet ${stricked.indexOf('в речь') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('в речь')}>в речь</span>, но не несущие
                            <span className={`violet ${stricked.indexOf('в целом') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('в целом')}>в целом</span>
                            <span className={`violet ${stricked.indexOf('смысловой') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('смысловой')}>смысловой</span> нагрузки.
                            <span className={`violet ${stricked.indexOf('Вообще') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('Вообще')}>Вообще</span> они
                            <span className={`violet ${stricked.indexOf('часто') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('часто')}>часто</span> наблюдаются в связи с
                            <span className={`violet ${stricked.indexOf('типа') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('типа')}>типа</span> невысокой
                            <span className={`violet ${stricked.indexOf('речевой') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('речевой')}>речевой</span> культурой, или,
                            <span className={`violet ${stricked.indexOf('значит') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('значит')}>значит</span>,
                            <span className={`violet ${stricked.indexOf('в связи с тем') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('в связи с тем')}>в связи с тем</span>, что говорящий,
                            <span className={`violet ${stricked.indexOf('так сказать') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('так сказать')}>так сказать</span><span>,</span>
                            <span className={`violet ${stricked.indexOf('в принципе') !== -1 ? "stricked" : ''}`} onClick={() => performKaraoke('в принципе')}>в принципе</span> не решается высказать свои мысли.</p>
                    </div>
                    <div className="answers flex gap-4">
                        <button className="block mx-auto shadow-sm bg-slate-100 rounded-md"
                            disabled={!result.errors && !result.correct}
                            onClick={checkResult}
                        >
                            <span className="relative block">Проверить</span>

                        </button>
                    </div>
                </> :
                    <>
                        <div className="question_block mx-auto p-8" dangerouslySetInnerHTML={{ __html: answers[addition].addition }}></div>
                        <button
                            onClick={() => nextLevel()}
                            className="block mx-auto mt-4 shadow-sm bg-slate-100 rounded-md">
                            <span className="relative block" dangerouslySetInnerHTML={{ __html: answers[addition].additionButton }}></span>
                        </button>
                    </>}
            </div>
        </div>
    )
}

export default Karaoke;