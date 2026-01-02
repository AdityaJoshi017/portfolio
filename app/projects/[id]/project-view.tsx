'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Maximize2, Minimize2, X, Monitor } from 'lucide-react';
import { Project } from '@/app/data/projects';
import { ThemeToggle } from '@/components/theme-toggle';

interface ProjectViewProps {
  project: Project;
}

export function ProjectView({ project }: ProjectViewProps) {
  const router = useRouter();
  type DeviceType = 'normal' | 'mobile' | 'desktop' | 'responsive';

  const [deviceType, setDeviceType] = useState<DeviceType>('normal');
  const [iframeSrcIndex, setIframeSrcIndex] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [previewScale, setPreviewScale] = useState(0.75);
  const [previewSize, setPreviewSize] = useState({
    width: 414,
    height: 896
  });
  const [showResponsiveControls, setShowResponsiveControls] = useState(false);

  const SOURCES = [
    "https://efootball-stats-six.vercel.app/",
    "https://efootball-stats-six.vercel.app/"
  ];

  useEffect(() => {
    if (showPopup) {
      setIframeSrcIndex(0);
      setIframeLoaded(false);
      setIframeError(false);
    }
  }, [showPopup]);

  const handleIframeError = () => {
    if (iframeSrcIndex < SOURCES.length - 1) {
      setIframeSrcIndex((prev: number) => prev + 1);
      setIframeLoaded(false);
    } else {
      setIframeError(true);
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowPopup(false);
        setIsMaximized(false);
      }
    };

    if (showPopup) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showPopup]);

  // Device presets
  const devicePresets = {
    mobile: { width: 375, height: 812, label: 'iPhone 12' },
    tablet: { width: 768, height: 1024, label: 'iPad' },
    desktop: { width: 1440, height: 900, label: 'Desktop' },
  };

  const applyDevicePreset = (device: keyof typeof devicePresets) => {
    const { width, height } = devicePresets[device];
    setPreviewSize({ width, height });
    setDeviceType('responsive');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Projects</span>
          </button>
          <div className='inline-flex items-center'>
            <ThemeToggle/>
          </div>
        </div>
      </header> */}
      <header className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              
              {/* Left */}
              <button
                onClick={() => router.back()}
                className="inline-flex items-center text-foreground hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium">Back to Projects</span>
              </button>

              {/* Right */}
              <div className="inline-flex text-white-500 items-center">
                <ThemeToggle />
              </div>

            </div>
          </div>
        </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <div className="bg-card rounded-xl shadow-sm p-6 mb-8 border border-border">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {project.logo && (
                  <img 
                    src={project.logo} 
                    alt={`${project.title} Logo`} 
                    className="w-12 h-12 object-contain"
                  />
                )}
                <h1 className="text-3xl font-bold text-foreground">
                  {project.title}
                </h1>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg">
                {project.tagline || project.description.split('.')[0]}.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 border border-border rounded-lg hover:bg-accent bg-yellow-500 transition-colors group"
                >
                  <Github className="w-5 h-5 mr-2 text-foreground group-hover:text-accent-foreground" />
                  <span className="font-medium text-foreground">View Code</span>
                </a>
              )}
              <a
                href={project.demoUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span className="font-medium">Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-lg p-6 mb-8 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Project Overview</h2>
          <p className="text-muted-foreground mb-6">
            {project.description}
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Preview */}
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">Live Preview</h3>
              {/* <div className="flex items-start gap-2"> */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-gray-100 rounded-md p-1">
                  <button
                    onClick={() => {
                      setDeviceType('normal');
                      setShowResponsiveControls(false);
                    }}
                    className={`p-2 rounded ${deviceType === 'normal' ? 'bg-white shadow' : ''}`}
                    title="Normal view"
                  >
                    <span className={`text-xs font-medium ${deviceType === 'normal' ? 'text-blue-600' : 'text-gray-500'}`}>Normal</span>
                  </button>
                  <button
                    onClick={() => setDeviceType('desktop')}
                    className={`p-2 rounded ${deviceType === 'desktop' ? 'bg-white shadow' : ''}`}
                    title="Desktop view"
                  >
                    <Monitor className={`w-4 h-4 ${deviceType === 'desktop' ? 'text-blue-600' : 'text-gray-500'}`} />
                  </button>
                  <div className="relative">
                    <button
                     onClick={() => {
                        if (deviceType !== 'responsive') {
                          // Enter responsive mode + open dropdown
                          setDeviceType('responsive');
                          setShowResponsiveControls(true);
                        } else {
                          // Already in responsive → just toggle dropdown
                          setShowResponsiveControls(prev => !prev);
                        }
                      }}
                      className={`p-2 rounded flex items-center gap-1 ${deviceType === 'responsive' ? 'bg-white shadow' : ''}`}
                      title="Responsive view"
                    >
                      <span className={`text-xs font-medium ${deviceType === 'responsive' ? 'text-blue-600' : 'text-gray-500'}`}>
                        Responsive
                      </span>
                      <svg 
                        className={`w-3 h-3 text-black transition-transform ${showResponsiveControls ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className={`absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 overflow-hidden transition-all duration-200 ${showResponsiveControls ? 'max-h-96 p-4' : 'max-h-0 p-0'}`}>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowResponsiveControls(!showResponsiveControls);
                          setDeviceType('responsive');
                        }}
                        className="absolute -top-8 right-0 p-1 text-gray-500 hover:text-gray-700"
                        title={showResponsiveControls ? 'Hide controls' : 'Show controls'}
                      >
                        <svg 
                          className={`w-4 h-4 transition-transform ${showResponsiveControls ? 'rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="grid grid-cols-2 gap-3 p-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Width (px)
                          </label>
                          <input
                            type="number"
                            min="100"
                            max="3000"
                            value={previewSize.width}
                            onChange={(e) => setPreviewSize({...previewSize, width: parseInt(e.target.value) || 0})}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded bg-white text-gray-900"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Height (px)
                          </label>
                          <input
                            type="number"
                            min="100"
                            max="3000"
                            value={previewSize.height}
                            onChange={(e) => setPreviewSize({...previewSize, height: parseInt(e.target.value) || 0})}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded bg-white text-gray-900"
                          />
                        </div>
                        <div className="col-span-2">
                          <label className="block text-xs font-medium text-gray-500 mb-1">
                            Scale
                          </label>
                          <div className="flex items-center space-x-2">
                            {[0.5, 0.75, 1].map((scale) => (
                              <button
                                key={scale}
                                onClick={() => setPreviewScale(scale)}
                                className={`px-2 py-1 text-xs rounded ${
                                  previewScale === scale
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {scale * 100}%
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowPopup(true);
                    // Reset loading states when opening the popup
                    setIframeLoaded(false);
                    setIframeError(false);
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  title="Open in popup"
                >
                  Open in popup
                  <Maximize2 className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            <div 
              className={`relative mx-auto border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-200 ${
                deviceType === 'mobile' ? 'max-w-xs' : 
                deviceType === 'desktop' ? 'max-w-5xl w-full' :
                deviceType === 'responsive' ? 'shadow-lg' : ''
              }`}
              style={{
                width: deviceType === 'responsive' ? `${previewSize.width * previewScale}px` : '100%',
                height: deviceType === 'responsive' ? `${previewSize.height * previewScale}px` : 'auto',
                transform: deviceType === 'responsive' ? 'none' : 'scale(1)',
                transformOrigin: 'top center',
              }}
            >
              {deviceType === 'responsive' && (
                <div className="absolute -top-6 left-0 right-0 text-center">
                  <div className="inline-block px-2 py-1 text-xs btext-foreground/70xt-gray-600 rounded-b-md">
                    {previewSize.width} × {previewSize.height} @ {Math.round(previewScale * 100)}%
                  </div>
                </div>
              )}
              {!iframeLoaded && !iframeError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="animate-pulse text-gray-500">Loading preview...</div>
                </div>
              )}
              {iframeError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
                  <p className="text-gray-500 mb-4">Couldn't load live preview</p>
                  {project.image && (
                    <div className="relative w-full h-full">
                      <img 
                        src={project.image} 
                        alt={`${project.title} Screenshot`} 
                        className="object-contain w-full h-full"
                      />
                    </div>
                  )}
                </div>
              )}
              <iframe 
                key={iframeSrcIndex}
                src={SOURCES[iframeSrcIndex]}
                className="w-full h-full border-0 transition-all duration-200"
                style={{
                  width: deviceType === 'responsive' ? `${previewSize.width}px` : '100%',
                  height: deviceType === 'responsive' ? `${previewSize.height}px` : 
                         deviceType === 'mobile' ? '600px' :
                         deviceType === 'desktop' ? '700px' : '500px',
                  transform: deviceType === 'responsive' ? `scale(${previewScale})` : 'scale(1)',
                  transformOrigin: 'top left',
                  display: iframeError ? 'none' : 'block',
                  opacity: iframeLoaded ? 1 : 0
                }}
                title={`${project.title} Preview`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                onError={handleIframeError}
              />
            </div>
                
            {/* Popup Modal */}
            {showPopup && (
              <div 
                className={`fixed inset-0 z-50 bg-black/80 flex flex-col ${isMaximized ? 'p-0' : 'p-4'}`} 
                onClick={() => setShowPopup(false)}
              >
                <div className={`flex-1 flex items-center justify-center ${isMaximized ? 'h-screen' : ''}`}>
                  <div 
                    className={`relative bg-white overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
                      isMaximized 
                        ? 'w-screen h-screen rounded-none' 
                        : 'w-full max-w-6xl h-[80vh] rounded-lg'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
                      <h3 className="text-lg font-medium text-gray-900">
                        {project.title} - Live Preview
                      </h3>
                      <div className="flex items-center space-x-2">
                        <a
                          href="https://efootball-stats-six.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                          title="Open in new tab"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Open in new tab
                        </a>
                        <button
                          onClick={() => setIsMaximized(!isMaximized)}
                          className="text-gray-500 hover:text-gray-700 p-1"
                          title={isMaximized ? 'Minimize' : 'Maximize'}
                        >
                          {isMaximized ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                        </button>
                        <button
                          onClick={() => {
                            setShowPopup(false);
                            setIsMaximized(false);
                          }}
                          className="text-gray-500 hover:text-gray-700 p-1"
                          title="Close"
                        >
                          <X size={24} />
                        </button>
                      </div>
                    </div> */}
                    <div className="flex justify-between items-center px-3 py-2 border-b border-gray-200 bg-gray-50">
                      <h3 className="text-sm font-medium text-gray-800 truncate">
                        {project.title} – Live Preview
                      </h3>

                      <div className="flex items-center gap-1.5">
                        <a
                          href="https://efootball-stats-six.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
                          title="Open in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1" />
                          Open
                        </a>

                        <button
                          onClick={() => setIsMaximized(!isMaximized)}
                          className="text-gray-500 hover:text-gray-700 p-1"
                          title={isMaximized ? 'Minimize' : 'Maximize'}
                        >
                          {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                        </button>

                        <button
                          onClick={() => {
                            setShowPopup(false)
                            setIsMaximized(false)
                          }}
                          className="text-gray-500 hover:text-gray-700 p-1"
                          title="Close"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 relative">
                      {/* {!iframeLoaded && !iframeError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                          <div className="animate-pulse text-gray-500">Loading https://efootball-stats-six.vercel.app/...</div>
                        </div>
                      )} */}
                      {iframeError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                          <div className="text-red-500">Failed to load {SOURCES[iframeSrcIndex]}</div>
                        </div>
                      )}
                      {!iframeLoaded && !iframeError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                          <div className="animate-pulse text-gray-500">
                            Loading {SOURCES[iframeSrcIndex]}...
                            {iframeSrcIndex > 0 && ` (fallback ${iframeSrcIndex}/${SOURCES.length - 1})`}
                          </div>
                        </div>
                      )}
                      <iframe
                        key={iframeSrcIndex}
                        src={SOURCES[iframeSrcIndex]}
                        className="w-full h-full border-0"
                        title={`${project.title} Preview`}
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        onLoad={() => setIframeLoaded(true)}
                        onError={handleIframeError}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <button  
          style={{ cursor: "pointer" }}
            
            onClick={() => router.back()}
            className="px-4 py-2 border border-gray-300 text-white-700 rounded-md hover:bg-yellow-600 transition-colors flex items-center justify-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </button>
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-blue-300 text-blue-600 rounded-md 
              hover:bg-yellow-600 hover:text-white 
              transition-colors flex items-center justify-center"
              >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
            <a
              href="https://efootball-stats-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Full Project
            </a>
          </div>
        </div>

      </div>
      
    </main>
  );
}