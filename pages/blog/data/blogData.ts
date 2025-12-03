export interface Author {
  name: string;
  bio: string;
  image: string; // URL for the author's image
}

// Defines the structure for a content block in the article body.
export interface Block {
  type: "h2" | "h3" | "p"; // Type is explicitly limited to what renderContent handles
  content: string;
}

export interface Post {
  title: string;
  description: string;
  slug: string;
  image: string; // URL for the article's hero image
  link: string; // e.g., /blog/listen-to-your-body
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  author: Author;
  body: Block[]; // Array of structured content blocks
}

const blogPosts = [
  {
    title:
      "How to Listen to Your Body: Understanding Hunger, Cravings & Fullness",
    slug: "listen-to-your-body",
    description:
      "Learn how to tune into your body's natural signals and make mindful choices that support your well-being.",
    image: "/placeholder.png",
    link: "/blog/listen-to-your-body",
    date: "April 10, 2025",
    readTime: "5 mins",
    likes: 124,
    comments: 18,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "Integrative Nutrition: A New Way of Life",
    slug: "integrative-nutrition",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "/blog/integrative-nutrition",
    date: "April 11, 2025",
    readTime: "4 mins",
    likes: 24,
    comments: 8,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "How to Successfully Navigate Parties",
    slug: "how-to-navigate-parties",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "/blog/how-to-navigate-parties",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "Truth Behind Health and Wellness Myths",
    slug: "truth-behind-health-myths",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "/blog/truth-behind-health-myths",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "Nutrition & Healthy Eating Foods",
    slug: "nutrition-healthy-eating",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "/blog/nutrition-healthy-eating",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "Women’s Health & Hormonal Balance",
    slug: "womens-health-hormonal-balance",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "/blog/womens-health-hormonal-balance",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "Mindfulness & Mental Health",
    slug: "mindfulness-mental-health",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "/blog/mindfulness-mental-health",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "Health Coaching & Personal Growth",
    slug: "health-coaching-personal-growth",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/placeholder.png",
    link: "/blog/health-coaching-personal-growth",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "Meal Prep for a Stress-Free Week",
    slug: "meal-prep-stress-free-week",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "/blog/meal-prep-stress-free-week",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
  {
    title: "How to Enjoy Food Without Guilt",
    slug: "how-to-enjoy-food-without-guilt",
    description:
      "Integrative nutrition combines the principles of traditional nutrition guidelines and functional nutrition",
    image: "/blogimg.png",
    link: "/blog/how-to-enjoy-food-without-guilt",
    date: "April 12, 2025",
    readTime: "5 mins",
    likes: 194,
    comments: 68,
    body: [
      { type: "h2", content: "Understanding Your Hunger" },
      {
        type: "p",
        content:
          "Learning to listen to your body starts with tuning into its natural hunger signals. Paying attention to when and why you feel hungry helps you make choices that support your energy and wellbeing.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
      { type: "h3", content: "Types of Hunger" },
      {
        type: "p",
        content:
          "Physical hunger and emotional hunger feel different. Recognizing the cues helps you respond appropriately — whether that means nourishing your body or addressing an emotional need.",
      },
    ],
    author: {
      name: "Coach Amibibola",
      bio: "Certified Integrative Nutrition Health Coach helping others discover their path to wellness through personalized coaching and education",
      image: "/training/mark.png",
    },
  },
];

export default blogPosts;
