"use client"
import { ImagePlus, Loader2Icon, Monitor, Smartphone, Sparkles, Square } from 'lucide-react'
import { eventNames } from 'process'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Monda } from 'next/font/google'
import { Button } from '@/components/ui/button'

const sampleProducts = [
    '/headphone.png',

    '/juice-can.png',
    '/perfume.png',
    '/burger.png',
    '/ice-creame.png',

]
type Props = {
    onHandleInputChange: any,
    onGenerate: any,
    loading: boolean,
}

function FormInput({ onHandleInputChange, onGenerate, loading }: Props) {
    const [preview, setpreview] = React.useState<string | null>(null);

    const onFileSelect = (files: FileList | null) => {
        if (!files || files?.length === 0) return;
        const file = files[0];
        if (file.size > 5 * 1024 * 1024) {
            alert("File size exceeds 5MB");
            return;
        }
        onHandleInputChange('file', file)
        setpreview(URL.createObjectURL(file));


    }
    return (
        <div>
            <div>
                <h2 className='font-semibold'>1. Upload Product Image</h2>
                <div>
                    <label htmlFor='imageUpload' className='mt-2 border-dashed border-2 rounded-xl flex flex-col
                p-4 items-center justify-center min-h-[200px] cursor-pointer
                 '>
                        {!preview ?
                            <div className='flex flex-col items-center gap-3'>
                                <ImagePlus className='h-8 w-8 opacity-40' />
                                <h2 className='text-xl'>Click here to upload Image</h2>
                                <p className='opacity-45'>Upload image upto 5mb</p>
                            </div>
                            : <Image src={preview} alt='preview' width={300} height={300}
                                className='w-full h-full max-h[200px] object-contain rounded-lg ' />}

                    </label>
                    <input type="file" id='imageUpload' className='hidden'
                        accept='image/*'
                        onChange={(event) => onFileSelect(event.target.files)}

                    />
                </div>
                {/* sample product */}

                <div>
                    <h2 className='opacity-40 text-center my-5'>Select smple product to try</h2>
                    <div className='flex gap-10 items-center justify-center'>
                        {sampleProducts.map((product, index) => (

                            <Image

                                key={index}
                                src={product}
                                alt='sample product'
                                width={60}
                                height={60}
                                className='w-[60px] h-[60] rounded-lg cursor-pointer hover:scale-150 transition-all'
                                onClick={() => {
                                    setpreview(product)
                                    onHandleInputChange('imageUrl', product)
                                }}

                            />
                        ))
                        }

                    </div>
                </div>

            </div>
            <div className='mt-8'>
                <h2 className='font-semibold'>2. Enter Product Descritpion</h2>
                <Textarea
                    placeholder='Tell me more about product and how you wnat to display'
                    className='min-h-[150px] mt-2'
                    onChange={(event) => onHandleInputChange('description', event.target.value)

                    }

                />
            </div>
            <div className='mt-8'>
                <h2 className='font-semibold'>3. Select Image Size</h2>
                <Select onValueChange={(value) => onHandleInputChange('size', value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Resolution" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1024x1024">
                            <div className='flex gap-2 items-center'>
                                <Square
                                    className='h-4 w-4'
                                />
                                <span>1:1</span>
                            </div>

                        </SelectItem>
                        <SelectItem value="1536x1024">
                            <div className='flex gap-2 items-center'>
                                <Monitor
                                    className='h-4 w-4'
                                />
                                <span>16:9</span>
                            </div>


                        </SelectItem>
                        <SelectItem value="1024x1536">
                            <div className='flex gap-2 items-center'>
                                <Smartphone
                                    className='h-4 w-4'
                                />
                                <span>9:16</span>
                            </div>

                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button
                disabled={loading}
                className='mt-5 w-full'
                onClick={onGenerate}
            >
                {loading ? <Loader2Icon
                    className='animate-spin'
                /> :

                    <Sparkles />
                }

                Generate</Button>
            <h2 className='mt-1 text-sm opacity-35 text-center'> 5 Credit to Generate</h2>


        </div>
    )
}

export default FormInput
