import { useEffect } from 'react'
import { usePageOffset } from '../../use-page-offset'
import prism from 'prismjs'
import Link from 'next/link'

const App = () => {
    const offset = usePageOffset()
    const parallaxSpeed = 3

    useEffect(() => {
        prism.highlightAll()
    }, [])

    return (
        <div className="p-4">
            <div className="relative py-64 overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10"
                    style={{
                        transform: `translate(0px, ${offset / parallaxSpeed}px)`,
                        backgroundImage: `url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80')`,
                    }}
                ></div>
                <div className="text-center relative z-20">
                    <h1 className="text-5xl font-bold pb-4 text-blueGray-800">Use Page Offset</h1>
                    <p className="text-3xl text-blueGray-700 pb-6">
                        React hook for tracking the offset of the browser window
                    </p>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="prose prose-lg prose-blue py-14">
                    <h2>
                        Use Page Offset is a react hook for tracking the Y offset of a browser
                        window
                    </h2>
                    <p className="border-l-4 border-gray-300 px-4">Current page Y offset (px)</p>
                    <h3>Installation</h3>
                    <p>
                        <pre>
                            <code>npm install use-page-offset</code>
                        </pre>
                    </p>
                    <h3>Usage</h3>
                    <pre className="language-javascript">
                        <code>{`import React from "react"
import { usePageOffset } from "use-page-offset"

const App = () => {
  const offset = usePageOffset()

  return (
    <div>Page offset {offset}</div>
  )
}

export default App`}</code>
                    </pre>
                    <h3>Parallax Demo</h3>
                    <p>
                        This demo below is a basic example of creating a parallax background image
                        using{' '}
                        <Link href="https://tailwindcss.com/">
                            <a>Tailwind CSS</a>
                        </Link>
                        . Its what I'm using on this site at the top. You can see the background
                        image moving at a slower speed to achieve that effect.
                    </p>
                    <pre className="language-javascript">
                        <code>
                            {`import { usePageOffset } from "use-page-offset"

const App = () => {
  const offset = usePageOffset()
  const parallaxSpeed = 3
  return (
    <div className="relative py-64 bg-red-500 overflow-hidden">
    <div
      className="absolute top-0 left-0 w-full h-full object-cover z-10"
      style={{
        transform: 'translate(0px, ` +
                                '${offset / parallaxSpeed}px' +
                                `)',
        backgroundImage: 'url("https://via.placeholder.com/1200x400")',
      }}
    ></div>
    <div className="text-center relative z-20">
      <h1 className="text-5xl font-bold pb-4 text-blueGray-800">
        Text Overlay
      </h1>
    </div>
  </div>
  )
}

export default App`}
                        </code>
                    </pre>
                    <h3>How does this work?</h3>
                    <p>
                        Use Page Offset is a super simple react hook that tracks the{' '}
                        <code>pageYOffset</code> of the browser window so you can easily build in
                        effects like parallax & scroll effects.
                    </p>
                    <p>
                        View the repo at{' '}
                        <Link href="https://github.com/garrettbland/use-page-offset">
                            <a>https://github.com/garrettbland/use-page-offset</a>
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
export default App
