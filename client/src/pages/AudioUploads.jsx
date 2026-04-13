import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Link as LinkIcon, MoreVertical, Music } from 'lucide-react';
import BottomNav from '../components/BottomNav';

const AudioUploads = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState('');

    const recentTransmissions = [
        { name: 'Midnight Rain Simulation...', size: '4.2 MB', uploaded: '2H AGO' },
        { name: 'Deep Theta Meditation - 4...', size: '12.8 MB', uploaded: 'YESTERDAY' },
        { name: 'Forest Floor Ambience', size: '8.1 MB', uploaded: '3D AGO' },
    ];

    return (
        <div className="min-h-screen bg-background pb-24 relative overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-6 pt-6 mb-8">
                <button onClick={() => navigate('/library')} className="text-on-surface-variant">
                    <ArrowLeft size={20} />
                </button>
                <h1 className="font-display text-lg text-on-surface">My Audio</h1>
                <h2 className="font-display text-sm tracking-[0.15em] text-secondary uppercase">Solace</h2>
            </header>

            <div className="px-6">
                {/* Upload Card */}
                <div className="glass-card p-8 mb-8 flex flex-col items-center border border-dashed border-outline-variant/30">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                        <Upload size={24} className="text-secondary" />
                    </div>
                    <h2 className="font-display text-xl text-on-surface mb-2 text-center">Upload New Essence</h2>
                    <p className="text-on-surface-variant text-sm text-center mb-6">
                        Drag and drop your audio or browse files.
                    </p>
                    <button className="btn-aurora w-full py-4">
                        Select File
                    </button>
                </div>

                {/* Link Mode Section */}
                <div className="mb-10">
                    <p className="label-caps mb-4">Link Mode</p>
                    <div className="relative group">
                        <input 
                            type="text" 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Paste YouTube or SoundCloud URL"
                            className="w-full bg-surface-container-high/50 border border-outline-variant/10 rounded-2xl py-4 pl-6 pr-14 text-on-surface outline-none focus:border-secondary/30 transition-all placeholder:text-on-surface-variant/40"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-secondary">
                            <LinkIcon size={18} />
                        </button>
                    </div>
                    <p className="text-on-surface-variant italic text-[0.65rem] mt-3">
                        Integrate external frequencies into your sanctuary.
                    </p>
                </div>

                {/* No Archives Found (decorative mockup) */}
                <div className="flex flex-col items-center justify-center py-10 opacity-30">
                    <div className="w-20 h-20 bg-surface-container-high rounded-lg flex items-center justify-center mb-4">
                        <Music size={32} />
                    </div>
                    <p className="label-caps text-[0.55rem]">No Local Archives Found</p>
                </div>

                {/* Recent Transmissions */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <p className="label-caps">Recent Transmissions</p>
                        <span className="text-secondary text-[0.6rem] font-bold">3 ITEMS</span>
                    </div>
                    <div className="space-y-4">
                        {recentTransmissions.map((item, i) => (
                            <div key={i} className="glass-card p-4 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <div className="flex items-center space-x-0.5">
                                            {[1, 2, 3].map(b => (
                                                <div key={b} className="w-1 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: `${b * 0.2}s` }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-on-surface text-sm font-medium">{item.name}</p>
                                        <p className="text-on-surface-variant text-[0.65rem]">{item.size} • UPLOADED {item.uploaded}</p>
                                    </div>
                                </div>
                                <button className="text-on-surface-variant">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    );
};

export default AudioUploads;
