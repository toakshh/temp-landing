
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml' 


hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', html)

export default hljs
