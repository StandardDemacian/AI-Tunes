import { Component } from "react"
import { signUp } from "../../utilities/users-service"
import "./SignUpForm.css"

export default class SignUpForm extends Component{
    // state is just a POJO
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (event) => {
        this.setState({
            // name, email, password, confirm
            [event.target.name]: event.target.value,
            error: ''
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // alert(JSON.stringify(this.state))
        try {
            // taking the state and making a copy of the state and
            // assigning it to formData var
            const formData = {...this.state}
            delete formData.error
            delete formData.confirm
            

            // wait for a response back from the server
            const user = await signUp(formData)
            this.props.setUser(user)


        } catch (error){
            console.error(error)
            this.setState({
                error: "Sign up failed = Try again later"
            })
        }
    }

    render() {
        const disabled = this.state.password !== this.state.confirm

        return (
            <div className="sign-up-container">
                <form autoComplete="off" id="sign-up-form" onSubmit={this.handleSubmit}>
                    <label className="signuplabel">Name</label>
                    <input 
                        type="text"
                        name="name"
                        className="sign-up-input"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required 
                    />
                    <label className="signuplabel">Email</label>
                    <input 
                        type="email"
                        name="email"
                        className="sign-up-input"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required 
                    />
                    <label className="signuplabel">Password</label>
                    <input 
                        type="password"
                        name="password"
                        className="sign-up-input"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required 
                    />
                    <label className="signuplabel">Confirm</label>
                    <input 
                        type="password"
                        name="confirm"
                        className="sign-up-input"
                        value={this.state.confirm}
                        onChange={this.handleChange}
                        required 
                    />
                    <button type="submit" disabled={disabled} id="sign-up-button">Sign Up</button>
                </form>
                <div className="error-message">
                <p>{this.state.error}</p>
                </div>
            </div>
        )
    }
}