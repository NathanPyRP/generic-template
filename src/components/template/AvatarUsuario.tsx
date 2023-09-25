import Link from 'next/link'
import useAuth from '../../data/hook/useAuthData'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    return (
        <Link href="/perfil">
            <img
                src={usuario?.imagemUrl ?? '/images/avatar-svgrepo-com.svg'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
                crossOrigin="anonymous"
            />
        </Link>
    )
}