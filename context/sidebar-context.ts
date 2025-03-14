import {
  Bell,
  BookOpen,
  Camera,
  Hash,
  LayoutDashboard,
  Settings2,
  TableOfContents,
  Tags,
  Users,
  UsersRound,
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
        },
        {
          title: "Discussions",
          url: "#",
        },
        {
          title: "Listings",
          url: "#",
        },
        {
          title: "Respeaks",
          url: "#",
        },
        {
          title: "Reactions",
          url: "#",
        },
        {
          title: "Comments",
          url: "#",
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
        },
        {
          title: "Links",
          url: "#",
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
        },
        {
          title: "Videos",
          url: "#",
        },
        {
          title: "Music",
          url: "#",
        },
        {
          title: "Podcasts",
          url: "#",
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
        },
        {
          title: "Notifications",
          url: "#",
        },
        {
          title: "Shares",
          url: "#",
        },
        {
          title: "Saved",
          url: "#",
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
        },
        {
          title: "Locations",
          url: "#",
        },
        {
          title: "Configuration",
          url: "#",
        },
      ],
    },
  ],
};
