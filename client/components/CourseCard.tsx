'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function CourseCard({ course }: { course: any }) {
    const [loading, setLoading] = useState(false);

    const addToCart = async (courseId: string) => {
        //
        const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
        //
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:5000/api/cart/${courseId}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                toast.success('Đã thêm vào giỏ hàng');
            } else {
                toast.error('Thêm thất bại');
            }
        } catch (err) {
            toast.error('Lỗi kết nối');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.650),rgba(0,0,0,0.450)),
         url(${course.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}
        >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm">{course.description}</p>
            <div className='flex justify-between'>
                <Link href={`/course/${course._id}`}>
                    <button className="mt-8 px-4 py-2 bg-cyan-300 text-white rounded hover:bg-cyan-800">
                        Xem khóa học
                    </button>
                </Link>
                <button
                    onClick={() => { addToCart(course._id) }}
                    disabled={loading}
                    className="flex items-center mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 disabled:opacity-50"
                >
                    <h1>{loading ? 'Đang thêm...' : 'Thêm'}</h1>
                    <FontAwesomeIcon icon={faCartPlus} className="size-6 pl-2" />
                </button>
            </div>
        </div>
    );
}
