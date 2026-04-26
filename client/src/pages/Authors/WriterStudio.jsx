import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { PenLine, Image, Tag, Send, Eye, Save, X, Bold, Italic, List, Link as LinkIcon } from 'lucide-react'
import { blogCategories } from '../../assets/assets'

const WriterStudio = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')
  const [preview, setPreview] = useState(false)
  const [saved, setSaved] = useState(false)

  const cats = blogCategories.filter(c => c !== 'All')

  const wordCount = body.trim() ? body.trim().split(/\s+/).length : 0
  const readTime = Math.max(1, Math.ceil(wordCount / 200))

  const handleSaveDraft = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handlePublish = async () => {
    if (!title || !body || !category) return alert('Title, category, and body are required!')

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          subTitle: subtitle,
          description: body, // NOTE: this expects HTML ideally, but we are saving markdown/text for now
          category,
          image: 'blog_pic_1', // default placeholder
          isPublished: true
        })
      })
      const data = await response.json()
      if (data.success) {
        alert('Blog published successfully!')
        setTitle('')
        setSubtitle('')
        setBody('')
        setCategory('')
      }
    } catch (error) {
      console.error('Failed to publish', error)
      alert('Failed to publish blog')
    }
  }

  const insertFormat = (tag) => {
    const textarea = document.getElementById('blog-body')
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selected = body.substring(start, end)
    const before = body.substring(0, start)
    const after = body.substring(end)

    let wrapped = ''
    if (tag === 'b') wrapped = `**${selected || 'bold text'}**`
    else if (tag === 'i') wrapped = `_${selected || 'italic text'}_`
    else if (tag === 'ul') wrapped = `\n- ${selected || 'list item'}`
    else if (tag === 'a') wrapped = `[${selected || 'link text'}](url)`

    setBody(before + wrapped + after)
    textarea.focus()
  }

  return (
    <div className='min-h-screen bg-dot-pattern flex flex-col font-sans selection:bg-[#E5B85C] selection:text-black'>
      <Navbar />

      <div className='max-w-5xl mx-auto w-full px-6 sm:px-12 pt-20 pb-16'>

        {/* Header */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4'>
          <div>
            <h1 className='text-3xl font-bold text-white flex items-center gap-3'>
              <PenLine className='text-[#E5B85C]' size={28} /> Writer Studio
            </h1>
            <p className='text-gray-400 text-sm mt-1'>Draft, format, and publish your story to the world.</p>
          </div>
          <div className='flex items-center gap-3'>
            <button
              onClick={() => setPreview(p => !p)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${preview ? 'bg-[#E5B85C]/10 border-[#E5B85C]/40 text-[#E5B85C]' : 'bg-transparent border-white/15 text-gray-300 hover:border-white/30 hover:text-white'}`}
            >
              <Eye size={15} /> {preview ? 'Edit' : 'Preview'}
            </button>
            <button onClick={handleSaveDraft}
              className='flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/15 text-gray-300 text-sm rounded-full hover:border-[#E5B85C]/40 hover:text-white transition-all'>
              <Save size={15} /> {saved ? 'Saved ✓' : 'Save Draft'}
            </button>
            <button onClick={handlePublish} className='flex items-center gap-2 px-6 py-2.5 bg-[#E5B85C] text-black text-sm font-semibold rounded-full hover:bg-[#d5a84b] transition-all duration-300 shadow-lg shadow-[#E5B85C]/20'>
              <Send size={15} /> Publish
            </button>
          </div>
        </div>

        {!preview ? (
          /* EDITOR */
          <div className='space-y-6'>
            {/* Title */}
            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 focus-within:border-[#E5B85C]/40 transition-colors'>
              <label className='text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3 block'>Article Title</label>
              <input
                type='text'
                placeholder='Write a compelling headline...'
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='w-full bg-transparent text-white text-2xl font-bold placeholder-gray-600 focus:outline-none'
              />
            </div>

            {/* Subtitle */}
            <div className='bg-white/5 border border-white/10 rounded-2xl p-6 focus-within:border-[#E5B85C]/40 transition-colors'>
              <label className='text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3 block'>Subtitle / Summary</label>
              <input
                type='text'
                placeholder='A short description that hooks the reader...'
                value={subtitle}
                onChange={e => setSubtitle(e.target.value)}
                className='w-full bg-transparent text-gray-300 text-base placeholder-gray-600 focus:outline-none'
              />
            </div>

            {/* Category + Cover */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div className='bg-white/5 border border-white/10 rounded-2xl p-6 focus-within:border-[#E5B85C]/40 transition-colors'>
                <label className='text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3 block flex items-center gap-2'><Tag size={12} /> Category</label>
                <div className='flex flex-wrap gap-2'>
                  {cats.map(cat => (
                    <button key={cat} onClick={() => setCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${category === cat ? 'bg-[#E5B85C] text-black border-[#E5B85C]' : 'bg-transparent text-gray-400 border-white/10 hover:border-[#E5B85C]/50 hover:text-white'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className='bg-white/5 border border-white/10 rounded-2xl p-6 border-dashed hover:border-[#E5B85C]/30 transition-colors cursor-pointer flex flex-col items-center justify-center gap-3 text-center min-h-[120px]'>
                <Image size={28} className='text-gray-500' />
                <p className='text-gray-400 text-sm font-medium'>Click to upload cover image</p>
                <p className='text-gray-600 text-xs'>JPG, PNG or WebP — max 5MB</p>
              </div>
            </div>

            {/* Body editor */}
            <div className='bg-white/5 border border-white/10 rounded-2xl overflow-hidden focus-within:border-[#E5B85C]/40 transition-colors'>
              {/* Toolbar */}
              <div className='flex items-center gap-1 px-4 py-3 border-b border-white/10 bg-black/20'>
                {[
                  { icon: <Bold size={15} />, tag: 'b', label: 'Bold' },
                  { icon: <Italic size={15} />, tag: 'i', label: 'Italic' },
                  { icon: <List size={15} />, tag: 'ul', label: 'List' },
                  { icon: <LinkIcon size={15} />, tag: 'a', label: 'Link' },
                ].map(({ icon, tag, label }) => (
                  <button key={tag} onClick={() => insertFormat(tag)} title={label}
                    className='p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all'>
                    {icon}
                  </button>
                ))}
                <div className='ml-auto flex items-center gap-3 text-gray-600 text-xs'>
                  <span>{wordCount} words</span>
                  <span>~{readTime} min read</span>
                </div>
              </div>
              <textarea
                id='blog-body'
                placeholder='Start writing your story here... Use **bold**, _italic_, - list items, and [text](url) for links.'
                value={body}
                onChange={e => setBody(e.target.value)}
                rows={20}
                className='w-full bg-transparent p-6 text-gray-300 text-[16px] leading-8 placeholder-gray-600 focus:outline-none resize-none'
              />
            </div>
          </div>
        ) : (
          /* PREVIEW */
          <div className='bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12'>
            <div className='mb-2'>
              {category && <span className='px-3 py-1 bg-[#E5B85C]/10 border border-[#E5B85C]/25 text-[#E5B85C] text-xs font-semibold rounded-full uppercase tracking-wider'>{category}</span>}
            </div>
            <h1 className='text-3xl md:text-4xl font-bold text-white mt-4 mb-3 leading-tight'>
              {title || <span className='text-gray-600'>Your title will appear here...</span>}
            </h1>
            <p className='text-gray-400 text-lg mb-6'>
              {subtitle || <span className='text-gray-600'>Your subtitle will appear here...</span>}
            </p>
            <div className='flex items-center gap-4 text-gray-500 text-sm pb-6 border-b border-white/10 mb-8'>
              <span>By Blog World Author</span>
              <span>·</span>
              <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>·</span>
              <span>~{readTime} min read</span>
            </div>
            <div className='text-gray-300 leading-9 text-[17px] whitespace-pre-wrap'>
              {body || <span className='text-gray-600'>Your article body will appear here...</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WriterStudio
