'use client';
import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
    file: z
        .instanceof(File, { message: 'invalid file type' })
        .refine(
            (file) => file.type.startsWith('application/pdf'),
            'Only PDF files are allowed',
        )
        .refine(file => file.size <= 20 * 1024 * 1024, // 10 MB limit
            'File size must be less than 20MB',
        ),
})
export default function UploadForm() {

    const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
        onClientUploadComplete: (res) => {
            console.log('Files uploaded successfully:');
            toast.success('Files uploaded successfully'
                , {
                    
                    duration: 5000,
                    position: "top-center",
                    icon: "✅",
                    
                    
                }
            );
            // Handle the response from the server
        },
        onUploadError: (error) => {
            console.error('Error uploading files:', error);
            toast.error('Error uploading files', {
                description: error.message,
                duration: 5000,
                position: 'top-center',
                icon: "❌",
                richColors: true,

            })
            // Handle the error
        },
        onUploadBegin: ([file]) => {
            console.log('Starting upload for ', file);
            toast('Uploading file ....', {
                position: 'top-center',
                dismissible: true,
                duration: 5000,
                richColors: true,
                icon: "⏳"
            });
        }
    })






    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted");
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;
        const ValidatedField = schema.safeParse({ file });
        if (!ValidatedField.success) {
            console.log('Invalid form data');
            toast.error('Invalid form data', {
                description: ValidatedField.error.message,
                duration: 5000,
                position: 'top-center',
                
            });
            return;
        }
        console.log(ValidatedField)


        //validating the fields 
        //schema with zod 
        //upload the file to uploadThing

        const resp = await startUpload([file])
        if (!resp || resp.length === 0) {
            console.error('Upload failed');
            return;
        }
        //parse th pdf using lang chain
        //save the summary to the database
        // redirect to the summary page with the id of the summary
    }
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}
