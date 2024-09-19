import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from './ui/button'



const Navbar = () => {
  return (
    <nav className='sticky top-0 z-30 max-w-7xl mx-auto py-3 bg-white'>
        <div className='w-[90%] mx-auto flex justify-between items-center'>
        <div className=' font-bold text-3xl'>
            Quik
        </div>
        <div>
            <SignedOut>
                <SignInButton>
                <Button variant="outline" className='mr-5 sm:mr-10 text-lg'>Login</Button>
                </SignInButton >

                <SignUpButton>
                <Button variant="default" className=' text-lg'>Signup</Button>
                </SignUpButton >
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
        
        </div>
    </nav>
  )
}

export default Navbar
