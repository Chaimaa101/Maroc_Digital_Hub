import React from 'react'

function Addevents() {
  
  return (

      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg max-h-[90vh] p-6 relative overflow-y-auto">

        <h2 className="text-xl font-bold text-[#764613] mb-4">
      Ajouter un événement
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Titre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="titre"
              placeholder="Ajouter un titre"
              required
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="ville"
              placeholder="Ajouter une ville"
              required
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613]"
            />
          </div>

          <div>
            <label className="block text-[#764613] font-semibold mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              name="description"
              placeholder="Ajouter une description"
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#764613]"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="imageUpload"
              className="w-full flex flex-col items-center justify-center border-2 border-dashed rounded-md py-4 cursor-pointer"
            >
              {/* {imagePreview ? ( */}
                <div className="flex flex-col items-center">
                  {/* <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-2"
                  />
                  <span className="text-[#763613]">Image sélectionnée</span> */}
                </div>
              {/* ) : ( */}
                <div className="flex flex-col items-center">
                  <FaCloudUploadAlt size={30} className="text-[#763613] mb-2" />
                  <span className="text-[#763613] font-medium">
                    Cliquez pour choisir une image
                  </span>
                  <span className="text-gray-500 text-sm mt-1">
                    Formats supportés: JPG, PNG, GIF
                  </span>
                </div>
              {/* )} */}
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-[#764613] text-white font-semibold hover:bg-[#895525] transition-colors"
          >
           Publier
          </button>
        </form>
      </div>
  )
}

export default Addevents
