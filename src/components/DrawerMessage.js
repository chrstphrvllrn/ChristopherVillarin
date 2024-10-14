import React from 'react'
import { Drawer } from 'vaul';
import IconMessage from '../components/icons/message'

function DrawerMessage({buttonName}) {
  return (
    <div>
        
        <Drawer.Root direction="bottom">
            <Drawer.Trigger className='flex align-center items-center gap-2 justify-center text-sm bg-button-dark hover:bg-button-lightgrey  text-[#fff] hover:text-[#fff] w-[190px] rounded-full font-medium  py-3 px-1 mr-3 transition-all duration-150 ease-in-out' style={{ transition: 'background-color 0.3s' }}> { buttonName }<IconMessage/> </Drawer.Trigger>
            
                <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="h-[80vh] bg-zinc-100 flex flex-col rounded-t-[10px] fixed bottom-0 left-0 right-0">
                <div className="p-4 bg-white rounded-t-[10px] flex-1">
                    <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                            <div class="flex min-h-full flex-col  px-6 lg:px-8">
                            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
                            <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Leave a message</h2>
                            </div>

                            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form class="space-y-6" action="#" method="POST">
                            <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Provide your contact email for me to reach you.</label>
                            <div class="mt-2">
                            <input id="text" name="email" type="email" autocomplete="email" required placeholder=" you@example.com" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-[0.5rem]"/>
                            </div>
                            </div>

                            <div>
                            {/* <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                            <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                            </div> */}
                         {/* <div class="mt-2">
                            <input id="text" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div> */}
                            <div class="col-span-full">
                                <label for="messagebox" class="block text-sm font-medium leading-6 text-gray-900">Message</label>
                                <div class="mt-2">
                                <textarea id="messagebox" name="messagebox" rows="6" cols="30" placeholder="Type your message here." class=" resize-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-[0.5rem]" ></textarea>
                                </div>
                            </div>

                         
                            </div>

                            <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-button-brand px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
                            </div>
                            </form>

                            {/* <p class="mt-10 text-center text-sm text-gray-500">
                            Not a member?
                            <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                            </p> */}
                            </div>
                    </div>
            </div>       
        </Drawer.Content>
                        
                        <Drawer.Overlay />
                </Drawer.Portal>

      </Drawer.Root>

    </div>
  )
}

export default DrawerMessage

