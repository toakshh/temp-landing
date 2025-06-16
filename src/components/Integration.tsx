
import { CodeXml, Braces, Zap } from 'lucide-react';

import CodeBlock from './CodeBlock';
import Image from 'next/image';

const htmlSnippet = `<script type="importmap">
    {
      "imports": {
        "ultron-ai-sdk": "https://cdn.jsdelivr.net/npm/ultron-ai-sdk@1.1.6/dist/index.mjs?module"            
      }
    }
  </script>
  
  <script type="module">
  
      import {SceneCanvas, Character} from 'ultron-ai-sdk';        
      // Creating a new elment to inject in body
      if (!document.getElementById('target-html-element-id')){ {
        try{
          const div = document.createElement('div');
          div.id = 'target-html-element-id';
          document.body.appendChild(div); 
          init()  // You can also call this on user interaction like clicking on support/chat icon.
        }catch(error){
          console.log(error)
        }
      }  
      let sceneCanvas
      let character 
      const init = async() => {
        sceneCanvas = new SceneCanvas('target-html-element-id)
        const initializationSetting= {
          avatarId: "YOUR_AVATAR_ID",       // AvatarId and Request Id are same
          config:{
            apiKey: "YOUR_API_KEY",              // Not required if you can create and access "sessionId" [[Not recommended]]
            // sessionId: "SESSION_ID_FOR_CURRENT_USER" // Recomended method for secure access [[Note: Only for secure access and in production]]
          },
          options:{
            hideClickMessage: true  // Remove default "Click message" on the avatar
            alwaysListen: false,    // For Push to talk conversation
            highFidelityMode: true  // Enables higher graphics quality (can impact performance on low-end devices)
          }
        }
        await sceneCanvas.init(initializationSetting)
        character = sceneCanvas.character         
      }
  </script>`;


const reactSnippet = `import {SceneCanvas, Character} from 'ultron-ai-sdk';        
    let sceneCanvas
    let character
    const init = async() => {
        sceneCanvas = new SceneCanvas('target-html-element-id')
        const initializationSetting= {
            avatarId: "AVATAR_ID",       // AvatarId and Request Id are same
            config:{
                apiKey: "YOUR_ULTRON_API_KEY"
            },
            options:{
                alwaysListen: false // For Push to talk conversation
            }
        }
        await sceneCanvas.init(initializationSetting)
        character = sceneCanvas.character
    }
    init()`;

const frameworks = [
  { name: 'HTML5', icon: <CodeXml className="h-8 w-8 text-primary" /> },
  { name: 'React', icon: <Braces className="h-8 w-8 text-primary" /> },
  { name: 'Major Frameworks', icon: <Zap className="h-8 w-8 text-primary" /> },
];

export default function IntegrationSection() {

  return (
    <section className="w-full max-w-screen-xl mx-auto py-16 md:py-24 bg-secondary/30">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Seamless Integration, <span className="text-[var(--brand)]">Powerful Results</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Embed your AI characters into any website or application with just a few lines of code. UltronAI is designed for developers of all skill levels.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          <div className='grid grid-cols-2 gap-8 items-start'>
            <div>
            <CodeBlock code={htmlSnippet} language="html" className="col-span-2" />
            </div>
            <div>
            <CodeBlock code={reactSnippet} language="jsx" className="col-span-2" />
            </div>
          </div>

          <div className="space-y-6 mt-4 md:mt-0 text-center w-full">
            <h3 className="text-2xl  mb-1 font-headline font-semibold">Works With Your Stack</h3>
            <p className="text-muted-foreground">
              UltronAI offers flexible integration options, supporting standard web technologies and popular JavaScript frameworks.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frameworks.map((fw) => (
                <div key={fw.name} className="text-center p-4 hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-2 animate-pulse-subtle ">{fw.icon}</div>
                  <p className="font-medium">{fw.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='flex w-full flex-col items-center justify-center mt-10'>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              See Them in <span className="text-[var(--brand)]">Action</span>
            </h2>
            <p className="mt-2 mb-8 text-lg text-muted-foreground max-w-3xl mx-auto">
              Visualize how UltronAI characters integrate into digital environments, offering dynamic and engaging user interactions directly from the screen.
            </p>
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] overflow-hidden rounded-xl shadow-2xl border">
              <Image
                src="/Hero.webp"
                alt="AI avatar interacting with a user from a laptop screen"
                layout="fill"
                objectFit="cover"
                className='w-full h-full'
                data-ai-hint="avatar laptop interaction"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
