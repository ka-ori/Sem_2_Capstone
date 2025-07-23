// components/Search.js
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; 
import { searchData } from '@/lib/searchData';
import { X, Search as SearchIcon, FileText } from 'lucide-react';

export default function Search({ isOpen, setIsOpen }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const router = useRouter(); 
    const inputRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setQuery('');
            setResults([]);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [setIsOpen]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 2) {
            const lowerCaseQuery = value.toLowerCase();
            const filteredData = searchData.filter(item => 
                item.title.toLowerCase().includes(lowerCaseQuery) ||
                item.content.toLowerCase().includes(lowerCaseQuery)
            ).slice(0, 10); // Limit to top 10 results
            setResults(filteredData);
        } else {
            setResults([]);
        }
    };

    const handleResultClick = (url) => {
        setIsOpen(false);
        router.push(url); 
    };

    if (!isOpen) return null;

    return (
        <div 
            className="!fixed !inset-0 !z-50 !flex !justify-center !items-start !pt-20 !bg-black/50 !backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
        >
            <div 
                className="!relative !w-full !max-w-2xl !bg-white !rounded-lg !shadow-2xl !mx-4"
                onClick={e => e.stopPropagation()}
                ref={modalRef}
            >
                <div className="!flex !items-center !p-4 !border-b !border-gray-200">
                    <SearchIcon className="!h-5 !w-5 !text-gray-400 !mr-3" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search the website..."
                        className="!w-full !text-lg !outline-none !border-none !p-0 !bg-transparent"
                    />
                    <button onClick={() => setIsOpen(false)} className="!p-2 !-mr-2 !text-gray-400 hover:!text-gray-700">
                        <X className="!h-6 !w-6" />
                    </button>
                </div>
                
                <div className="!max-h-[60vh] !overflow-y-auto">
                    {results.length > 0 ? (
                        <ul>
                            {results.map(item => (
                                <li key={item.id}>
                                    <button 
                                        onClick={() => handleResultClick(item.url)}
                                        className="!w-full !text-left !px-6 !py-4 !flex !items-center !gap-4 hover:!bg-gray-50 !transition-colors"
                                    >
                                        <div className="!p-2 !bg-gray-100 !rounded-md">
                                            <FileText className="!h-5 !w-5 !text-gray-500" />
                                        </div>
                                        <div>
                                            <p className="!font-semibold !text-gray-800">{item.title}</p>
                                            <p className="!text-sm !text-gray-500">In: {item.page}</p>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        query.length > 2 && (
                            <div className="!p-10 !text-center !text-gray-500">
                                <p>No results found for "{query}"</p>
                            </div>
                        )
                    )}
                    {query.length <= 2 && (
                         <div className="!p-10 !text-center !text-gray-400">
                            <p>Enter a search term to find what you're looking for.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}