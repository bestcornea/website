import { useState, useEffect } from 'react'
import { run } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'

const Null = (props) => null

const MdxWrapper = ({mdx, app, t, components={}}) => {

  const [mdxModule, setMdxModule] = useState()

  useEffect(() => {
    ;(async () => {
      setMdxModule(await run(mdx, runtime))
    })()
  }, [mdx])

  const allComponents = {
    ...components
  }
  const MdxContent = mdxModule ? mdxModule.default : Null

  return app
    ? (
      <div className="text-primary mdx max-w-prose text-base-content max-w-prose text-lg lg:text-xl">
        {mdxModule && <MdxContent components={allComponents}/>}
      </div>
    ) : <MdxContent components={allComponents}/>
}

export default MdxWrapper

