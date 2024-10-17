import logo from '../assets/logo.png'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                  >React Jobs</span
                >
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <Button text='Home' type='sm' href='/index.html'/>
                  <Button text='Jobs' type='sm-transparent' href='/jobs.html'/>
                  <Button text='Home' type='sm-transparent' href='/add-job.html'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar