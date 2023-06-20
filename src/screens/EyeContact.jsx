import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import $ from 'jquery'

function EyeContact({ nextLevel, w, h }) {
    let sectionsInitial = [{ contact: false }, { contact: false }, { contact: false }]
    const [sections, setContact] = useState(sectionsInitial)
    const [dragged, setDragged] = useState(false)
    const draggableRef = useRef()
    const [grayPanel, setPanel] = useState(false)
    const [sizes, setSizes] = useState([])
    const [sizesL, setSizesL] = useState([])
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        setTimeout(() => {
            setPanel(true)
        }, 1300)
        if (!sizes.length) {
            $('.section').each(
                (id, item) => {
                    sizes.push(item.offsetTop)
                    sizesL.push(item.offsetLeft)
                }
            )
            setSizes(sizes)
            setSizesL(sizesL)
        }

    }, [])

    const setSectionMade = () => {
        if (w < 891) {
            if ($('.eye').offset().top < sizes[1]) {
                let arr = sections
                setTimeout(() => {
                    arr[0].contact = true
                    setContact(arr)
                    forceUpdate()
                }, 1000)
            }
            if ($('.eye').offset().top < sizes[2] && $('.eye').offset().top >= sizes[1]) {
                let arr = sections
                setTimeout(() => {
                    arr[1].contact = true
                    setContact(arr)
                    forceUpdate()
                }, 1000)
            }
            if ($('.eye').offset().top >= sizes[2]) {
                let arr = sections
                setTimeout(() => {
                    arr[2].contact = true
                    setContact(arr)
                    forceUpdate()
                }, 1000)

            }
        } else {
            if ($('.eye').offset().left < sizesL[1]) {
                let arr = sections
                setTimeout(() => {
                    arr[0].contact = true
                    setContact(arr)
                    forceUpdate()
                }, 1000)
            }
            if ($('.eye').offset().left < sizesL[2] && $('.eye').offset().top >= sizesL[1]) {
                let arr = sections
                setTimeout(() => {
                    arr[1].contact = true
                    setContact(arr)
                    forceUpdate()

                }, 1000)
            }
            if ($('.eye').offset().left >= sizesL[2]) {
                let arr = sections
                setTimeout(() => {
                    arr[2].contact = true
                    setContact(arr)
                    forceUpdate()
                }, 1000)
            }

        }
    }

    useEffect(() => {
        if (!sections.some(el => !el.contact)) {
            setTimeout(() => {
                nextLevel()
            }, 1000)
        }
    })
    useEffect(() => {
        setTimeout(() => {
            setContact({ contact: true }, { contact: true }, { contact: true })
            nextLevel()
        }, 6000)
    }, [])

    return (
        <div className="w-full h-full eye-contact flex">
            <div className="grid grid-cols-3 w-full h-full eye-contact" style={{ height: h, width: w }} >
                <div className={`section section-1 ${sections[0].contact ? "contacted" : ''}`}></div>
                <div className={`section section-2 ${sections[1].contact ? "contacted" : ''}`}></div>
                <div className={`section section-3 ${sections[2].contact ? "contacted" : ''}`}></div>
                {grayPanel && sizes.length ?
                    <Draggable
                        ref={draggableRef}
                        bounds={{ left: 0, right: w - 80, top: 0, bottom: h - 80 }}
                        defaultPosition={{ x: 0, y: 0 }}
                        onStop={setSectionMade}
                        onDrag={setSectionMade}
                    >
                        <div className="eye"></div>
                    </Draggable> : <></>}
            </div>
        </div >
    )
}


export default EyeContact;