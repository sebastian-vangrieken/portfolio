import CodeBlock from "./CodeBlock";

const cppChangeLines = [
    `Hello World!`,
    `I'm Sebastian`,
];

const javaChangeLines = [
    `Hello World!`,
    `I'm Sebastian`,
];

const cppCodeBefore = 
`#include <iostream>\n\nint main() {\n    std:cout << "`;
const cppCodeAfter = 
`" << std::endl;\n    return 0;\n}`;

const javaCodeBefore = 
`public class Main {\n    public static void main(String[] args) {\n        System.out.println("`;
const javaCodeAfter = 
`");\n    }\n}`;

interface IntroProps {
    darkMode: boolean;
}

function Intro({ darkMode }: IntroProps) {
    const openPdf = () => {
        window.open('./Sebastian_Van_Grieken_CV.pdf', '_blank');
    }
    
    return (
        <div className="grid grid-cols-[2fr_3fr] pb-32">
            <div className="ps-24 pt-20">
                <h1 className="font-bold text-3xl">Hi</h1>
                <h1 className="font-bold text-5xl my-4">
                    Ik ben <span className="text-highlightl dark:text-highlightd">Sebastian</span>
                    </h1>
                <h1 className="font-bold text-xl mb-6">gepassioneerde programmeur</h1>
                <button
                    className="p-2 mb-4 rounded-xl font-semibold text-lg
                    text-textd bg-highlightl dark:bg-highlightd dark:text-textl"
                    onClick={openPdf}
                >
                    Open cv
                </button>
            </div>
            <div className="relative">
                <CodeBlock 
                    darkMode={darkMode} 
                    changeLines={cppChangeLines} 
                    codeBefore={cppCodeBefore} 
                    codeAfter={cppCodeAfter} 
                    language="cpp"
                    styling = "absolute top-5 end-10 z-10 h-fit w-fit min-w-[28rem] rounded-xl"
                />
                <CodeBlock
                    darkMode={darkMode} 
                    changeLines={javaChangeLines} 
                    codeBefore={javaCodeBefore} 
                    codeAfter={javaCodeAfter} 
                    language="java"
                    styling = "absolute start-10 bottom-5 z-o h-fit w-fit min-w-[28rem] rounded-xl"
                />
            </div>
        </div>
    )
}

export default Intro;