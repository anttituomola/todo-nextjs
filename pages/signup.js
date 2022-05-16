import { useState } from "react"
import { v4 as uuid } from "uuid"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const result = await addUser(email, password)
        } catch (error) {
            console.log(error)
        }
    }

    const addUser = async (email, password) => {
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        if (!response.ok) {
            throw new Error(data.message)
        }
        return data
    }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
            <input type="email" name="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
            <input type="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
    </form>
  )
}

export default Signup