import SkillSlider from "./SkillSlider";

interface SkillsProps {
    darkMode: boolean;

}

function Skills({ darkMode } : SkillsProps) {
    return (
        <div id="skills" className="pb-44">
            <h1 className="text-3xl font-bold border-b-4 w-fit mb-4 border-highlightl dark:border-highlightd">Skills</h1>
            <p className="mb-4">Hieronder zie je een paar van de technologieën waar ik de afgelopen 3 jaar veel en graag met heb gewerkt.</p>
            <div className="flex justify-around">
                <div>
                    <SkillSlider skill="Android development" proficiency={80} darkMode={darkMode} />
                    <SkillSlider skill="Java" proficiency={75} darkMode={darkMode} />
                    <SkillSlider skill=".NET" proficiency={70} darkMode={darkMode} />
                    <SkillSlider skill="html&css" proficiency={75} darkMode={darkMode} />
                </div>
                <div>
                    <SkillSlider skill="Typscript" proficiency={70} darkMode={darkMode} />
                    <SkillSlider skill="Angular" proficiency={70} darkMode={darkMode} />
                    <SkillSlider skill="React" proficiency={65} darkMode={darkMode} />
                    <SkillSlider skill="Docker" proficiency={60} darkMode={darkMode} />
                </div>
            </div>
        </div>
    )
}

export default Skills;