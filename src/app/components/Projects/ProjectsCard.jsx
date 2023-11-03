import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ProjectsCard({ imgSrc, title, description, link, video }) {
  return (
    <div className="h-full">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group mt-2"
        style={{ background: `url(${imgSrc})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={link}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={video}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-[#ADB7BE] cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl  bg-[#181818] py-16 px-4 md:h-3/4 ">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}

export default ProjectsCard;
