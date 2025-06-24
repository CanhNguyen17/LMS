import Link from 'next/link'
import { register } from './actions'

export default function RegisterPage() {
    return (
        <div className='flex flex-col text-white justify-center min-h-[450px] pb-6'
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.450), rgba(0, 0, 0, 0.500)),
                    url(https://acet.edu.vn/wp-content/uploads/2021/07/huong-dan-hoc-tieng-anh-online-qua-zoom-19.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}>

            <form
                action={register}
                className="max-w-sm mx-auto p-6 border rounded shadow"
            >
                <h1 className="text-2xl font-bold mb-4">Đăng ký</h1>

                <input
                    name="username"
                    className="w-full border px-3 py-2 mb-3 rounded text-black"
                    placeholder="Username"
                    required
                />

                <input
                    name="password"
                    type="password"
                    className="w-full border px-3 py-2 mb-3 rounded text-black"
                    placeholder="Password"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Đăng ký
                </button>

                <div className='flex justify-center'>
                    <p className='pt-2 text-sm'>
                        Bạn đã đăng ký?
                        <Link href={'/auth/login'} className='pl-1 text-yellow-400 hover:text-yellow-300'>
                            Đăng nhập ở đây!
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
