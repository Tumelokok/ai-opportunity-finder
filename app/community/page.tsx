'use client';

import {
  Bell,
  Bookmark,
  Briefcase,
  CalendarDays,
  ChevronDown,
  Heart,
  Home,
  MessageCircle,
  Newspaper,
  PlusCircle,
  Search,
  Share2,
  Sparkles,
  Users,
  Video
} from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Post {
  id: string;
  author: string;
  avatar: string;
  title: string;
  role: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: 'Amina Hassan',
    avatar: 'AH',
    title: 'Just landed my first internship!',
    role: 'Software Intern • Cape Town, SA',
    content:
      'Just got my first internship at a tech startup! Futora helped me improve my GitHub and portfolio visibility. If you need help, I can share my prep checklist.',
    category: 'success',
    likes: 245,
    comments: 18,
    timestamp: '2h ago'
  },
  {
    id: '2',
    author: 'Thabo Mthembu',
    avatar: 'TM',
    title: 'System design study group?',
    role: '3rd-year CS Student • Johannesburg',
    content:
      'Anyone else struggling with system design concepts? Would love to study together or share resources. I can host a session on Monday evening.',
    category: 'help',
    likes: 89,
    comments: 34,
    timestamp: '4h ago'
  },
  {
    id: '3',
    author: 'Naledi Khumalo',
    avatar: 'NK',
    title: 'New ML sentiment analysis project',
    role: 'Data Science Enthusiast • Durban',
    content:
      'Built a machine learning project analyzing Twitter sentiment. Portfolio is live on GitHub. Feedback appreciated, especially on model explainability.',
    category: 'projects',
    likes: 156,
    comments: 22,
    timestamp: '1d ago'
  },
  {
    id: '4',
    author: 'Jamal Adams',
    avatar: 'JA',
    title: 'Starting React today',
    role: 'Student • Pretoria',
    content:
      'Started learning React today. Any tips for building a strong portfolio project? I want a project that helps me get a grad role in half a year.',
    category: 'learning',
    likes: 67,
    comments: 45,
    timestamp: '2d ago'
  }
];

const categories = [
  { id: 'all', label: 'Top', icon: Home },
  { id: 'network', label: 'My Network', icon: Users },
  { id: 'jobs', label: 'Jobs', icon: Briefcase },
  { id: 'messages', label: 'Messaging', icon: MessageCircle },
  { id: 'notifications', label: 'Notifications', icon: Bell }
];

const feedCategories = [
  { id: 'all', label: 'All posts', icon: '📋' },
  { id: 'success', label: 'Success stories', icon: '🎉' },
  { id: 'help', label: 'Ask for help', icon: '🤝' },
  { id: 'projects', label: 'Share projects', icon: '💼' },
  { id: 'learning', label: 'Learning tips', icon: '📚' }
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState('');
  const [selectedFeedCategory, setSelectedFeedCategory] = useState('all');

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Math.random().toString(),
        author: 'You',
        avatar: 'YK',
        title: 'Shared a new update',
        role: '3rd-year Computer Science',
        content: newPost,
        category: 'general',
        likes: 0,
        comments: 0,
        timestamp: 'Just now'
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p)));
  };

  const filteredPosts = useMemo(
    () =>
      selectedFeedCategory === 'all'
        ? posts
        : posts.filter((post) => post.category === selectedFeedCategory),
    [posts, selectedFeedCategory]
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto grid max-w-[1440px] gap-6 px-4 py-8 lg:grid-cols-[320px_minmax(0,1fr)_320px] lg:px-8">
        {/* LEFT SIDEBAR */}
        <aside className="space-y-6">
          <Card className="space-y-5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-600 text-2xl font-semibold text-white">TK</div>
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Profile</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">Tumelo Kok</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Third-year Computer Science student at Varsity College, skilled in Java, Python, C#, Kotlin, HTML, CSS, JavaScript.
                </p>
              </div>
            </div>

            <div className="space-y-3 rounded-3xl bg-slate-50 p-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Connections</span>
                <span className="font-semibold text-slate-950">2</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Invitations</span>
                <span className="font-semibold text-slate-950">1</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Saved items</span>
                <span className="font-semibold text-slate-950">5</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Newsletters</span>
                <span className="font-semibold text-slate-950">4</span>
              </div>
            </div>

            <div className="space-y-3">
              {categories.map((item) => (
                <button
                  key={item.id}
                  className="flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>
          </Card>

          <Card className="space-y-4 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Weekly progress</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">Career streak</h3>
              </div>
              <Sparkles className="text-brand-600" size={24} />
            </div>
            <div className="space-y-3">
              <div className="rounded-3xl bg-slate-100 p-4">
                <p className="text-sm text-slate-600">Learning streak</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">12 days</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-4">
                <p className="text-sm text-slate-600">Weekly goals</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Commit to GitHub 3 times</li>
                  <li>• Update your CV</li>
                  <li>• Read 2 career newsletters</li>
                </ul>
              </div>
            </div>
          </Card>
        </aside>

        {/* CENTER FEED */}
        <section className="space-y-6">
          <Card className="border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Community feed</p>
                <h1 className="mt-2 text-3xl font-semibold text-slate-950">Home</h1>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-600">
                  <Search size={18} />
                  <input
                    className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
                    placeholder="Search feed"
                  />
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
                  <PlusCircle size={18} />
                  New post
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {feedCategories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedFeedCategory(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedFeedCategory === item.id
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>
          </Card>

          <Card className="bg-white p-6">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-2xl font-semibold text-slate-950">YK</div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-700">Start a post</p>
                <p className="mt-1 text-sm text-slate-500">Share a career update with your network.</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="What do you want to talk about?"
                className="h-28 w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
              />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200">
                    <Video size={18} /> Video
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200">
                    <Bookmark size={18} /> Photo
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200">
                    <Newspaper size={18} /> Article
                  </button>
                </div>
                <Button disabled={!newPost.trim()} onClick={handlePostSubmit}>
                  Post
                </Button>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white p-6">
                <div className="flex gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-600 text-xl font-semibold text-white">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h2 className="text-base font-semibold text-slate-950">{post.author}</h2>
                        <p className="text-sm text-slate-500">{post.role}</p>
                      </div>
                      <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {post.timestamp}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-950">{post.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{post.content}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4 text-sm text-slate-600">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100"
                      >
                        <Heart size={18} /> {post.likes}
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100">
                        <MessageCircle size={18} /> {post.comments}
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-slate-100">
                        <Share2 size={18} /> Share
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Newsletter</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">Featured reads</h3>
              </div>
              <ChevronDown className="text-slate-500" size={20} />
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">Career Clarity</p>
                <p className="mt-2 text-sm text-slate-600">SA graduate strategies for 2026.</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  View newsletter
                </button>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">DevOps Digest</p>
                <p className="mt-2 text-sm text-slate-600">How to get cloud-ready faster.</p>
                <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  View newsletter
                </button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Recommended</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">People to follow</h3>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between rounded-3xl border border-slate-200 p-4">
                <div>
                  <p className="font-semibold text-slate-950">Precious Makola</p>
                  <p className="text-sm text-slate-600">HR & Office Manager</p>
                </div>
                <Button variant="secondary" className="px-3 py-2 text-xs">Follow</Button>
              </div>
              <div className="flex items-center justify-between rounded-3xl border border-slate-200 p-4">
                <div>
                  <p className="font-semibold text-slate-950">Ricky Ruthenberg</p>
                  <p className="text-sm text-slate-600">Group CEO • Tech</p>
                </div>
                <Button variant="secondary" className="px-3 py-2 text-xs">Follow</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Events</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">Upcoming</h3>
              </div>
              <CalendarDays className="text-slate-500" size={20} />
            </div>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">React Meetup</p>
                <p className="mt-2 text-sm text-slate-600">Tomorrow • Joburg</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-950">Tech Summit SA</p>
                <p className="mt-2 text-sm text-slate-600">3 Aug • Virtual</p>
              </div>
            </div>
          </Card>
        </aside>
      </section>
    </main>
  );
}
