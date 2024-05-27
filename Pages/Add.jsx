import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Bounce, toast } from "react-toastify"
import './Add.scss'


export default function Add() {

    const [image, setImage] = useState(null)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        axios.post("http://localhost:8000/users", { ...data, photo: image })
            .then(res => {
                toast.success('Data ugurla yuklendi!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                res.data
            })
        navigate('/')
    }


    const base64 = (file) => {

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result)
        }
    }



    return (
        <div className="display">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="file" {...register("photo", { required: true })} onInput={(e) => base64(e.target.files[0])} />
                {errors.photo && <span>Foto yuklenmiyib!</span>}
                {image && <img style={{width: '100px', height: '100px'}} src={image} />}

                <input  {...register("name", { required: true })} />
                {errors.name && <span>Ad Daxil edilmeyib !</span>}


                <input {...register("content", { required: true })} />
                {errors.content && <span>Contnet daxil edilmeyib !</span>}


                <input type="submit" />
            </form>
        </div>
    )
}