import { FaHome, FaUserFriends, FaBookReader, FaHourglassHalf } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
import { SiBookstack } from "react-icons/si";

export const SidebarLinks = [
    {
        id: 'home',
        title: "Home",
        icon: <FaHome/>
    },
    // {
    //     id: 'community',
    //     title: "Communities",
    //     icon: <FaUserFriends />
    // },
    {
        id: 'studyroom',
        title: "Study Room",
        icon: <FaBookReader />
    },
    {
        id: 'studygpt',
        title: 'StudyGPT',
        icon: <RiRobot3Fill />
    },
    {
        id: 'resources',
        title: 'Resources',
        icon: <SiBookstack />
    },
    {
        id: 'progress',
        title: 'Progress',
        icon: <FaHourglassHalf />
    }
]