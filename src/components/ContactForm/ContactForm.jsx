import {useState} from 'react'
// import { useNavigate} from 'react-router'
import './ContactForm.css'

export default function ContactForm(){



    const [formData, setFormData] = useState({
name:'',
email:'',
message:''
})

const [errors, setErrors] = useState({})

const [result, setResult] =useState('')
// const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()
    setResult('Sending')

    const form = new FormData();
    form.append("access_key", "e846d832-9362-4d0c-a514-1fd1f52393f1");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

console.log(form)

    const response = await fetch('https://api.web3forms.com/submit', {
        method:'POST',
        body: form,
    })
    const data = await response.json()

    if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }




const handleChange = (e) => {
    setErrors({...errors,[e.target.name]:''})
    setFormData({...formData, [e.target.name]: e.target.value})
} 

    return (


        <>
        <section className = 'container'>
<h1>ContactForm</h1>

<form onSubmit = {handleSubmit} >
{/* <input type="hidden" name="access_key" value="e846d832-9362-4d0c-a514-1fd1f52393f1"></input> */}

<div className='form-control'>
<label htmlFor='name'>name</label>
<input className='input'
type='text'
name='name'
id ='name'
placeholder='enter your name'
required
onChange={handleChange}
/>
{ errors.username && <p className='error-message'>{errors.username}</p> }
</div>

<div className='form-control'>
<label htmlFor='email'>email</label>
<input className='input'
type='text'
name='email'
id ='email'
placeholder='enter your email'
required
onChange={handleChange}
/>
{ errors.username && <p className='error-message'>{errors.username}</p> }
</div>

<div className='form-control'>
<label htmlFor='message'>message</label>
<textarea className='input'
type='text'
name='message'
id ='message'
placeholder='enter your message'
required
onChange={handleChange}
/>
{ errors.username && <p className='error-message'>{errors.username}</p> }
</div>
<button type='submit'> Submit </button>

</form>
<span>{result}</span>
</section>
</>
    )
}