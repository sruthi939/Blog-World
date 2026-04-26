require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const blog_data = [
    {
        "title": "A detailed step by step guide to manage your lifestyle",
        "description": "<h1>A Simple Step-by-Step Guide to Managing Your Lifestyle</h1><p>If you're looking to improve your health, boost productivity, and create a balanced life, managing your lifestyle intentionally is key. Here's a short guide to help you take control of your daily habits and overall well-being.</p><h2>1. Assess Your Current Lifestyle</h2><p>Track your habits for a week. Note your energy levels, sleep, diet, and daily routines. Reflect on what's working and what needs change.</p><h2>2. Focus on Health</h2><p>Eat balanced meals, stay hydrated, get enough sleep, and move your body daily. Mental health matters too—set boundaries and practice mindfulness.</p>",
        "category": "Lifestyle",
        "image": "blog_pic_1",
        "isPublished": true,
        "subTitle": "A Simple Step-by-Step Guide to Managing Your Lifestyle"
    },
    {
        "title": "How to create an effective startup roadmap or ideas",
        "description": "<p>\tCreating an effective <strong>startup roadmap</strong> helps you turn an idea into a structured, actionable plan. It gives clarity on what to build, when to build it, and how to scale. Here's a short and practical guide to help you build your startup roadmap or refine your startup ideas:</p><h2>1. <strong>Start with the Problem, Not the Product</strong></h2><ol><li data-list=\"bullet\">Identify a real, painful problem.</li><li data-list=\"bullet\">Validate that it affects a significant audience.</li><li data-list=\"bullet\">Ask: “Is this a must-have or just nice to have?”</li></ol><p><strong>Tip:</strong> Talk to real users, not just friends or family.</p>",
        "category": "Startup",
        "image": "blog_pic_2",
        "isPublished": true,
        "subTitle": "Creating an effective startup roadmap"
    },
    {
        "title": "Learning new technology to boost your career in software",
        "description": "<h1>Learning New Tech to Boost Your Software Career</h1><p>In tech, staying still means falling behind. Here's how learning new technologies can fast-track your software career:</p><h2>1. <strong>Stay Relevant</strong></h2><p>Tech evolves fast. Learning modern tools, frameworks, or languages keeps you valuable to employers and clients.</p><h2>2. <strong>Increase Opportunities</strong></h2><p>New skills open doors—whether it's switching to a better role, freelancing, or launching your own product.</p>",
        "category": "Technology",
        "image": "blog_pic_3",
        "isPublished": true,
        "subTitle": "Learning New Tech to Boost Your Software Career"
    },
    {
        "title": "Tips for getting the most out of apps and software",
        "description": "<h1>Tips for Getting the Most Out of Apps and Software</h1><p>We use tons of apps daily—but most people only scratch the surface. Here's how to truly unlock their value:</p><h2>1. <strong>Learn the Shortcuts</strong></h2><p>Keyboard shortcuts or gesture controls save time and improve your workflow.</p><h2>2. <strong>Explore All Features</strong></h2><p>Take time to go beyond the basics—many apps have hidden tools that boost productivity.</p>",
        "category": "Technology",
        "image": "blog_pic_4",
        "isPublished": true,
        "subTitle": "Tips for Getting the Most Out of Apps and Software"
    },
    {
        "title": "Enhancing your skills and capturing memorable moments",
        "description": "<h1>Enhancing Your Skills and Capturing Memorable Moments</h1><p>In today's fast-paced world, personal growth and preserving memories go hand in hand. Here's how to do both meaningfully:</p><h2>1. <strong>Invest in Skill Building</strong></h2><ol><li data-list=\"bullet\">Set clear learning goals</li><li data-list=\"bullet\">Practice consistently through real projects</li></ol>",
        "category": "Lifestyle",
        "image": "blog_pic_5",
        "isPublished": true,
        "subTitle": "Enhancing Your Skills and Capturing Memorable Moments"
    },
    {
        "title": "Maximizing returns by minimizing resources in your startup",
        "description": "<h1>Maximizing Returns by Minimizing Resources in Your Startup</h1><p>Startups thrive not by having the most, but by using the least for the most impact. Here's how to do more with less:</p><h2>1. <strong>Focus on Core Value</strong></h2><p>Build only what solves the main problem. Avoid bloated features early on.</p>",
        "category": "Startup",
        "image": "blog_pic_6",
        "isPublished": true,
        "subTitle": "Maximizing Returns by Minimizing Resources in Your Startup"
    },
    {
        "title": "Taxes on Luxury Houses",
        "description": "<h2>Luxury Home Taxes: Are They Fair, and What Do They Mean for the Market?</h2><p>Luxury homes. The pinnacle of real estate, often boasting breathtaking views, lavish amenities, and price tags that make your eyes water. But with great wealth comes great responsibility... and in this case, that includes taxes. But are taxes on luxury homes fair?</p>",
        "category": "Finance",
        "image": "blog_pic_7",
        "isPublished": true,
        "subTitle": "What Do They Mean for the Market?"
    },
    {
        "title": "The New Way of Study",
        "description": "<h2>The New Way of Study: Ditching the Old, Embracing the Now</h2><p>For years, the image of studying has been synonymous with late nights, stacks of textbooks, and the constant pressure to memorize. But let's face it: that traditional approach is often ineffective, stressful, and frankly, outdated.</p>",
        "category": "Finance",
        "image": "blog_pic_8",
        "isPublished": true,
        "subTitle": "The New Way of Study: Ditching the Old"
    },
    {
        "title": "Importance of Tourism",
        "description": "<h2>Beyond Postcards: Why Tourism Matters More Than You Think</h2><p>Tourism. The word conjures up images of sun-drenched beaches, historical landmarks, and exotic adventures. But beyond the beautiful photos and unforgettable experiences, tourism is a powerhouse.</p>",
        "category": "Lifestyle",
        "image": "blog_pic_9",
        "isPublished": true,
        "subTitle": "Why Tourism Matters More Than You Think"
    },
    {
        "title": "AI best practices in healthcare",
        "description": "<h2>AI Best Practices in Healthcare: Navigating the Future Responsibly</h2><p>Artificial Intelligence (AI) is rapidly transforming healthcare, promising to revolutionize everything from diagnosis and treatment to patient care and operational efficiency.</p>",
        "category": "Technology",
        "image": "blog_pic_10",
        "isPublished": true,
        "subTitle": "Navigating the Future Responsibly"
    }
];

mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/blogworld')
.then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Blog.deleteMany({});
    console.log('Cleared existing blogs.');
    
    // Insert new data
    await Blog.insertMany(blog_data);
    console.log('Successfully seeded database with fair data!');
    
    process.exit();
}).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});
