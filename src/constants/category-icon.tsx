import {
  KeyboardIcon,
  MonitorIcon,
  HeadphonesIcon,
  SpeakerIcon,
  MouseIcon,
  ComputerIcon,
  Clock10Icon,
  CameraIcon,
  Tv2Icon,
  SofaIcon,
} from "lucide-react";

export const CATEGORY_ICON = {
  teclados: <KeyboardIcon size={16} />,
  monitores: <MonitorIcon size={16} />,
  fones: <HeadphonesIcon size={16} />,
  audio: <SpeakerIcon size={16} />,
  mouses: <MouseIcon size={16} />,
  notebooks: <ComputerIcon size={16} />,
  wearables: <Clock10Icon size={16} />,
  cameras: <CameraIcon size={16} />,
  consoles: <Tv2Icon size={16} />,
  cadeiras: <SofaIcon size={16} />,
  smartphones: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12" y2="18"></line>
    </svg>
  ),
  televisores: <Tv2Icon size={16} />,
  impressoras: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="4" y="2" width="16" height="8"></rect>
      <rect x="4" y="14" width="16" height="8"></rect>
      <line x1="14" y1="6" x2="14" y2="18"></line>
      <line x1="10" y1="6" x2="10" y2="18"></line>
    </svg>
  ),
  tablets: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12" y2="18"></line>
    </svg>
  ),
};
