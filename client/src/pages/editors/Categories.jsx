import React, { useState, useEffect, useContext } from 'react';
import EditorSidebar from '../../components/editors/EditorSidebar';
import EditorNavbar from '../../components/editors/EditorNavbar';
import { FiEdit2, FiTrash2, FiPlus, FiTag } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthContext';

const mockCategories = [
  { id: 1, name: 'Artificial Intelligence', slug: 'ai', count: 24, color: 'bg-purple-500/20 text-purple-400' },
  { id: 2, name: 'Web Development', slug: 'web-dev', count: 18, color: 'bg-blue-500/20 text-blue-400' },
  { id: 3, name: 'Cloud Computing', slug: 'cloud', count: 12, color: 'bg-cyan-500/20 text-cyan-400' },
  { id: 4, name: 'Cybersecurity', slug: 'security', count: 9, color: 'bg-red-500/20 text-red-400' },
  { id: 5, name: 'Data Science', slug: 'data-science', count: 15, color: 'bg-emerald-500/20 text-emerald-400' },
  { id: 6, name: 'Blockchain', slug: 'blockchain', count: 7, color: 'bg-orange-500/20 text-orange-400' },
];

const Categories = () => {
  const { token } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/editor/categories', {
          headers: { 'Authorization': `Bearer ${token || localStorage.getItem('bw_token')}` }
        });
        const data = await res.json();
        if (data.success) {
          setCategories(data.categories.length > 0 ? data.categories : mockCategories);
        }
      } catch (err) {
        setCategories(mockCategories);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [token]);

  const handleAddCategory = () => {
    const name = prompt('Enter new category name:');
    if (name) {
      const newCat = { 
        id: Date.now(), 
        name, 
        slug: name.toLowerCase().replace(/ /g, '-'), 
        count: 0, 
        color: 'bg-gray-500/20 text-gray-400' 
      };
      setCategories([...categories, newCat]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(c => (c._id || c.id) !== id));
    }
  };

  const handleEdit = (cat) => {
    const newName = prompt('Enter new name for ' + cat.name, cat.name);
    if (newName) {
      setCategories(categories.map(c => (c._id || c.id) === (cat._id || cat.id) ? { ...c, name: newName } : c));
    }
  };

  return (
    <div className="flex bg-[#121212] min-h-screen text-white font-sans selection:bg-[#E5B85C] selection:text-black">
      <EditorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <EditorNavbar />
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-4xl font-bold text-[#E5B85C] mb-2 tracking-tight">Categories</h1>
              <p className="text-gray-400">Manage blog categories and taxonomies.</p>
            </div>
            <button 
              onClick={handleAddCategory}
              className="flex items-center gap-2 bg-[#E5B85C] hover:bg-[#d4a74b] text-black px-6 py-3 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(229,184,92,0.3)] hover:shadow-[0_0_25px_rgba(229,184,92,0.5)]"
            >
              <FiPlus className="w-5 h-5" />
              <span>Add Category</span>
            </button>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat._id || cat.id} className="group bg-white/5 border border-white/10 hover:border-[#E5B85C]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5B85C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${cat.color || 'bg-white/10 text-white'} backdrop-blur-sm`}>
                    <FiTag className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => handleEdit(cat)}
                      className="p-2 text-gray-400 hover:text-[#E5B85C] bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(cat._id || cat.id)}
                      className="p-2 text-gray-400 hover:text-red-400 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#E5B85C] transition-colors">{cat.name}</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">/{cat.slug}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-sm text-gray-400">Total Posts</span>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium">{cat.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default Categories;