'use client';

import { Button } from "../ui/button";
import { Input } from "../ui/input";



interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: UploadFormInputProps) {
    return (

       <form onSubmit={onSubmit} className="flex flex-col gap-6">
    <div className="flex justify-end items-center gap-1.5">
        <Input
            type="file"
            name="file"
            accept="application/pdf"
            required
            className="border border-gray-300"
        />
        <Button
            type="submit"
            className="w-full min-[400px]:w-auto bg-linear-to-r from-rose-700 to-rose-500
                text-white hover:bg-linear-to-br hover:from-rose-500 hover:to-rose-800 
                duration-300 transition-all flex justify-center items-center"
        >
            Upload Your Pdf
        </Button>
    </div>
</form>

    )
}