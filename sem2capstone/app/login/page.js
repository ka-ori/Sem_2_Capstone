"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/context/AuthContext";



const LoginFormDemo = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reloading of the page while submitting 
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful! Redirecting...');
        
        login(data.user, data.token); 
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="!flex !min-h-screen !items-center !justify-center !w-full !p-4">
      <div className="!shadow-input !mx-auto !w-full !max-w-md !rounded-none !bg-white !p-4 md:!rounded-2xl md:!p-8 dark:!bg-black">
        <h2 className="!text-xl !font-bold !mb-2 !text-neutral-800 dark:!text-neutral-200">Welcome Back</h2>
        <p className="!mt-2 !max-w-sm !text-sm !text-neutral-600 dark:!text-neutral-300">
            We're glad to see you again. Please log in to continue.
        </p>
        
        {error && (
          <div className="!mt-4 !p-3 !bg-red-100 !border !border-red-400 !text-red-700 !rounded">
            {error}
          </div>
        )}
        
        {success && (
          <div className="!mt-4 !p-3 !bg-green-100 !border !border-green-400 !text-green-700 !rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="!my-8">
            <LabelInputContainer className="!mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                placeholder="projectmayhem@fc.com" 
                type="email" 
                className="!pl-4"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="!mb-8">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                placeholder="••••••••" 
                type="password" 
                className="!pl-4"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>

            <button
              type="submit"
              className="!group/btn !relative !block !h-10 !w-full !rounded-md !bg-gradient-to-br !from-violet-700 !to-violet-900 !font-medium !text-white !shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:!bg-zinc-800 dark:!from-violet-800 dark:!to-violet-950 dark:!shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] !disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'} →
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


const BottomGradient = () => {
  return (
    <>
      <span className="!absolute !inset-x-0 !-bottom-px !block !h-px !w-full !bg-gradient-to-r !from-transparent !via-violet-500 !to-transparent !opacity-0 !transition !duration-500 group-hover/btn:!opacity-100" />
      <span className="!absolute !inset-x-10 !-bottom-px !mx-auto !block !h-px !w-1/2 !bg-gradient-to-r !from-transparent !via-violet-500 !to-transparent !opacity-0 !blur-sm !transition !duration-500 group-hover/btn:!opacity-100" />
    </>
  )
}



export default LoginFormDemo  