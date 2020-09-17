import React from 'react';
import { sum } from '../../apis/math/sum';
const Root:React.FC = () =>{
    async function sumation(e:React.FormEvent){
        e.preventDefault();
        let a:number = parseInt((document.getElementById('a') as HTMLInputElement).value);
        let b:number = parseInt((document.getElementById('b') as HTMLInputElement).value);
        let result = await sum(a,b);
        (document.getElementById('result') as  HTMLSpanElement).innerHTML = result.body.result;
    }
    return (
        <div id="root-main-div">
            <form onSubmit={(e)=>sumation(e)}>
                <input type="number" id="a"/>
                <span>+</span>
                <input type="number" id="b"/>
                <button type="submit">=</button>
                <span id="result"></span>
            </form>
        </div>
    );
}

export default Root;