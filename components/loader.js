import Spinner from 'components/spinner'

const Loader = ({}) => (
  <div
    className={`
    fixed top-0 left-0 right-0 w-screen h-screen
    hover:cursor-pointer flex flex-col justify-center
    `}
  >
    <div
      className="m-auto lightbox bg-neutral bg-opacity-70 p-12 mask mask-squircle"
      style={{
        maxHeight: 'calc(100vh - 6rem)',
        maxWidth: 'calc(100vw - 6rem)',
      }}
    >
      <Spinner className="w-36 h-36 text-neutral-content" />
    </div>
  </div>
)

export default Loader
