import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Controlled } from 'react-codemirror2';
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
        <div>
            <div style={open ? null : { flexGrow: 0 }} className='flex basis-0 flex-1 flex-col px-2'>
                <div className='bg-black flex items-center justify-between mb-3 mt-3 '>
                    <div className='flex  items-center px-3 py-3 bg-amber-400'>
                        <p className='color rounded-md flex justify-center items-center w-5 h-5 pb-0.5 mr-1.5'>{icon}</p>
                        <h3 className='text-zinc-950'>{heading}</h3>
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

                <Controlled className=''></Controlled>
            </div>
        </div >
    );
};

export default Editor;