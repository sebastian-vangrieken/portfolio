interface SkillSliderProps {
    skill: string;
    proficiency: number;
    darkMode: boolean;
}

function SkillSlider({ skill, proficiency, darkMode }: SkillSliderProps) {
    const text = darkMode ? '#4d4f57' : '#EEE';
    const color = darkMode ? '#5865f2' : '#ffd900';
    const fontSize = 12;
    const width = (3 * proficiency) - fontSize;

    return (
        <div className="w-fit my-4">
            <svg height={26} width={306}>
                <text x="0" y="12" fontSize={16} fill={text}>{skill}</text>
                <line x1="0" y1="20" x2="300" y2="20" style={{ strokeWidth:'8', strokeLinecap:'round' }} stroke="#EEE" />
                <line x1="0" y1="20" x2={3 * proficiency} y2="20" style={{ stroke:color, strokeWidth:'8', strokeLinecap:'round' }} />
                <circle r="6" cx={3 * proficiency} cy="20" style={{ fill:color }} />
                <text x={width} y="10" fontSize={fontSize} fill={text}>{proficiency}%</text>
            </svg>     
        </div>
    );
}

export default SkillSlider;