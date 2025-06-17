"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

const SignupFormDemo = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess('Account created successfully! You can now log in.')
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        console.log('Signup successful:', data)
        setTimeout(() => {
          // window.location.href = '/login'
        }, 2000)
      } else {
        setError(data.error || 'Signup failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
      console.error('Signup error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="!min-h-screen !flex !items-center !justify-center !p-4">
      <div className="!shadow-input !w-full !max-w-md !rounded-none !bg-white !p-4 md:!rounded-2xl md:!p-8 dark:!bg-black">
        <h2 className="!text-xl !font-bold !mb-2 !text-neutral-800 dark:!text-neutral-200">
          Welcome to CharityName
        </h2>
        <p className="!mt-2 !max-w-sm !text-sm !text-neutral-600 dark:!text-neutral-300">
          Join us in making a difference. Sign up to start your journey with us.
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

        <div className="!my-8">
          <div className="!mb-4 !flex !flex-col !space-y-2 md:!flex-row md:!space-y-0 md:!space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input 
                id="firstname" 
                placeholder="Tyler" 
                type="text" 
                className="!pl-4"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input 
                id="lastname" 
                placeholder="Durden" 
                type="text" 
                className="!pl-4"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>
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
          <LabelInputContainer className="!mb-4">
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
          <LabelInputContainer className="!mb-8">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input 
              id="confirmPassword" 
              placeholder="••••••••" 
              type="password" 
              className="!pl-4"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <button
            className="!group/btn !relative !block !h-10 !w-full !rounded-md !bg-gradient-to-br !from-violet-700 !to-violet-900 !font-medium !text-white !shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:!bg-zinc-800 dark:!from-violet-800 dark:!to-violet-950 dark:!shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] !disabled:opacity-50"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Sign up'} &rarr;
            <BottomGradient />
          </button>

          <div className="!flex !justify-center !mt-4 !mb-6">
            <a
              href="/login"
              className="!text-sm !text-violet-600 hover:!text-violet-500 dark:!text-violet-400 dark:hover:!text-violet-300"
            >
              Already have an account? Sign in
            </a>
          </div>

          <div className="!my-8 !h-[1px] !w-full !bg-gradient-to-r !from-transparent !via-neutral-300 !to-transparent dark:!via-neutral-700" />

          <div className="!flex !flex-col !space-y-4">
            <button
              className="!group/btn !shadow-input !relative !flex !h-10 !w-full !items-center !justify-start !space-x-2 !rounded-md !bg-gray-50 !px-4 !font-medium !text-black dark:!bg-zinc-900 dark:!shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <IconBrandGithub className="!h-4 !w-4 !text-neutral-800 dark:!text-neutral-300" />
              <span className="!text-sm !text-neutral-700 dark:!text-neutral-300">
                GitHub
              </span>
              <BottomGradient />
            </button>
            <button
              className="!group/btn !shadow-input !relative !flex !h-10 !w-full !items-center !justify-start !space-x-2 !rounded-md !bg-gray-50 !px-4 !font-medium !text-black dark:!bg-zinc-900 dark:!shadow-[0px_0px_1px_1px_#262626]"
              type="button"
            >
              <IconBrandGoogle className="!h-4 !w-4 !text-neutral-800 dark:!text-neutral-300" />
              <span className="!text-sm !text-neutral-700 dark:!text-neutral-300">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="!absolute !inset-x-0 !-bottom-px !block !h-px !w-full !bg-gradient-to-r !from-transparent !via-violet-500 !to-transparent !opacity-0 !transition !duration-500 group-hover/btn:!opacity-100" />
      <span className="!absolute !inset-x-10 !-bottom-px !mx-auto !block !h-px !w-1/2 !bg-gradient-to-r !from-transparent !via-violet-500 !to-transparent !opacity-0 !blur-sm !transition !duration-500 group-hover/btn:!opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("!flex !w-full !flex-col !space-y-2", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;