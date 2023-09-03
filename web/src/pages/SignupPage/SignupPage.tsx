/* eslint-disable jsx-a11y/img-redundant-alt */
import ImgRedwood from 'src/assets/RW_National_Park.jpg'
import UserForm from 'src/components/UserForm/UserForm'

const SignupPage = () => {
  return (
    <div className="div-signup-page display-row ">
      <div className="img-signup">
        <img src={ImgRedwood} alt="image-redwood" />
      </div>
      <div className="form-signup display-center">
        <h1>Sign up here</h1>
        <UserForm />
      </div>
    </div>
  )
}

export default SignupPage
