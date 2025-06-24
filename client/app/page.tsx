import LogoutButton from '@/components/LogoutButton'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faPlay, faUsers } from '@fortawesome/free-solid-svg-icons'
import StudentReviewListStatic from '@/components/StudentReviewListStatic'

export default async function HomePage() {

  return (
    <main>
      <div className='pt-4 px-24 pb-[120px]'
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.450), rgba(0, 0, 0, 0.500)),
            url(https://img.freepik.com/free-photo/friends-enjoying-lively-discussion-welldecorated-space_24972-2884.jpg?semt=ais_hybrid&w=740)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}>
        <div className='flex flex-col py-6'>
          <p className='font-bold text-white'>THE BEST THEME FOR</p>
          <p className='text-[80px] text-white'>EDUCATION</p>
          <Link href={'/courses'} className='w-[10%]'>
            <button className='p-2 bg-yellow-400 text-sm rounded-md hover:bg-yellow-600 hover:text-white'>
              HỌC NGAY
            </button>
          </Link>
        </div>

        <div className='flex justify-center mt-24 gap-4 '>
          <div className='flex justify-center items-center rounded-md p-7 bg-slate-800 w-[300px]  text-white'>
            <FontAwesomeIcon icon={faBookOpenReader} className="size-12 text-yellow-300" />
            <div className='pl-4'>
              <p className='font-bold'>KHÓA HỌC ONLINE</p>
              <p className='flex items-center text-yellow-400 text-[10px]'>
                <Link href={'/courses'}>
                  <p className='pr-1 hover:text-yellow-100'>ĐỌC THÊM</p>
                </Link>
                <FontAwesomeIcon icon={faPlay} className="size-2 text-yellow-300" />
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center rounded-md p-7 bg-slate-800 w-[300px] text-white'>
            <FontAwesomeIcon icon={faUsers} className="size-12 text-yellow-300" />
            <div className='pl-4'>
              <p className='font-bold'>VỀ CHÚNG TÔI</p>
              <p className='flex items-center text-yellow-400 text-[10px]'>
                <Link href={'/about-us'}>
                  <p className='pr-1 hover:text-yellow-100'>ĐỌC THÊM</p>
                </Link>
                <FontAwesomeIcon icon={faPlay} className="size-2 text-yellow-300" />
              </p>
            </div>
          </div>

          <div className='flex justify-center rounded-md p-7 bg-slate-800 w-[300px] text-white'>
            <Link href={'/auth/login'} className='flex items-center'>
              <p className='pr-1 font-bold text-yellow-400 hover:text-yellow-100'>ĐĂNG NHẬP NGAY</p>
              <FontAwesomeIcon icon={faPlay} className="size-2 text-yellow-300" />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <StudentReviewListStatic />
      </div>
      <LogoutButton />
    </main>
  )
}
