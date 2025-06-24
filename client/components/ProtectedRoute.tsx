'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children, requireAdmin = false }: { children: React.ReactNode, requireAdmin?: boolean }) {
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const role = localStorage.getItem('role')

        if (!token) router.push('/auth/login')
        if (requireAdmin && role !== 'admin') router.push('/')
    }, [])

    return <>{children}</>
}
