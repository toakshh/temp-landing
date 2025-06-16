// components/CodeBlock.jsx or .tsx
import { useEffect, useRef, useState } from 'react'
import hljs from '@/utils/highlight'
import { Check, Clipboard } from 'lucide-react'
import Button from './ui/Button'
import { copyToClipboard } from '@/utils/tools'

const CodeBlock = ({ code = '', language = 'javascript' , className=""}) => {
    const [linkCopied, setLinkCopied] = useState(false);
    const codeRef = useRef(null)

    const handleCopyCodeScript = () =>{
        copyToClipboard(code);
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
    }

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current)
            console.log(language)
        }
    }, [code,language])

  return (
    <div className={`codeBlock-container overflow-auto rounded-md p-0 overflow-x-auto text-sm font-code max-h-64 w-full  select-text text-white font-mono relative ${className}`}>
        <Button
            onClick={handleCopyCodeScript}
            variant="outline"
            className="flex items-center absolute right-2 top-2 bg-transparent/40"
            >
            {linkCopied ? (
                <Check className="h-4 w-4" />
            ) : (
                <Clipboard className="h-4 w-4" />
            )}
        </Button>
        <pre className={``}>
            <code ref={codeRef} className={`language-${language} bg-inherit`}>
                {code}
            </code>
        </pre>
    </div>
  )
}


export default CodeBlock
