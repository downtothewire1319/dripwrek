"use client"
import React, { useState } from 'react'
import PreviewResults from '../_componets/PreviewResults'
import FormInput from '../_componets/FormInput'
import axios from 'axios'

type FormData = {
  file: File | undefined,
  description: string,
  size: string,
  imageUrl?: string,
}

function ProductPage() {
  const [formdata, setFormData] = useState<FormData>();
  const [loading, setLoading] = useState(false);

  const onHandleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => (
      {
        ...prev,
        [field]: value,
      }

    ))
  }
  const onGenerate = async () => {
    if (!formdata?.file || formdata?.imageUrl) {
      alert('Please upload Product Image');
      return;

    }
    // if (formdata?.description || formdata?.size) {
    //   alert('Enter all fields');
    //   return;

    // }
    setLoading(true);

    const formdata_ = new FormData();
    formdata_.append('file', formdata?.file);
    formdata_.append('description', formdata?.description ?? '');
    formdata_.append('size', formdata?.size ?? '1024x1024');

    // Make Api Call
    const result = await axios.post('/api/generate-product-image', formdata_)
    console.log(result.data)
    setLoading(false);
  }


  return (
    <div>
      <h2 className='font-bold text-2xl mb-3'> AI Product Image Generator</h2>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
          <FormInput
            onHandleInputChange={(field: string, value: string) => onHandleInputChange(field, value)}
            onGenerate={onGenerate}
            loading={loading}
          />
        </div>
        <div className='md:grid-cols-2'>
          <PreviewResults />
        </div>

      </div>
    </div>
  )
}

export default ProductPage
