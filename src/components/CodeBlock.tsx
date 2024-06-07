import { useState, useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
    darkMode: boolean;
    changeLines: string[];
    codeBefore: string;
    codeAfter: string;
    language: string;
    styling: string;
}

function CodeBlock({ darkMode, changeLines, codeBefore, codeAfter, language, styling }: CodeBlockProps) {
    const [currentLogLine, setCurrentLogLine] = useState(changeLines[0]);
    const [deleting, setDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (deleting) {
                if (charIndex > 0) {
                    setCurrentLogLine(changeLines[index].slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setDeleting(false);
                    setIndex((prevIndex) => (prevIndex + 1) % changeLines.length);
                }
            } else {
                if (charIndex < changeLines[index].length) {
                    setCurrentLogLine(changeLines[index].slice(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setDeleting(true);
                }
            }
        }, deleting ? 50 : 100);
 
        return () => clearTimeout(timeout);
    }, [changeLines, charIndex, deleting, index]);
 
    const currentCode = `${codeBefore}${currentLogLine}${codeAfter}`;
    const colorscheme = darkMode ? atomOneDark : atomOneLight;

    return (
        <SyntaxHighlighter language={language} style={colorscheme} className={styling} >
           {currentCode}
       </SyntaxHighlighter>
    )
}

export default CodeBlock;