'use client'

import { postData } from "../action"

export default function Form({socket}: {socket: any}) {

    console.log('form socket', socket);

    return(
        <form action={async (formData) => {
            await postData(formData)
        }} className="p-6 fixed bottom-0 left-0 w-full bg-white">
            <div className="flex">
                <input type="text" name="message" placeholder="Type your message..." className="flex-grow py-2 px-4 outline-none"/>
                <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-l-3xl rounded-t-3xl">Send</button>
            </div>
        </form>
    )
}