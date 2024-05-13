
import{
  ChevronDown,
  NotificationsOutline,
  PersonCircle,
  SearchOutline,
  SettingsOutline,
  ShareSocialOutline,
} from 'react-ionicons'

const Navbar = () => {
  return (
<header className="bg-white">
  <div className="fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 left-0 md:w-[calc(100%-230px)] w-[calc(100%-60px)] md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff] ">
    <div className='flex items-center gap-3 cursor-pointer'>
      <PersonCircle color='green' width={'28px'} height={'28px'}/>
      <span className='text-green-800 font-semibold md:text-lg text-sm whitespace-nowrap'>Anderson</span>
      <ChevronDown width={'16px'} height={'16px'} color='green'/>
    </div>
    <div className='md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2'>
      <SearchOutline color='green' />
      <input type="text" className='w-full text-green-900 bg-gray-100 placeholder-green-900  outline-none text-[15px]' placeholder='Pesquisar..' />
    </div>

    <div className='md:hidden flex items-center gap-4'>
      <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
        <ShareSocialOutline color='green'/>
      </div>
      <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
        <SettingsOutline color='green'/>
      </div>
      <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
        <NotificationsOutline color='green'/>
      </div>
    </div>

    <div className='md:flex hidden items-center gap-4'>
      <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
        <ShareSocialOutline color='green'/>
      </div>
      <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
        <SettingsOutline color='green'/>
      </div>
      <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
        <NotificationsOutline color='green'/>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar

