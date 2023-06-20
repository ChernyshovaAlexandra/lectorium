import React, { useState } from "react";
import TagsFull from "../components/TagsFull";


function Tags({ tags, setTag, answers, addition, nextLevel, addBtn, w, h }) {
    const [activeTag, setActiveTag] = useState(undefined)
    const selectTopic = (id) => {
        setActiveTag(id)
    }

    return (
        <div className={`tags_container ${addition === undefined ? "" : "tags_container-active"}`} style={{ height: w < 891 ? h - 100 : '' }}>
            {addition == undefined ?
                <>
                    <TagsFull selectTopic={selectTopic} activeTag={activeTag} w={w} h={h} />
                    <button
                        onClick={() => setTag()}
                        disabled={activeTag === undefined ? true : false}
                        className="block mx-auto mt-4 shadow-sm bg-slate-100 px-4 py-2 rounded-md tag-btn">
                        <span className="relative block" dangerouslySetInnerHTML={{ __html: addBtn }}></span>
                    </button></>
                :
                <div className="addition_inner">
                    <div className="question_block mx-auto p-8" dangerouslySetInnerHTML={{ __html: answers[addition].addition }} />
                    <button
                        onClick={() => nextLevel()}
                        className="block mx-auto mt-4 shadow-sm bg-slate-100 px-4 py-2 rounded-md ">
                        <span className="relative block" dangerouslySetInnerHTML={{ __html: answers[addition].additionButton }}></span>
                    </button>

                </div>
            }
        </div>
    )
}


export default Tags;