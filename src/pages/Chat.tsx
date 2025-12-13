import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Send, Paperclip, Mic, Square, Loader2, Upload, X, ChevronRight, ChevronDown, Folder, FolderOpen, Package, Check, Trash2, ShoppingCart, ImagePlus, Bot, User, Sparkles } from 'lucide-react';

// Inventory Data Structure - Synced from ModernStore
const inventoryData = {
  name: "Inventory",
  children: [
    {
      name: "Lighting",
      children: [
        {
          name: "LED Headlights",
          parts: [
            { id: "led1", name: "AllExtreme 350 Watts", price: 1500, image: "/l1.jpg", des: "Powerful illumination, energy efficiency, and durability for night riding." },
            { id: "led2", name: "NOVSIGHT 430 Watts", price: 1999, image: "/l2.jpg", des: "Superior brightness and long lifespan for optimal road visibility." },
            { id: "led3", name: "RE After Market", price: 3999, image: "/l3.jpg", des: "Authentic design with exceptional brightness for Royal Enfield." },
            { id: "led4", name: "Royal Enfield Original", price: 1899, image: "/l4.jpeg", des: "Affordable upgrade with improved brightness and durability." },
            { id: "led5", name: "AllExtreme HeadLight", price: 2499, image: "/l5.jpg", des: "High-performance illumination with robust construction." },
          ]
        },
        {
          name: "Fog Lamps",
          parts: [
            { id: "fog1", name: "Triple LED Fog Lamp", price: 1500, image: "/f1.jpg", des: "Enhanced road visibility in low-light conditions." },
            { id: "fog2", name: "Dart Focus Lamp", price: 999, image: "/f2.jpg", des: "Focused illumination for foggy conditions." },
            { id: "fog3", name: "Bolt 500 Watts", price: 3999, image: "/f3.jpg", des: "Powerful illumination with robust build quality." },
            { id: "fog4", name: "BMW IP68 Fog Lamp", price: 6899, image: "/f4.jpg", des: "Waterproof construction with high-intensity illumination." },
            { id: "fog5", name: "HJG LED", price: 899, image: "/f5.jpg", des: "Bright and energy-efficient fog lamps." },
          ]
        },
        {
          name: "Tail Lights",
          parts: [
            { id: "tl1", name: "Pulsar 220F Tail Light", price: 1500, image: "/tl1.jpg", des: "Bright illumination with durable construction." },
            { id: "tl2", name: "Honda Hornet Tail Light", price: 1199, image: "/tl2.jpg", des: "Stylish design with reliable performance." },
            { id: "tl3", name: "Yamaha R15 v3 Tail Light", price: 1999, image: "/tl3.jpg", des: "Sleek aesthetics with bright illumination." },
            { id: "tl4", name: "Stripe Tail Light", price: 899, image: "/tl4.jpg", des: "Modern design with efficient lighting." },
            { id: "tl5", name: "Rockerz Tail Light with Indicators", price: 1299, image: "/tl5.jpg", des: "Integrated functionality with stylish design." },
            { id: "tl6", name: "Stripe Tail Light with Indicators", price: 999, image: "/tl6.jpg", des: "Combined lighting with modern design." },
            { id: "tl7", name: "RE Classic Tail Light", price: 1899, image: "/tl7.jpg", des: "Vintage aesthetics for classic motorcycles." },
          ]
        }
      ]
    },
    {
      name: "Helmets",
      children: [
        {
          name: "Full Face",
          parts: [
            { id: "hf1", name: "AGV", price: 89500, image: "/fh1.jpg", des: "Superior aerodynamics and advanced impact protection." },
            { id: "hf2", name: "MT THUNDER 5", price: 14999, image: "/fh2.jpg", des: "Cutting-edge design with enhanced ventilation." },
            { id: "hf3", name: "STUDDS TROOPER D3", price: 9999, image: "/fh3.jpg", des: "Robust protection with ergonomic fit." },
            { id: "hf4", name: "Steel Bird Off-Road", price: 17899, image: "/fh4.jpg", des: "Durable construction for rugged terrains." },
            { id: "hf5", name: "Axor xBhp Bionic Helmet", price: 6499, image: "/fh5.jpg", des: "Innovative design with advanced safety." },
          ]
        },
        {
          name: "Half Face",
          parts: [
            { id: "hh1", name: "EVO Racing Edition", price: 1499, image: "/hh1.jpg", des: "Sleek design for urban riders." },
            { id: "hh2", name: "SMK Limited Edition", price: 1899, image: "/hh2.png", des: "Comfort and safety for everyday commuting." },
            { id: "hh3", name: "Royal Enfield Half Face", price: 1999, image: "/hh3.jpg", des: "Classic style with dependable safety." },
          ]
        },
        {
          name: "Convertible",
          parts: [
            { id: "ch1", name: "Vega 2 in 1", price: 2199, image: "/ch1.jpg", des: "Switch between full-face and open-face." },
            { id: "ch2", name: "STUDDS Ninja N3", price: 1899, image: "/ch2.jpg", des: "Modular design with advanced safety." },
            { id: "ch3", name: "Royal Enfield L2D", price: 1999, image: "/ch3.jpg", des: "Flexibility for different riding conditions." },
            { id: "ch4", name: "STUDDS X-Trooper", price: 2499, image: "/ch4.jpg", des: "Flip-up mechanism with high safety standards." },
          ]
        }
      ]
    },
    {
      name: "Protection",
      children: [
        {
          name: "Crash Guards - Bikes",
          parts: [
            { id: "cgb1", name: "AllExtreme Euro J20", price: 2799, image: "/cd1.jpg", des: "Robust protection with stylish design." },
            { id: "cgb2", name: "Royal Piston Sports Bike", price: 3999, image: "/cd2.jpg", des: "Superior impact resistance for sports bikes." },
            { id: "cgb3", name: "Honda CB Shine SP Chrome", price: 800, image: "/cd3.jpg", des: "Chrome finish with effective protection." },
            { id: "cgb4", name: "Dhe Best Heavy Duty", price: 3499, image: "/cd4.jpg", des: "Exceptional durability with robust design." },
            { id: "cgb5", name: "Dart Crash Guard", price: 1999, image: "/cd5.jpg", des: "Reliable protection with easy installation." },
          ]
        },
        {
          name: "Crash Guards - Scooty",
          parts: [
            { id: "cgs1", name: "KSHEERI ACTIVA 6G", price: 1500, image: "/cds1.jpg", des: "Durable protection for scooters." },
            { id: "cgs2", name: "Vida V1 Pro Steel", price: 2199, image: "/cds2.jpg", des: "High-quality steel construction." },
            { id: "cgs3", name: "Ola S1 Pro Frame Slider", price: 3000, image: "/cds3.jpg", des: "Comprehensive protection for Ola scooters." },
            { id: "cgs4", name: "TVS Ntorq Guard Kit", price: 1499, image: "/cds4.jpg", des: "Corrosion-resistant finish for TVS Ntorq." },
          ]
        }
      ]
    },
    {
      name: "Accessories",
      children: [
        {
          name: "Side Mirrors",
          parts: [
            { id: "sm1", name: "Speedwav Mirrors", price: 700, image: "/bm1.jpg", des: "Classic styling with enhanced visibility." },
            { id: "sm2", name: "Universal Aluminum Rear View", price: 799, image: "/bm2.jpg", des: "Compact design with robust build quality." },
            { id: "sm3", name: "AUTONEST Handlebar Mirror", price: 1100, image: "/bm3.jpg", des: "Adjustable rotatable fancy handle bar mirror." },
            { id: "sm4", name: "RE Classical Mirror", price: 699, image: "/bm4.jpg", des: "Retro styling with reliable performance." },
            { id: "sm5", name: "Bar End Mirror Set", price: 999, image: "/bm5.jpg", des: "Stylish design with integrated functionality." },
            { id: "sm6", name: "Rockerz Mirrors with LED", price: 999, image: "/bm6.jpg", des: "Combined lighting with modern design." },
          ]
        },
        {
          name: "Alloy Wheel Stickers",
          parts: [
            { id: "st1", name: "Grayfixx Radium Sticker", price: 700, image: "/st1.jpg", des: "Classic styling with bright illumination." },
            { id: "st2", name: "Grayfixx Neon Sticker", price: 799, image: "/st2.jpg", des: "Compact design with efficient lighting." },
            { id: "st3", name: "Grayfixx White Sticker", price: 799, image: "/st3.jpg", des: "High-quality stickers for alloy wheels." },
          ]
        }
      ]
    },
    {
      name: "Exhaust Systems",
      children: [
        {
          name: "Premium Exhausts",
          parts: [
            { id: "ex1", name: "SC Project", price: 25000, image: "/ex1.png", des: "High-performance with superior sound quality." },
            { id: "ex2", name: "Akrapovic Silence", price: 79999, image: "/ex2.jpg", des: "Cutting-edge technology with lightweight construction." },
            { id: "ex3", name: "Akrapovic Dark", price: 80000, image: "/ex3.jpg", des: "Sleek design with enhanced engine efficiency." },
            { id: "ex4", name: "Scorpion Serket Parallel", price: 99999, image: "/ex6.jpg", des: "Unique design with high-performance exhaust." },
            { id: "ex5", name: "Scorpion Philippines", price: 110000, image: "/ex7.jpg", des: "Cutting-edge technology for enthusiasts." },
          ]
        },
        {
          name: "Budget Exhausts",
          parts: [
            { id: "bex1", name: "M4 Performance", price: 6999, image: "/ex4.jpg", des: "Aggressive sound with durable construction." },
            { id: "bex2", name: "Universal Bike Exhaust", price: 5999, image: "/ex5.jpg", des: "Versatile fitment for various models." },
            { id: "bex3", name: "FVRITO 28mm Exhaust", price: 11000, image: "/ex8.jpg", des: "High-performance for superior riding experiences." },
          ]
        }
      ]
    }
  ]
};

// Flatten all parts for AI search
const getAllParts = (node, path = []) => {
  let parts = [];
  if (node.parts) {
    parts = node.parts.map(p => ({ ...p, category: path.join(' > ') }));
  }
  if (node.children) {
    node.children.forEach(child => {
      parts = [...parts, ...getAllParts(child, [...path, child.name])];
    });
  }
  return parts;
};

const allParts = getAllParts(inventoryData);

// Folder Component with enhanced styling
const FolderItem = ({ node, level = 0, onSelectPart, selectedParts }) => {
  const [isOpen, setIsOpen] = useState(level < 1);
  const hasChildren = node.children && node.children.length > 0;
  const hasParts = node.parts && node.parts.length > 0;
  const itemCount = hasParts ? node.parts.length : (hasChildren ? node.children.length : 0);

  return (
    <div className="select-none">
      <div
        className="flex items-center gap-2 py-2 px-3 rounded-xl cursor-pointer hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300 group"
        style={{ paddingLeft: `${level * 16 + 12}px` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          {(hasChildren || hasParts) ? (
            <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500" />
          ) : <span className="w-4" />}
        </span>
        <div className={`p-1.5 rounded-lg transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-200' : 'bg-gray-100 group-hover:bg-orange-100'}`}>
          {isOpen ? <FolderOpen className="w-4 h-4 text-white" /> : <Folder className="w-4 h-4 text-amber-600" />}
        </div>
        <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{node.name}</span>
        {itemCount > 0 && (
          <span className="ml-auto text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
            {itemCount}
          </span>
        )}
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {hasChildren && (
          <div>
            {node.children.map((child, idx) => (
              <FolderItem key={idx} node={child} level={level + 1} onSelectPart={onSelectPart} selectedParts={selectedParts} />
            ))}
          </div>
        )}

        {hasParts && (
          <div className="ml-4 space-y-1 py-1">
            {node.parts.map((part) => {
              const isSelected = selectedParts.some(p => p.id === part.id);
              return (
                <div
                  key={part.id}
                  className={`flex items-center gap-3 py-2 px-3 rounded-xl cursor-pointer transition-all duration-300 group/part ${isSelected
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 shadow-sm'
                    : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  style={{ paddingLeft: `${(level + 1) * 16 + 12}px` }}
                  onClick={() => onSelectPart(part)}
                >
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${isSelected ? 'bg-green-100' : 'bg-orange-50 group-hover/part:bg-orange-100'}`}>
                    <Package className={`w-3.5 h-3.5 ${isSelected ? 'text-green-600' : 'text-orange-500'}`} />
                  </div>
                  <img src={part.image} alt={part.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 font-medium truncate">{part.name}</p>
                    <p className="text-xs font-semibold text-green-600">₹{part.price}</p>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-sm">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// Message Bubble Component
const MessageBubble = ({ message, isNew }) => {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''} animate-fadeIn`}
      style={{ animationDelay: isNew ? '0ms' : '0ms' }}
    >
      {/* Avatar */}
      <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center shadow-lg ${isUser
        ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
        : 'bg-gradient-to-br from-orange-400 to-amber-500'
        }`}>
        {isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
      </div>

      {/* Message */}
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${isUser
        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
        : 'bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-800'
        }`}>
        <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
        <span className={`text-xs mt-2 block ${isUser ? 'text-blue-100' : 'text-gray-400'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant', content: "Hello! 👋 I'm your bike customization assistant.\n\n• Browse the inventory on the left\n• Drag & drop images to upload\n• Ask me to add parts (e.g., 'Add LED Pro Headlight')\n• View your selection on the right", timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedParts, setSelectedParts] = useState([]);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSelectPart = (part) => {
    setSelectedParts(prev => {
      const exists = prev.some(p => p.id === part.id);
      if (exists) return prev.filter(p => p.id !== part.id);
      return [...prev, part];
    });
  };

  const processAICommand = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes('add') || lower.includes('select') || lower.includes('choose')) {
      const foundParts = allParts.filter(p => lower.includes(p.name.toLowerCase()));
      if (foundParts.length > 0) {
        foundParts.forEach(p => {
          if (!selectedParts.some(sp => sp.id === p.id)) {
            setSelectedParts(prev => [...prev, p]);
          }
        });
        return `I've added ${foundParts.map(p => p.name).join(', ')} to your selection! 🏍️`;
      }
      const words = lower.split(' ');
      const fuzzyMatch = allParts.find(p => words.some(w => w.length > 3 && p.name.toLowerCase().includes(w)));
      if (fuzzyMatch && !selectedParts.some(sp => sp.id === fuzzyMatch.id)) {
        setSelectedParts(prev => [...prev, fuzzyMatch]);
        return `I found and added "${fuzzyMatch.name}" to your selection! 🏍️`;
      }
    }

    if (lower.includes('remove') || lower.includes('delete')) {
      const foundPart = selectedParts.find(p => lower.includes(p.name.toLowerCase()));
      if (foundPart) {
        setSelectedParts(prev => prev.filter(p => p.id !== foundPart.id));
        return `I've removed ${foundPart.name} from your selection.`;
      }
    }

    if (lower.includes('clear') || lower.includes('reset')) {
      setSelectedParts([]);
      return "I've cleared all parts from your selection.";
    }

    if (lower.includes('show') || lower.includes('list') || lower.includes('what')) {
      if (selectedParts.length === 0) return "Your selection is empty. Browse the inventory on the left or ask me to add specific parts!";
      const total = selectedParts.reduce((sum, p) => sum + p.price, 0);
      return `Your current selection:\n${selectedParts.map(p => `• ${p.image} ${p.name} - ₹${p.price}`).join('\n')}\n\n💰 Total: ₹${total}`;
    }

    return "I can help you customize your bike! Try:\n• 'Add LED Pro Headlight'\n• 'Add Racing Seat'\n• 'Show my selection'\n• 'Clear selection'\n\nOr browse the inventory on the left panel!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = processAICommand(userInput);
      const aiMessage = { id: (Date.now() + 1).toString(), role: 'assistant', content: response, timestamp: new Date() };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 600);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).filter((f: File) => f.type.startsWith('image/'));
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    files.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages(prev => [...prev, { id: Date.now(), name: file.name, url: e.target.result }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).filter((f: File) => f.type.startsWith('image/'));
    handleFiles(files);
  };

  const removeImage = (id) => setUploadedImages(prev => prev.filter(img => img.id !== id));
  const totalPrice = selectedParts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/40 relative">
      <Navbar />
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-100/10 to-amber-100/10 rounded-full blur-3xl" />
      </div>

      <div className="flex h-screen relative z-10">
        {/* Left Sidebar - Inventory */}
        <div className="w-80 bg-white/70 backdrop-blur-xl border-r border-white/50 flex flex-col shadow-xl hidden md:flex">
          {/* Sidebar Header */}
          <div className="p-5 border-b border-gray-100/80 bg-gradient-to-r from-orange-50 to-amber-50">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg shadow-orange-200">
                <Folder className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Inventory</h2>
                <p className="text-xs text-gray-500">Click parts to add to selection</p>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
            {inventoryData.children.map((child, idx) => (
              <FolderItem key={idx} node={child} level={0} onSelectPart={handleSelectPart} selectedParts={selectedParts} />
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col relative">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-100/80 bg-white/60 backdrop-blur-xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">AI Powered</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 via-orange-600 to-amber-500 bg-clip-text text-transparent font-['Playfair_Display',serif]">
                Bike Customization Assistant
              </h1>
              <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Online and ready to help
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div
            className={`flex-1 overflow-y-auto px-4 md:px-6 py-6 transition-colors relative ${isDragging ? 'bg-blue-50/50' : ''}`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            {/* Drop Overlay */}
            {isDragging && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-10 border-2 border-dashed border-blue-400 rounded-2xl m-4">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-gray-700">Drop images here</p>
                  <p className="text-sm text-gray-500 mt-1">Upload your bike photos</p>
                </div>
              </div>
            )}

            <div className="max-w-3xl mx-auto">
              {/* Uploaded Images */}
              {uploadedImages.length > 0 && (
                <div className="mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-2 font-medium">
                    <ImagePlus className="w-4 h-4 text-orange-500" /> Uploaded Images
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {uploadedImages.map(img => (
                      <div key={img.id} className="relative group">
                        <img src={img.url} alt={img.name} className="w-24 h-24 object-cover rounded-xl border-2 border-white shadow-md" />
                        <button onClick={() => removeImage(img.id)} className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110">
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <MessageBubble key={message.id} message={message} isNew={index === messages.length - 1} />
                ))}

                {isLoading && (
                  <div className="flex gap-3 animate-fadeIn">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
                        <span className="text-sm text-gray-600">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 md:p-6 bg-gradient-to-t from-white via-white to-transparent">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 p-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/50">
                <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileUpload} accept="image/*" multiple />

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <Paperclip className="w-5 h-5 text-gray-500" />
                </button>

                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`p-2.5 rounded-xl transition-all flex-shrink-0 ${isRecording
                    ? 'bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-lg shadow-red-200 animate-pulse'
                    : 'hover:bg-gray-100'
                    }`}
                >
                  {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5 text-gray-500" />}
                </button>

                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm py-2"
                  disabled={isLoading}
                />

                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-orange-200 disabled:shadow-none flex-shrink-0 hover:scale-105 active:scale-95"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">Press Enter to send • Drag & drop images</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Selection */}
        <div className="w-80 bg-white/70 backdrop-blur-xl border-l border-white/50 flex flex-col shadow-xl hidden lg:flex">
          {/* Sidebar Header */}
          <div className="p-5 border-b border-gray-100/80 bg-gradient-to-r from-amber-50 to-orange-50">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl shadow-lg shadow-orange-200">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Selection</h2>
                <p className="text-xs text-gray-500">{selectedParts.length} parts selected</p>
              </div>
            </div>
          </div>

          {/* Selected Parts */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {selectedParts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="w-8 h-8 text-gray-300" />
                </div>
                <p className="text-gray-400 text-sm">No parts selected yet.</p>
                <p className="text-gray-400 text-xs mt-1">Browse inventory or ask AI!</p>
              </div>
            ) : (
              selectedParts.map((part, index) => (
                <div
                  key={part.id}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm group hover:shadow-md hover:border-gray-200 transition-all animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img src={part.image} alt={part.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700 font-medium truncate">{part.name}</p>
                    <p className="text-sm text-green-600 font-semibold">₹{part.price}</p>
                  </div>
                  <button
                    onClick={() => handleSelectPart(part)}
                    className="p-2 rounded-lg hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer with Total */}
          {selectedParts.length > 0 && (
            <div className="p-5 border-t border-gray-100/80 bg-gradient-to-t from-gray-50 to-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl text-white font-semibold transition-all shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:scale-[1.02] active:scale-[0.98]">
                Confirm Selection
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db;
        }
      `}</style>
    </div>
  );
};

export default Chat;