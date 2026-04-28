import { useState } from 'react'
import SoundClick from '../../assets/SFX_Click.mp3';

const Skill = ({ skillName, onClick, isSelected }) => {
    const [isSelect, setIsSelect] = useState(isSelected || false);

    const handleClick = () => {
        setIsSelect(!isSelect);
        // console.log(`${skillName} is ${!isSelect ? 'selected' : 'deselected'}`);
        const audio = new Audio(SoundClick);
        audio.play();
        onClick();
    }

    return (
        <button
            className={`bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 h-30
            w-full rounded-2xl text-white py-2 hover:-translate-y-0.5 cursor-pointer
            hover:bg-primary/10 transition-all duration-300 font-semibold ${isSelect ? 'border-white bg-primary/10 shadow-lg' : 'border-primary/30'} shadow-0`}
            onClick={handleClick}
        >
            {skillName}
        </button>
    )
}

export default Skill