import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ajouter, fetchData } from "../store/GlobalSlice";
import { useNavigate } from "react-router-dom";

function AddStartup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sectors = useSelector((state) => state.allData.data.sectors || []);
  const { user } = useSelector((state) => state.auth);

  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // 🟡 Fetch sectors when the component loads
  useEffect(() => {
    dispatch(fetchData("sectors"));
  }, [dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setValue("image", file);
    }
  };

  const onSubmit = (data) => {
    const startupData = {
      name: data.name,
      sectorId: data.sector,
      date: data.date,
      description: data.description,
      ville: data.ville,
      ownerId: user.id,
      image: imagePreview || "default.jpg",
    };

    dispatch(ajouter({ section: "startups", newItem: startupData }));
    reset();
    setImagePreview(null);
    navigate("/startups");
  };

  return (
    <div className="rounded-xl shadow-lg w-full max-w-2xl mx-auto p-10">
      <h2 className="text-2xl font-bold text-center text-[#222e53] mb-8">
        Ajouter une Startup
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* NOM */}
        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Nom de la startup"
            {...register("name", {
              required: "Le nom est requis",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* SECTEUR */}
        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Secteur <span className="text-red-500">*</span>
          </label>
          <select
            {...register("sector", { required: "Le secteur est requis" })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          >
            <option value="">-- Choisir un secteur --</option>
            {sectors.map((s) => (
              <option key={s.id} value={s.id}>
                {s.titre}
              </option>
            ))}
          </select>
          {errors.sector && (
            <p className="text-red-500 text-sm mt-1">{errors.sector.message}</p>
          )}
        </div>

        {/* VILLE */}
        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Ville <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ville de la startup"
            {...register("ville", {
              required: "La ville est requise",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#222e53]"
          />
          {errors.ville && (
            <p className="text-red-500 text-sm mt-1">{errors.ville.message}</p>
          )}
        </div>

        {/* DESCRIPTION */}
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

        {/* IMAGE */}
        <div>
          <label className="block text-[#222e53] font-semibold mb-2">
            Logo <span className="text-red-500">*</span>
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
                <span className="text-[#222e53]">
                  Cliquer pour changer l'image
                </span>
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
        </div>

        {/* SUBMIT BUTTON */}
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

export default AddStartup;
