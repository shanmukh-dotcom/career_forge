import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Key, X, Check } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [showSettings, setShowSettings] = useState(false);
    const [apiKey, setApiKey] = useState('');
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const storedKey = localStorage.getItem('cf_api_key');
        if (storedKey) setApiKey(storedKey);
    }, []);

    const handleSaveKey = () => {
        localStorage.setItem('cf_api_key', apiKey);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <>
            <nav className="career-forge-nav">
                <div className="nav-brand">CAREER_FORGE</div>
                <ul className="nav-links">
                    <li>
                        <Link to="/skill-map" className={location.pathname === '/skill-map' ? 'active' : ''}>
                            <span className="nav-icon">🗺️</span> Skill Map
                        </Link>
                    </li>
                    <li>
                        <Link to="/train" className={location.pathname === '/train' ? 'active' : ''}>
                            <span className="nav-icon">⚔️</span> Train
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
                            <span className="nav-icon">📊</span> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
                            <span className="nav-icon">👤</span> Profile
                        </Link>
                    </li>
                    <li>
                        <button className="settings-btn" onClick={() => setShowSettings(true)}>
                            <Settings size={18} /> BYOK
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Glassmorphism BYOK Modal */}
            {showSettings && (
                <div className="modal-overlay animate-fade-in" onClick={() => setShowSettings(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowSettings(false)}>
                            <X size={20} />
                        </button>
                        <div className="modal-header">
                            <Key size={24} className="accent-red" />
                            <h3>Bring Your Own Key (BYOK)</h3>
                        </div>
                        <p className="modal-desc">
                            Connect your own OpenAI or Gemini API key to bypass rate limits and unlock limitless AI generation. 
                            Your key is stored locally in your browser and never sent to our servers.
                        </p>
                        <div className="input-group">
                            <input 
                                type="password" 
                                placeholder="sk-..." 
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                className="byok-input"
                            />
                            <button className="primary-btn save-btn" onClick={handleSaveKey}>
                                {saved ? <><Check size={16}/> Saved</> : 'Save Key'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;

