import {
  Bell,
  Bookmark,
  BookOpen,
  Calendar,
  Camera,
  EyeOff,
  FileText,
  FileWarning,
  Hash,
  Image,
  LayoutDashboard,
  Link,
  List,
  MapPin,
  MessageCircle,
  MessageSquare,
  Music,
  Podcast,
  Repeat,
  Search,
  Settings,
  Settings2,
  Share2,
  Smile,
  TableOfContents,
  UsersRound,
  Video,
} from "lucide-react";

export const SIDEBAR_DATA = {
  user: {
    name: "Your Speak",
    email: "admin@gmail.com",
    avatar: "/icons/logo.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Users",
          url: "/",
          icon: UsersRound,
        },
        {
          title: "Tags",
          url: "/tags",
          icon: Hash,
        },
        {
          title: "Reports",
          url: "/reports",
          icon: FileWarning,
        },
      ],
    },
    {
      title: "Content Management",
      url: "#",
      icon: TableOfContents,
      items: [
        {
          title: "Posts",
          url: "/posts",
          icon: FileText,
        },
        {
          title: "Discussions",
          url: "#",
          icon: MessageSquare,
        },
        {
          title: "Listings",
          url: "#",
          icon: List,
        },
        {
          title: "Respeaks",
          url: "#",
          icon: Repeat,
        },
        {
          title: "Reactions",
          url: "#",
          icon: Smile,
        },
        {
          title: "Comments",
          url: "#",
          icon: MessageCircle,
        },
      ],
    },
    {
      title: "Search & Links",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Searching",
          url: "#",
          icon: Search,
        },
        {
          title: "Links",
          url: "#",
          icon: Link,
        },
      ],
    },
    {
      title: "Media",
      url: "#",
      icon: Camera,
      items: [
        {
          title: "Photos",
          url: "#",
          icon: Image,
        },
        {
          title: "Videos",
          url: "#",
          icon: Video,
        },
        {
          title: "Music",
          url: "#",
          icon: Music,
        },
        {
          title: "Podcasts",
          url: "#",
          icon: Podcast,
        },
      ],
    },
    {
      title: "Engagement",
      url: "#",
      icon: Bell,
      items: [
        {
          title: "Events",
          url: "#",
          icon: Calendar,
        },
        {
          title: "Notifications",
          url: "#",
          icon: Bell,
        },
        {
          title: "Shares",
          url: "#",
          icon: Share2,
        },
        {
          title: "Saved",
          url: "#",
          icon: Bookmark,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Hidden",
          url: "#",
          icon: EyeOff,
        },
        {
          title: "Locations",
          url: "#",
          icon: MapPin,
        },
        {
          title: "Configuration",
          url: "#",
          icon: Settings,
        },
      ],
    },
  ],
};
