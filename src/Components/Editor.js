import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Editor = () => {
    return (
        <div>
            <div>
                <div className='bg-black flex items-center justify-between mb-3 mt-3 '>
                    <div className='flex  items-center px-3 py-3 bg-amber-400'>
                        <p className='bg-red-600 rounded-md flex justify-center items-center w-5 h-5 pb-0.5 mr-1.5'>/</p>
                        <h3 className='text-zinc-950'>HTML</h3>
                    </div>
                    <FontAwesomeIcon icon={faXmark} className='text-neutral-400'></FontAwesomeIcon>

                </div>
            </div>
        </div>
    );
};

export default Editor;