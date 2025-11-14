import React, { useState } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
function UsersAdsList() {
    const [adsList, setAdsList] = useState([]);

    return (
        <div>
            {adsList?.length == 0 &&
                <div className='p-5 border-dashed border-2 rounded-2xl flex flex-col items-center justify-between mt-6 gap-3'>
                    <Image src={'/signboard.png'} alt='empty'

                        width={200}
                        height={200}
                        className='max-w-20' 
                        />
                        <h2>Sie haben keine Anzeigen erstellt.</h2>
                        <Button> Neue Anzeigen erstellen</Button>
                </div>
            }

        </div>
    )
}

export default UsersAdsList
