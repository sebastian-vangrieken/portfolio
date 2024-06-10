import SkillSlider from "./SkillSlider";

interface SkillsProps {
    darkMode: boolean;

}

function Skills({ darkMode } : SkillsProps) {
    return (
        <div id="skills" className="pb-44">
            <h1 className="text-3xl font-bold border-b-4 w-fit mb-4 border-highlightl dark:border-highlightd">Skills</h1>
            <p className="flex-wrap w-3/5 mb-4">In de afgelopen 3 jaar heb ik natuurlijk al met veel verschillende technologieen gewerkt. 
                Hieronder vind je alvast een paar van mijn meest gebruikte of favoriete.</p>
            <div className="flex justify-around">
                <div>
                    <div className="pb-4">
                        <p className="flex items-center">
                            <img src="./android-svgrepo-com.svg" alt="" className="h-12 w-12" />
                            <SkillSlider skill="Android development" proficiency={80} darkMode={darkMode} />
                        </p>
                        <p className="flex items-center">
                            <img src="./unreal-engine-svgrepo-com.svg" alt="" className="h-8 w-8 me-4" />
                            <SkillSlider skill="Unreal engine" proficiency={55} darkMode={darkMode} />
                        </p>
                    </div>
                    <div>
                        <p className="flex items-center">
                            <img src="./html-5-svgrepo-com.svg" alt="" className="h-10 w-10 me-2" />
                            <SkillSlider skill="html&css" proficiency={75} darkMode={darkMode} />
                        </p>
                        <p className="flex items-center">
                            <img src="./typescript-svgrepo-com.svg" alt="" className="h-8 w-8 me-4" />
                            <SkillSlider skill="Typscript" proficiency={70} darkMode={darkMode} />
                        </p>
                    </div>
                </div>
                <div>
                    <div className="pb-4">
                        <p className="flex items-center"> 
                            <img src="./angular-svgrepo-com.svg" alt="" className="h-8 w-8 me-2" />
                            <SkillSlider skill="Angular" proficiency={70} darkMode={darkMode} />
                        </p>
                        <p className="flex items-center">
                            <img src="./react-svgrepo-com.svg" alt="" className="h-8 w-8 me-2" />
                            <SkillSlider skill="React" proficiency={65} darkMode={darkMode} />
                        </p>
                    </div>
                    <div>
                        <p className="flex items-center">
                            <img src="./java-svgrepo-com.svg" alt="" className="h-8 w-8 me-2" />
                            <SkillSlider skill="Java" proficiency={75} darkMode={darkMode} />
                        </p>
                        <p className="flex items-center">
                            <img src="./csharp-svgrepo-com.svg" alt="" className="h-8 w-8 me-2" />
                            <SkillSlider skill=".NET" proficiency={70} darkMode={darkMode} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;