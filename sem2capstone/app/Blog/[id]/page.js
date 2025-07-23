
"use client"
import React from 'react';
import Link from 'next/link';
import { getPostById } from '@/lib/blogData';
import DonationBanner from '@/components/DonationBanner';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// Import the icons we need
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';

export default function BlogPostPage({ params }) {
    const { id } = params;
    const post = getPostById(id);

    if (!post) {
        notFound();
    }
    
    // Calculate progress percentage
    const progressPercentage = (post.progress.current / post.progress.total) * 100;

    return (
        <div className="!bg-gray-50 !min-h-screen">
            <DonationBanner />

            <main className="!max-w-6xl !mx-auto !py-8 !px-4 sm:!px-6 lg:!px-8">
                
                {/* Back to Blog Button */}
                <div className="!mb-8">
                    <Link href="/blog" className="!inline-flex !items-center !gap-2 !text-sm !font-medium !text-gray-600 hover:!text-violet-600 !transition-colors">
                        <ArrowLeft className="!w-4 !h-4" />
                        Back to Projects
                    </Link>
                </div>

                {/* Main content grid with sidebar */}
                <div className="!grid !grid-cols-1 lg:!grid-cols-3 lg:!gap-12">

                    {/* Left Column: Article Content */}
                    <article className="lg:!col-span-2 !bg-white !p-6 sm:!p-8 !rounded-lg !shadow-lg">
                        <header className="!mb-6">
                            <p className="!text-sm !font-semibold !uppercase !tracking-wider !text-violet-600">{post.badge}</p>
                            <h1 className="!text-3xl sm:!text-4xl !font-bold !text-gray-900 !mt-2 !leading-tight">{post.title}</h1>
                            
                            {/* Meta Info: Author, Read Time, Date */}
                            <div className="!flex !flex-wrap !items-center !gap-x-6 !gap-y-2 !text-sm !text-gray-500 !mt-4">
                                <div className="!flex !items-center !gap-2">
                                    <User className="!w-4 !h-4" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="!flex !items-center !gap-2">
                                    <Clock className="!w-4 !h-4" />
                                    <span>{post.readTime} min read</span>
                                </div>
                                <div className="!flex !items-center !gap-2">
                                    <Calendar className="!w-4 !h-4" />
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            </div>
                        </header>

                        <hr className="!my-6" />

                        {/* Article Image */}
                        <div className="!relative !w-full !h-64 md:!h-96 !mb-8 !rounded-lg !overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="!object-cover"
                            />
                        </div>
                        
                        {/* Article Body */}
                        <div className="!prose lg:!prose-lg !max-w-none !text-gray-700">
                            <p className="lead !text-lg !text-gray-600">{post.fullContent.intro}</p>
                            {post.fullContent.sections.map((section, index) => (
                                <div key={index} className="!mt-6">
                                    <h2 className="!text-2xl !font-semibold !text-gray-800">{section.heading}</h2>
                                    <p className="!mt-2">{section.content}</p>
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="!mt-8 lg:!mt-0">
                        <div className="!sticky !top-24">
                            
                             {/* Share Button */}
                            <Button variant="outline" className="!w-full !mb-6 !flex !items-center !gap-2 !py-2 !px-4">
                                <Share2 className="!w-4 !h-4" />
                                Share this Project
                            </Button>
                            
                            {/* Funding Progress Card */}
                            <div className="!bg-white !p-6 !rounded-lg !shadow-lg">
                                <h3 className="!text-lg !font-bold !text-gray-900">Funding Progress</h3>
                                <div className="!flex !justify-between !items-center !mt-4 !mb-2">
                                    <span className="!text-sm !font-medium !text-gray-600">Raised</span>
                                    <span className="!text-sm !font-medium !text-violet-600">{Math.round(progressPercentage)}%</span>
                                </div>
                                <Progress value={progressPercentage} className="!w-full" />
                                <p className="!mt-3 !text-center">
                                    <span className="!text-2xl !font-bold !text-violet-600">${post.progress.current.toLocaleString()}</span>
                                    <span className="!text-gray-500"> of ${post.progress.total.toLocaleString()} goal</span>
                                </p>
                                <Button className="!w-full !mt-6 !bg-violet-600 hover:!bg-violet-700">Donate to this Project</Button>
                            </div>

                        </div>
                    </aside>

                </div>
            </main>
            <Footer />
        </div>
    );
}