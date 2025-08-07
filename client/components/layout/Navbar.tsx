import Link from "next/link";
import { cookies } from 'next/headers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import LogoutButton from "../LogoutButton";

export default async function Navbar() {
    const token = cookies().get('token')?.value
    const username = cookies().get('username')?.value

    return (
        <div className="flex justify-between items-center sticky top-0 z-10 px-10 md:px-24 md:py-3 bg-white">
            <div className="text-2xl font-bold">
                <Link href={'/'}>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faGraduationCap} className="size-12" />
                        <p className="pl-2">LMS EDU</p>
                    </div>
                </Link>
            </div>
            <div className="flex gap-4 font-bold">
                <Link href={'/'} className="hidden md:block hover:text-red-600">TRANG CHỦ</Link>
                <Link href={'/courses'} className="hidden md:block hover:text-red-600">KHÓA HỌC</Link>
                <Link href={'/about-us'} className="hidden md:block hover:text-red-600">GIỚI THIỆU</Link>

                <div className="group relative hover:cursor-pointer">
                    <div>{token ? <p className="text-blue-700">{username}</p>
                        : <div><Link href={'/auth/login'} className="hover:text-red-600">ĐĂNG NHẬP</Link></div>}
                    </div>
                    {/* hover */}
                    <div className="group-hover:block hidden absolute">
                        {token ?
                            <div className="bg-blue-900 rounded-md p-2 ">
                                <Link href={'/order-view'} className="text-white hover:underline hover:text-red-500" >Đơn hàng</Link>
                                <LogoutButton />
                            </div> : ''}
                    </div>
                </div>
                <Link href={'/cart'} className="hover:text-red-600">
                    <FontAwesomeIcon icon={faCartShopping} className="size-6" />
                </Link>
            </div>
        </div >
    )
}