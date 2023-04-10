import s from './Triggers.module.css'


function Triggers({triggerRus, triggerEng}){
    return(
        <div className={s.triggers_container}>
            <button onClick={triggerRus}>RUS</button>
            <button onClick={triggerEng}>Eng</button>
        </div>
    )
}

export default Triggers