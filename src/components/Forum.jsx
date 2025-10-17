import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ajouter, fetchData } from "../store/GlobalSlice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { requireAuth } from "../services/requireAuth";


function Forum() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)
  const forum = useSelector((state) => state.allData.data.forum) || [];
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      setValue, 
    } = useForm();

    const onSubmit = (data) =>{
      const newMssge ={
      userId: user?.id,
      username: user?.nom +" "+user?.prenom,
      content: data.content,
      }
requireAuth(user, () => {
      dispatch(ajouter( {section: "forum",newItem :newMssge}))
      })
    }

  useEffect(() => {
    dispatch(fetchData("forum"));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Forum</h1>
        </header>
       <form
       onSubmit={handleSubmit(onSubmit)}
  className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md p-4 border border-gray-200 mt-6"
>
  <textarea
    placeholder="Écrivez votre message ici..."
    {...register("content", {
              required: "Le content est requis",
              minLength: { value: 3, message: "Min 3 caractères" },
            })}
    rows="4"
    className="w-full resize-none p-3 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
  ></textarea>
   {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
          )}

  <div className="flex justify-end mt-3">
    <button
      type="submit"
      className="bg-[#4b919e] hover:bg-[#ce6a6c] text-white px-6 py-2 rounded-lg font-medium transition"
    >
      Publier
    </button>
  </div>
</form>

   
          <main className="flex-1 m-10">

            
            <div className="space-y-6">
              {forum.map(thread => (
                <div 
                  key={thread.id} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                 
  <div className="flex items-center">
    <div className="w-10 h-10 bg-gradient-to-r from-[#ce6a6c] to-[#eaada2] rounded-full flex items-center justify-center text-white font-bold mr-3">
      {thread?.username.split(' ').map(name => name[0]).join('')}
    </div>
    <div>
      <span className="text-gray-700 font-medium block">{thread.username}</span>
    </div>
  </div>
  {thread.isNew && (
    <div className="px-2.5 py-0.5 rounded-full text-xs font-m edium bg-green-100 text-green-800">
      New
    </div>
  )}

                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{thread.content}</h3>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">{thread.username}</span>
                    <span className="mx-2">•</span>
                    <span>{thread.createdAt}</span>
                    <span className="mx-2">•</span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
   
  );
};

export default Forum;