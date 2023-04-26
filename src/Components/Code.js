import React, { useContext } from 'react';
import Editor from './Editor';
import { DataContext } from '../Context/DataProvider';

const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <div className='flex bg-black h-2/4'>
            <Editor
                heading='HTML'
                icon='/'
                color='red'
                value={html}
                onChange={setHtml}
            ></Editor>
            <Editor
                heading='CSS'
                icon='*'
                color='blue'
                value={css}
                onChange={setCss}
            ></Editor>
            <Editor
                heading='JS'
                icon='{}'
                color='yellow'
                value={js}
                onChange={setJs}
            ></Editor>


        </div>
    );
};

export default Code;