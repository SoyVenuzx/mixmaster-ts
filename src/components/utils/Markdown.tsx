import Markdown from 'react-markdown'

export const MarkdownRender = ({ body }: { body: string }) => {
  return (
    <div className='max-w-full p-4 overflow-auto border border-gray-300 rounded-md'>
      <Markdown>{body}</Markdown>
    </div>
  )
}
