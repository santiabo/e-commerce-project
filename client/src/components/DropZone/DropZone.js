import React from 'react';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
//import { Image } from 'cloudinary-react';
import styles from './styles.css'
const CLOUDINARY_NAME = 'gonzaloaguilarm'
const CLOUDINARY_UPDATE_PRESET = 'hd3ecfgr'


const DropZone = () => {
  const [imageUploaded,setImageUploaded]=useState(false)

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;

    acceptedFiles.forEach(async(acceptedFiles) => {
      const formData = new FormData();
      formData.append("file", acceptedFiles);
      formData.append("upload_preset",
      CLOUDINARY_UPDATE_PRESET
      );

      const response = await fetch(url,{
        method:"post",
        body:formData, 
      });
      const data = await response.json();
      console.log(data.url)
      if(data.url){
        setImageUploaded(true)
      }
    });
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accepts: "image/*",
    multiple: false
  })

  return (
    <>
      <div {...getRootProps()} className={`${styles.dropzone}${isDragActive ? styles.active : null}`}>
        <input {...getInputProps()} />
        {imageUploaded? <span>Image Uploaded</span> : <span>Drop your image here</span>}
      </div>

    </>
  )
}
export default DropZone;