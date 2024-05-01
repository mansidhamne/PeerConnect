import Image from "next/image";
import { FollowerPointerCard } from "../components/ui/following-pointer";
import imagetoadd from "../public/image.png"
interface BlogContent {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  authorAvatar: string;
  faculty: string;
  syllabus: string
}

interface Props {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  authorAvatar: string;
  faculty:string;
  syllabus:string;
}

export function FollowingPointerDemo({
  slug,
  author,
  date,
  title,
  description,
  image,
  faculty,
  syllabus
}: Props) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={author}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {title}
            </h2>
            <div className="flex items-center gap-3">
            
            <h3 className="font-bold my-4 text-lg text-zinc-700">
             Faculty: {faculty}
            </h3>
            </div>
            <div className="flex justify-between items-center">
            <h2 className="font-normal my-4 text-sm text-cyan-500">
              {description}
            </h2>
            
              <span className="text-sm text-gray-500">{date}</span>
              
            </div>
            <div>
              {syllabus}
            </div>
           
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

const TitleComponent = ({
  title,
  
}: {
  title: string;
  
}) => (
  <div className="flex space-x-2 items-center">
    <p>{title}</p>
  </div>
);