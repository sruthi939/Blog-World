const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Blog = require('./models/Blog');
const Category = require('./models/Category');
const Comment = require('./models/Comment');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/blogworld';

const seedData = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing data
        await User.deleteMany({});
        await Blog.deleteMany({});
        await Category.deleteMany({});
        await Comment.deleteMany({});

        // Create Fair User (Editor)
        const hashedPassword = await bcrypt.hash('password123', 12);
        const editor = await User.create({
            name: 'Sruthi Alex',
            email: 'sruthi.alex@blogworld.com',
            password: hashedPassword,
            role: 'admin',
            bio: 'Chief Editorial Director with over 10 years of experience in technical journalism and digital media strategy.'
        });

        // Create Fair Author
        const authorPassword = await bcrypt.hash('author123', 12);
        const authorUser = await User.create({
            name: 'Dr. James Wilson',
            email: 'james.wilson@blogworld.com',
            password: authorPassword,
            role: 'writer',
            bio: 'Lead AI Researcher and Technical Author. Specializing in neural architectures and the ethical implications of autonomous systems.'
        });

        // Create Categories
        const categories = await Category.insertMany([
            { name: 'Technology', slug: 'technology' },
            { name: 'Finance', slug: 'finance' },
            { name: 'Lifestyle', slug: 'lifestyle' },
            { name: 'AI Research', slug: 'ai-research' },
            { name: 'DevOps', slug: 'devops' }
        ]);

        // Create Fair Blogs
        const blogs = await Blog.insertMany([
            {
                title: 'The Silent Revolution: AI in 2026',
                description: 'The rapid advancement of artificial intelligence is no longer just a trend—it\'s a fundamental shift in how we perceive technology.',
                category: 'AI Research',
                author: editor._id,
                isPublished: true,
            },
            {
                title: 'Quantum Computing in Modern Finance',
                description: 'As we delve deeper into the 21st century, the intersection of quantum physics and financial modeling is creating unprecedented opportunities.',
                category: 'Finance',
                author: authorUser._id,
                isPublished: true,
            },
            {
                title: 'Next-Gen Neural Architectures',
                description: 'A deep dive into the latest breakthroughs in transformer-based models and their application in real-time edge computing.',
                category: 'AI Research',
                author: authorUser._id,
                isPublished: false, // Draft for author
            },
            {
                title: 'The Ethics of Autonomous Coding',
                description: 'As AI agents begin to write the very software they run on, where do we draw the line between developer and tool?',
                category: 'Technology',
                author: authorUser._id,
                isPublished: true,
            }
        ]);

        // Create Comments
        await Comment.insertMany([
            {
                content: 'This is a very insightful article on AI. Looking forward to the next part!',
                user: editor._id,
                blog: blogs[0]._id
            }
        ]);

        console.log('Database seeded successfully with Fair Data!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedData();
