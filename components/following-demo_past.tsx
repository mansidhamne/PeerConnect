import Image from "next/image";
import { FollowerPointerCard } from "../components/ui/following-pointer";
import imagetoadd from "../public/image.png"
import { FollowerPointerCardPast } from "./ui/following-pointer_past";
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
  description1:string;
  description2:string;
  date2:string;
  date1:string;
  description3:string;
  date3:string;
  description4:string;
  date4:string;
}

export function FollowingPointerDemoPast({
  slug,
  author,
  date,
  title,
  description1,
  description2,
  date2,
  date1,
  description3,
  date3,
  description4,
  date4,
  image,
  authorAvatar,
  faculty,
  syllabus
}: Props) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCardPast
        title={
          <TitleComponent
            title={author}
            avatar={authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src="/image.png"
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {title}
            </h2>
            
            <Image
      src={authorAvatar}
      height="20"
      width="20"
      alt="avatar"
      className="rounded-full border-2 border-white"
    />       <div>
            <div className="flex justify-between items-center">
            <h2 className="font-normal my-4 text-sm text-cyan-500">
              {description1}
            </h2>
            
              <span className="text-sm text-gray-500">{date1}</span>
              
            </div>
            <div className="flex justify-between items-center">
            <h2 className="font-normal my-4 text-sm text-cyan-500">
              {description2}
            </h2>
            
              <span className="text-sm text-gray-500">{date2}</span>
              </div>
            <div className="flex justify-between items-center">
            <h2 className="font-normal my-4 text-sm text-cyan-500">
              {description3}
            </h2>
            
              <span className="text-sm text-gray-500">{date3}</span>
              
            </div>
            <div className="flex justify-between items-center">
            <h2 className="font-normal my-4 text-sm text-cyan-500">
              {description4}
            </h2>
            
              <span className="text-sm text-gray-500">{date4}</span>
              </div>
              
            
            </div>
           
          </div>
        </div>
      </FollowerPointerCardPast>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="avatar"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);