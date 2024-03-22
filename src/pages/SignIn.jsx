import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import alerts from "../utils/alerts"
import authQueries from "../services/authQueries"
import LayoutMain from "./LayoutMain"
import { useDispatch } from "react-redux"
import { signIn } from "../redux/actions/userAction"

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    const aux = { ...formData }
    aux[name] = value
    setFormData(aux)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const aux = { ...formData }
    for (const key in aux) {
      if (!aux[key]) delete aux[key]
    }
    console.log(aux);

    authQueries.login(aux).then((response) => {
      console.log(response);
      if (response.status == 200) {
        dispatch(signIn(response.data));
        alerts.success(response.statusMsg);
        navigate("/")
      } else {
        alerts.error(response.statusMsg);
      }
    })
  }

  return (
    <LayoutMain>
      <main className="w-full min-h-screen flex flex-col items-center gap-8 px-3 pt-3">
        <h1 className="font-bold text-emerald-600 text-5xl sm:text-7xl pb-5">Sign In</h1>
        <form onSubmit={handleSubmit} onInput={handleInput} className="flex flex-col gap-5 w-full min-h-[250px] p-5 bg-orange-200 border-2 border-orange-500 rounded-xl sm:max-w-[650px] ">
          <label> Email
            <input type="email" placeholder="Email" name="email" className="rounded-md pl-1 h-9 w-full mt-1" />
          </label>

          <label> Password
            <input type="password" placeholder="Password" name="password" className="rounded-md pl-1 h-9 w-full mt-1" />
          </label>

          <input type="submit" value="Send" className="cursor-pointer w-52 bg-orange-500 self-center border-2 border-orange-600 rounded-full text-white text-center text-xl font-semibold p-1" />
        </form>

        <div className="w-full flex flex-col items-center gap-4 pb-4">
          <p>You do not have an account?</p>
          <Link to="/signup" className="w-52 bg-teal-500 border-2 border-emerald-600 rounded-full text-white text-center text-xl font-semibold p-1">Sign Up</Link>
        </div>
      </main>
    </LayoutMain>
  )
}

export default SignIn