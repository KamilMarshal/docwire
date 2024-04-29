import { useContext } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext } from './PostTemplate';

const Code = ({ children }) => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className="code">
            <SyntaxHighlighter
                language="cpp"
                style={isDark ? vscDarkPlus : materialLight}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default Code