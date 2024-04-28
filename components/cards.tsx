import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="min-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "CCN Lecture",
    description:
    "Chapters Covered: SMTP, Transport Layer, FTP, Client-Server",
    name:"Mansi Dhamne",
    link: "https://stripe.com",
  },
  {
    title: "CCN Lecture",
    description:
    "Chapters Covered: SMTP, Transport Layer, FTP, Client-Server",
    name:"Mansi Dhamne",
    link: "https://stripe.com",
  },
  {
    title: "CCN Lecture",
    description:
    "Chapters Covered: SMTP, Transport Layer, FTP, Client-Server",
    name:"Mansi Dhamne",
    link: "https://stripe.com",
  },
  {
    title: "CCN Lecture",
    description:
    "Chapters Covered: SMTP, Transport Layer, FTP, Client-Server",
    name:"Mansi Dhamne",
    link: "https://stripe.com",
  },

];
