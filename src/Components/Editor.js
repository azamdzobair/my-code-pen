import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Editor = ({ heading, icon, color, value, onChange }) => {

    const [open, setOpen] = useState(true)

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <div className='flex basis-0 grow flex-col px-2'>
            <div style={open ? null : { flexGrow: 0 }} >
                <div className='bg-black flex items-center justify-between mb-3 '>
                    <div className='flex justify-center items-center w-20 px-3 py-3 bg-amber-400'>
                        <p className='color  flex justify-center items-center mr-1  pb-0.5 font-bold'>{icon}</p>
                        <h3 className='text-zinc-950 font-bold'>{heading}</h3>
                    </div>
                    <FontAwesomeIcon icon={faXmark}
                        onClick={() => setOpen(prevState => !prevState)}
                        className='text-neutral-400'></FontAwesomeIcon>

                </div>

                <ControlledEditor className='controlled-editor'

                    value={value}
                    onBeforeChange={handleChange}
                    options={{

                        theme: 'material',
                        lineNumbers: true
                    }}
                ></ControlledEditor>


            </div>
        </div >
    );
};

export default Editor;