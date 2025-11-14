import { imagekit } from "@/lib/imagekit";
import { clientOpenAi } from "@/lib/openai";
import { NextRequest, NextResponse } from "next/server";


// const PROMPT = `Return your response as plain JSON only, without any markdown formatting or code blocks. Write name of primeminister of india in one word and return as: {"textOutput": "name"}`;
// const PROMPT = `Create a vibrant product showcase image featuring the uploaded product in the center, surrounded by dynamic splashes of liquid or related elements that represent the product's use. Use a clean, colorful background to make the product stand out. Ensure the product is well-lit and in sharp focus, with reflections and highlights that enhance its appeal. The overall composition should be energetic and eye-catching, conveying a sense of freshness and vitality that attracts attention.

// Also provide me with image to video prompts for the same in JSON format: {textToImage: "", imageToVideo: ""}`;

const promtai = `Create a vibrant product showcase image featuring a uploaded image in the center, surrounded by dynamic splashes of liquid or relevant material that complement the product.Use a clean, colorful background to make the product stand out. Include subtle elements to the product't flavour,ingredients, or theme floating to add context and visual interest.ensure the product is sharp and in focus , with motion and energy conveyed through splash effects,Also give me image to video prompt for same in JSON format:{textToImage:'',imageToVidoe:''}`

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const description = formData.get('description');
    const size = formData?.get('size');


    const arrayBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString('base64');
    const imageKitRef = await imagekit.upload({
        file: base64File,
        fileName: Date.now() + ".png",
        isPublished: true

    })
    console.log(imageKitRef.url)

    // promt using description and size to generate image using openai
    const response = await clientOpenAi.responses.create({
        model: "gpt-4.1-mini",
        // model: "gpt-image-1",

        input: [

            //@ts-ignore
            {
                role: "user",
                content: [
                    {
                        type: "input_text",
                        text: promtai,
                    },
                    {
                        type: "input_image",
                        image_url: imageKitRef.url!,
                    },
                ],
            },
        ],
    });

    

    const textOutput = response.output_text?.trim();
console.log(response.output_text);

// Fix JSON parsing - extract JSON from text if needed
let json;
try {
    json = JSON.parse(textOutput);
} catch (error) {
    // If direct parsing fails, try to extract JSON from the text
    const jsonMatch = textOutput.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
        json = JSON.parse(jsonMatch[0]);
    } else {
        // Fallback if no JSON found
        json = { textToImage: textOutput, imageToVideo: "" };
    }
}

console.log(json);




    // Generate product image - CORRECTED VERSION
    const ImageResponse = await clientOpenAi.responses.create({
        model: 'gpt-4.1-mini',
        // model: "gpt-image-1",

        max_output_tokens: 500,
        input: [
            {
                role: 'user',
                content: [
                    {
                        //@ts-ignore
                        type: 'input_text',
                        text: json?.textToImage ,
                    },
                    {
                        //@ts-ignore

                        type: 'input_image',
                        image_url: imageKitRef.url,
                    }
                ],
            }
        ],
        tools: [
            {
                type: 'image_generation',
            }
        ]
    });

    console.log(ImageResponse.output);

    const imageData = ImageResponse.output?.
        filter((item: any) => item.type === 'image_generation_call').
        map((item: any) => item.result);

    const generatedImage = imageData[0] //base64 image

    //upload image to imagekit
    const uploadedImage = await imagekit.upload({
        file: `data:image/png;base64,${generatedImage}`,
        fileName: Date.now() + '.png',
        isPublished: true,
    })

    // save to database 


    return NextResponse.json(uploadedImage?.url);

}