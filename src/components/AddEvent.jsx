import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ajouter, fetchData } from "../store/GlobalSlice";

function AddEvent() {
  
  const dispatch = useDispatch();
  const sectors = useSelector((state) => state.allData.data.sectors || [])

  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue, 
  } = useForm();

  useEffect(() => {
    dispatch(fetchData("sectors"));

  }, [dispatch]);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageFile(file); 
    
      if (errors.image) {
        setValue("image", file);
      }
    }
  };

  const onSubmit = (data) => {
 
    const eventData = {
      titre: data.titre,
      ville: data.ville,
      date: data.date,
      place: data.place,
      description: data.description,
      image: imagePreview || startup.image || "default.jpg",
    };

      dispatch(ajouter({ section: "evenements", newItem: eventData }));
      console.log("Ajout :", eventData);

    reset();
    setImagePreview(null);
    setImageFile(null); 
  };

  return (
    <div className=" rounded-xl shadow-lg w-full max-w-2xl mx-auto p-10">
      <h2 className="text-2xl font-bold text-center text-[#222e53] mb-8">
        Ajouter un événement
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Titre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Titre d'événement"
            {...register("titre", {
              required: "Le titre est requis",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          />
          {errors.titre && (
            <p className="text-red-500 text-sm mt-1">{errors.titre.message}</p>
          )}
        </div>

    <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            ville <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ville d'événement"
            {...register("ville", {
              required: "Le ville est requis",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          />
          {errors.ville && (
            <p className="text-red-500 text-sm mt-1">{errors.ville.message}</p>
          )}
        </div>


        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register("date", { required: "La date est requise" })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>


<div>
          <label className="block text-[#222e53] font-semibold mb-2">
            place <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Place d'événement"
            {...register("place", {
              required: "Le place est requis",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          />
          {errors.place && (
            <p className="text-red-500 text-sm mt-1">{errors.place.message}</p>
          )}
        </div>

        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Décrivez votre startup"
            {...register("description", {
              required: "La description est requise",
              minLength: { value: 10, message: "Min 10 caractères" },
            })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Logo  <span className="text-red-500">*</span>
          </label>
          <label
            htmlFor="imageUpload"
            className="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-md py-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            {imagePreview ? (
              <div className="flex flex-col items-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg shadow-md mb-2"
                />
                <span className="text-[#222e53]">Cliquer pour changer l'image</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <FaCloudUploadAlt size={30} className="text-[#222e53] mb-2" />
                <span className="text-[#222e53] font-medium">
                  Cliquez pour choisir une image
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  Formats supportés: JPG, PNG, GIF
                </span>
              </div>
            )}
          </label>

          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-[#222e53] text-white font-semibold hover:bg-indigo-500 transition-colors"
        >
         Ajouter
        </button>
      </form>
    </div>
  );
}

export default AddEvent
