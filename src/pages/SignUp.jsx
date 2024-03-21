import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import alerts from "../utils/alerts"
import authQueries from "../services/authQueries"
import getAllCountries from "../services/countriesQueries"
import LayoutMain from "./LayoutMain"

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country: "",
    image: "",
    description: "",
  })

  const [countries, setCountries] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getAllCountries().then(setCountries)
  }, [])

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

    authQueries.register(aux).then((response) => {
      console.log(response);
      if (response.status == 201) {
        alerts.success('Count created, you can login');
        navigate("/signin")
      } else {
        alerts.error(response.statusMsg);
      }
    })
  }

  return (
    <LayoutMain>
      <main className="w-full min-h-screen flex flex-col items-center gap-8 px-3 pt-3">
        <h1 className="font-bold text-emerald-600 text-5xl sm:text-7xl pb-5">Sign Up</h1>
        <form onSubmit={handleSubmit} onInput={handleInput} className="flex flex-col gap-5 w-full min-h-[600px] p-5 bg-orange-200 border-2 border-orange-500 rounded-xl sm:max-w-[650px] ">
          <label> First Name
            <input type="text" name="first_name" className="rounded-md pl-1 h-9 w-full mt-1" />
          </label>

          <label> Last Name
            <input type="text" name="last_name" className="rounded-md pl-1 h-9 w-full mt-1" />
          </label>

          <label> Email
            <input type="email" name="email" className="rounded-md pl-1 h-9 w-full mt-1" />
          </label>

          <label> Password
            <input type="password" name="password" className="rounded-md pl-1 h-9 w-full mt-1" />
          </label>

          <label > Select your country
            <select name="country" className="rounded-md h-9 w-full mt-1">
              {countries.length > 0 && countries.map(country => <option key={country} value={country}> {country} </option>)}
            </select>
          </label>

          <label> URL image
            <input type="text" name="image" className="rounded-md pl-1 h-9 w-full mt-1" />
          </label>

          <label> Description
            <textarea name="description" cols="30" rows="10" className="rounded-md pl-1 h-32 w-full mt-1"></textarea>
          </label>

          <input type="submit" value="Send" className="cursor-pointer w-52 bg-orange-500 self-center border-2 border-orange-600 rounded-full text-white text-center text-xl font-semibold p-1" />
        </form>

        <div className="w-full flex flex-col items-center gap-4 pb-4">
          <p>Do you already have an account?</p>
          <Link to="/signin" className="w-52 bg-teal-500 border-2 border-emerald-600 rounded-full text-white text-center text-xl font-semibold p-1">Sign In</Link>
        </div>
      </main>
    </LayoutMain>
  )
}

export default SignUp;