import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AiToolsList() {

  const AiTools=[
    {
  name: 'KI-Produktbilder',
  desc: 'Erstellen Sie sofort hochwertige, professionelle Produktbilder mit KI',
  bannerImage: '/product-image.png',
  path: '/creative-ai-tools/product-images',
},
{
  name: 'KI-Produktvideos',
  desc: 'Erstellen Sie ansprechende Produkt-Showcase-Videos mit KI',
  bannerImage: '/product-video.png',
  path: '/creative-ai-tools/product-videos',
},
{
  name: 'Produkte mit KI-Avatar',
  desc: 'Erwecken Sie Ihre Produkte mit KI-Avataren zum Leben',
  bannerImage: '/product-avatar.png',
  path: '/creative-ai-tools/product-avatar',
},


  ]
    
  return (
    <div>
      <h2 className='font-bold text-2xl mb-2'> Kreative KI-Tools</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {AiTools.map((tool,index)=>(
          <div key={index} className='flex
           items-center justify-between p-7 bg-zinc-800 rounded-2xl'>
            <div>
              <h2 className='font-bold text-2xl'>{tool.name}</h2>
              <p className='opacity-60 mt-2'>{tool.desc}</p>
               <Link href={tool.path}>
               
               <Button className='mt-4'>Jetzt erstellen</Button>
               </Link>

            </div>
            <Image src={tool.bannerImage} alt={tool.name}
            width={300}
            height={300}
            className='w-[200px]'
            />

          </div>

        ))}
      </div>
    </div>
  )
}

export default AiToolsList

