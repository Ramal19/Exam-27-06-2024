import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


export default function Edit() {

    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const [data, setData] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        axios.post("http://localhost:8000/users", { ...data, photo: image })
        .then(res=>{
            setImage(res.data)
            setData(res.data)
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
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="file" {...register("photo", { required: true })} onInput={(e) => base64(e.target.files[0])} defaultValue={data.photo} />
            {errors.photo && <span>Foto yuklenmiyib!</span>}
            {image && <img src={image} />}

            <input  {...register("name", { required: true })} defaultValue={data.name} />
            {errors.name && <span>Ad Daxil edilmeyib !</span>}


            <input {...register("content", { required: true })} defaultValue={data.content}/>
            {errors.content && <span>Contnet daxil edilmeyib !</span>}


            <input type="submit" />
        </form>
    )
}