import Image from "next/image";
import Web from "@/public/agence-web.webp"
export default function ProPos2(){
    return(
        <div className="flex flex-col pt-10">
          <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
          <div className="flex items-center gap-4 mb-4">
          <p className="ml-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, maiores! Doloribus eos dolore ullam deserunt, dolorum eveniet eum unde, omnis assumenda nesciunt sed adipisci fugit repellat quam sapiente dolor eius!
              </p>
            <Image 
              src={Web}
              alt="Image de l'histoire"
              width={500}
              height={400}
              
              className="rounded-lg"
            />
            
            
          </div>
        </div>

        
    )
}