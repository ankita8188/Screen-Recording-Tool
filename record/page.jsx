'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Record = () => {

    const chunks = [];

    let mediaRecorder = null;
// async is   asynchronous code write 
    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getDisplayMedia(
            { video: { mediaSource: "screen" }, audio: true }
        );

        // const deviceRecorder = new deviceRecorder(stream, { mimeType: "video/mp4" });
        // console.log(deviceRecorder);

        // console.log(stream);
        mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
        // console.log(mediaRecorder);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                chunks.push(event.data);
            }
        };
        // When recording stops, create a video blob and display it
        mediaRecorder.onstop = async () => {
            console.log(stream);

            const blob = new Blob(chunks, { type: "video/webm" });
            const videoURL = URL.createObjectURL(blob);
            console.log(videoURL);
            const a = document.createElement("a");
            a.href = videoURL;
            a.download = "screen-recording.webm";
            a.click();

            const formData = new FormData();
            formData.append('file', blob); // Add the video blob
            formData.append('upload_preset', 'Ankita'); // Replace with your Cloudinary upload preset
            formData.append('cloud_name', 'dtdbsaj3z'); // Replace with your Cloudinary upload preset

            try {
                // Send the video to Cloudinary via Axios
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/dtdbsaj3z/video/upload', // Replace with your Cloudinary URL
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data', // Set appropriate headers
                        }
                    }
                );

                // Log the Cloudinary response (contains the URL of the uploaded video)
                console.log('Video uploaded to Cloudinary:', response.data);
                const { url } = response.data;

                try {
                    const res = await axios.post('http://localhost:5000/record/add', {
                        title: prompt('Enter Video Title'),
                        file: url
                    });
                    toast.success('video uploaded successfully')
                } catch (error) {
                    toast.error('error uploading video');
                }

            } catch (error) {
                console.error('Error uploading video:', error);
            }

        }

        mediaRecorder.start();

    }// useEffect(() => {
    //     startRecording();
    // }, []);

    const stopRecording = () => {
        mediaRecorder.stop();
        console.log(mediaRecorder.stop);

    }

    return (
        <div className="bg-white text-black pb-6 sm:pb-8 lg:pb-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header className="mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
                    {/* logo - start */}
                  
                    {/* logo - end */}
                    {/* nav - start */}
                   
                    {/* nav - end */}
                    {/* buttons - start */}
                    
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Menu
                    </button>
                    {/* buttons - end */}
                </header>
                <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                    {/* content - start */}


                    <div className="sm:text-center lg:py-12 lg:text-left xl:py-24">
                        <p className="mb-8 text-4xl font-bold text- sm:text-5xl md:mb-12 md:text-6xl">
                            Screen Recording with  RecPro
                        </p>
                        <h1 className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                            Please Click "Capture Screen" button below to start capture your screen.
                        </h1>
                        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                            <button
                                onClick={startRecording}
                                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                            >
                                🎥 Capture Screen
                            </button>
                            <button onClick={stopRecording}
                                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                            >
                                🚫 Stop Screen
                            </button>
                        </div>
                    </div>
                    {/* social - start */}

                    {/* content - end */}
                    {/* image - start */}
                    <div className="h-28 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[70vh] xl:w-5/12">
                        <img
                            src="DALL·E 2024-12-09 19.24.27 - A modern and eye-catching hero section design for a screen recording software project. The image features a digital tablet and smartphone floating in .webp"
                            loading="lazy"
                            alt="Photo by Fakurian Design"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    {/* image - end */}
                </section>
            </div>
        </div>
    )
}

export default Record;