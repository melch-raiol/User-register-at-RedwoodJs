import Header from 'src/components/Header/Header'

type UserRegisterLayoutProps = {
  children?: React.ReactNode
}

const UserRegisterLayout = ({ children }: UserRegisterLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default UserRegisterLayout
