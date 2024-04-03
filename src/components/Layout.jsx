import ProgressBar from "./ProgressBar"

const Layout = ({children}) => {
  return (
    <div className="h-full w-full flex items-center flex-col gap-3 p-8">
      <ProgressBar />
      {children}
    </div>
  )
}

export default Layout